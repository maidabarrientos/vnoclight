import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { PageHero, Section } from "@/components/Site";

export const metadata: Metadata = {
  title: "Contact VNOC",
  description: "Questions about VNOC or your portfolio? Send us a message.",
};

const Page = () => {
  return (
    <main>
      <PageHero title="Contact VNOC" intro="Questions about VNOC or your portfolio? Send us a message." />
      <Section tone="paper">
        <Contact />
      </Section>
    </main>
  );
};

export default Page;
