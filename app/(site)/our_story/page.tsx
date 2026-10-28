import { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/Domainer/BrandLogo";
import DomainName from "@/components/Domainer/DomainName";
import { PageHero, Section, Prose, Rows, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Our Story - VNOC",
  description:
    "VNOC started as the tools we built to run our own portfolio of more than 20,000 domains. Here's how it grew, and why we're opening it to domain investors.",
};

const facts = [
  { value: "Early 2000s", label: "Building on premium domains since" },
  { value: "20,000+", label: "Domains in our own portfolio" },
  { value: "20+ years", label: "Buying and selling names through Domain Directory" },
  { value: "$70 million", label: "In Domain Directory sales" },
];

const tools = [
  {
    title: "VNOC Analytics",
    domain: "vnoc.com",
    brand: "Analytics.VNOC.com",
    text: "Real visitor counts for every domain, with bots filtered out, so we know which names people type in.",
    href: "https://analytics.vnoc.com/network",
  },
  {
    title: "Domain Directory",
    domain: "domaindirectory.com",
    brand: "DomainDirectory.com",
    text: "Offer, inquiry, partner and lease forms on every lander, all landing in one place.",
    href: "https://www.domaindirectory.com",
  },
  {
    title: "DNTrademark",
    domain: "dntrademark.com",
    brand: "DNTrademark.com",
    text: "Trademark checks across our names, with alerts when a conflict appears.",
    href: "https://www.dntrademark.com",
  },
  {
    title: "BidCenter",
    domain: "bidcenter.com",
    brand: "BidCenter.com",
    text: "A public board of the top offers on our premium names.",
    href: "https://www.bidcenter.com",
  },
];

const builds = [
  { domain: "homemanager.com", brand: "HomeManager.com" },
  { domain: "venturescore.com", brand: "VentureScore.com" },
  { domain: "marketbot.com", brand: "MarketBot.com" },
  { domain: "ventureboard.com", brand: "VentureBoard.com" },
  { domain: "profilesuite.com", brand: "ProfileSuite.com" },
  { domain: "loopagent.com", brand: "LoopAgent.com" },
  { domain: "idesigner.com", brand: "iDesigner.com" },
  { domain: "servicedirectory.com", brand: "ServiceDirectory.com" },
];

export default function OurStoryPage() {
  return (
    <main>
      <PageHero
        title="We Built VNOC to Run Our Own Domains"
        intro="VNOC didn't start as a product. It started as the tools we needed to manage a portfolio of more than 20,000 names, and it grew from there."
      />

      <Section tone="white">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 border-t-2 border-ink dark:border-white/40 pt-8">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-slate dark:text-manatee">{f.label}</dt>
              <dd className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink dark:text-white mt-2">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="paper" title="It started with domains">
        <Prose tone="paper">
          <p>
            <a href="https://ecorp.com" className="underline underline-offset-4 hover:text-primaryho dark:hover:text-bggrad1">
              Ecorp®
            </a>
            , the company behind VNOC, has been building on premium domain names since the early 2000s.
            Domain investor Chad Folkening grew the portfolio to more than 20,000 names, and Domain
            Directory has been buying and selling names for over 20 years, with $70 million in sales.
          </p>
          <p>
            A portfolio that size raises questions no registrar dashboard answers: which names do people
            actually visit, who wants to buy them, which ones are at risk, and which are worth more than a
            parked page.
          </p>
        </Prose>
      </Section>

      <Section
        tone="white"
        title="So we built our own tools"
        intro="Each one answered one of those questions for our portfolio first. They're live products today."
      >
        <Rows items={tools} />
      </Section>

      <Section tone="paper" title="Then we brought in people">
        <Prose tone="paper">
          <p>
            Names don&apos;t build themselves. The{" "}
            <Link href="/contribution" className="underline underline-offset-4 hover:text-primaryho dark:hover:text-bggrad1">
              Contrib network
            </Link>{" "}
            lets developers, designers and marketers take on work for our ventures and earn for it, and our
            core team in Davao, Philippines runs the platform day to day.
          </p>
          <p>
            We added a{" "}
            <Link href="/#blockchain" className="underline underline-offset-4 hover:text-primaryho dark:hover:text-bggrad1">
              blockchain stack
            </Link>{" "}
            so ventures can record who contributed, share ownership, take payments and hold a treasury.
          </p>
        </Prose>
      </Section>

      <Section
        tone="white"
        title="Now we build on the best names"
        intro="With traffic data, buyers and people in one place, we turn the names that earn it into working ventures. Some of the latest:"
      >
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
          {builds.map((b) => (
            <li key={b.domain}>
              <a
                href={`https://www.${b.domain}/?ref=vnoc.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg font-bold tracking-tight text-ink dark:text-white hover:text-primaryho dark:hover:text-bggrad1"
              >
                <BrandLogo domain={b.domain} className="h-9 w-24 py-1" />
                <DomainName domain={b.domain} brand={b.brand} tldClassName="opacity-50" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <TextLink href="/#builds">See all our latest builds</TextLink>
        </div>
      </Section>

      <Section tone="paper" title="How we work">
        <Prose tone="paper">
          <p>
            Decentralize with a purpose: create, share, learn, grow and replicate. Swarming, distribution,
            network intelligence and data, with every business model aligned to the network.
          </p>
          <p>
            Our mission is to give domain investors the tools, data and people they need, and our vision is
            a network where anyone can contribute to a venture and share in what it builds.
          </p>
        </Prose>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="/support">Get in touch</TextLink>
        </div>
      </Section>

      <ApplyBand
        title="Run your portfolio on the same stack."
        text="Everything we built for our own domains is open to domain investors. Apply and tell us about yours."
      />
    </main>
  );
}
