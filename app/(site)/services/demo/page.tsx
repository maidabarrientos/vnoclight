import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import HubspotMeetings from "@/components/Forms/HubspotMeetings";

export const metadata: Metadata = {
  title: "Book a Demo | VNOC",
  description:
    "Grow your business with a free, value-driven consultation. Get a personalized walkthrough of VNOC's concierge services, platform features, and monetization options.",
};

const consultationBenefits = [
  {
    icon: "/images/icon/icon-01.svg",
    title: "Personalized Consultation",
    description:
      "Receive a one-on-one consultation tailored to your specific needs and goals. Our experts will analyze your current digital assets and provide customized recommendations to optimize your domain portfolio.",
  },
  {
    icon: "/images/icon/icon-02.svg",
    title: "Comprehensive Platform Overview",
    description:
      "Get a detailed walkthrough of VNOC's platform. Learn about the various tools and services we offer, including hosting, frameworks, content creation, and monetization options.",
  },
  {
    icon: "/images/icon/icon-03.svg",
    title: "Interactive Q&A",
    description:
      "Have your questions answered in real-time by our domain experts. Whether you have technical queries or need strategic advice, our team is here to help.",
  },
];

const whatToExpect = [
  {
    title: "Introduction to VNOC Services",
    description:
      "Begin with an overview of our tiered concierge services, including the benefits of VNOC Tier 1, Tier 2, and Tier 3 packages. Understand how each tier can support your specific domain management needs.",
  },
  {
    title: "Live Demonstration of Features",
    description:
      "Watch a live demonstration of our platform's key features. See how easy it is to manage your domains, create content, and set up monetization streams using our intuitive tools.",
  },
  {
    title: "Custom Solutions for Your Business",
    description:
      "Discover how VNOC can be tailored to fit your unique business requirements. We will discuss potential customizations and integrations that can enhance your digital strategy.",
  },
];

const testimonials = [
  {
    quote:
      "Collaborating with the VNOC team significantly enhanced the value and recognition of my entire digital portfolio. My heartfelt thanks to VNOC!",
    name: "Ervin Howell",
    role: "Domainer",
  },
  {
    quote:
      "VNOC is one of the most powerful platforms I've worked with—seamlessly combining automation, community, and monetization in a way that empowers creators and entrepreneurs at every level. What impressed me most is how agile the team is—consistently launching innovative features and adapting to real-time feedback. It's not just a tool; it's an ecosystem built with purpose, vision, and heart.",
    name: "Bianka Krausch",
    role: "Talent Agency Owner, Film Florida & WIFT So Flo Co-Chair",
  },
];

export default function DemoPage() {
  return (
    <>
      <title>Book a Demo | VNOC</title>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-40 md:pt-45 xl:pt-50 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-16">
          <div className="lg:w-1/2">
            <Link
              href="/services"
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              ← Back to Services
            </Link>
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-7xl font-bold mb-5 dark:text-white">
              Growing your business with free consultations
            </h1>
            <p className="mb-5">
              Unlock the potential of your business with our value-driven free
              consultations. Our meeting — whether by chat or video call — will
              outline the many services and features we offer, customized for
              your business and portfolio.
            </p>
            <div className="mt-7.5 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-primary py-2.5 px-7.5 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
              >
                View pricing
              </Link>
            </div>
          </div>
          <div className="mt-10 w-full lg:mt-0 lg:w-1/2">
            <div className="rounded-lg bg-white p-2 shadow-solid-8 dark:bg-blacksection dark:border dark:border-strokedark">
              <HubspotMeetings />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-20 xl:pb-25">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3 xl:gap-10">
          {consultationBenefits.map((benefit, key) => (
            <div
              key={key}
              className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-10 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection bg-white"
            >
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                <Image
                  src={benefit.icon}
                  width={36}
                  height={36}
                  alt={benefit.title}
                />
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                {benefit.title}
              </h3>
              <p>{benefit.description}</p>
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
                    What to Expect During the Demo
                  </h2>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Our meeting, whether by chat or video call, will outline the
                    many services and features we offer customized for your
                    business and portfolio.
                  </p>
                </div>
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
                    {whatToExpect.map((item, key) => (
                      <div
                        key={key}
                        className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-10 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white"
                      >
                        <div className="flex items-center justify-center rounded-full bg-primary w-12 h-12 text-lg font-bold text-white">
                          {key + 1}
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
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
        <div className="animate_top text-center mx-auto mb-12.5 lg:mb-15">
          <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white mb-4">
            See what people are saying
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 xl:gap-10">
          {testimonials.map((testimonial, key) => (
            <div
              key={key}
              className="animate_top flex flex-col rounded-lg border border-white bg-white p-7.5 xl:p-10 shadow-solid-3 dark:border-strokedark dark:bg-blacksection"
            >
              <p className="mb-6 flex-1 text-base italic text-body-color dark:text-body-color-dark">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-black dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pb-20 xl:pb-25">
        <div className="rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark py-12.5 px-7.5 md:px-12.5 xl:px-17.5 shadow-solid-8 border border-white dark:border-strokedark text-center">
          <h2 className="mb-4 font-bold text-3xl xl:text-sectiontitle2 text-black dark:text-white">
            Ready to grow your digital portfolio?
          </h2>
          <p className="mx-auto mb-10 max-w-[640px] text-base text-body-color dark:text-body-color-dark">
            Book your free consultation today and discover how VNOC can help you
            build, manage, and monetize your domains.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary py-2.5 px-7.5 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
