import { Metadata } from "next";
import { PageHero, Section, Rows, ApplyBand, PrimaryButton } from "@/components/Site";

export const metadata: Metadata = {
  title: "Lease your domains | VNOC",
  description:
    "Lease premium domains with VNOC: monthly income, flexible lease terms, automated renewals and payments, and leasing insights, while you keep ownership.",
};

const reasons = [
  {
    title: "Monthly income",
    text: "Instead of one sale, earn every month from a lessee who is building on your name.",
  },
  {
    title: "More people can afford your names",
    text: "Startups, small businesses and entrepreneurs who can't pay for a premium domain up front can still lease it.",
  },
  {
    title: "You keep ownership",
    text: "The domain stays yours while it earns, so you can try different lease arrangements.",
  },
  {
    title: "A path to a sale",
    text: "Some lessees choose to buy the domain they're leasing, so a lease can end in a full sale.",
  },
];

const features = [
  {
    title: "Flexible lease terms",
    text: "Set the terms for each lease, short or long, to suit you and the lessee.",
  },
  {
    title: "Automated lease management",
    text: "VNOC handles renewals, payments and messages with lessees.",
  },
  {
    title: "Leasing insights",
    text: "See lease revenue, lessee engagement and more, and adjust your leasing over time.",
  },
  {
    title: "All your leases in one place",
    text: "Manage multiple leases, track payments and talk to lessees through VNOC.",
  },
];

export default function LeasePage() {
  return (
    <main>
      <PageHero
        title="Lease Your Domains Instead of Selling Them"
        intro="Earn monthly income from a premium name and keep ownership. You set the terms; VNOC handles payments and renewals."
      >
        <PrimaryButton href="/apply">Apply for access</PrimaryButton>
      </PageHero>

      <Section title="Why lease" intro="Leasing works for you and for buyers who aren't ready to pay the full price.">
        <Rows items={reasons} />
      </Section>

      <Section tone="paper" title="What VNOC handles" intro="The lease features built into VNOC.">
        <Rows items={features} tone="paper" />
      </Section>

      <ApplyBand />
    </main>
  );
}
