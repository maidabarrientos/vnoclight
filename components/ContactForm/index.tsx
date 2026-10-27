import React from "react";
import DDForm from "@/components/DDForm";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1016 px-4 md:px-8 2xl:px-0">
        <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 text-center">
          Contact VNOC
        </h2>
        <p className="text-center mb-10">
          Questions about the platform or your digital assets? Send us a message.
        </p>
        <DDForm form="inquire" />
      </div>
    </section>
  );
};

export default ContactForm;
