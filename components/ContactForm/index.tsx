import React from "react";
import DDForm from "@/components/DDForm";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-white dark:bg-blacksection py-20 lg:py-28">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
        <div>
          <h2 className="text-ink dark:text-white text-4xl xl:text-sectiontitle3 font-extrabold tracking-[-0.02em] mb-5">
            Contact VNOC
          </h2>
          <p className="text-slate dark:text-manatee text-lg leading-relaxed max-w-md">
            Questions about the platform or your domains? Send us a message.
          </p>
        </div>
        <DDForm form="inquire" className="w-full" />
      </div>
    </section>
  );
};

export default ContactForm;
