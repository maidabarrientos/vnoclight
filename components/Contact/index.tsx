"use client";
import React from "react";
import HubspotContactForm from "../Forms/hubspot";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div id="support" className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">
      <div className="rounded-2xl bg-white dark:bg-blacksection ring-1 ring-rule dark:ring-strokedark p-6 md:p-10">
        <h2 className="text-ink dark:text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
          Send a message
        </h2>
        <HubspotContactForm />
      </div>

      <div>
        <h2 className="text-ink dark:text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
          Find us
        </h2>
        <dl className="border-t-2 border-ink dark:border-white/40">
          <div className="border-b border-rule dark:border-strokedark py-5">
            <dt className="font-bold text-ink dark:text-white">Location</dt>
            <dd className="text-slate dark:text-manatee mt-1">Indianapolis, IN 46220, United States</dd>
          </div>
          <div className="border-b border-rule dark:border-strokedark py-5">
            <dt className="font-bold text-ink dark:text-white">Email</dt>
            <dd className="mt-1">
              <a href="mailto:admin@vnoc.com" className="text-slate dark:text-manatee hover:text-primaryho dark:hover:text-bggrad1 underline underline-offset-4">
                admin@vnoc.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Contact;
