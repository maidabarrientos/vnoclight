import React from "react";
import { Metadata } from "next";
import LegalPage from "@/components/Legal";
import sections from "@/components/Legal/terms.json";

export const metadata: Metadata = {
  title: "Terms of Use - VNOC",
  description: "The terms and conditions for using the VNOC site.",
};

const TermsPage = () => {
  return <LegalPage title="Terms of Use" sections={sections} />;
};

export default TermsPage;
