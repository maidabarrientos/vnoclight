import Link from "next/link";
import { Metadata } from "next";
import { PageHero, Section, Rows, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Concierge services | VNOC",
  description:
    "VNOC concierge services for domain investors: hosting, frameworks, logos, content, Contrib apps and domain expert support, in three monthly tiers priced by portfolio size.",
};

const tiers = [
  {
    name: "Tier 1 concierge",
    price: "$1,000.00",
    range: "1 to 100 domains",
    team: "1 portfolio manager and 1 content manager",
  },
  {
    name: "Tier 2 concierge",
    price: "$2,500.00",
    range: "101 to 5,000 domains",
    team: "1 content manager, 1 portfolio manager and 1 developer",
  },
  {
    name: "Tier 3 concierge",
    price: "$5,000.00",
    range: "5,001 to 10,000 domains",
    team: "1 developer, 2 content managers, 1 portfolio manager and 1 graphic artist",
  },
];

const included = [
  {
    title: "Free hosting",
    text: "Hosting with added security and dedicated resources, sized for portfolios with many names.",
  },
  {
    title: "Free framework",
    text: "An auto framework you can customize, built to run and improve many domains at once.",
  },
  {
    title: "Free logo",
    text: "Professional logo design for the names in your portfolio.",
  },
  {
    title: "Free content",
    text: "Curated, SEO-minded blog posts, articles and landing pages written for each domain's audience.",
  },
  {
    title: "Free Contrib apps",
    text: "The full set of Contrib apps with premium features: tasks, central form management, team building and blockchain services.",
  },
  {
    title: "Domain expert support",
    text: "Priority access to our most experienced domain experts for analysis, planning and ongoing support.",
  },
];

const monetization = [
  {
    title: "Network ad stream",
    text: "Earn from network ad placements across your domains.",
  },
  {
    title: "Vertical ad stream",
    text: "Ads aimed at a specific industry, matched to the audience each name attracts.",
  },
  {
    title: "Newsletter ads",
    text: "Place ads inside your email newsletters.",
  },
  {
    title: "Bring your own monetization",
    text: "Use AdSense or another platform you already work with on your own domains.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Concierge Services for Your Domain Portfolio"
        intro="We host, brand, write for and manage your names, with a team assigned to your account. You pay one monthly price set by how many domains you hold."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/services/demo">Book a demo</PrimaryButton>
          <TextLink href="#pricing">See pricing</TextLink>
        </div>
        <blockquote className="mt-12 max-w-xl border-l-2 border-bggrad1 pl-5 text-lg text-ink dark:text-white">
          &ldquo;Domains are precious assets only if you build its value.&rdquo;
          <span className="mt-2 block text-sm text-slate dark:text-manatee">
            Tehj Soon, Marketing Manager, AgentDAO.com
          </span>
        </blockquote>
      </PageHero>

      <Section
        id="pricing"
        title="Concierge partnership pricing"
        intro="Three tiers, priced per month by portfolio size. Every tier includes the same services; larger tiers add more people to your team."
      >
        <ul className="grid lg:grid-cols-3 gap-x-10 gap-y-12">
          {tiers.map((tier) => (
            <li key={tier.name} className="border-t-2 border-ink dark:border-white/40 pt-6 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-[-0.02em]">{tier.price}</span>
                <span className="text-slate dark:text-manatee">per month</span>
              </p>
              <dl className="mt-6 border-t border-rule dark:border-strokedark">
                <div className="py-4 border-b border-rule dark:border-strokedark">
                  <dt className="text-sm font-bold text-slate dark:text-manatee">Portfolio size</dt>
                  <dd className="mt-1 leading-relaxed">{tier.range}</dd>
                </div>
                <div className="py-4 border-b border-rule dark:border-strokedark">
                  <dt className="text-sm font-bold text-slate dark:text-manatee">Your team</dt>
                  <dd className="mt-1 leading-relaxed">{tier.team}</dd>
                </div>
                <div className="py-4 border-b border-rule dark:border-strokedark">
                  <dt className="text-sm font-bold text-slate dark:text-manatee">Included</dt>
                  <dd className="mt-1 leading-relaxed">
                    Hosting, framework, logo, content, Contrib apps (tasks, team building) and domain expert support
                  </dd>
                </div>
              </dl>
              <Link
                href="/services/demo"
                className="mt-6 self-start font-bold underline decoration-2 decoration-bggrad1 underline-offset-[6px] hover:decoration-current"
              >
                Book a demo for {tier.name.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="ink"
        title="Included in every tier"
        intro="Hosting, branding, content and support for every name in your plan, plus Contrib apps for tasks and team management."
      >
        <Rows items={included} tone="ink" />
      </Section>

      <Section
        tone="paper"
        title="Ways to earn from your names"
        intro="Monetization options you can turn on for the domains in your plan."
      >
        <Rows items={monetization} tone="paper" />
      </Section>

      <ApplyBand />
    </main>
  );
}
