/**
 * Copied from managevnoc src/lib/domain-to-brand.ts (Array.from for this repo's TS target).
 * HR2 domainToBrand — CamelCase brand + TLD for public surfaces.
 *
 * Rules (VentureOS v7 §11.6):
 * 1. Apple-style prefixes stay lowercase: i / e / my / v
 * 2. Initialisms are UPPERCASE (AI, TV, CEO, DAO, …)
 * 3. Numeric prefixes are kept (1800News.com)
 * 4. Compound splitting only when the remainder also segments into real words
 * 5. 2-char tokens (ip, tv, ai, ev, ml) only at word start or end
 * 6. Suffix roots beat prefix roots when a name splits two ways
 * 7. domainToBrand(h).toLowerCase() === h always
 *
 * Display text only — never change links, DNS, or stored domain_name.
 * Stored brand literals that break HR2 are fixed separately (dry-run + Maida yes).
 */

const ROOTS = (
  "the,my,get,go,best,top,pro,smart,cap,vault,home,news,chain,agent,bot," +
  "venture,ventures,corp,share,refer,link,list,contrib,realty,property," +
  "secure,security,invest,fund,capital,wealth,bank,pay,direct,trade,crypto," +
  "coin,token,data,cloud,net,web,app,hub,lab,labs,works,studio,group,global," +
  "world,city,care,health,med,medical,wellness,fit,eco,green,solar,energy," +
  "power,build,builder,dev,tech,digital,media,stream,channel,game,play,sport," +
  "travel,trip,stay,food,eat,shop,store,market,deal,deals,buy,sell,rent,lease," +
  "law,legal,gov,vote,edu,learn,school,course,job,jobs,work,hire,talent,team," +
  "profile,id,name,brand,logo,design,designer,art,photo,video,music,audio," +
  "voice,sound,box,kit,pad,desk,first,prime,elite,royal,gold,silver,blue,red," +
  "black,white,star,sky,sun,moon,sea,bay,north,south,east,west,america,usa," +
  "euro,asia,metro,urban,local,nearby,express,fast,quick,easy,simple,clear," +
  "true,real,live,now,today,daily,plus,max,one,all,360,247,payments,payment," +
  "servers,services,service,solutions,managers,bookings,booking,networks," +
  "network,partners,holdings,markets,traders,brokers,rentals,loans,credits," +
  "wallets,ozone,stock,cross,jam,milan,cimmerce,commerce,insurance,mortgage," +
  "finance,exchange,manager,systems,server,cache,peer,points,talk,depot," +
  "escrow,registry,register,connect,connections,connection,ceo,dao,ai,tv," +
  "nft,defi,saas,api,web3,meta,nano,loan,loans,alert,alerts,news,mail," +
  "letter,letters,newsletter,survey,surveys,poll,polls,form,forms,lead,leads," +
  "offer,offers,partner,partners,ipartner,handyman,home,manager,managers," +
  "co,corp,ecorp,ichain,eshares,eservices," +
  // Whole words seen in the public feed (never carve these into fragments).
  "account,accounts,challenge,challenges,guide,guides,party,parties," +
  "pollution,cruise,lawyer,lawyers,domain,domains,directory,identity," +
  "referral,referrals,marketplace,sports,letter,mortgage,newsletter,media,commerce,agents,bots"
).split(",");

/** Longest-first for greedy matching. */
const ROOTS_SORTED = Array.from(new Set(ROOTS)).sort((a, b) => b.length - a.length);
const ROOTS_SET = new Set(ROOTS_SORTED);

/** Apple-style prefixes — stay lowercase when leading a multi-char remainder. */
const APPLE_PREFIXES = new Set(["i", "e", "my", "v"]);

