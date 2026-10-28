import { Metadata } from "next";
import { PageHero, Section, Rows, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Build | VNOC",
  description:
    "Build a brand on a domain you own: AI frameworks and categorization, task orders for logos and content, an AI content generator, SpyFu insights and the Contrib network.",
};

const tools = [
  {
    title: "Auto frameworks and categorization",
    text: "Add a domain and VNOC's AI sorts it by industry, audience and content type, then assigns it the framework that fits.",
  },
  {
    title: "Task orders",
    text: "Order a logo, content or other work for a name in a few clicks.",
  },
  {
    title: "AI content generator",
    text: "Blog posts, social media content and more, written to match the brand's voice and goals.",
  },
  {
    title: "SEO insights from SpyFu",
    text: "VNOC's AI reads SpyFu data and tells you what to change in your content, meta data and keywords to rank better.",
  },
];

const people = [
  {
    title: "The Contrib network",
    text: "Professionals and experts who take on work for ventures. VNOC sends your tasks to the Contrib network and the VNOC community through our weekly newsletter.",
    href: "/contribution",
  },
  {
    title: "Partner matching",
    text: "VNOC's AI looks at a project's requirements, goals and the skills it needs, then suggests collaborators from the Contrib network.",
  },
];

export default function BuildPage() {
  return (
    <main>
      <PageHero
        title="Build a Brand on a Domain You Own"
        intro="VNOC picks a framework for the name, takes your orders for logos and content, and sends the work to people who can do it."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="/services#pricing">See concierge pricing</TextLink>
        </div>
      </PageHero>

      <Section
        title="From domain to brand"
        intro="The parts of a build that VNOC automates, so you spend your time on the names rather than the setup."
      >
        <Rows items={tools} />
      </Section>

      <Section
        tone="paper"
        title="Who does the work"
        intro="Your tasks go out to people in the network, and VNOC helps you find the right partner for each venture."
      >
        <Rows items={people} tone="paper" />
      </Section>

      <ApplyBand />
    </main>
  );
}
