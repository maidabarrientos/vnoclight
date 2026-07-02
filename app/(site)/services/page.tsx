import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concierge Services | VNOC",
  description:
    "Concierge services for digital assets — domains, TLDs, crypto tokens and NFTs. Tiered concierge partnerships with free hosting, frameworks, logo design, content and expert support.",
};

const pricingTiers = [
  {
    name: "VNOC TIER 1 CONCIERGE",
    price: "$1,000.00",
    range: "1 to 100 domains",
    features: [
      "Free Hosting",
      "Free Framework",
      "Free Logo",
      "Free Content",
      "Free Contrib Apps (Tasks, Team Building)",
      "Domain Expert Support",
      "1 Portfolio Manager, 1 Content Manager",
    ],
    featured: false,
  },
  {
    name: "VNOC TIER 2 CONCIERGE",
    price: "$2,500.00",
    range: "101 to 5000 domains",
    features: [
      "Free Hosting",
      "Free Framework",
      "Free Logo",
      "Free Content",
      "Free Contrib Apps (Tasks, Team Building)",
      "Domain Expert Support",
      "1 Content Manager, 1 Portfolio Manager and 1 Developer",
    ],
    featured: true,
  },
  {
    name: "VNOC TIER 3 CONCIERGE",
    price: "$5,000.00",
    range: "5001 to 10k domains",
    features: [
      "Free Hosting",
      "Free Framework",
      "Free Logo",
      "Free Content",
      "Free Contrib Apps (Tasks, Team Building)",
      "Domain Expert Support",
      "1 Developer, 2 Content Managers, 1 Portfolio Manager, 1 Graphic Artist",
    ],
    featured: false,
  },
];

const includedFeatures = [
  {
    icon: "/images/icon/icon-01.svg",
    title: "Free Hosting",
    description:
      "High-performance hosting solutions with enhanced security measures and dedicated resources to handle a larger volume of domains.",
  },
  {
    icon: "/images/icon/icon-02.svg",
    title: "Auto Framework",
    description:
      "A customizable and scalable framework designed to manage and optimize multiple domains efficiently.",
  },
  {
    icon: "/images/icon/icon-03.svg",
    title: "Professional Logo",
    description:
      "Professional logo design services to create distinctive and memorable branding for your portfolio of domains.",
  },
  {
    icon: "/images/icon/icon-04.svg",
    title: "Curated and SEO Content",
    description:
      "Comprehensive content creation services, including blog posts, articles, and landing pages tailored to each domain's target audience.",
  },
  {
    icon: "/images/icon/icon-05.svg",
    title: "Contrib Apps",
    description:
      "Full suite of Contrib apps with premium features for extensive task management, central form management, team building, and blockchain services.",
  },
  {
    icon: "/images/icon/icon-06.svg",
    title: "Domain Expert Support",
    description:
      "Priority access to our most experienced domain experts, providing in-depth analysis, strategic planning, and ongoing support for your large-scale domain operations.",
  },
];