/** Initialisms rendered UPPERCASE. */
const INITIALISMS = new Set([
  "ai", "tv", "ceo", "dao", "nft", "defi", "saas", "api", "web3", "usa", "uk",
  "eu", "nyc", "vip", "cfo", "cio", "crm", "hmo", "mba", "fx", "vat", "mvp",
  "sat", "pb", "im", "ip", "ev", "ml", "hr", "pr", "seo", "ppc", "cpc", "roi",
  "kpi", "b2b", "b2c", "iot", "ar", "vr", "ui", "ux", "os", "dns", "cdn",
  "ssh", "ssl", "tls", "http", "https", "www", "sms", "mms", "gps", "atm",
]);

/** Known brand overrides (Chad / Maida exceptions). Keys = lowercase host. */
const OVERRIDES: Record<string, string> = {
  "coceo.com": "CoCEO.com",
  "ecorp.com": "eCorp.com",
  "eshares.com": "eShares.com",
  "ichain.com": "iChain.com",
  "eservices.com": "eServices.com",
  "idesigner.com": "iDesigner.com",
  "ipartner.com": "iPartner.com",
  "1800news.com": "1800News.com",
  "talkventures.com": "TalkVentures.com",
  "homenews.com": "HomeNews.com",
  "venturebuilder.com": "VentureBuilder.com",
  "jobsdepot.com": "JobsDepot.com",
  "agentdao.com": "AgentDAO.com",
  "adao.ai": "ADAO.ai",
};

/**
 * 2-char roots (my, go, id, co, ai, tv, ...) are only trusted at the very start
 * or very end of an SLD. Mid-word they are noise (BotGuIdE, GoVAgent, ChAllEnge).
 */
function twoCharAllowed(sld: string, i: number, len: number): boolean {
  return i === 0 || i + len === sld.length;
}

function normHost(domain: string): string {
  return String(domain || "")
    .trim()
    .toLowerCase()
    .replace(/^www\./, "")
    .split("/")[0]
    .split(":")[0];
}

