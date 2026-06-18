"use client";
import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              {it.q}
              <span className="pm" aria-hidden="true" />
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? "240px" : "0" }}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
