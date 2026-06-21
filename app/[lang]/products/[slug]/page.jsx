import LocaleLink from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import DeviceVisual from "@/components/DeviceVisual";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, getProduct, getRelated } from "@/lib/products";
import { getDictionary } from "@/lib/i18n";
import * as Icons from "@/components/Icons";
import {
  ArrowRight, Check, ShieldCheck, Clock, Globe, Headset,
  Face, Palm, Fingerprint, Keypad, Card, Phone, Key, Voice,
} from "@/components/Icons";

const UNLOCK_ICONS = { Face, Palm, Fingerprint, Keypad, Card, Phone, Key, Voice };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  const t = getDictionary(params.lang);
  if (!p) return { title: t.productDetail.notFound };
  return { title: p.model ? `${p.name} ${p.model}` : p.name, description: p.tagline };
}

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const t = getDictionary(params.lang);
  const d = t.productDetail;
  const pc = t.productContent?.[p.slug] || {};
  const related = getRelated(p.slug, 3, params.lang);
  const save = p.was ? p.was - p.price : 0;

  return (
    <>
      {/* hero */}
      <section className="block" style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: "32px" }}>
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span>
            <LocaleLink href="/products">{d.breadcrumb}</LocaleLink><span className="sep">/</span>
            <span>{p.name}{p.model ? ` ${p.model}` : ""}</span>
          </div>

          <div className="pdp-hero">
            <div className={`pdp-stage reveal${p.image ? " has-photo" : ""}`}>
              {p.badge && <span className={`badge${p.badgeAlt ? " alt" : ""}`}>{p.badge}</span>}
              {p.image
                ? <img className="pdp-photo" src={p.image} alt={p.model ? `${p.name} ${p.model}` : p.name} style={p.imageStyle || {}} />
                : <DeviceVisual type={p.deviceType} big />}
            </div>

            <div className="pdp-info reveal">
              <div className="cat">{p.category}{p.sub ? ` · ${p.sub}` : ""}</div>
              <h1>{p.name}</h1>
              {p.model && <div className="model">{d.model} {p.model}</div>}
              <p className="tagline">{pc.tagline || p.tagline}</p>

              <div className="pdp-price">
                <span className="now">${p.price}</span>
                {p.was && <s>${p.was}</s>}
                {save > 0 && <span className="save">{d.save} ${save}</span>}
              </div>

              <div className="pdp-feat">
                {(pc.feature || p.feature).map((f) => <span className="chip" key={f}>{f}</span>)}
              </div>

              <div className="pdp-actions">
                <button className="btn btn--bronze">{d.addToCart} <ArrowRight /></button>
                <LocaleLink href="/support" className="btn btn--ghost">{d.talkToExpert}</LocaleLink>
              </div>

              <div className="pdp-trust">
                <span><Clock /> {d.trial}</span>
                <span><ShieldCheck /> {d.warranty}</span>
                <span><Globe /> {d.shipping}</span>
                <span><Headset /> {d.expertSupport}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* highlights */}
      <section className="block" style={{ paddingTop: "30px" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">{d.highlights.eyebrow}</span><h2 className="h2">{d.highlights.heading}</h2></div>
            <p>{pc.description || p.description}</p>
          </div>
          <div className="hl-grid">
            {(pc.highlights || p.highlights).map((h) => {
              const Icon = Icons[h.icon] || ShieldCheck;
              return (
                <div className="hl reveal" key={h.title}>
                  <div className="ico"><Icon /></div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* unlock methods */}
      {p.unlock.length > 0 && (
        <section className="block unlock" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <div><span className="eyebrow">{d.unlock.eyebrow}</span><h2 className="h2">{d.unlock.heading}</h2></div>
              <p>{d.unlock.sub1} {p.unlock.length} {d.unlock.sub2}</p>
            </div>
            <div className="pill-row reveal">
              {p.unlock.map((u) => {
                const Icon = UNLOCK_ICONS[u];
                const label = d.unlock.methods[u] || u;
                if (!Icon) return null;
                return <span className="pill" key={u}><Icon /> {label}</span>;
              })}
            </div>
          </div>
        </section>
      )}

      {/* specs */}
      <section className="block" style={{ paddingTop: "70px" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">{d.specs.eyebrow}</span><h2 className="h2">{d.specs.heading}</h2></div>
            <p>{d.specs.sub}</p>
          </div>
          <div className="spec-wrap reveal">
            {(pc.specs || p.specs).map((row) => (
              <div className="spec-row" key={row.k}>
                <span className="k">{row.k}</span>
                <span className="v">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="block uses" style={{ background: "var(--panel)" }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <div><span className="eyebrow">{d.related.eyebrow}</span><h2 className="h2">{d.related.heading}</h2></div>
              <LocaleLink href="/products" className="btn btn--ghost">{d.related.cta} <ArrowRight /></LocaleLink>
            </div>
            <div className="prod-grid cols-3">
              {related.map((r) => <ProductCard key={r.slug} p={r} localized={t.productContent?.[r.slug]} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
