"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_CODES, DEFAULT_LOCALE } from "@/lib/i18n";

// Reads the active locale from the URL and prefixes internal hrefs with it,
// so navigation stays inside the current locale without each page needing to
// thread `lang` through. External/anchor hrefs (#, http…, mailto…) pass through.
export function localeFromPath(pathname) {
  const seg = (pathname || "/").split("/")[1];
  return LOCALE_CODES.includes(seg) ? seg : DEFAULT_LOCALE;
}

export function withLocale(locale, href) {
  if (typeof href !== "string" || !href.startsWith("/")) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export default function LocaleLink({ href, ...props }) {
  const locale = localeFromPath(usePathname());
  return <Link href={withLocale(locale, href)} {...props} />;
}
