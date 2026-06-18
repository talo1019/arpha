import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";
import { LOCALES, getLocale, getDictionary } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

export const metadata = {
  title: {
    default: "Arpha — More Convenience. More Security. More Care.",
    template: "%s · Arpha",
  },
  description:
    "Arpha builds smart locks, doorbells, cameras and dash cams trusted in 180+ countries. Security made simple, smart, and accessible to everyone.",
  metadataBase: new URL("https://arpha.com"),
};

export const viewport = {
  themeColor: "#17130f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children, params }) {
  const locale = getLocale(params.lang);
  const dict = getDictionary(params.lang);

  return (
    <html lang={locale.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav dict={dict.nav} topbar={dict.topbar} locale={params.lang} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
        <ScrollFX />
      </body>
    </html>
  );
}
