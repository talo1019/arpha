"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Re-applies scroll-reveal, count-up and bar-fill effects on every route.
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = document.querySelectorAll(".reveal:not(.in)");
    if (reduce) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        }),
        { threshold: 0.14 }
      );
      revealEls.forEach((el) => io.observe(el));
    }

    // count-up numbers
    const countEls = document.querySelectorAll("[data-count]:not([data-done])");
    const cio = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.setAttribute("data-done", "1");
        cio.unobserve(el);
        const target = +el.dataset.count;
        const sup = el.querySelector("sup");
        const suf = sup ? sup.outerHTML : "";
        if (reduce) { el.innerHTML = target + suf; return; }
        let n = 0;
        const step = Math.max(1, Math.round(target / 55));
        const t = setInterval(() => {
          n += step;
          if (n >= target) { n = target; clearInterval(t); }
          el.innerHTML = n + suf;
        }, 24);
      }),
      { threshold: 0.5 }
    );
    countEls.forEach((el) => cio.observe(el));

    // bar fills
    const fills = document.querySelectorAll(".fill:not([data-done])");
    const bio = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.setAttribute("data-done", "1");
        e.target.style.width = e.target.dataset.w + "%";
        bio.unobserve(e.target);
      }),
      { threshold: 0.5 }
    );
    fills.forEach((el) => bio.observe(el));

    return () => { cio.disconnect(); bio.disconnect(); };
  }, [pathname]);

  return null;
}
