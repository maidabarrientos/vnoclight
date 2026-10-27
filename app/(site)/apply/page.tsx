import React from "react";
import { Metadata } from "next";
import DDForm from "@/components/DDForm";

export const metadata: Metadata = {
  title: "Apply for Platform Access - VNOC",
  description: "Apply for access to the VNOC platform to build, manage and monetize your digital assets.",
};

const ApplyPage = () => {
  return (
    <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1016 px-4 md:px-8 2xl:px-0">
        <h1 className="text-black dark:text-white text-3xl xl:text-sectiontitle3 font-bold mb-4 text-center">
          Apply for Platform Access
        </h1>
        <p className="text-center mb-10">
          Tell us about your digital assets and what you want to build. Our team will get back to you.
        </p>
        <DDForm form="inquire" />
      </div>
    </section>
  );
};

export default ApplyPage;
