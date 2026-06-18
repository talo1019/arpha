import LocaleLink from "@/components/LocaleLink";
import PlansPricing from "@/components/PlansPricing";
import Accordion from "@/components/Accordion";
import { Check } from "@/components/Icons";
import { getDictionary } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const t = getDictionary(params.lang);
  return { title: t.plans.meta.title, description: t.plans.meta.description };
}

export default function PlansPage({ params }) {
  const t = getDictionary(params.lang);
  const pl = t.plans;
  const cmp = pl.compare;
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>{pl.breadcrumb}</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>{pl.eyebrow}</span>
          <h1>{pl.heading}</h1>
          <p>{pl.sub}</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <PlansPricing />
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">{cmp.eyebrow}</span><h2 className="h2">{cmp.heading}</h2></div>
            <p>{cmp.sub}</p>
          </div>
          <div className="reveal" style={{ overflowX: "auto" }}>
            <table className="compare">
              <thead>
                <tr><th>{cmp.feature}</th><th>Free</th><th>Lite</th><th>Pro</th></tr>
              </thead>
              <tbody>
                {cmp.rows.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    {r.slice(1).map((cell, i) => (
                      <td className="c" key={i}>
                        {cell === true
                          ? <Check />
                          : cell === false
                          ? <span style={{ color: "var(--line)" }}>—</span>
                          : cell === null
                          ? cmp.comingSoon
                          : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal" style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <span className="eyebrow center">{pl.faq.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: "14px" }}>{pl.faq.heading}</h2>
          </div>
          <Accordion items={pl.faq.items} />
        </div>
      </section>
    </>
  );
}
