import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { PageHero, Section } from "@/components/Site";

export const metadata: Metadata = {
  title: "Support - VNOC",
  description: "Need help with VNOC? Send us a message or browse the help center.",
};

const Page = () => {
  return (
    <main>
      <PageHero title="Support" intro="Need help with VNOC? Send us a message or browse the help center." />
      <Section tone="paper">
        <Contact />
      </Section>
    </main>
  );
};

export default Page;
