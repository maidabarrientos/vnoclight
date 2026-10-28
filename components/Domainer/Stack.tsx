import DomainName from "./DomainName";
import BrandLogo from "./BrandLogo";

export type Layer = { role: string; domain: string; brand: string; text: string };

const themes = {
  dark: {
    section: "bg-ink text-white",
    muted: "text-white/70",
    role: "text-white/60",
    rule: "border-white/20",
    tld: "text-white/50",
    hover: "group-hover:text-bggrad1",
  },
  light: {
    section: "bg-white dark:bg-blacksection text-ink dark:text-white",
    muted: "text-slate dark:text-manatee",
    role: "text-slate dark:text-manatee",
    rule: "border-rule dark:border-strokedark",
    tld: "text-slate/70 dark:text-manatee/70",
    hover: "group-hover:text-primaryho dark:group-hover:text-bggrad1",
  },
};

// A named group of network services, listed in the order a venture uses them.
const Stack = ({
  id,
  title,
  text,
  layers,
  theme = "light",
}: {
  id: string;
  title: string;
  text: string;
  layers: Layer[];
  theme?: keyof typeof themes;
}) => {
  const t = themes[theme];
  return (
    <section id={id} className={`${t.section} py-20 lg:py-28`}>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
          <div>
            <h2 className="text-4xl xl:text-sectiontitle3 font-extrabold tracking-[-0.02em] mb-5">
              {title}
            </h2>
            <p className={`${t.muted} text-lg leading-relaxed max-w-md`}>{text}</p>
          </div>

          <ol className={`border-t ${t.rule}`}>
            {layers.map((layer) => (
              <li key={layer.domain} className={`border-b ${t.rule}`}>
                <a
                  href={`https://www.${layer.domain}/?ref=vnoc.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-3 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bggrad1"
                >
                  <span className={`${t.role} font-medium sm:pt-2.5`}>{layer.role}</span>
                  <span>
                    <span className="flex items-center gap-4">
                      <BrandLogo domain={layer.domain} className="h-10 w-24 py-1" />
                      <span className={`text-xl md:text-2xl font-bold tracking-tight ${t.hover} min-w-0 break-words`}>
                        <DomainName domain={layer.domain} brand={layer.brand} tldClassName={t.tld} />
                      </span>
                    </span>
                    <span className={`block ${t.muted} mt-3 leading-relaxed`}>{layer.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Stack;
