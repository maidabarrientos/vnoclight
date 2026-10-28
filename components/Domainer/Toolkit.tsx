import DomainName from "./DomainName";
import BrandLogo from "./BrandLogo";

// Every tool here is a live product; descriptions follow each site's own copy.
type Tool = { domain: string; href: string; text: string; brand?: string; logo?: string };

const stages: { title: string; text: string; tools: Tool[] }[] = [
  {
    title: "Know what you own",
    text: "See which names people actually visit, and catch problems before they cost you.",
    tools: [
      {
        domain: "analytics.vnoc.com",
        brand: "Analytics.VNOC.com",
        logo: "vnoc.com",
        href: "https://analytics.vnoc.com/network",
        text: "Traffic for every domain with bots filtered out, so you know which names people really type in.",
      },
      {
        domain: "dntrademark.com",
        brand: "DNTrademark.com",
        href: "https://www.dntrademark.com",
        text: "Checks your domains against USPTO, EUIPO, WIPO and 50+ registries and alerts you when a conflict appears.",
      },
      {
        domain: "brandidentity.com",
        href: "https://www.brandidentity.com",
        text: "Gives every name a logo and an identity profile you can use on landers and listings.",
      },
    ],
  },
  {
    title: "Sell to the right buyer",
    text: "Turn type-in traffic into offers, and put every offer in front of the owner.",
    tools: [
      {
        domain: "domaindirectory.com",
        href: "https://www.domaindirectory.com/developer",
        text: "Offer, inquiry, partner and lease forms you can drop into any lander or site.",
      },
      {
        domain: "bidcenter.com",
        brand: "BidCenter.com",
        href: "https://www.bidcenter.com",
        text: "Shows the top offer on premium names and sends every new offer straight to the owner.",
      },
    ],
  },
  {
    title: "Earn while you hold",
    text: "Let the traffic you already have pay for renewals.",
    tools: [
      {
        domain: "linkagent.com",
        href: "https://linkagent.com",
        text: "A marketplace where sponsors buy link placements on sites with real traffic stats.",
      },
      {
        domain: "referrals.com",
        href: "https://www.referrals.com",
        text: "Referral program software that turns visitors and customers into referrers.",
      },
    ],
  },
  {
    title: "Build on the best names",
    text: "When a name deserves more than a lander, build the business it points to.",
    tools: [
      {
        domain: "ventureos.com",
        brand: "VentureOS.com",
        href: "https://www.ventureos.com",
        text: "Turns a premium domain into a working venture run with AI agents and playbooks.",
      },
      {
        domain: "mcp.ventureos.com",
        brand: "Joe on MCP.VentureOS.com",
        logo: "ventureos.com",
        href: "https://mcp.ventureos.com",
        text: "Joe, the VentureOS operator: ask about any domain, get an appraisal or a renewal review, and have him build a venture, just by talking to him.",
      },
      {
        domain: "contrib.com",
        href: "https://www.contrib.com",
        text: "A network of contributors who take on design, code and marketing work for ventures.",
      },
    ],
  },
];

const Toolkit = () => {
  return (
    <section id="tools" className="bg-white dark:bg-blacksection py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="max-w-2xl mb-14 lg:mb-20">
          <h2 className="text-ink dark:text-white text-4xl xl:text-sectiontitle3 font-extrabold tracking-[-0.02em] mb-5">
            One stack, from the day you register a name to the day it earns.
          </h2>
          <p className="text-slate dark:text-manatee text-lg leading-relaxed">
            Each tool below is a live product you can open today. Together they cover
            what a portfolio needs at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {stages.map((stage) => (
            <div key={stage.title}>
              <h3 className="text-ink dark:text-white text-2xl font-bold mb-2">{stage.title}</h3>
              <p className="text-slate dark:text-manatee mb-6">{stage.text}</p>
              <ul className="border-t-2 border-ink dark:border-white/40">
                {stage.tools.map((tool) => (
                  <li key={tool.domain} className="border-b border-rule dark:border-strokedark">
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primaryho"
                    >
                      <span className="flex items-center gap-4">
                        <BrandLogo domain={tool.logo || tool.domain} className="h-11 w-28 py-1.5" />
                        <span className="text-ink dark:text-white text-xl md:text-2xl font-bold tracking-tight group-hover:text-primaryho dark:group-hover:text-bggrad1 min-w-0 break-words">
                          <DomainName
                            domain={tool.domain}
                            brand={tool.brand}
                            tldClassName="text-slate/70 dark:text-manatee/70"
                          />
                        </span>
                      </span>
                      <span className="block text-slate dark:text-manatee mt-3 leading-relaxed">
                        {tool.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
