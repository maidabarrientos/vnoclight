import { Metadata } from "next";
import { PageHero, Section, Rows, Steps, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Contribution network",
  description:
    "Contrib.com is where the VNOC community works on your domains: order websites, content, logos and more, and contributors earn rewards for the work.",
};

const network = [
  {
    title: "Contrib.com",
    domain: "contrib.com",
    brand: "Contrib.com",
    href: "https://www.contrib.com",
    text: "Where the VNOC community works. People with skills from content creation to web development help grow your domains and earn rewards for it.",
  },
];

const steps = [
  {
    title: "Order a task",
    text: "Post what a name needs: a website, content, a logo or any other job on your ventures.",
  },
  {
    title: "Contributors take it on",
    text: "Members of the community apply their skills to your project and bring their own ideas to it.",
  },
  {
    title: "The work gets done",
    text: "With many people able to pick up a task, your projects move faster than doing it all yourself.",
  },
  {
    title: "Contributors are rewarded",
    text: "Contributors earn rewards for their work and share in the success they help create.",
  },
];

const skills = [
  {
    title: "Websites",
    text: "Design and development for the sites on your names.",
  },
  {
    title: "Content",
    text: "Blog posts and other writing for your ventures.",
  },
  {
    title: "Logos and branding",
    text: "A look and an identity for names that don't have one yet.",
  },
  {
    title: "Social media",
    text: "Content for your social accounts.",
  },
];

export default function ContributionPage() {
  return (
    <main>
      <PageHero
        title="Get Work Done on Your Domains Through Contrib.com"
        intro="You need tasks done; contributors want to earn for their skills. The contribution network puts the two together, so your names get built without you doing every job by hand."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="https://www.contrib.com">Visit Contrib.com</TextLink>
        </div>
      </PageHero>

      <Section title="The network">
        <Rows items={network} columns={1} />
      </Section>

      <Section tone="paper" title="How it works">
        <Steps items={steps} tone="paper" />
      </Section>

      <Section
        title="What contributors can do"
        intro="From design to development and from content to branding, the network covers the work a venture needs."
      >
        <Rows items={skills} />
      </Section>

      <ApplyBand />
    </main>
  );
}