const monetizationOptions = [
  {
    title: "Network Ad Stream",
    description:
      "Integrate network ads to generate revenue from ad placements across your domains.",
  },
  {
    title: "Vertical Ad Stream",
    description:
      "Target specific industries with vertical ads to maximize ad revenue based on niche audiences.",
  },
  {
    title: "Newsletter Ads",
    description:
      "Monetize your newsletters by placing ads within your email campaigns.",
  },
  {
    title: "Bring Your Own Monetization",
    description:
      "Implement AdSense or integrate other monetization platforms to earn money by displaying custom monetization options on your domains.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <title>Concierge Services | VNOC</title>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-40 md:pt-45 xl:pt-50 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2">
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-7xl font-bold mb-5 dark:text-white">
              Building and Creating Value For Your Digital Empire
            </h1>
            <p className="mb-5">
              Thank you for visiting VNOC, where we believe in transforming your
              digital landscape with innovative solutions, premium services and
              expert support. Check out our concierge partnership pricing below!
            </p>
            <div className="mt-7.5 flex flex-wrap gap-4">
              <Link
                href="/services/demo"
                className="inline-flex items-center justify-center rounded-full bg-primary py-2.5 px-7.5 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
              >
                Book a demo
              </Link>
            </div>
            <blockquote className="mt-10 border-l-4 border-primary pl-5 italic text-body-color dark:text-body-color-dark">
              &ldquo;Domains are precious assets only if you build its
              value.&rdquo;
              <span className="mt-2 block text-sm not-italic">
                — Tehj Soon, Marketing Manager, AgentDAO.com
              </span>
            </blockquote>
          </div>
          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative">
              <div className="relative aspect-[1090/810] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/vnboard_image3.png"
                  alt="VNOC Concierge Services"
                  fill
                />
                <Image
                  className="hidden dark:block shadow-solid-l"
                  src="/images/hero/vnboard_image3.png"
                  alt="VNOC Concierge Services"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-20 xl:pb-25 scroll-mt-40">
        <div className="animate_top text-center mx-auto mb-12.5 lg:mb-15">
          <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white mb-4">
            Concierge Partnership Pricing
          </h2>
          <p className="mx-auto max-w-[640px] text-base text-body-color dark:text-body-color-dark">
            Tiered concierge services designed to help you build, manage, and
            monetize your domain portfolio at any scale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-3 xl:gap-10 items-start">
          {pricingTiers.map((tier, key) => (
            <div
              key={key}
              className={`animate_top flex flex-col rounded-lg p-7.5 xl:p-10 transition-all hover:shadow-solid-4 dark:bg-blacksection bg-white ${
                tier.featured
                  ? "border-2 border-primary shadow-solid-4 lg:-mt-4"
                  : "border border-white shadow-solid-3 dark:border-strokedark"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary py-1 px-4 text-sm font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-semibold text-lg xl:text-itemtitle2 text-black dark:text-white">
                {tier.name}
              </h3>
              <div className="mt-4 mb-1 flex items-end gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">
                  {tier.price}
                </span>
                <span className="mb-1 text-sm text-body-color dark:text-body-color-dark">
                  /month
                </span>
              </div>
              <p className="mb-7.5 text-sm font-medium text-primary">
                {tier.range}
              </p>
              <ul className="mb-10 flex flex-1 flex-col gap-3">
                {tier.features.map((feature, fkey) => (
                  <li
                    key={fkey}
                    className="flex items-start gap-3 text-base text-body-color dark:text-body-color-dark"
                  >
                    <span className="mt-1 text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/demo"
                className={`inline-flex w-full items-center justify-center rounded-full py-2.5 px-7.5 font-medium duration-300 ease-in-out ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primaryho"
                    : "border border-stroke text-black hover:border-primary hover:text-primary dark:border-strokedark dark:text-white"
                }`}
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-c-1390 relative mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-4/4 mx-auto">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <div className="animate_top text-center mx-auto">
                  <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-3/5 mx-auto mb-4">
                    All plans include
                  </h2>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    We offer tiered concierge services that include free
                    hosting, frameworks, logo design, content creation, and
                    Contrib apps for task and team management — plus expert
                    support to help you succeed in managing your domain
                    portfolios.
                  </p>
                </div>
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
                    {includedFeatures.map((feature, key) => (
                      <div
                        key={key}
                        className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white"
                      >
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image
                            src={feature.icon}
                            width={36}
                            height={36}
                            alt={feature.title}
                          />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                          {feature.title}
                        </h3>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-20 xl:pb-25">
        <div className="rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark py-12.5 px-7.5 md:px-12.5 xl:px-17.5 shadow-solid-8 border border-white dark:border-strokedark">
          <div className="mx-auto max-w-c-1016 text-center">
            <h2 className="mb-4 font-bold text-3xl xl:text-sectiontitle2 text-black dark:text-white">
              Monetization Options
            </h2>
            <p className="mx-auto mb-12.5 max-w-[640px] text-base text-body-color dark:text-body-color-dark">
              Increase network value while adding to your bottom line with our
              full suite of monetization options.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {monetizationOptions.map((option, key) => (
              <div
                key={key}
                className="animate_top rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-black"
              >
                <h3 className="mb-3 font-semibold text-lg xl:text-xl text-black dark:text-white">
                  {option.title}
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
