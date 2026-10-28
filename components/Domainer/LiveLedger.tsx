"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import DomainName from "./DomainName";
import BrandLogo from "./BrandLogo";

// Public, read-only network totals from VNOC Analytics (CORS allows vnoc.com).
// Numbers are only ever shown from this response, never filled in by hand.
const NETWORK_API = "https://analytics.vnoc.com/api/network";
const NETWORK_PAGE = "https://analytics.vnoc.com/network";

// Internal names stay off the public homepage (v7 jargon rule).
const HIDDEN = /(playloop|agentdao|ecorp|adao|coceo)/i;
const ROWS = 6;

type TopDomain = {
  domain: string;
  human_visitors_30d: number;
  human_pageviews_30d: number;
};

type Network = {
  totals: { domains: number; active_domains: number; human_visitors: number };
  top_domains: TopDomain[];
};

const fmt = (n: number) => n.toLocaleString("en-US");

const LiveLedger = () => {
  const [data, setData] = useState<Network | null>(null);
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch(NETWORK_API)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json: Network) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const rows = data
    ? data.top_domains
        .filter((d) => !HIDDEN.test(d.domain))
        .sort((a, b) => b.human_visitors_30d - a.human_visitors_30d)
        .slice(0, ROWS)
    : [];

  return (
    <div className="rounded-2xl bg-ink text-white p-6 md:p-8 shadow-[0_30px_60px_-30px_rgba(15,34,56,0.6)] dark:ring-1 dark:ring-strokedark">
      <div className="flex items-baseline justify-between gap-4 mb-6">
        <h2 className="text-lg font-bold">VNOC network, last 30 days</h2>
        <span className="flex items-center gap-2 text-sm text-white/60">
          <span
            className={`h-2 w-2 rounded-full ${failed ? "bg-white/30" : "bg-bggrad2"}`}
            aria-hidden="true"
          />
          {failed ? "Offline" : "Live"}
        </span>
      </div>

      {failed ? (
        <p className="text-white/80 py-10">
          Network numbers didn&apos;t load. You can see them on{" "}
          <a href={NETWORK_PAGE} className="underline underline-offset-4 hover:text-bggrad1">
            analytics.vnoc.com
          </a>
          .
        </p>
      ) : (
        <>
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-white/60 border-b border-white/15">
                <th scope="col" className="font-medium pb-3">Domain</th>
                <th scope="col" className="font-medium pb-3 text-right">People</th>
                <th scope="col" className="font-medium pb-3 text-right hidden sm:table-cell">
                  Pageviews
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                ? rows.map((d, i) => (
                    <motion.tr
                      key={d.domain}
                      className="border-b border-white/10 last:border-0"
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.35 }}
                    >
                      <td className="py-3 text-base sm:text-lg md:text-xl font-bold tracking-tight">
                        <a
                          href={`https://${d.domain}`}
                          className="flex items-center gap-3 hover:text-bggrad1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BrandLogo domain={d.domain} className="h-8 w-16 sm:w-20 py-1" />
                          <span className="min-w-0 break-all">
                            <DomainName domain={d.domain} tldClassName="text-bggrad1/70" />
                          </span>
                        </a>
                      </td>
                      <td className="py-3 text-right tabular-nums">{fmt(d.human_visitors_30d)}</td>
                      <td className="py-3 text-right tabular-nums text-white/70 hidden sm:table-cell">
                        {fmt(d.human_pageviews_30d)}
                      </td>
                    </motion.tr>
                  ))
                : Array.from({ length: ROWS }).map((_, i) => (
                    <tr key={i} className="border-b border-white/10 last:border-0">
                      <td className="py-3" colSpan={3}>
                        <span className="block h-6 rounded bg-white/10 motion-safe:animate-pulse" />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>

          <dl className="grid grid-cols-3 gap-4 mt-7 pt-6 border-t border-white/15">
            {[
              { label: "Domains tracked", value: data?.totals.domains },
              { label: "With traffic", value: data?.totals.active_domains },
              { label: "People this month", value: data?.totals.human_visitors },
            ].map((s) => (
              <div key={s.label} className="flex flex-col justify-between">
                <dt className="text-sm text-white/60">{s.label}</dt>
                <dd className="text-xl md:text-2xl font-bold tabular-nums mt-1">
                  {s.value === undefined ? "…" : fmt(s.value)}
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-sm text-white/50 mt-5">
            People are visitors with bots filtered out, measured by{" "}
            <a href={NETWORK_PAGE} className="underline underline-offset-4 hover:text-bggrad1">
              VNOC Analytics
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
};

export default LiveLedger;
