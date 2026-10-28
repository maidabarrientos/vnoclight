// Background lighting: soft brand-colored glows. Place inside a `relative isolate overflow-hidden` section.
const HeroGlow = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-32 -left-24 h-[560px] w-[560px] rounded-full bg-bggrad1/50 dark:bg-bggrad1/30 blur-[110px]" />
    <div className="absolute top-0 right-[-6%] h-[680px] w-[680px] rounded-full bg-primaryho/40 dark:bg-primaryho/45 blur-[120px]" />
    <div className="absolute -bottom-40 left-[28%] h-[420px] w-[520px] rounded-full bg-primary/50 dark:bg-primary/25 blur-[110px]" />
    <div className="absolute -top-24 left-[18%] h-[760px] w-[220px] rotate-[24deg] bg-gradient-to-b from-white/80 via-bggrad1/25 to-transparent dark:from-bggrad1/30 dark:via-primaryho/15 blur-[50px]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bggrad1/70 to-transparent" />
  </div>
);

export default HeroGlow;
