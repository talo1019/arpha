import LocaleLink from "@/components/LocaleLink";
import HeroLock from "@/components/HeroLock";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { getDictionary } from "@/lib/i18n";
import {
  ArrowRight, Face, Palm, Fingerprint, Keypad, Phone, Nfc, Card, Voice, Key,
  ShieldCheck, Weather, Lock2fa, Doc, Globe, Check, Battery, Headset,
} from "@/components/Icons";

const featured = ["uvo-2", "duo", "battery-k25", "m660"]
  .map((s) => PRODUCTS.find((p) => p.slug === s))
  .filter(Boolean);

const UNLOCK_ICONS = [Face, Palm, Fingerprint, Keypad, Phone, Nfc, Card, Voice, Key];
const STD_ICONS = [ShieldCheck, Weather, Lock2fa, Doc];
const TRUST_ICONS = [Globe, Check, Battery, Headset];

export default function Home({ params }) {
  const t = getDictionary(params.lang).home;

  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title1}<br />{t.hero.title2}<span className="soft">{t.hero.titleSoft}</span></h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="hero-cta">
              <LocaleLink href="/products" className="btn btn--bronze">{t.hero.ctaPrimary} <ArrowRight /></LocaleLink>
              <LocaleLink href="/about" className="btn btn--light">{t.hero.ctaSecondary}</LocaleLink>
            </div>
            <div className="hero-meta">
              {t.hero.meta.map((m) => (
                <span key={m.l}><b>{m.v}</b> {m.l}</span>
              ))}
            </div>
          </div>
          <HeroLock />
        </div>
      </section>

      {/* stats */}
      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            {[15, 100, 130, 180].map((n, i) => (
              <div className="stat" key={n}>
                <div className="num" data-count={n}>0<sup>+</sup></div>
                <div className="lbl">{t.stats[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* products */}
      <section className="block" id="locks">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="eyebrow center">{t.products.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>{t.products.heading}</h2>
            <p style={{ color: "var(--muted)", marginTop: "12px", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>{t.products.sub}</p>
          </div>
          <div className="prod-grid">
            {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <div className="reveal" style={{ marginTop: "40px", textAlign: "center" }}>
            <LocaleLink href="/products" className="btn btn--ghost">{t.products.cta} <ArrowRight /></LocaleLink>
          </div>
        </div>
      </section>

      {/* unlock methods */}
      <section className="block unlock" id="unlock">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="eyebrow center">{t.unlock.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>{t.unlock.heading1}<br />{t.unlock.heading2}</h2>
            <p style={{ color: "var(--muted)", marginTop: "12px", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>{t.unlock.sub}</p>
          </div>
          <div className="unlock-grid">
            {t.unlock.items.map((item, i) => {
              const Icon = UNLOCK_ICONS[i];
              const n = String(i + 1).padStart(2, "0");
              return (
                <div className="um reveal" key={n}>
                  <span className="n">{n}</span>
                  <div className="ico"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* technology */}
      <section className="block tech" id="tech">
        <div className="wrap tech-grid">
          <div className="reveal">
            <span className="eyebrow">{t.tech.eyebrow}</span>
            <h2>{t.tech.heading1}<br />{t.tech.heading2}</h2>
            <p className="lead">{t.tech.lead}</p>
            <div className="tech-list">
              {t.tech.rows.map((row, i) => (
                <div className="trow" key={i}>
                  <span className="ti">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{row.title}</h3><p>{row.body}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-panel reveal">
            <div className="ring" style={{ width: "300px", height: "300px", right: "-90px", top: "-90px" }} />
            <div className="ring" style={{ width: "200px", height: "200px", right: "-40px", top: "-40px" }} />
            <div className="accuracy" data-count="99">0<sup>%+</sup></div>
            <div className="tp-label">{t.tech.panelLabel}</div>
            <div className="tp-bars">
              {t.tech.bars.map((bar, i) => (
                <div className="tp-bar" key={bar.label}>
                  <div className="bt"><span>{bar.label}</span><b>{bar.value}</b></div>
                  <div className="track"><div className="fill" data-w={[92, 98, 88, 80][i]} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* standards */}
      <section className="block" id="standards">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="eyebrow center">{t.standards.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>{t.standards.heading}</h2>
            <p style={{ color: "var(--muted)", marginTop: "12px", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>{t.standards.sub}</p>
          </div>
          <div className="std-grid">
            {t.standards.items.map((item, i) => {
              const Icon = STD_ICONS[i];
              return (
                <div className="std reveal" key={i}><div className="ico"><Icon /></div><h3>{item.title}</h3><p>{item.body}</p></div>
              );
            })}
          </div>
        </div>
      </section>

      {/* use cases */}
      <section className="block uses" id="uses">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="eyebrow center">{t.uses.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>{t.uses.heading}</h2>
            <p style={{ color: "var(--muted)", marginTop: "12px", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>{t.uses.sub}</p>
          </div>
          <div className="use-grid">
            {t.uses.items.map((item, i) => (
              <div className={`use u${i + 1} reveal`} key={i}>
                <div className="uc"><div className="ut">{item.tag}</div><h3>{item.title}</h3></div>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* works with */}
      <section className="block ww">
        <div className="wrap">
          <span className="eyebrow center reveal">{t.ww.eyebrow}</span>
          <h2 className="h2 reveal" style={{ marginTop: "14px" }}>{t.ww.heading}</h2>
          <p className="lead reveal">{t.ww.lead}</p>
          <div className="logos reveal">
            <span className="logo-chip">Amazon <span>Alexa</span></span>
            <span className="logo-chip">Google <span>Home</span></span>
            <span className="logo-chip">Apple <span>Home</span></span>
            <span className="logo-chip"><span>Tuya</span> Smart</span>
            <span className="logo-chip">Wi-Fi <span>6</span></span>
            <span className="logo-chip">Bluetooth <span>5.4</span></span>
            <span className="logo-chip">Arpha <span>Cloud</span></span>
          </div>
        </div>
      </section>

      {/* trust */}
      <section className="block">
        <div className="wrap">
          <div className="trust-grid">
            {t.trust.items.map((item, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div className="tcell reveal" key={i}><div className="ico"><Icon /></div><h3>{item.title}</h3><p>{item.body}</p></div>
              );
            })}
          </div>
        </div>
      </section>

      {/* cta band */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ctaband reveal">
            <div>
              <span className="eyebrow" style={{ color: "var(--bronze-light)" }}>{t.cta.eyebrow}</span>
              <h2 style={{ marginTop: "16px" }}>{t.cta.heading}</h2>
              <p>{t.cta.sub}</p>
              <div className="quote">{t.cta.quote}</div>
            </div>
            <div className="actions">
              <LocaleLink href="/products" className="btn btn--bronze">{t.cta.primary} <ArrowRight /></LocaleLink>
              <LocaleLink href="/support" className="btn btn--light">{t.cta.secondary}</LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
