import Image from "next/image";
import DomainName from "./DomainName";
import BrandLogo from "./BrandLogo";

// Recent ventures built by the team. Screenshots are captures of each live
// site (public/images/builds); descriptions follow each site's own copy.
const builds = [
  {
    domain: "homemanager.com",
    brand: "HomeManager.com",
    text: "A home dashboard for homeowners: projects, quotes, receipts, warranties and maintenance in one place.",
  },
  {
    domain: "ventureboard.com",
    brand: "VentureBoard.com",
    text: "Ranks live ventures creating real value, so you can back them, help build them or join their teams.",
  },
  {
    domain: "marketbot.com",
    brand: "MarketBot.com",
    text: "AI SEO and marketing agents that audit a domain with real data, plan keywords and launch campaigns.",
  },
  {
    domain: "venturescore.com",
    brand: "VentureScore.com",
    text: "Scores any domain from 0 to 100 on brand strength, search demand and site health, with an estimated sale value.",
  },
  {
    domain: "ventureos.com",
    brand: "VentureOS.com",
    text: "Turns premium URLs into ventures run by AI agents and playbooks.",
  },
  {
    domain: "agentdao.com",
    brand: "AgentDAO.com",
    text: "AgentDAO is leading a new era in digital assets by turning traditional URLs into smart, autonomous digital entities.",
  },
  {
    domain: "profilesuite.com",
    brand: "ProfileSuite.com",
    text: "Build one profile and claim your own address in the community where you belong: artists, models, athletes, professionals and creators.",
  },
  {
    domain: "contrib.com",
    brand: "Contrib.com",
    text: "Entrepreneurs, developers, designers and marketers help build startups and earn for the work they put in.",
  },
  {
    domain: "nanoloan.com",
    brand: "NanoLoan.com",
    text: "Small loans from a shared treasury to new ventures, with live lending capacity and a list of who is funded.",
  },
  {
    domain: "realtydao.com",
    brand: "RealtyDAO.com",
    text: "Tokenizes digital assets such as domains, NFTs and gTLDs, with tools to manage them as a group.",
  },
  {
    domain: "paydirect.com",
    brand: "PayDirect.com",
    text: "Accept crypto and cards from one payment link, with instant settlement and one set of webhooks.",
  },
  {
    domain: "agentbank.com",
    brand: "AgentBank.com",
    text: "A programmable treasury for AI-agent ventures: budgets, settlement between agents, cap tables and governance.",
  },
  {
    domain: "escrowed.com",
    brand: "Escrowed.com",
    text: "Conditional and milestone escrow for crypto payments, released when the agreed conditions are met.",
  },
  {
    domain: "ventureregistry.com",
    brand: "VentureRegistry.com",
    text: "A live registry of every active venture in the network, each checked daily. Find one to join, build or back.",
  },
  {
    domain: "domaindirectory.com",
    brand: "DomainDirectory.com",
    text: "A premium domain marketplace to buy, sell, trade, develop and partner on domain names.",
  },
  {
    domain: "savingtheworld.org",
    brand: "SavingTheWorld.org",
    text: "A network of AI ventures that each reserve 2% for two causes: building AI safely and protecting the planet.",
  },
  {
    domain: "growagent.com",
    brand: "GrowAgent.com",
    text: "Captures leads, sends email campaigns and onboards contributors.",
  },
  {
    domain: "linkagent.com",
    brand: "LinkAgent.com",
    text: "A marketplace where sponsors post links on high-traffic sites and track the results with real stats.",
  },
  {
    domain: "loopagent.com",
    brand: "LoopAgent.com",
    text: "Collects updates from your tools, inboxes and notes and writes one daily briefing for your team.",
  },
  {
    domain: "mediabot.com",
    brand: "MediaBot.com",
    text: "Creates, stores and serves niche photos and hero images for any URL, by API or on the site.",
  },
  {
    domain: "eservices.com",
    brand: "eServices.com",
    text: "Hire AI agents for press releases, listings, support, research and more, and pay for outcomes.",
  },
  {
    domain: "idesigner.com",
    brand: "iDesigner.com",
    text: "Upload a photo of a room and redesign it with AI, then get a shopping list or book a pro.",
  },
  {
    domain: "servicedirectory.com",
    brand: "ServiceDirectory.com",
    text: "Verified service marketplaces across home, legal, digital, finance, health and more, with free quotes.",
  },
  {
    domain: "eshares.com",
    brand: "eShares.com",
    text: "Turns traditional equity into programmable, liquid tokens on Base and BNB Chain.",
  },
];

const Builds = () => {
  return (
    <section id="builds" className="bg-paper dark:bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="max-w-2xl mb-14">
          <h2 className="text-ink dark:text-white text-4xl xl:text-sectiontitle3 font-extrabold tracking-[-0.02em] mb-5">
            Latest builds
          </h2>
          <p className="text-slate dark:text-manatee text-lg leading-relaxed">
            New ventures our team has built and launched across the network.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {builds.map((b) => (
            <li key={b.domain}>
              <a
                href={`https://www.${b.domain}/?ref=vnoc.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryho rounded-xl"
              >
                <span className="relative block aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-rule dark:ring-strokedark bg-white">
                  <Image
                    src={`/images/builds/${b.domain}.jpg`}
                    alt={`${b.brand} home page`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex items-center gap-3 mt-5">
                  <BrandLogo domain={b.domain} className="h-9 w-24 py-1" />
                  <span className="text-ink dark:text-white text-lg font-bold tracking-tight group-hover:text-primaryho dark:group-hover:text-bggrad1 min-w-0 break-words">
                    <DomainName
                      domain={b.domain}
                      brand={b.brand}
                      tldClassName="text-slate/70 dark:text-manatee/70"
                    />
                  </span>
                </span>
                <span className="block text-slate dark:text-manatee mt-3 leading-relaxed">
                  {b.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Builds;
