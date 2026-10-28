import { Metadata } from "next";
import { PageHero, Section, Rows, Prose, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Our team",
  description:
    "VNOC is built by a team in Davao, Philippines: developers, designers, strategists and customer support working together on tools for domain investors.",
};

const roles = [
  {
    title: "Developers",
    text: "Build and maintain the platform and the apps that run on it.",
  },
  {
    title: "Designers",
    text: "Design the screens and sites people use every day.",
  },
  {
    title: "Strategists",
    text: "Shape the roadmap and decide what gets built next.",
  },
  {
    title: "Customer support",
    text: "Help members get set up and answer questions along the way.",
  },
];

const ways = [
  {
    title: "We work together",
    text: "Ideas get shared, different views get heard and problems get solved as a group, across every part of VNOC.",
  },
  {
    title: "We pick up new tools",
    text: "The team works with newer technology, from blockchain to AI, and turns it into features members can use.",
  },
  {
    title: "We hire for care",
    text: "Each member is chosen for their interest in the work and the standard they hold it to.",
  },
  {
    title: "We build for the people using it",
    text: "Every line of code and design choice is made with the people running their portfolios on VNOC in mind.",
  },
];

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        title="The Team Behind VNOC"
        intro="VNOC is built and run by a team based in Davao, Philippines. Domain investor Chad Folkening uses VNOC across his own ventures."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="/our_story">Read our story</TextLink>
        </div>
      </PageHero>

      <Section
        title="Who does what"
        intro="A local team with a global view. Each role covers a part of what you see when you use VNOC."
      >
        <Rows items={roles} />
      </Section>

      <Section tone="paper" title="How we work">
        <Rows items={ways} tone="paper" />
      </Section>

      <Section title="Work with us">
        <Prose>
          <p>
            If you care about building tools for the domain business as much as we do, we&apos;d like to hear from
            you.
          </p>
          <p>
            <TextLink href="/contact">Get in touch</TextLink>
          </p>
        </Prose>
      </Section>

      <ApplyBand />
    </main>
  );
}
