import LocaleLink from "@/components/LocaleLink";
import { getDictionary } from "@/lib/i18n";
import { ArrowRight, Globe, ShieldCheck, Bolt, Check } from "@/components/Icons";

const CAP_ICONS = [Bolt, ShieldCheck, Globe, Check];

export function generateMetadata({ params }) {
  const t = getDictionary(params.lang);
  return { title: t.about.meta.title, description: t.about.meta.description };
}

export default function AboutPage({ params }) {
  const t = getDictionary(params.lang);
  const a = t.about;
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>{a.breadcrumb}</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>{a.eyebrow}</span>
          <h1>{a.title}</h1>
          <p>{a.lead}</p>
        </div>
      </section>

      {/* story */}
      <section className="block">
        <div className="wrap about-story">
          <div className="reveal">
            <span className="eyebrow">{a.story.eyebrow}</span>
            <h2 className="h2" style={{ margin: "14px 0 22px" }}>{a.story.heading}</h2>
            <p className="lead">{a.story.lead}</p>
            <p>{a.story.body1}</p>
            <p>{a.story.body2}</p>
            <div style={{ marginTop: "26px" }}>
              <LocaleLink href="/products" className="btn btn--bronze">{a.story.cta} <ArrowRight /></LocaleLink>
            </div>
          </div>
          <div className="fact-panel reveal">
            <div className="fact"><div className="n" data-count="15">0<sup>+</sup></div><div className="l">{a.story.facts[0]}</div></div>
            <div className="fact"><div className="n" data-count="100">0<sup>+</sup></div><div className="l">{a.story.facts[1]}</div></div>
            <div className="fact"><div className="n" data-count="130">0<sup>+</sup></div><div className="l">{a.story.facts[2]}</div></div>
            <div className="fact"><div className="n" data-count="180">0<sup>+</sup></div><div className="l">{a.story.facts[3]}</div></div>
            <div className="fact"><div className="n" data-count="50">0<sup>k m²</sup></div><div className="l">{a.story.facts[4]}</div></div>
            <div className="fact"><div className="n" data-count="12">0</div><div className="l">{a.story.facts[5]}</div></div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="block uses" style={{ background: "var(--panel)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">{a.values.eyebrow}</span><h2 className="h2">{a.values.heading}</h2></div>
            <p>{a.values.sub}</p>
          </div>
          <div className="values-grid">
            {a.values.items.map((v) => (
              <div className="value reveal" key={v.n}>
                <span className="vn">{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* capabilities */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">{a.caps.eyebrow}</span><h2 className="h2">{a.caps.heading}</h2></div>
            <p>{a.caps.sub}</p>
          </div>
          <div className="std-grid">
            {a.caps.items.map((item, i) => {
              const Icon = CAP_ICONS[i];
              return (
                <div className="std reveal" key={item.title}>
                  <div className="ico"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">{a.timeline.eyebrow}</span><h2 className="h2">{a.timeline.heading}</h2></div>
            <p>{a.timeline.sub}</p>
          </div>
          <div className="timeline reveal">
            {a.timeline.items.map((item) => (
              <div className="tl-item" key={item.yr}>
                <div className="yr">{item.yr}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ctaband reveal">
            <div>
              <span className="eyebrow" style={{ color: "var(--bronze-light)" }}>{a.cta.eyebrow}</span>
              <h2 style={{ marginTop: "16px" }}>{a.cta.heading}</h2>
              <p>{a.cta.sub}</p>
              <div className="quote">{a.cta.quote}</div>
            </div>
            <div className="actions">
              <LocaleLink href="/products" className="btn btn--bronze">{a.cta.primary} <ArrowRight /></LocaleLink>
              <LocaleLink href="/support" className="btn btn--light">{a.cta.secondary}</LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
