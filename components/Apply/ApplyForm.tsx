"use client";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import BrandLogo from "@/components/Domainer/BrandLogo";
import DomainName from "@/components/Domainer/DomainName";
import MenuIcon from "@/components/Header/MenuIcon";
import { domainToBrand } from "@/lib/domain-to-brand";

// Applications post to the same Domain Directory endpoint as the old embedded
// form (type "inquire", domain vnoc.com), so they keep landing in the vnoc.com
// inbox in app.vnoc.com and the admin emails still go out. The message's first
// line marks it as a platform application.
const API = "https://www.domaindirectory.com/api/domain-contact/";

const SIZES = ["Under 100", "100 to 1,000", "1,000 to 10,000", "Over 10,000"];

const GOALS = [
  { label: "See real traffic", icon: "grid" },
  { label: "Catch and answer offers", icon: "pen" },
  { label: "Sell or lease names", icon: "link" },
  { label: "Build sites on my names", icon: "layers" },
  { label: "Tokenize a domain", icon: "spark" },
  { label: "Hire contributors", icon: "lifebuoy" },
];

const STEPS = ["Your portfolio", "Your names", "About you"];
const MAX_DOMAINS = 10;

const cleanDomain = (raw: string) =>
  raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[/?#].*$/, "");

const isDomain = (d: string) => /^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(d);

const field =
  "w-full rounded-xl border border-rule dark:border-strokedark bg-white dark:bg-black/40 px-4 py-3 text-ink dark:text-white placeholder:text-slate/60 dark:placeholder:text-manatee/60 outline-none focus:border-primaryho focus:ring-4 focus:ring-primaryho/15 dark:focus:border-bggrad1 dark:focus:ring-bggrad1/20";

const ApplyForm = () => {
  const reduce = useReducedMotion();
  const startedAt = useRef<number>(0);
  const [step, setStep] = useState(0);
  const [size, setSize] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [draftError, setDraftError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, stays empty for people
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const toggleGoal = (g: string) =>
    setGoals((cur) => (cur.includes(g) ? cur.filter((x) => x !== g) : [...cur, g]));

  const addDomains = (raw: string) => {
    const parts = raw.split(/[\s,;]+/).map(cleanDomain).filter(Boolean);
    if (!parts.length) return;
    const bad = parts.filter((p) => !isDomain(p));
    const good = parts.filter(isDomain);
    setDomains((cur) => Array.from(new Set([...cur, ...good])).slice(0, MAX_DOMAINS));
    setDraft(bad.join(" "));
    setDraftError(bad.length ? `"${bad[0]}" doesn't look like a domain. Try a name like example.com.` : "");
  };

  const onDraftKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addDomains(draft);
    } else if (e.key === "Backspace" && !draft && domains.length) {
      setDomains((cur) => cur.slice(0, -1));
    }
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canNext = [size !== "" && goals.length > 0, true, name.trim() !== "" && emailOk][step];

  const next = () => {
    if (step === 1 && draft.trim()) addDomains(draft);
    if (canNext) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < STEPS.length - 1) return next();
    if (!canNext || status === "sending") return;
    setStatus("sending");
    setError("");

    const lines = [
      "VNOC platform access application",
      `Portfolio size: ${size}`,
      `Wants to: ${goals.join(", ")}`,
      domains.length ? `Domains: ${domains.join(", ")}` : "",
    ].filter(Boolean);
    const body = message.trim() ? `${lines.join("\n")}\n\n---\n${message.trim()}` : lines.join("\n");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: "vnoc.com",
          type: "inquire",
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || undefined,
          phone: phone.trim() || undefined,
          message: body,
          website,
          formStartedAt: startedAt.current,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Something went wrong. Please try again.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
      };

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-white/70 dark:border-white/10 bg-white/80 dark:bg-ink/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.6)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-bggrad1 to-primaryho text-white shadow-[0_10px_24px_-8px_rgba(0,99,236,0.8)]">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-ink dark:text-white">
          Application sent
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-slate dark:text-manatee">
          Thanks, {name.trim().split(/\s+/)[0]}. The VNOC team reads every application and will reply to{" "}
          <span className="font-bold text-ink dark:text-white">{email.trim()}</span>.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="https://analytics.vnoc.com/network"
            className="rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold py-3 px-6 hover:bg-primaryho dark:hover:bg-bggrad1 ease-in-out duration-300"
          >
            See live network traffic
          </a>
          <a href="/" className="font-bold text-ink dark:text-white underline decoration-2 decoration-bggrad1 underline-offset-[6px]">
            Back to the homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl border border-white/70 dark:border-white/10 bg-white/80 dark:bg-ink/70 backdrop-blur-xl p-6 md:p-9 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.6)]"
    >
      {/* Progress */}
      <ol className="grid grid-cols-3 gap-2" aria-label="Application steps">
        {STEPS.map((label, i) => (
          <li key={label}>
            <button
              type="button"
              disabled={i > step}
              onClick={() => i < step && setStep(i)}
              aria-current={i === step ? "step" : undefined}
              className="w-full text-left disabled:cursor-default"
            >
              <span className="block h-1.5 rounded-full bg-ink/10 dark:bg-white/10 overflow-hidden">
                <span
                  className={`block h-full rounded-full bg-gradient-to-r from-bggrad1 to-primaryho ease-out duration-500 ${
                    i <= step ? "w-full" : "w-0"
                  }`}
                />
              </span>
              <span
                className={`mt-2 block text-sm ${
                  i === step ? "font-bold text-ink dark:text-white" : "text-slate dark:text-manatee"
                }`}
              >
                <span className="hidden sm:inline">{i + 1}. </span>
                {label}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="relative mt-8 min-h-[360px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step} {...slide} transition={{ duration: 0.25, ease: "easeOut" }}>
            {step === 0 && (
              <div>
                <fieldset>
                  <legend className="text-xl font-bold text-ink dark:text-white">
                    How many domains do you hold?
                  </legend>
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    {SIZES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={size === s}
                        onClick={() => setSize(s)}
                        className={`rounded-xl border px-4 py-3 text-left font-bold ease-in-out duration-200 ${
                          size === s
                            ? "border-primaryho dark:border-bggrad1 bg-primaryho/[0.07] dark:bg-bggrad1/10 text-ink dark:text-white ring-4 ring-primaryho/10"
                            : "border-rule dark:border-strokedark text-ink/80 dark:text-white/80 hover:border-ink/30 dark:hover:border-white/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <legend className="text-xl font-bold text-ink dark:text-white">
                    What do you want VNOC for?
                  </legend>
                  <p className="mt-1 text-slate dark:text-manatee">Pick as many as you like.</p>
                  <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
                    {GOALS.map((g) => {
                      const on = goals.includes(g.label);
                      return (
                        <button
                          key={g.label}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggleGoal(g.label)}
                          className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left font-semibold ease-in-out duration-200 ${
                            on
                              ? "border-primaryho dark:border-bggrad1 bg-primaryho/[0.07] dark:bg-bggrad1/10 text-ink dark:text-white ring-4 ring-primaryho/10"
                              : "border-rule dark:border-strokedark text-ink/80 dark:text-white/80 hover:border-ink/30 dark:hover:border-white/30"
                          }`}
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ease-in-out duration-200 ${
                              on
                                ? "bg-gradient-to-br from-bggrad1 to-primaryho text-white"
                                : "bg-ink/[0.05] dark:bg-white/10 text-ink/70 dark:text-white/70"
                            }`}
                          >
                            <MenuIcon name={g.icon} className="h-[18px] w-[18px]" />
                          </span>
                          {g.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </div>
            )}

            {step === 1 && (
              <div>
                <label htmlFor="apply-domain" className="text-xl font-bold text-ink dark:text-white">
                  Add a few of your best names
                </label>
                <p className="mt-1 text-slate dark:text-manatee">
                  Optional. Press Enter after each one, or paste a list. Up to {MAX_DOMAINS}.
                </p>
                <div
                  className={`mt-4 flex flex-wrap items-center gap-2 rounded-xl border bg-white dark:bg-black/40 p-2.5 focus-within:ring-4 ${
                    draftError
                      ? "border-red-500 focus-within:ring-red-500/15"
                      : "border-rule dark:border-strokedark focus-within:border-primaryho dark:focus-within:border-bggrad1 focus-within:ring-primaryho/15"
                  }`}
                >
                  {domains.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-2 rounded-lg bg-paper dark:bg-white/10 py-1 pl-1 pr-2 text-ink dark:text-white"
                    >
                      <BrandLogo domain={d} className="h-7 w-14 py-0.5 px-1" />
                      <span className="font-bold">
                        <DomainName domain={d} brand={domainToBrand(d)} tldClassName="opacity-50" />
                      </span>
                      <button
                        type="button"
                        aria-label={`Remove ${d}`}
                        onClick={() => setDomains((cur) => cur.filter((x) => x !== d))}
                        className="ml-0.5 flex h-6 w-6 items-center justify-center rounded-full text-slate hover:bg-ink/10 hover:text-ink dark:hover:bg-white/15 dark:hover:text-white"
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
                          <path d="m3 3 6 6M9 3 3 9" />
                        </svg>
                      </button>
                    </span>
                  ))}
                  {domains.length < MAX_DOMAINS && (
                    <input
                      id="apply-domain"
                      value={draft}
                      onChange={(e) => {
                        setDraft(e.target.value);
                        setDraftError("");
                      }}
                      onKeyDown={onDraftKey}
                      onBlur={() => draft.trim() && addDomains(draft)}
                      onPaste={(e) => {
                        const text = e.clipboardData.getData("text");
                        if (/[\s,;]/.test(text.trim())) {
                          e.preventDefault();
                          addDomains(text);
                        }
                      }}
                      placeholder={domains.length ? "Add another" : "example.com"}
                      autoComplete="off"
                      className="min-w-[10rem] flex-1 bg-transparent px-2 py-2 text-ink dark:text-white placeholder:text-slate/60 outline-none"
                    />
                  )}
                </div>
                {draftError && (
                  <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {draftError}
                  </p>
                )}
                {domains.length > 0 && (
                  <p className="mt-4 text-sm text-slate dark:text-manatee">
                    {domains.length} of {MAX_DOMAINS} {domains.length === 1 ? "name" : "names"} added.
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-1.5 block font-bold text-ink dark:text-white">Name</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-bold text-ink dark:text-white">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    aria-invalid={email !== "" && !emailOk}
                    className={field}
                  />
                  {email !== "" && !emailOk && (
                    <span className="mt-1.5 block text-sm text-red-600 dark:text-red-400">
                      Enter an email like you@example.com.
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-bold text-ink dark:text-white">
                    Company <span className="font-normal text-slate dark:text-manatee">(optional)</span>
                  </span>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-bold text-ink dark:text-white">
                    Phone <span className="font-normal text-slate dark:text-manatee">(optional)</span>
                  </span>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" className={field} />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block font-bold text-ink dark:text-white">
                    Anything else we should know? <span className="font-normal text-slate dark:text-manatee">(optional)</span>
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={`${field} resize-y`}
                  />
                </label>
                {/* Honeypot: hidden from people, filled by bots. */}
                <label className="absolute -left-[9999px]" aria-hidden="true">
                  Website
                  <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </label>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-red-500/10 px-4 py-3 text-red-700 dark:text-red-300">
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-rule dark:border-strokedark pt-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="font-bold text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white"
          >
            Back
          </button>
        ) : (
          <span className="text-sm text-slate dark:text-manatee">Takes about a minute</span>
        )}
        <button
          type="submit"
          disabled={!canNext || status === "sending"}
          className="rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold py-3.5 px-8 shadow-[0_0_0_1px_rgba(12,192,223,0.35),0_12px_28px_-10px_rgba(0,99,236,0.8)] hover:bg-primaryho dark:hover:bg-bggrad1 ease-in-out duration-300 disabled:opacity-40 disabled:shadow-none disabled:hover:bg-ink dark:disabled:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryho"
        >
          {step < STEPS.length - 1
            ? step === 1 && domains.length === 0 && !draft.trim()
              ? "Skip"
              : "Continue"
            : status === "sending"
            ? "Sending…"
            : "Send application"}
        </button>
      </div>
    </form>
  );
};

export default ApplyForm;
