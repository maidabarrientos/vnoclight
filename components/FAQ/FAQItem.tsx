import React from "react";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const open = activeFaq === id;

  return (
    <div className="border-b border-rule dark:border-strokedark">
      <h3>
        <button
          type="button"
          onClick={() => handleFaqToggle(id)}
          aria-expanded={open}
          aria-controls={`faq-${id}`}
          className="w-full flex justify-between items-center gap-6 text-left text-lg md:text-xl font-bold text-ink dark:text-white py-5 hover:text-primaryho dark:hover:text-bggrad1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primaryho"
        >
          {quest}
          <span aria-hidden="true" className="text-2xl leading-none text-slate dark:text-manatee">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <p id={`faq-${id}`} hidden={!open} className="pb-6 text-slate dark:text-manatee leading-relaxed max-w-[40em]">
        {ans}
      </p>
    </div>
  );
};

export default FAQItem;
