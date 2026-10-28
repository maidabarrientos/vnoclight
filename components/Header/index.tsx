"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggler from "./ThemeToggler";
import MenuIcon from "./MenuIcon";
import menuData from "./menuData";
import { Menu } from "@/types/menu";

// Same public endpoint as the homepage ledger; the count is only shown when it loads.
const NETWORK_API = "https://analytics.vnoc.com/api/network";
const NETWORK_PAGE = "https://analytics.vnoc.com/network";

const isExternal = (path?: string) => !!path && /^https?:\/\//.test(path);

// Internal paths use Link; external ones are plain anchors.
const NavLink = ({
  path,
  className,
  children,
  onClick,
}: {
  path?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) =>
  isExternal(path) ? (
    <a href={path} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={path || "#"} className={className} onClick={onClick}>
      {children}
    </Link>
  );

const PanelItem = ({ item, onNavigate }: { item: Menu; onNavigate: () => void }) => (
  <NavLink
    path={item.path}
    onClick={onNavigate}
    className="group/item flex items-start gap-3.5 rounded-xl p-3 hover:bg-ink/[0.04] dark:hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primaryho"
  >
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-bggrad1 to-primaryho text-white shadow-[0_6px_16px_-6px_rgba(0,99,236,0.7)]">
      <MenuIcon name={item.icon} className="h-5 w-5" />
    </span>
    <span className="min-w-0">
      <span className="block font-bold text-ink dark:text-white group-hover/item:text-primaryho dark:group-hover/item:text-bggrad1">
        {item.title}
      </span>
      {item.description && (
        <span className="block text-sm leading-snug text-slate dark:text-manatee mt-0.5">
          {item.description}
        </span>
      )}
    </span>
  </NavLink>
);

const StatusChip = ({ domains, className = "" }: { domains: number | null; className?: string }) =>
  domains ? (
    <a
      href={NETWORK_PAGE}
      className={`items-center gap-2 rounded-full border border-ink/10 dark:border-white/15 bg-white/60 dark:bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-ink dark:text-white hover:border-bggrad1 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-bggrad1 opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-bggrad1" />
      </span>
      {domains.toLocaleString("en-US")} domains tracked
    </a>
  ) : null;

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [domains, setDomains] = useState<number | null>(null);

  const pathUrl = usePathname();

  useEffect(() => {
    const onScroll = () => setStickyMenu(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setNavigationOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(NETWORK_API)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        if (!cancelled && json?.totals?.domains) setDomains(json.totals.domains);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Close everything after navigating.
  useEffect(() => {
    setOpenMenu(null);
    setNavigationOpen(false);
  }, [pathUrl]);

  const closeAll = () => {
    setOpenMenu(null);
    setNavigationOpen(false);
  };

  const topLink = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] ease-in-out duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primaryho ${
      active
        ? "bg-ink/[0.07] dark:bg-white/10 text-ink dark:text-white font-bold"
        : "font-medium text-ink/75 dark:text-white/75 hover:text-ink dark:hover:text-white hover:bg-ink/[0.05] dark:hover:bg-white/[0.08]"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-99999 px-3 md:px-6 ease-in-out duration-300 ${
        stickyMenu ? "pt-2" : "pt-3 md:pt-4"
      }`}
    >
      <div
        className={`relative mx-auto max-w-c-1390 rounded-2xl border backdrop-blur-xl backdrop-saturate-150 ease-in-out duration-300 ${
          navigationOpen
            ? "border-white/80 dark:border-white/10 bg-white/[0.97] dark:bg-ink/[0.97] shadow-[0_12px_40px_-18px_rgba(15,34,56,0.45)]"
            : stickyMenu
            ? "border-white/80 dark:border-white/10 bg-white/85 dark:bg-ink/80 shadow-[0_12px_40px_-18px_rgba(15,34,56,0.45)]"
            : "border-white/60 dark:border-white/10 bg-white/55 dark:bg-ink/50 shadow-[0_10px_30px_-22px_rgba(15,34,56,0.4)]"
        }`}
      >
        {/* Light line along the top edge of the bar. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-bggrad1 to-transparent"
        />

        <div className="flex h-16 items-center justify-between gap-4 px-4 lg:px-5">
          <a href="/" className="flex flex-col items-start shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.brandidentity.com/logo/vnoc.com"
              alt="VNOC.com"
              width={80}
              height={28}
            />
            <span className="text-[11px] leading-none text-slate dark:text-manatee mt-1">
              An eCorp Venture
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {menuData.map((menuItem) =>
                menuItem.submenu ? (
                  <li
                    key={menuItem.id}
                    className="relative"
                    onPointerEnter={(e) => e.pointerType === "mouse" && setOpenMenu(menuItem.id)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={openMenu === menuItem.id}
                      onClick={() => setOpenMenu(openMenu === menuItem.id ? null : menuItem.id)}
                      className={topLink(
                        menuItem.submenu.some((s) => s.path === pathUrl) || openMenu === menuItem.id
                      )}
                    >
                      {menuItem.title}
                      <svg
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                        className={`h-3 w-3 fill-current opacity-60 ease-in-out duration-200 ${
                          openMenu === menuItem.id ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M6 8.5 1.8 4.3l.9-.9L6 6.7l3.3-3.3.9.9L6 8.5Z" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ease-out duration-200 ${
                        openMenu === menuItem.id
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 translate-y-1"
                      }`}
                    >
                      <div
                        className={`grid gap-1 rounded-2xl border border-rule/80 dark:border-white/10 bg-white dark:bg-blacksection p-2.5 shadow-[0_24px_60px_-24px_rgba(15,34,56,0.5)] ${
                          menuItem.submenu.length > 3 ? "w-[600px] grid-cols-2" : "w-[620px] grid-cols-[1fr_200px]"
                        }`}
                      >
                        {menuItem.submenu.length > 3 ? (
                          menuItem.submenu.map((item) => (
                            <PanelItem key={item.id} item={item} onNavigate={closeAll} />
                          ))
                        ) : (
                          <>
                            <div className="grid gap-1">
                              {menuItem.submenu.map((item) => (
                                <PanelItem key={item.id} item={item} onNavigate={closeAll} />
                              ))}
                            </div>
                            <a
                              href={NETWORK_PAGE}
                              className="relative overflow-hidden rounded-xl bg-ink p-4 text-white flex flex-col justify-between hover:ring-2 hover:ring-bggrad1"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-bggrad1/40 blur-2xl"
                              />
                              <span className="relative text-sm text-white/70">VNOC network</span>
                              <span className="relative">
                                <span className="block text-3xl font-black tracking-tight">
                                  {domains ? domains.toLocaleString("en-US") : "20,000+"}
                                </span>
                                <span className="block text-sm text-white/70 mt-1">
                                  domains tracked. See the live traffic.
                                </span>
                              </span>
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={menuItem.id}>
                    <NavLink path={menuItem.path} className={topLink(pathUrl === menuItem.path)}>
                      {menuItem.title}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <StatusChip domains={domains} className="hidden xl:inline-flex mr-1" />
            <ThemeToggler />
            <Link
              href="/apply"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold text-[15px] py-2.5 px-5 shadow-[0_0_0_1px_rgba(12,192,223,0.35),0_10px_24px_-10px_rgba(0,99,236,0.8)] hover:bg-primaryho dark:hover:bg-bggrad1 ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryho"
            >
              Apply for access
            </Link>

            <button
              type="button"
              aria-label={navigationOpen ? "Close menu" : "Open menu"}
              aria-expanded={navigationOpen}
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink dark:text-white hover:bg-ink/[0.06] dark:hover:bg-white/10"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current ease-in-out duration-200 ${
                    navigationOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current ease-in-out duration-200 ${
                    navigationOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current ease-in-out duration-200 ${
                    navigationOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {navigationOpen && (
          <nav
            aria-label="Main"
            className="lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-ink/10 dark:border-white/10 px-3 pb-4 pt-3"
          >
            <ul className="grid gap-1">
              {menuData
                .filter((m) => !m.submenu)
                .map((m) => (
                  <li key={m.id}>
                    <NavLink path={m.path} onClick={closeAll} className={`${topLink(pathUrl === m.path)} w-full`}>
                      {m.title}
                    </NavLink>
                  </li>
                ))}
            </ul>
            {menuData
              .filter((m) => m.submenu)
              .map((m) => (
                <div key={m.id} className="mt-4">
                  <p className="px-3 pb-1 text-sm font-medium text-slate dark:text-manatee">{m.title}</p>
                  <div className="grid gap-0.5">
                    {m.submenu!.map((item) => (
                      <PanelItem key={item.id} item={item} onNavigate={closeAll} />
                    ))}
                  </div>
                </div>
              ))}
            <div className="mt-5 flex flex-col gap-3 px-3">
              <StatusChip domains={domains} className="inline-flex self-start" />
              <Link
                href="/apply"
                onClick={closeAll}
                className="flex items-center justify-center rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold py-3 hover:bg-primaryho dark:hover:bg-bggrad1"
              >
                Apply for access
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
