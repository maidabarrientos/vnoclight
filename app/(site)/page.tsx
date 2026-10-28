import { Metadata } from "next";
import Hero from "@/components/Domainer/Hero";
import Toolkit from "@/components/Domainer/Toolkit";
import Builds from "@/components/Domainer/Builds";
import Stack from "@/components/Domainer/Stack";
import { blockchainStack, communityStack, venturePieStack, marketingStack } from "@/components/Domainer/stacks";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import LatestProjects from "@/components/LatestProjects";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "VNOC | Technology for Domain Investors",
  description:
    "Traffic analytics, offer forms, trademark alerts, link sales and venture building for domain portfolios. The stack VNOC runs on its own domains.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Toolkit />
      <Stack
        id="blockchain"
        theme="dark"
        title="Our blockchain stack"
        text="Five services handle the money side of a venture: who built it, who owns it, how it gets paid and where the money is held."
        layers={blockchainStack}
      />
      <Stack
        id="community"
        title="Our community and contributor stack"
        text="Where people join the network: they make a profile, find a venture and put in the work."
        layers={communityStack}
      />
      <Stack
        id="venture-pie"
        theme="dark"
        title="Our venture pie management stack"
        text="Who owns what slice of a venture, recorded as tokens that can be tracked and traded."
        layers={venturePieStack}
      />
      <Stack
        id="marketing"
        title="Our social and marketing stack"
        text="How a venture gets found: social posts, SEO and campaigns, leads and email, images and links."
        layers={marketingStack}
      />
      <Builds />
      <LatestProjects />
      <Testimonial />
      <FAQ />
      <ContactForm />
    </main>
  );
}
