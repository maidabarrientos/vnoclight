import React from "react";

type Block = { p: string } | { ul: string[] };
type Section = { heading: string | null; blocks: Block[] };

const LegalPage = ({ title, sections }: { title: string; sections: Section[] }) => {
  return (
    <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1016 px-4 md:px-8 2xl:px-0">
        <h1 className="text-black dark:text-white text-3xl xl:text-sectiontitle3 font-bold mb-10 text-center">
          {title}
        </h1>
        {sections.map((section, i) => (
          <div key={i} className="mb-8">
            {section.heading && (
              <h2 className="text-black dark:text-white text-xl font-semibold mb-3">
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
    </section>
  );
};

export default LegalPage;
