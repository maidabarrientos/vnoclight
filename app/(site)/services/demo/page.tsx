import { Metadata } from "next";
import HubspotMeetings from "@/components/Forms/HubspotMeetings";
import { PageHero, Section, Rows, Steps, ApplyBand, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Book a Demo | VNOC",
  description:
    "Book a free consultation: a walkthrough of VNOC's concierge services, platform features and monetization options for your domain portfolio.",
};

const consultationBenefits = [
  {
    title: "Personalized Consultation",
    description:
      "Receive a one-on-one consultation tailored to your specific needs and goals. Our experts will analyze your current digital assets and provide customized recommendations to optimize your domain portfolio.",
  },
  {
    title: "Comprehensive Platform Overview",
    description:
      "Get a detailed walkthrough of VNOC's platform. Learn about the various tools and services we offer, including hosting, frameworks, content creation, and monetization options.",
  },
  {
    title: "Interactive Q&A",
    description:
      "Have your questions answered in real-time by our domain experts. Whether you have technical queries or need strategic advice, our team is here to help.",
  },
];

const whatToExpect = [
  {
    title: "Introduction to VNOC Services",
    description:
      "Begin with an overview of our tiered concierge services, including the benefits of VNOC Tier 1, Tier 2, and Tier 3 packages. Understand how each tier can support your specific domain management needs.",
  },
  {
    title: "Live Demonstration of Features",
    description:
      "Watch a live demonstration of our platform's key features. See how easy it is to manage your domains, create content, and set up monetization streams using our intuitive tools.",
  },
  {
    title: "Custom Solutions for Your Business",
    description:
      "Discover how VNOC can be tailored to fit your unique business requirements. We will discuss potential customizations and integrations that can enhance your digital strategy.",
  },
];

const testimonials = [
  {
    quote:
      "Collaborating with the VNOC team significantly enhanced the value and recognition of my entire digital portfolio. My heartfelt thanks to VNOC!",
    name: "Ervin Howell",
    role: "Domainer",
  },
  {
    quote:
      "VNOC is one of the most powerful platforms I've worked with—seamlessly combining automation, community, and monetization in a way that empowers creators and entrepreneurs at every level. What impressed me most is how agile the team is—consistently launching innovative features and adapting to real-time feedback. It's not just a tool; it's an ecosystem built with purpose, vision, and heart.",
    name: "Bianka Krausch",
    role: "Talent Agency Owner, Film Florida & WIFT So Flo Co-Chair",
  },
];

export default function DemoPage() {
  return (
    <main>
      <PageHero
        title="Book a Free Consultation"
        intro="Meet with our team by chat or video call. We'll walk you through the services and features that fit your business and your portfolio."
      >
        <TextLink href="/services#pricing">See concierge pricing</TextLink>
      </PageHero>

      <Section tone="white" id="book">
        <div className="rounded-2xl bg-white dark:bg-blacksection ring-1 ring-rule dark:ring-strokedark p-2">
          <HubspotMeetings />
        </div>
      </Section>

      <Section tone="paper" title="What you get from the call">
        <Rows
          tone="paper"
          columns={1}
          items={consultationBenefits.map((b) => ({ title: b.title, text: b.description }))}
        />
      </Section>

      <Section tone="white" title="How the call goes">
        <Steps items={whatToExpect.map((w) => ({ title: w.title, text: w.description }))} />
      </Section>

      <Section tone="paper" title="What clients say">
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t-2 border-ink dark:border-white/40 pt-6">
              <blockquote className="text-lg leading-relaxed text-ink dark:text-white">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-slate dark:text-manatee">
                <span className="block font-bold text-ink dark:text-white">{t.name}</span>
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <ApplyBand />
    </main>
  );
}
