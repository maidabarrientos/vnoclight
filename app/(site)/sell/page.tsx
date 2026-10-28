import { Metadata } from "next";
import { PageHero, Section, Rows, Prose, ApplyBand, PrimaryButton } from "@/components/Site";

export const metadata: Metadata = {
  title: "Sell your domains | VNOC",
  description:
    "Sell domains with VNOC and DomainDirectory.com: tailored listings, pricing data, direct buyer connections, buyer profile analysis and a 5% commission.",
};

const selling = [
  {
    title: "Tailored listings",
    text: "Each listing shows what the name is, how it could be used and why it's worth the price.",
  },
  {
    title: "Pricing data",
    text: "Analytics, market trends and valuation estimates to help you set a price that attracts serious buyers.",
  },
  {
    title: "Marketplace listings",
    text: "List your domains on our marketplace so more buyers see them.",
  },
  {
    title: "Direct buyer connections",
    text: "Talk to potential buyers directly.",
  },
  {
    title: "Buyer profile analysis",
    text: "See what buyers prefer and how they behave.",
  },
  {
    title: "The sale itself",
    text: "Message buyers, negotiate terms and close the sale in one transaction system.",
  },
  {
    title: "5% commission",
    text: "Commissions are 5%.",
  },
];

const partner = [
  {
    title: "DomainDirectory.com",
    domain: "domaindirectory.com",
    brand: "DomainDirectory.com",
    text: "Our listing partner, a directory organized by domain category. Your names are shown to buyers searching the categories they belong to, not lost in a generic list.",
  },
];

export default function SellPage() {
  return (
    <main>
      <PageHero
        title="Sell Your Domains With VNOC"
        intro="List your names with VNOC and DomainDirectory.com, price them with real data and close the sale with the buyer directly. Commission is 5%."
      >
        <PrimaryButton href="/apply">Apply for access</PrimaryButton>
      </PageHero>

      <Section title="What you get when you sell" intro="Everything from the listing to the closed sale.">
        <Rows items={selling} />
      </Section>

      <Section tone="ink" title="Related names raise each other's value">
        <Prose tone="ink">
          <p>
            Every domain framework on VNOC includes related domains from the same category, so the value of one name
            adds to the others. We call these vertical network effects.
          </p>
          <p>
            Buyers are drawn to names that come with a complete set around them, which makes yours more attractive than
            a name listed on its own.
          </p>
        </Prose>
      </Section>

      <Section
        tone="paper"
        title="Where buyers see your names"
        intro="VNOC sells through its partnership with DomainDirectory.com."
      >
        <Rows items={partner} tone="paper" columns={1} />
      </Section>

      <ApplyBand />
    </main>
  );
}
