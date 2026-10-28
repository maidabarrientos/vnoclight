import Link from "next/link";
import LiveLedger from "./LiveLedger";

const Hero = () => {
  return (
    <section className="relative isolate bg-paper dark:bg-black pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-28 overflow-hidden">
      {/* Background lighting: soft brand-colored glows behind the headline and the live table. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[560px] w-[560px] rounded-full bg-bggrad1/50 dark:bg-bggrad1/30 blur-[110px]" />
        <div className="absolute top-0 right-[-6%] h-[680px] w-[680px] rounded-full bg-primaryho/40 dark:bg-primaryho/45 blur-[120px]" />
        <div className="absolute -bottom-40 left-[28%] h-[420px] w-[520px] rounded-full bg-primary/50 dark:bg-primary/25 blur-[110px]" />
        <div className="absolute -top-24 left-[18%] h-[760px] w-[220px] rotate-[24deg] bg-gradient-to-b from-white/80 via-bggrad1/25 to-transparent dark:from-bggrad1/30 dark:via-primaryho/15 blur-[50px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bggrad1/70 to-transparent" />
      </div>
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
