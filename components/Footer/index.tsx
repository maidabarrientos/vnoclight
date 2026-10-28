/* eslint-disable @next/next/no-img-element */
import VNOC_newsletter from "../Forms/newsletter";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Tools", href: "/#tools" },
      { label: "Build", href: "/build" },
      { label: "Sell", href: "https://www.domaindirectory.com/sell/" },
      { label: "Lease", href: "https://www.domaindirectory.com/" },
      { label: "Partner", href: "https://www.domaindirectory.com/partner/" },
      { label: "Verticals", href: "https://www.domaindirectory.com/verticals/" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Why VNOC", href: "/why" },
      { label: "Use cases", href: "/use_cases" },
      { label: "Blockchain assets", href: "/blockchain" },
      { label: "Blog", href: "https://about.vnoc.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/our_story" },
      { label: "Our team", href: "/our_team" },
      { label: "Contrib network", href: "/contribution" },
      { label: "Partner with us", href: "https://domaindirectory.com/servicepage/?domain=vnoc.com" },
      { label: "Contact us", href: "/support" },
    ],
  },
];

const social = [
  { label: "Facebook", href: "https://www.facebook.com/vnocofficial/" },
  { label: "X", href: "https://twitter.com/vnoc_official" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vnoc" },
];

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-blacksection border-t border-rule dark:border-strokedark text-ink dark:text-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-16 lg:py-20 grid lg:grid-cols-[2fr_3fr] gap-12">
          <div className="max-w-sm">
            <a href="/" className="inline-flex flex-col items-start">
              <img src="https://www.brandidentity.com/logo/vnoc.com" alt="VNOC.com" width={104} height={36} />
              <span className="text-xs text-slate dark:text-manatee mt-1">An eCorp Venture</span>
            </a>
            <p className="text-slate dark:text-manatee mt-5 mb-8 leading-relaxed">
              Technology for domain investors: traffic analytics, offer forms, trademark
              alerts, link sales and venture building, run on our own portfolio first.
            </p>
            <VNOC_newsletter />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-bold mb-4">{col.title}</h2>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...external(link.href)}
                        className="text-slate dark:text-manatee hover:text-primaryho dark:hover:text-bggrad1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-rule dark:border-strokedark py-7 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between text-sm text-slate dark:text-manatee">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="/privacy" className="hover:text-primaryho dark:hover:text-bggrad1">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-primaryho dark:hover:text-bggrad1">Terms of Use</a></li>
            <li><a href="/support" className="hover:text-primaryho dark:hover:text-bggrad1">Support</a></li>
          </ul>
          <p>
            &copy; {new Date().getFullYear()} Vnoc.com. All rights reserved.{" "}
            <a href="https://Ecorp.com" className="hover:text-primaryho dark:hover:text-bggrad1">Proudly Ecorp® Made</a>
          </p>
          <ul className="flex gap-6">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} {...external(s.href)} className="hover:text-primaryho dark:hover:text-bggrad1">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
