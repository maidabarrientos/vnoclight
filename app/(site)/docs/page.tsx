import { Metadata } from "next";
import { PageHero, Section, Rows, ApplyBand } from "@/components/Site";

export const metadata: Metadata = {
  title: "Docs and help - VNOC",
  description:
    "Where to find help with VNOC: the knowledge base, the Domain Directory form embed docs, the blog and support.",
};

const resources = [
  {
    title: "Knowledge base",
    href: "https://vnoc.tawk.help",
    text: "Answers to common questions about using VNOC.",
  },
  {
    title: "Form embed docs",
    domain: "domaindirectory.com",
    href: "https://www.domaindirectory.com/developer",
    text: "How to add offer, inquiry, partner and lease forms to any lander or site.",
  },
  {
    title: "Blog",
    href: "https://about.vnoc.com",
    text: "News and updates from the VNOC team.",
  },
  {
    title: "Contact support",
    href: "/support",
    text: "Can't find what you need? Send us a message.",
  },
];

export default function DocsPage() {
  return (
    <main>
      <PageHero title="Docs and Help" intro="Everything you need to get help with VNOC, in one place." />

      <Section title="Resources">
        <Rows items={resources} />
      </Section>

      <ApplyBand />
    </main>
  );
}
