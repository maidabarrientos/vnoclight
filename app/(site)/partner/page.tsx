import { Metadata } from "next";
import { PageHero, Section, Rows, Prose, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Partner with VNOC",
  description:
    "Every VNOC domain framework has a partner feature built in. Work with other domain owners and businesses and reach each other's audiences.",
};

const benefits = [
  {
    title: "Built into every framework",
    text: "The partner feature is part of every VNOC domain framework, so a partnership lives on the site itself instead of in a separate tool.",
  },
  {
    title: "Reach each other's audiences",
    text: "Partners share their networks, so your names reach visitors they wouldn't find on their own.",
  },
  {
    title: "Partner across the network",
    text: "Team up with related domains in the VNOC network for more visibility on both sides.",
  },
  {
    title: "Build new ventures together",
    text: "Work with domain owners, entrepreneurs and business leaders on ventures neither side would start alone.",
  },
];

export default function PartnerPage() {
  return (
    <main>
      <PageHero
        title="Partner With VNOC"
        intro="Every domain framework on VNOC has a partner feature built in. Work with other owners and businesses, and put your names in front of audiences you can't reach alone."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="/contact">Ask about partnering</TextLink>
        </div>
      </PageHero>

      <Section title="What partnering gives you">
        <Rows items={benefits} />
      </Section>

      <Section tone="paper" title="Who it's for">
        <Prose tone="paper">
          <p>
            Domain investors, entrepreneurs and business owners. If you hold names that would do better with a
            partner&apos;s audience behind them, tell us about them when you apply.
          </p>
        </Prose>
      </Section>

      <ApplyBand />
    </main>
  );
}
