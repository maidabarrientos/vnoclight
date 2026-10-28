"use client";
import React, { useState } from "react";
import faqData from "./faqData";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <section id="faq" className="bg-paper dark:bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
        <div>
          <h2 className="text-ink dark:text-white text-4xl xl:text-sectiontitle3 font-extrabold tracking-[-0.02em] mb-5">
            Questions domainers ask
          </h2>
          <p className="text-slate dark:text-manatee text-lg leading-relaxed max-w-md">
            Don&apos;t see yours? Ask us in the contact form below.
          </p>
        </div>
        <div className="border-t-2 border-ink dark:border-white/40">
          {faqData.map((faq, key) => (
            <FAQItem key={key} faqData={{ ...faq, activeFaq, handleFaqToggle }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
