import React from "react";
import { PageHero, Section } from "@/components/Site";

type Block = { p: string } | { ul: string[] };
type LegalSection = { heading: string | null; blocks: Block[] };

const LegalPage = ({ title, sections }: { title: string; sections: LegalSection[] }) => {
  return (
    <main>
      <PageHero title={title} />
      <Section>
        <div className="max-w-[42em] text-slate dark:text-manatee leading-relaxed">
          {sections.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="text-ink dark:text-white text-xl md:text-2xl font-bold tracking-tight mb-4">
                  {section.heading}
                </h2>
              )}
              {section.blocks.map((block, j) =>
                "ul" in block ? (
                  <ul key={j} className="list-disc ml-6 mb-4 space-y-2">
                    {block.ul.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={j} className="mb-4 break-words">
                    {block.p}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default LegalPage;
