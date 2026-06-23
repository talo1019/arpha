// Centralised line-icon set. Stroke icons inherit currentColor.
const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Search = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Menu = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);

export const Users = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

/* unlock methods */
export const Face = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="9" r="4" /><path d="M5 20c0-3.3 3.1-5 7-5s7 1.7 7 5" /><path d="M9 9h.01M12 7v2.5M15 9h.01" /></svg>
);
export const Palm = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M9 2v6M12 2v7M15 3v6M6 8c-1 1-1 3 0 5l2 7h7l1-5c2-1 3-3 3-5s-2-2-3 0" /></svg>
);
export const Fingerprint = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 4c-3 0-5 2-5 5v2" /><path d="M12 7c-1.5 0-2.5 1-2.5 2.5V13c0 1-.3 2-.8 3" /><path d="M15.5 9.5V13c0 2 .6 3.8 1.7 5.2" /><path d="M12 11v3c0 1.5-.4 3-1.2 4.2" /></svg>
);
export const Keypad = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 11h.01M11 11h.01M15 11h.01M7 14h6" /></svg>
);
export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);
export const Nfc = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M5 9a14 14 0 0 1 14 0M8 12a9 9 0 0 1 8 0M11 15a4 4 0 0 1 2 0" /><circle cx="12" cy="18" r="1" /></svg>
);
export const LockClosed = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
);
export const Card = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="2" y="7" width="20" height="12" rx="2" /><circle cx="8" cy="13" r="2" /><path d="M14 11h5M14 15h5" /></svg>
);
export const Voice = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 3v18M8 8v8M16 8v8M4 11v2M20 11v2" /></svg>
);
export const Key = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="8" cy="8" r="4" /><path d="M11 11l8 8M16 16l2-2M19 13l1.5 1.5" /></svg>
);

/* standards / trust */
export const ShieldCheck = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Weather = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 2v6M12 22a8 8 0 0 0 8-8c0-3-2-5-4-7M12 22a8 8 0 0 1-8-8c0-3 2-5 4-7" /><circle cx="12" cy="14" r="2" /></svg>
);
export const Lock2fa = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
);
export const Doc = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" /><path d="M14 2v5h5M9 13h6M9 17h4" /></svg>
);
export const Clock = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Headset = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 13a8 8 0 0 1 16 0M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Zm16 0v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" /></svg>
);
export const Globe = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" /></svg>
);
export const Camera = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></svg>
);
export const Bell = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M10.5 21a1.5 1.5 0 0 0 3 0" /></svg>
);
export const Battery = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="8" width="16" height="9" rx="2" /><path d="M21 11v3M7 11v3M11 11v3" /></svg>
);
export const Chime = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M5 17h14M12 4a4 4 0 0 0-4 4v6h8V8a4 4 0 0 0-4-4Z" /><path d="M11 20h2" /></svg>
);
export const Wrench = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.4L3 17.3 6.7 21l6.9-6.9A3.5 3.5 0 0 0 18 9.5L15.5 12 12 8.5 14.5 6Z" /></svg>
);
export const Plug = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6" /></svg>
);
export const Book = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2V5Z" /><path d="M4 17h15" /></svg>
);
export const Wifi = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M5 9a14 14 0 0 1 14 0M8 12a9 9 0 0 1 8 0M11 15a4 4 0 0 1 2 0" /><circle cx="12" cy="18" r="1" /></svg>
);
export const Display = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M9 21h6M12 17v4" /></svg>
);
export const Bolt = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>
);

/* social */
export const X = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18 2h3l-7 8 8 12h-6l-5-6-5 6H-1l8-9L-1 2h7l4 6 7-6z" transform="translate(1)" /></svg>
);
export const Facebook = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H18V.2C17.6.1 16.4 0 15 0c-2.7 0-4.5 1.6-4.5 4.6V6H8v3h2.5v9H14z" /></svg>
);
export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const YouTube = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M23 12s0-3.5-.4-5c-.3-1-1-1.8-2-2C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.6.5c-1 .2-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5c.3 1 1 1.8 2 2 1.8.5 8.6.5 8.6.5s6.8 0 8.6-.5c1-.2 1.7-1 2-2 .4-1.5.4-5 .4-5zM10 15.5v-7l6 3.5z" /></svg>
);
