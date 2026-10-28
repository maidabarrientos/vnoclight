import { Metadata } from "next";
import ApplyForm from "@/components/Apply/ApplyForm";
import HeroGlow from "@/components/Site/HeroGlow";

export const metadata: Metadata = {
  title: "Apply for Platform Access - VNOC",
  description: "Apply for access to VNOC, the technology domain investors use to track, sell, monetize and build on their portfolios.",
};

const nextSteps = [
  { title: "Tell us about your names", text: "Portfolio size, what you want to do and a few of your best domains." },
  { title: "The team reviews it", text: "We read every application and reply by email." },
  { title: "Get set up", text: "Start with the tools you need: traffic, offers, listings, builds." },
];

const ApplyPage = () => {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-paper dark:bg-black pt-32 md:pt-40 pb-20 xl:pb-28">
        <HeroGlow />
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 grid lg:grid-cols-[5fr_7fr] gap-x-12 xl:gap-x-20 gap-y-12 items-start">
          <div>
            <p className="text-slate dark:text-manatee text-lg font-medium mb-5">VNOC platform access</p>
            <h1 className="text-ink dark:text-white text-[44px] leading-[1.02] md:text-7xl xl:text-[84px] xl:leading-[0.97] font-black tracking-[-0.035em]">
              Apply for Access
            </h1>
            <p className="text-slate dark:text-manatee text-lg md:text-xl leading-relaxed max-w-[30em] mt-6">
              Run your portfolio on the same stack we use for more than 20,000 of our own domains.
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <ApplyForm />
          </div>

          <ol className="lg:col-start-1 lg:-mt-2 grid gap-6 border-t border-ink/15 dark:border-white/15 pt-8">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-bold text-ink dark:text-white">{s.title}</span>
                  <span className="block text-slate dark:text-manatee mt-0.5">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default ApplyPage;
