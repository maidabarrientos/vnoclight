import Link from "next/link";
import LiveLedger from "./LiveLedger";
import HeroGlow from "@/components/Site/HeroGlow";

const Hero = () => {
  return (
    <section className="relative isolate bg-paper dark:bg-black pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-28 overflow-hidden">
      <HeroGlow />
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div>
            <p className="text-slate dark:text-manatee text-lg font-medium mb-5">
              VNOC, technology for domain investors
            </p>
            <h1 className="text-ink dark:text-white text-[46px] leading-[1.0] md:text-7xl xl:text-[84px] xl:leading-[0.97] font-black tracking-[-0.035em] mb-7">
              Run Your Domain Portfolio on the Stack We Run Ours On.
            </h1>
            <p className="text-slate dark:text-manatee text-lg md:text-xl leading-relaxed max-w-[34em]">
              Traffic you can trust, offers that reach you, trademark alerts, and a way to
              build on the names worth building. We use every one of these tools on our own
              portfolio, every day.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/apply"
                className="bg-ink dark:bg-white text-white dark:text-ink font-bold text-regular rounded-full py-3.5 px-8 hover:bg-primaryho dark:hover:bg-bggrad1 ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryho"
              >
                Apply for access
              </Link>
              <a
                href="https://analytics.vnoc.com/network"
                className="text-ink dark:text-white font-bold underline decoration-2 decoration-bggrad1 underline-offset-[6px] hover:decoration-ink dark:hover:decoration-white"
              >
                See live network traffic
              </a>
            </div>
          </div>

          <LiveLedger />
        </div>
      </div>
    </section>
  );
};

export default Hero;
