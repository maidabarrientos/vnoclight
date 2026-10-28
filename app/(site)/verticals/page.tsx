import { Metadata } from "next";
import VNOC_verticalscript from "@/components/Forms/verticalscript";
import { PageHero, Section, ApplyBand } from "@/components/Site";

export const metadata: Metadata = {
  title: "Our verticals - VNOC",
  description:
    "VNOC has a wide range of verticals to choose from. Browse our portfolio of premium digital assets.",
};

export default function VerticalPage() {
  return (
    <main>
      <PageHero
        title="Explore Our Vertical Portfolio"
        intro="VNOC groups its premium domains into verticals, and builds each one to support the others. Browse them below."
      />

      <Section
        title="Vertical synergy model"
        intro="Each vertical is designed to support and complement the rest. We don't build ventures one at a time; we build them as connected groups."
      >
        <VNOC_verticalscript />
      </Section>

      <ApplyBand />
    </main>
  );
}
