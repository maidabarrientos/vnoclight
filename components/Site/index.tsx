import Link from "next/link";
import { ReactNode } from "react";
import DomainName from "@/components/Domainer/DomainName";
import BrandLogo from "@/components/Domainer/BrandLogo";

// Shared building blocks for every inner page, in the homepage's style.

type Tone = "white" | "paper" | "ink";

const tones: Record<Tone, string> = {
  white: "bg-white dark:bg-blacksection text-ink dark:text-white",
  paper: "bg-paper dark:bg-black text-ink dark:text-white",
  ink: "bg-ink text-white",
};

const muted = (tone: Tone) => (tone === "ink" ? "text-white/70" : "text-slate dark:text-manatee");
const rule = (tone: Tone) => (tone === "ink" ? "border-white/20" : "border-rule dark:border-strokedark");

export const PageHero = ({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) => (
  <section className="bg-paper dark:bg-black pt-35 md:pt-40 xl:pt-46 pb-16 xl:pb-20">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <h1 className="text-ink dark:text-white text-[44px] leading-[1.02] md:text-7xl xl:text-[88px] xl:leading-[0.98] font-black tracking-[-0.035em] max-w-5xl">
        {title}
      </h1>
      {intro && (
        <div className="text-slate dark:text-manatee text-lg md:text-xl leading-relaxed max-w-[38em] mt-6">
          {intro}
        </div>
      )}
      {children && <div className="mt-9">{children}</div>}
    </div>
  </section>
);

export const Section = ({
  id,
  title,
  intro,
  tone = "white",
  children,
}: {
  id?: string;
  title?: string;
  intro?: ReactNode;
  tone?: Tone;
  children?: ReactNode;
}) => (
  <section id={id} className={`${tones[tone]} py-16 lg:py-24 scroll-mt-20`}>
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      {(title || intro) && (
        <div className="max-w-3xl mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl xl:text-sectiontitle2 font-extrabold tracking-[-0.02em] mb-4">
              {title}
            </h2>
          )}
          {intro && <div className={`${muted(tone)} text-lg leading-relaxed`}>{intro}</div>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export type Row = {
  title: string;
  text: ReactNode;
  href?: string;
  // A network domain: shown with its BrandIdentity logo and capitalized.
  domain?: string;
  brand?: string;
};

// Items separated by hairlines, in one or two columns. Use for features,
// benefits and lists of tools; not for steps (see Steps).
export const Rows = ({ items, tone = "white", columns = 2 }: { items: Row[]; tone?: Tone; columns?: 1 | 2 }) => (
  <ul className={`grid ${columns === 2 ? "md:grid-cols-2" : ""} gap-x-16 border-t-2 ${tone === "ink" ? "border-white/40" : "border-ink dark:border-white/40"}`}>
    {items.map((item) => {
      const heading = item.domain ? (
        <span className="flex items-center gap-4">
          <BrandLogo domain={item.domain} className="h-10 w-24 py-1" />
          <DomainName domain={item.domain} brand={item.brand} tldClassName="opacity-50" />
        </span>
      ) : (
        item.title
      );
      const body = (
        <>
          <span className="block text-xl md:text-2xl font-bold tracking-tight">{heading}</span>
          <span className={`block ${muted(tone)} mt-2 leading-relaxed`}>{item.text}</span>
        </>
      );
      return (
        <li key={item.title} className={`border-b ${rule(tone)}`}>
          {item.href ? (
            <a
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group block py-6 hover:text-primaryho dark:hover:text-bggrad1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primaryho"
            >
              {body}
            </a>
          ) : (
            <div className="py-6">{body}</div>
          )}
        </li>
      );
    })}
  </ul>
);

// A real sequence, numbered in order.
export const Steps = ({ items, tone = "white" }: { items: { title: string; text: ReactNode }[]; tone?: Tone }) => (
  <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
    {items.map((item, i) => (
      <li key={item.title} className={`border-t-2 ${tone === "ink" ? "border-white/40" : "border-ink dark:border-white/40"} pt-5`}>
        <span className={`block text-sm font-bold ${muted(tone)} tabular-nums mb-3`}>{i + 1}</span>
        <span className="block text-xl font-bold tracking-tight mb-2">{item.title}</span>
        <span className={`block ${muted(tone)} leading-relaxed`}>{item.text}</span>
      </li>
    ))}
  </ol>
);

// Body copy for long-form text (stories, explanations).
export const Prose = ({ children, tone = "white" }: { children: ReactNode; tone?: Tone }) => (
  <div className={`max-w-[42em] space-y-5 text-lg leading-relaxed ${muted(tone)}`}>{children}</div>
);

export const PrimaryButton = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className="inline-block bg-ink dark:bg-white text-white dark:text-ink font-bold rounded-full py-3.5 px-8 hover:bg-primaryho dark:hover:bg-bggrad1 ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryho"
  >
    {children}
  </Link>
);

export const TextLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    className="font-bold underline decoration-2 decoration-bggrad1 underline-offset-[6px] hover:decoration-current"
  >
    {children}
  </a>
);

// Closing band on every inner page.
export const ApplyBand = ({
  title = "Bring your portfolio to VNOC.",
  text = "Apply for access and tell us about your domains. We'll get back to you about what VNOC can do for them.",
}: {
  title?: string;
  text?: string;
}) => (
  <section className="bg-ink text-white py-16 lg:py-20">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mb-4">{title}</h2>
        <p className="text-white/70 text-lg leading-relaxed">{text}</p>
      </div>
      <Link
        href="/apply"
        className="self-start lg:self-auto shrink-0 bg-white text-ink font-bold rounded-full py-3.5 px-8 hover:bg-bggrad1 ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bggrad1"
      >
        Apply for access
      </Link>
    </div>
  </section>
);
