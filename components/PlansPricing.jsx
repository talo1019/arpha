"use client";
import { useState } from "react";
import { Check } from "./Icons";

// Pricing mirrors the Arpha Guardian Service plans on the official site.
// Paid tiers are "Coming soon" there, so their CTAs are disabled here too.
const PLANS = [
  {
    name: "Free", tag: "Free trial", monthly: 0, annual: 0,
    sub: "Start with a 7-day free trial on a single device.",
    cta: "Start free trial", disabled: false, featured: false,
    features: [
      "1 device supported",
      "7-day cloud video storage",
      "15-second max clip length",
      "Live view, alerts & remote unlock",
    ],
  },
  {
    name: "Lite", tag: "Most popular", monthly: 7.99, annual: 69.99,
    sub: "More storage and longer clips for the whole home.",
    cta: "Coming soon", disabled: true, featured: true,
    features: [
      "Everything in Free",
      "2 devices supported",
      "120-day extended cloud storage",
      "60-second clip length",
    ],
  },
  {
    name: "Pro", tag: "For properties", monthly: 17.99, annual: 169.99,
    sub: "Everything in Lite, with more devices and advanced AI.",
    cta: "Coming soon", disabled: true, featured: false,
    features: [
      "Everything in Lite",
      "180-day cloud storage",
      "More devices supported",
      "Advanced AI features",
    ],
  },
];

export default function PlansPricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "44px" }}>
        <div className="toggle" role="tablist" aria-label="Billing period">
          <button className={annual ? "" : "on"} onClick={() => setAnnual(false)} role="tab" aria-selected={!annual}>Monthly</button>
          <button className={annual ? "on" : ""} onClick={() => setAnnual(true)} role="tab" aria-selected={annual}>Annually</button>
        </div>
        <span className="save-pill">Save up to 27% with annual billing</span>
      </div>

      <div className="plan-grid">
        {PLANS.map((pl) => {
          const price = annual ? pl.annual : pl.monthly;
          const per = annual ? "/year" : "/month";
          const save = annual && pl.monthly > 0 ? (pl.monthly * 12 - pl.annual).toFixed(2) : null;
          return (
            <div className={`plan${pl.featured ? " feat" : ""}`} key={pl.name}>
              {pl.featured && <span className="star">Popular</span>}
              <span className="tag">{pl.tag}</span>
              <h3>{pl.name}</h3>
              <div className="pl-price">
                {price === 0 ? "Free" : <>${price}<small>{per}</small></>}
              </div>
              {save && <div className="pl-save">Save ${save}/yr vs. monthly</div>}
              <p className="pl-sub">{pl.sub}</p>
              <ul className="pl-list">
                {pl.features.map((f) => (
                  <li className="pl-li" key={f}><Check /> {f}</li>
                ))}
              </ul>
              <button className={`btn ${pl.featured ? "btn--bronze" : "btn--ghost"} btn--block`} disabled={pl.disabled}>{pl.cta}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
