import React from "react";
import { Metadata } from "next";
import DDForm from "@/components/DDForm";
import { PageHero, Section } from "@/components/Site";

export const metadata: Metadata = {
  title: "Apply for Platform Access - VNOC",
  description: "Apply for access to VNOC, the technology domain investors use to track, sell, monetize and build on their portfolios.",
};

const ApplyPage = () => {
  return (
    <main>
      <PageHero
        title="Apply for Access"
        intro="Tell us about your domains and what you want to do with them. Our team will get back to you."
      />
      <Section tone="white">
        <DDForm form="inquire" />
      </Section>
    </main>
  );
};

export default ApplyPage;
