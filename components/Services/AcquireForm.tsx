"use client";

import React from "react";

const intents = [
  { value: "acquire", label: "I want to acquire" },
  { value: "partner", label: "I want to partner" },
  { value: "invest", label: "I want to invest" },
  { value: "join", label: "I want to join the network" },
];

const AcquireForm = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-20 xl:pb-25">
      <div className="rounded-lg border border-white bg-white shadow-solid-8 dark:border-strokedark dark:bg-blacksection py-12.5 px-7.5 md:px-12.5 xl:px-17.5">
        <h2 className="mb-3 font-bold text-3xl xl:text-sectiontitle2 text-black dark:text-white">
          Acquire this brand
        </h2>
        <p className="mb-10 text-base text-body-color dark:text-body-color-dark">
          Submit your interest in eServices.com. Pricing and partnership details
          sent within 24 hours.
        </p>

        {submitted ? (
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-7.5 text-center">
            <h3 className="mb-2 font-semibold text-xl text-black dark:text-white">
              Thanks — your inquiry is in.
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              We&apos;ll be in touch with pricing and partnership details within
              24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address *"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>

            <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                type="text"
                name="offer"
                placeholder="Offer / budget (optional)"
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
              <select
                name="intent"
                defaultValue="acquire"
                className="w-full border-b border-stroke bg-transparent pb-3.5 text-body-color focus:border-waterloo focus-visible:outline-none dark:border-strokedark dark:bg-blacksection dark:text-body-color-dark dark:focus:border-manatee lg:w-1/2"
              >
                {intents.map((intent) => (
                  <option key={intent.value} value={intent.value}>
                    {intent.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-11.5">
              <textarea
                name="message"
                placeholder="Tell us how you'd use eServices.com (optional)"
                rows={4}
                className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              aria-label="Send inquiry"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary py-2.5 px-7.5 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              Send inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AcquireForm;
