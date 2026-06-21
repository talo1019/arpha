"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import LocaleLink from "./LocaleLink";
import { Search, Menu, Close, Globe, Check } from "./Icons";
import { LOCALES, LOCALE_CODES } from "@/lib/i18n";

const CANADIAN_CODES = ["en-ca", "fr-ca"];

const NAV_KEYS = [
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/plans", key: "plans" },
  { href: "/accessories", key: "accessories" },
  { href: "https://support.arpha.com", key: "support", external: true },
];

export default function Nav({ dict, topbar, locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => { setOpen(false); setLangOpen(false); }, [pathname]);

  const isActive = (href) => {
    const rest = pathname.replace(/^\/[^/]+/, "") || "/";
    return rest === href || (href !== "/" && rest.startsWith(href));
  };

  const currentLang = LOCALES.find((l) => l.code === locale) || LOCALES[0];

  // Swap the locale segment of the current path and navigate there.
  const switchLocale = (code) => {
    setLangOpen(false);
    setOpen(false);
    const seg = pathname.split("/")[1];
    const rest = LOCALE_CODES.includes(seg)
      ? pathname.slice(seg.length + 1)
      : pathname === "/" ? "" : pathname;
    router.push(`/${code}${rest}`);
  };

  return (
    <>
      <div className="topbar">
        {topbar.pre} <b>{topbar.strong}</b> &nbsp;•&nbsp; {topbar.post}
      </div>

      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <LocaleLink href="/" className="brand" aria-label="Arpha home">
            <img className="brand-logo" src="/logo-dark.png" alt="Arpha" />
          </LocaleLink>

          <nav className="nav-links">
            {NAV_KEYS.map((l) => l.external
              ? <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{dict[l.key]}</a>
              : <LocaleLink key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>{dict[l.key]}</LocaleLink>
            )}
          </nav>

          <div className="nav-right">
            <button className="icon-btn" aria-label={dict.search}><Search /></button>
            <div className="lang" ref={langRef}>
              <button
                className="lang-btn"
                aria-label={dict.language}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe />
                <span>{currentLang.label}</span>
                <svg className="lang-caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              {langOpen && (
                <ul className="lang-menu" role="listbox" aria-label={dict.language}>
                  {LOCALES.filter((l) => !CANADIAN_CODES.includes(l.code)).map((l) => (
                    <li key={l.code} role="option" aria-selected={l.code === locale}>
                      <button
                        className={l.code === locale ? "active" : ""}
                        onClick={() => switchLocale(l.code)}
                      >
                        <span>{l.label}</span>
                        {l.code === locale && <Check />}
                      </button>
                    </li>
                  ))}
                  <li className="lang-group-label" role="presentation">Canada</li>
                  <li className="lang-ca-row" role="presentation">
                    {CANADIAN_CODES.map((code) => (
                      <button
                        key={code}
                        className={code === locale ? "active" : ""}
                        onClick={() => switchLocale(code)}
                      >
                        {code === "en-ca" ? "EN" : "FR"}
                        {code === locale && <Check />}
                      </button>
                    ))}
                  </li>
                </ul>
              )}
            </div>
            <button className="icon-btn burger" aria-label={dict.openMenu} onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`}>
        <div className="dr-top">
          <LocaleLink href="/" className="brand" onClick={() => setOpen(false)} aria-label="Arpha home">
            <img className="brand-logo" src="/logo-dark.png" alt="Arpha" />
          </LocaleLink>
          <button className="icon-btn" aria-label={dict.closeMenu} onClick={() => setOpen(false)}><Close /></button>
        </div>
        {NAV_KEYS.map((l) => l.external
          ? <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{dict[l.key]}</a>
          : <LocaleLink key={l.href} href={l.href} onClick={() => setOpen(false)}>{dict[l.key]}</LocaleLink>
        )}
        <div className="dr-lang">
          <div className="dr-lang-head"><Globe /> {dict.language}</div>
          {LOCALES.filter((l) => !CANADIAN_CODES.includes(l.code)).map((l) => (
            <button
              key={l.code}
              className={`dr-lang-opt${l.code === locale ? " active" : ""}`}
              onClick={() => switchLocale(l.code)}
            >
              <span>{l.label}</span>
              {l.code === locale && <Check />}
            </button>
          ))}
          <div className="dr-canada-group">
            <span className="dr-canada-label">Canada</span>
            <div className="dr-canada-row">
              {CANADIAN_CODES.map((code) => (
                <button
                  key={code}
                  className={`dr-lang-opt${code === locale ? " active" : ""}`}
                  onClick={() => switchLocale(code)}
                >
                  <span>{code === "en-ca" ? "EN" : "FR"}</span>
                  {code === locale && <Check />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
