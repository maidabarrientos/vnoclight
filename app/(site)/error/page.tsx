import React from "react";
import { Metadata } from "next";
import { PageHero, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Page not found - VNOC",
  description: "The page you were looking for has moved or doesn't exist.",
};

const ErrorPage = () => {
  return (
    <main>
      <PageHero
        title="This Page Doesn't Exist"
        intro="The page you were looking for has moved, been deleted or never existed."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/">Go to the homepage</PrimaryButton>
          <TextLink href="/support">Contact support</TextLink>
        </div>
      </PageHero>
    </main>
  );
};

export default ErrorPage;
