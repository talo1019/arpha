import { NextResponse } from "next/server";
import { LOCALE_CODES, DEFAULT_LOCALE } from "./lib/i18n";

// Match the request's Accept-Language against our supported locales.
function detectLocale(req) {
  const header = req.headers.get("accept-language") || "";
  const wanted = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .filter(Boolean);
  for (const w of wanted) {
    if (LOCALE_CODES.includes(w)) return w;
    const base = w.split("-")[0];
    const match = LOCALE_CODES.find((c) => c === base || c.startsWith(base + "-"));
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const hasLocale = LOCALE_CODES.some(
    (c) => pathname === `/${c}` || pathname.startsWith(`/${c}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the API, and any file with an extension (static assets
  // like /logo-dark.png or /products/holt.jpg). Everything else gets a locale.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
