import { Metadata } from "next";
import { PageHero, Section, Rows, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Why VNOC",
  description:
    "Why domain investors run their portfolios on VNOC: one control panel, real traffic data, brand building, monetization and a network of contributors.",
};

const reasons = [
  {
    title: "One control panel for every name",
    text: "Manage ventures, domains and data from a single panel instead of scattered tools, with real-time insight into what each name is doing.",
  },
  {
    title: "Over 22 integrated apps",
    text: "Wrap the apps a name needs around it, from communication tools to task automation, and leave the rest out.",
  },
  {
    title: "A brand builder for dormant domains",
    text: "Turn underused names into working brands with ready-made or custom frameworks, without starting each site from scratch.",
  },
  {
    title: "Ways to earn from every name",
    text: "Referral programs, network ad optimization and other monetization options, with you in control of the strategy.",
  },
  {
    title: "Vertical management that's been tested",
    text: "Frameworks built to turn visitors into engaged contributors, used across the verticals in our own portfolio.",
  },
  {
    title: "The Contrib network",
    text: "Find the people a venture needs, or offer your own skills, through the Contrib network.",
    href: "/contribution",
  },
  {
    title: "Social tools",
    text: "Create, manage and publish content across your social accounts from one place with the Social Suite app.",
  },
  {
    title: "Tokenization when you want it",
    text: "Put a digital asset on the blockchain and share fractional ownership with contributors through RealtyDAO.",
    href: "/blockchain",
  },
];

export default function WhyPage() {
  return (
    <main>
      <PageHero
        title="Why Domainers Run Their Portfolios on VNOC"
        intro="A portfolio needs more than a registrar account. VNOC puts the data, the tools and the people in one place, and we use all of it on our own domains first."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="/#tools">See the tools</TextLink>
        </div>
      </PageHero>

      <Section
        title="What you get"
        intro="Built by a team with decades in the domain business, for people who hold more names than they can manage by hand."
      >
        <Rows items={reasons} />
      </Section>

      <ApplyBand />
    </main>
  );
}
