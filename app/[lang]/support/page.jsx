import LocaleLink from "@/components/LocaleLink";
import Accordion from "@/components/Accordion";
import {
  Wrench, Doc, ShieldCheck, Phone, Book, Globe,
  ArrowRight, Headset, Clock,
} from "@/components/Icons";
import { getDictionary } from "@/lib/i18n";

const TILE_ICONS = [Doc, Wrench, ShieldCheck, Phone, Book, Globe];
const CONTACT_ICONS = [Headset, Clock, ShieldCheck, Globe];

export function generateMetadata({ params }) {
  const t = getDictionary(params.lang);
  return { title: t.support.meta.title, description: t.support.meta.description };
}

export default function SupportPage({ params }) {
  const t = getDictionary(params.lang);
  const s = t.support;
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>{s.breadcrumb}</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>{s.eyebrow}</span>
          <h1>{s.heading}</h1>
          <p>Browse setup guides <a href={s.subLink} target="_blank" rel="noopener noreferrer" style={{ color: "var(--bronze-light)", textDecoration: "underline" }}>here</a>, fill in the form below — we&apos;re here before and after you buy.</p>
          <form className="sup-form" action="https://support.arpha.com" method="get" target="_blank">
            <div className="sup-form-row">
              <label htmlFor="sup-name">{s.form.nameLabel}</label>
              <input id="sup-name" name="name" type="text" placeholder={s.form.namePlaceholder} required />
            </div>
            <div className="sup-form-row">
              <label htmlFor="sup-email">{s.form.emailLabel}</label>
              <input id="sup-email" name="email" type="email" placeholder={s.form.emailPlaceholder} required />
            </div>
            <div className="sup-form-row">
              <label htmlFor="sup-issue">{s.form.issueLabel}</label>
              <textarea id="sup-issue" name="issue" rows={4} placeholder={s.form.issuePlaceholder} required />
            </div>
            <button type="submit" className="btn btn--bronze">{s.form.submit}</button>
          </form>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="sup-grid">
            {s.tiles.map((tile, i) => {
              const Icon = TILE_ICONS[i];
              return (
                <a className="sup-tile reveal" key={tile.title} href="https://support.arpha.com" target="_blank" rel="noopener noreferrer">
                  <div className="ico">{Icon && <Icon />}</div>
                  <h3>{tile.title}</h3>
                  <p>{tile.desc}</p>
                  <span className="lk">{tile.link} <ArrowRight /></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* contact band */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="trust-grid reveal">
            {s.contact.map((item, i) => {
              const Icon = CONTACT_ICONS[i];
              return (
                <div className="tcell" key={item.title}>
                  <div className="ico">{Icon && <Icon />}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block uses" style={{ background: "var(--panel)" }}>
        <div className="wrap">
          <div className="sec-head reveal" style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <span className="eyebrow center">{s.faq.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>{s.faq.heading}</h2>
          </div>
          <Accordion items={s.faq.items} />
          <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ color: "var(--muted)", marginBottom: "18px" }}>{s.faq.stuck}</p>
            <a href="#" className="btn btn--solid">{s.faq.cta} <ArrowRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}
