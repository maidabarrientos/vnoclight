import React from "react";
import { Metadata } from "next";
import LegalPage from "@/components/Legal";
import sections from "@/components/Legal/privacy.json";

export const metadata: Metadata = {
  title: "Privacy Policy - VNOC",
  description: "How VNOC collects, uses and protects your personal data.",
};

const PrivacyPage = () => {
  return <LegalPage title="Privacy Policy" sections={sections} />;
};

export default PrivacyPage;
