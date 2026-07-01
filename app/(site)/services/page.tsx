import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import AcquireForm from "@/components/Services/AcquireForm";

export const metadata: Metadata = {
  title: "Services | VNOC",
  description:
    "The services brand field-service crews can build on — client portals, invoicing, provider matching, and intake forms, available to acquire, license, or co-build.",
};

const useCases = [
  {
    icon: "/images/icon/icon-01.svg",
    title: "Client Portals & Invoicing",
    description:
      "Give field-service crews a single place to manage clients, send invoices, and get paid. The obvious wedge that turns one-time visitors into accounts.",
  },
  {
    icon: "/images/icon/icon-02.svg",
    title: "Provider Matching",
    description:
      "Match clients with the right providers under the eServices brand, routing demand to the crews best equipped to deliver.",
  },
  {
    icon: "/images/icon/icon-03.svg",
    title: "Services Hub",
    description:
      "A services hub serving boutique firms — a repeatable framework for professional services teams of any size.",
  },
  {
    icon: "/images/icon/icon-04.svg",
    title: "Quote Requests & Intake Forms",
    description:
      "Capture quote requests and intake forms with built-in network cross-promotion, converting interest into booked work.",
  },
  {
    icon: "/images/icon/icon-05.svg",
    title: "Job Scheduling",
    description:
      "Coordinate jobs and crews with scheduling built for field-service operations, keeping teams organized and on time.",
  },
  {
    icon: "/images/icon/icon-06.svg",
    title: "Professional Services",
    description:
      "A working thesis on professional services, compressed into a name field-service crews can repeat after hearing it once.",
  },
];

const whySmartEntity = [
  "Ships with a brand Soul and machine-callable agent card",
  "Discoverable across the AgentDAO federation",
  "A documented path from name to live, revenue-generating venture",
];

const engagementOptions = [
  {
    title: "Partner",
    description:
      "Build eServices.com as a joint venture with the VentureOS studio and agent network.",
    cta: "Start a partnership",
    href: "/contact",
    featured: false,
  },
  {
    title: "Invest",
    description:
      "Back eServices.com as a venture. Tell us your thesis — we'll send the opportunity details.",
    cta: "Request invest details",
    href: "/contact",
    featured: true,
  },
  {
    title: "Join",
    description:
      "Join the eCorp network as a contributor or partner via Contrib.com.",
    cta: "Join the network",
    href: "https://contrib.com/",
    featured: false,
  },
];

const networkCards = [
  { name: "eCorp", role: "Registry of record", href: "https://www.ecorp.com/" },
  {
    name: "VentureOS",
    role: "Operating system",
    href: "https://www.ventureos.com/",
  },
  {
    name: "AgentDAO",
    role: "Agent federation",
    href: "https://www.agentdao.com/",
  },
  { name: "PlayLoop", role: "Build methodology", href: "https://playloop.com/" },
];

export default function ServicesPage() {
  return (
    <>
      <title>Services | VNOC</title>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-40 md:pt-45 xl:pt-50 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2">
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-4xl xl:text-5xl font-bold mb-5 dark:text-white">
              Professional Services · Smart Entity
            </h1>
            <p className="mb-5">
              The services brand field-service crews can build on — available
              now to acquire, license, or co-build. The obvious wedge is client
              portals and invoicing; from there, provider matching, quote
              requests, and intake forms turn one-time visitors into accounts.
            </p>
            <div className="mt-7.5 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary py-2.5 px-7.5 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
              >
                Acquire this brand
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-stroke py-2.5 px-7.5 font-medium text-black duration-300 ease-in-out hover:border-primary hover:text-primary dark:border-strokedark dark:text-white"
              >
                Partner with us
              </Link>
            </div>
            <ul className="mt-7.5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-body-color dark:text-body-color-dark">
              <li>✓ Ownership verified</li>
              <li>✓ Secure transfer</li>
              <li>✓ Flexible terms</li>
            </ul>
          </div>
          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative">
              <div className="relative aspect-[1090/810] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/vnboard_image3.png"
                  alt="Professional Services"
                  fill
                />
                <Image
                  className="hidden dark:block shadow-solid-l"
                  src="/images/hero/vnboard_image3.png"
                  alt="Professional Services"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-10 xl:pb-15">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-7.5">
          {networkCards.map((card, key) => (
            <Link
              key={key}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="animate_top block border border-white shadow-solid-3 rounded-lg p-5 xl:p-7.5 transition-all hover:shadow-solid-4 hover:border-primary dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection bg-white"
            >
              <h3 className="font-semibold text-lg xl:text-xl text-black dark:text-white">
                {card.name}
              </h3>
              <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                {card.role}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-20 lg:pb-24 pt-10 md:pt-10 lg:pt-10">
        <div className="max-w-c-1390 relative mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-4/4 mx-auto">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <div className="animate_top text-center mx-auto">
                  <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">
                    Possible Uses
                  </h2>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    eServices is a Smart Entity — more than a parked name. Soul
                    defined, agent endpoints live, and a documented path from
                    name to revenue. Here are the ways crews and firms can put it
                    to work.
                  </p>
                </div>
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
                    {useCases.map((useCase, key) => (
                      <div
                        key={key}
                        className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white"
                      >
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image
                            src={useCase.icon}
                            width={36}
                            height={36}
                            alt={useCase.title}
                          />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                          {useCase.title}
                        </h3>
                        <p>{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-10 xl:pb-15">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3 xl:gap-10">
          {engagementOptions.map((option, key) => (
            <div
              key={key}
              className={`animate_top flex flex-col rounded-lg p-7.5 xl:p-10 transition-all hover:shadow-solid-4 dark:bg-blacksection bg-white ${
                option.featured
                  ? "border-2 border-primary shadow-solid-4"
                  : "border border-white shadow-solid-3 dark:border-strokedark"
              }`}
            >
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mb-4">
                {option.title}
              </h3>
              <p className="mb-7.5 flex-1 text-base text-body-color dark:text-body-color-dark">
                {option.description}
              </p>
              <Link
                href={option.href}
                {...(option.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`inline-flex w-fit items-center justify-center rounded-full py-2.5 px-7.5 font-medium duration-300 ease-in-out ${
                  option.featured
                    ? "bg-primary text-white hover:bg-primaryho"
                    : "border border-stroke text-black hover:border-primary hover:text-primary dark:border-strokedark dark:text-white"
                }`}
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-20 xl:pb-25">
        <div className="rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark py-12.5 px-7.5 md:px-12.5 xl:px-17.5 shadow-solid-8 border border-white dark:border-strokedark">
          <div className="mx-auto max-w-c-1016 text-center">
            <h2 className="mb-4 font-bold text-3xl xl:text-sectiontitle2 text-black dark:text-white">
              Why an eCorp Smart Entity
            </h2>
            <p className="mx-auto mb-12.5 max-w-[640px] text-base text-body-color dark:text-body-color-dark">
              More than a parked name — eServices ships ready to discover, call,
              and grow inside the eCorp network.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3 xl:gap-10">
            {whySmartEntity.map((item, key) => (
              <div key={key} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-white">
                  ✓
                </div>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AcquireForm />
    </>
  );
}