function caseWord(word: string, opts?: { applePrefix?: boolean }): string {
  if (!word) return word;
  if (opts?.applePrefix && APPLE_PREFIXES.has(word)) return word;
  if (INITIALISMS.has(word)) return word.toUpperCase();
  if (/^\d+$/.test(word)) return word;
  const numLead = word.match(/^(\d+)([a-z].*)$/);
  if (numLead) {
    return numLead[1] + caseWord(numLead[2]);
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/** Unknown spans this short are never split off on their own (AcCount, PArty, CoMmerce). */
const SHORT_UNKNOWN_LEN = 2;
const SHORT_UNKNOWN_PENALTY = 10;

type Seg = { cost: number; tokens: number; words: string[] };

function betterSeg(a: Seg, b: Seg): boolean {
  if (a.cost !== b.cost) return a.cost < b.cost;
  if (a.tokens !== b.tokens) return a.tokens < b.tokens;
  // Suffix roots beat prefix roots when everything else ties.
  const la = a.words[a.words.length - 1]?.length ?? 0;
  const lb = b.words[b.words.length - 1]?.length ?? 0;
  return la > lb;
}

/**
 * Segment an SLD into known roots plus (at most contiguous) unknown spans.
 *
 * Cost = unknown letters (+ a heavy penalty for 1-2 letter unknown fragments),
 * then fewest tokens, then longest last token. Unknown text stays as ONE word
 * (accountbot -> account + bot, never Ac + Count + Bot), and tiny roots hiding
 * inside unknown words (ai, id, co, all, sea ...) are not carved out.
 */
function splitSld(sld: string): string[] {
  if (!sld) return [];
  const n = sld.length;

  // best[i][u]: best segmentation of sld.slice(i); u = previous token was unknown.
  const memo = new Map<number, Seg | null>();
  const key = (i: number, u: boolean) => i * 2 + (u ? 1 : 0);

  function dfs(i: number, prevUnknown: boolean): Seg {
    if (i >= n) return { cost: 0, tokens: 0, words: [] };
    const k = key(i, prevUnknown);
    const hit = memo.get(k);
    if (hit) return hit;

    let best: Seg | null = null;
    const consider = (c: Seg) => {
      if (!best || betterSeg(c, best)) best = c;
    };

    for (const r of ROOTS_SORTED) {
      if (!sld.startsWith(r, i)) continue;
      if (r.length === 2 && !twoCharAllowed(sld, i, r.length)) continue;
      const rest = dfs(i + r.length, false);
      consider({
        cost: rest.cost,
        tokens: rest.tokens + 1,
        words: [r, ...rest.words],
      });
    }

    // Unknown span: extend to every possible end j (next token must be a root or EOS).
    for (let j = i + 1; j <= n; j++) {
      const span = sld.slice(i, j);
      if (j < n && !ROOTS_SORTED.some((r) => sld.startsWith(r, j))) continue;
      const rest = dfs(j, true);
      // Merge into the previous unknown token is handled by the caller never
      // splitting two unknown spans back to back (rest begins with a root or EOS).
      const short = span.length <= SHORT_UNKNOWN_LEN;
      // A leading initialism / apple prefix / "a" is a legit short lead (IPAgent, iBot, ABot).
      const legitLead =
        i === 0 &&
        j < n &&
        (INITIALISMS.has(span) || APPLE_PREFIXES.has(span) || span === "a");
      const wholeWord = i === 0 && j === n;
      consider({
        cost:
          span.length +
          (short && !wholeWord && !legitLead ? SHORT_UNKNOWN_PENALTY : 0) +
          rest.cost,
        tokens: rest.tokens + 1,
        words: [span, ...rest.words],
      });
    }

    memo.set(k, best!);
    return best!;
  }

  const { words: splitWords } = dfs(0, false);

  // Glue stray single chars (except standalone apple prefixes / a).
  const merged: string[] = [];
  for (const w of splitWords) {
    if (
      merged.length &&
      w.length === 1 &&
      !APPLE_PREFIXES.has(w) &&
      w !== "a"
    ) {
      merged[merged.length - 1] += w;
    } else {
      merged.push(w);
    }
  }
  return merged.length ? merged : [sld];
}

function caseParts(parts: string[]): string {
  if (!parts.length) return "";
  // Leading Apple prefix (i/e/my/v) stays lowercase when followed by more brand.
  if (parts.length >= 2 && APPLE_PREFIXES.has(parts[0])) {
    const head = parts[0];
    const rest = parts.slice(1).map((w) => caseWord(w)).join("");
    return head + rest;
  }
  // co + CEO → CoCEO
  if (parts.length >= 2 && parts[0] === "co" && INITIALISMS.has(parts[1])) {
    return "Co" + parts.slice(1).map((w) => caseWord(w)).join("");
  }
  return parts.map((w) => caseWord(w)).join("");
}

/**
 * Convert a host into HR2 CamelCase brand INCLUDING the TLD.
 * `domainToBrand(h).toLowerCase() === h` for any normalized host.
 */
export function domainToBrand(domain: string): string {
  const host = normHost(domain);
  if (!host) return host;
  if (OVERRIDES[host]) return OVERRIDES[host];

  const dot = host.lastIndexOf(".");
  if (dot <= 0) {
    return caseParts(splitSld(host));
  }
  const sld = host.slice(0, dot);
  const tld = host.slice(dot); // includes leading "."

  // Keep hyphens/underscores so domainToBrand(h).toLowerCase() === h (card-gate).
  // best-deals.net → Best-Deals.net (not BestDeals.net — that would break the invariant).
  if (/[-_]/.test(sld)) {
    const segs = sld.split(/([-_]+)/);
    let out = "";
    for (const seg of segs) {
      if (!seg) continue;
      if (/^[-_]+$/.test(seg)) out += seg;
      else out += caseParts(splitSld(seg));
    }
    return out + tld;
  }

  // Numeric prefix + word (1800news)
  const numWord = sld.match(/^(\d+)([a-z].+)$/);
  if (numWord) {
    const rest = caseParts(splitSld(numWord[2]));
    return numWord[1] + rest + tld;
  }

  return caseParts(splitSld(sld)) + tld;
}

/** Brand without forcing TLD casing changes — alias for callers. */
export function domainToBrandName(domain: string): string {
  return domainToBrand(domain);
}
