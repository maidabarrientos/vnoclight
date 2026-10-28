import { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, Rows, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "What domain investors do with VNOC: see the whole portfolio, track real traffic, catch offers, decide renewals, list names for sale, build sites in bulk and run it all by talking to Joe.",
};

// Each use case is shown with a screenshot of the real screen in app.vnoc.com
// (or Joe's page). Buyer contact details and staff names are blurred.
const useCases = [
  {
    id: "portfolio",
    title: "See your whole portfolio in one list",
    text: "Every domain with its category, visits, price, expiry date and whether it has sold. Search it, sort it, or export it all to CSV.",
    image: "/images/app/domain-reports.jpg",
    alt: "Domain Reports in app.vnoc.com, listing domains with category, visits, price and expiry",
  },
  {
    id: "traffic",
    title: "Know which names people actually visit",
    text: "Tracked domains, visitors and pageviews across the portfolio, with the option to drill into any single domain. Network totals are also public on VNOC Analytics.",
    image: "/images/app/analytics.jpg",
    alt: "Analytics in app.vnoc.com with tracked domains, visitors, pageviews and requests",
    link: { href: "https://analytics.vnoc.com/network", label: "See live network traffic" },
  },
  {
    id: "offers",
    title: "Catch every offer",
    text: "Offers from the forms on your sites land in one inbox with the domain, the buyer, the bid, the message and whether anyone has replied.",
    image: "/images/app/offers.jpg",
    alt: "Offers inbox in app.vnoc.com, with buyer contacts and messages blurred",
  },
  {
    id: "renewals",
    title: "Decide what to renew and what to drop",
    text: "See what has expired, what's pending delete and what's due in the next 30, 60 and 90 days, then mark each name Keep or Drop. You can also paste in a list.",
    image: "/images/app/renewals.jpg",
    alt: "Domain Renewals in app.vnoc.com with counts for expired and upcoming renewals",
  },
  {
    id: "listing",
    title: "List names where buyers look",
    text: "Track which domains are listed on which marketplaces, including Flippa, GoDaddy, Sedo and DomainPower, and which still need listing.",
    image: "/images/app/listing.jpg",
    alt: "Domain Marketplace Listing in app.vnoc.com showing listing sites and status per domain",
  },
  {
    id: "build",
    title: "Build sites on many names at once",
    text: "Paste a list of domains, pick a framework and a server, and queue them all for a build. The queue shows every build as it goes.",
    image: "/images/app/bulk-build.jpg",
    alt: "Bulk Domain Rebuild in app.vnoc.com with a build form and the recent build queue",
  },
  {
    id: "joe",
    title: "Run it all by talking to Joe",
    text: "Joe is the VentureOS operator. Ask him how a domain is doing or what it's worth, get a renewal review, find premium names worth building, and have him build and publish a venture. Nothing goes live and no money moves without your confirmation.",
    image: "/images/app/joe.jpg",
    alt: "Joe's page on mcp.ventureos.com: Your domains, alive",
    link: { href: "https://mcp.ventureos.com", label: "Meet Joe" },
  },
];

const audiences = [
  {
    title: "Domain investors",
    text: "You hold more names than you can manage by hand. VNOC sorts them, shows you which ones earn attention and helps you sell, lease or build on the rest.",
  },
  {
    title: "Digital entrepreneurs",
    text: "You own a few good names and want businesses on them. Start from the traffic and demand you can see, then build with frameworks and the Contrib network.",
    href: "/build",
  },
  {
    title: "Digital creatives",
    text: "You have the ideas. Find a name, build a brand around it and work with contributors through Contrib.",
    href: "/contribution",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <PageHero
        title="What You Can Do With VNOC"
        intro="These are the screens we use every day to run our own portfolio of more than 20,000 domains. In the screenshots, buyer contact details and staff names are blurred."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="#portfolio">See the use cases</TextLink>
        </div>
      </PageHero>

      {useCases.map((uc, i) => (
        <section
          key={uc.id}
          id={uc.id}
          className={`${i % 2 === 0 ? "bg-white dark:bg-blacksection" : "bg-paper dark:bg-black"} py-16 lg:py-24 scroll-mt-20`}
        >
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-ink dark:text-white text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mb-4">
                {uc.title}
              </h2>
              <p className="text-slate dark:text-manatee text-lg leading-relaxed">{uc.text}</p>
              {uc.link && (
                <div className="mt-6 text-ink dark:text-white">
                  <TextLink href={uc.link.href}>{uc.link.label}</TextLink>
                </div>
              )}
            </div>
            <figure className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative aspect-[800/502] overflow-hidden rounded-xl ring-1 ring-rule dark:ring-strokedark shadow-[0_30px_60px_-30px_rgba(15,34,56,0.45)] bg-ink">
                <Image src={uc.image} alt={uc.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-top" />
              </div>
            </figure>
          </div>
        </section>
      ))}

      <Section
        tone="paper"
        title="Who uses VNOC"
      >
        <Rows items={audiences} tone="paper" columns={1} />
      </Section>

      <ApplyBand />
    </main>
  );
}
