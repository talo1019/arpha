import LocaleLink from "@/components/LocaleLink";
import { Chime, Battery, Card, Keypad, Key, Plug, Bell, ArrowRight } from "@/components/Icons";
import { getDictionary } from "@/lib/i18n";

const ACC_ICONS = [Chime, Battery, Card, Keypad, Key, Plug, Bell, Plug, Card];

export function generateMetadata({ params }) {
  const t = getDictionary(params.lang);
  return { title: t.accessories.meta.title, description: t.accessories.meta.description };
}

export default function AccessoriesPage({ params }) {
  const t = getDictionary(params.lang);
  const acc = t.accessories;
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>{acc.breadcrumb}</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>{acc.eyebrow}</span>
          <h1>{acc.heading}</h1>
          <p>{acc.sub}</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="acc-grid">
            {acc.items.map((a, i) => {
              const Icon = ACC_ICONS[i];
              return (
                <div className="acc reveal" key={a.name}>
                  <div className="ph"><div className="ico">{Icon && <Icon />}</div></div>
                  <div className="body">
                    <div className="cat">{a.cat}</div>
                    <h3>{a.name}</h3>
                    <p>{a.desc}</p>
                    <div className="price">${a.price}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reveal" style={{ marginTop: "50px" }}>
            <div className="ctaband">
              <div>
                <span className="eyebrow" style={{ color: "var(--bronze-light)" }}>{acc.cta.eyebrow}</span>
                <h2 style={{ marginTop: "16px" }}>{acc.cta.heading}</h2>
                <p>{acc.cta.sub}</p>
              </div>
              <div className="actions">
                <LocaleLink href="/support" className="btn btn--bronze">{acc.cta.primary} <ArrowRight /></LocaleLink>
                <LocaleLink href="/products" className="btn btn--light">{acc.cta.secondary}</LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
