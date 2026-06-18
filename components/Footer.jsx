import LocaleLink from "./LocaleLink";
import { Facebook, Instagram, YouTube } from "./Icons";

export default function Footer({ dict }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <LocaleLink href="/" className="brand" aria-label="Arpha home">
              <img className="brand-logo foot-logo" src="/logo-white.png" alt="Arpha" />
            </LocaleLink>
            <p>{dict.blurb}</p>
            <div className="foot-soc">
              <a href="https://www.facebook.com/thearphaofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
              <a href="https://www.instagram.com/arpha_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href="https://www.youtube.com/@Arpha_Official" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTube /></a>
            </div>
          </div>

          <div className="fcol">
            <h4>{dict.company.heading}</h4>
            <LocaleLink href="/about">{dict.company.about}</LocaleLink>
            <LocaleLink href="/products">{dict.company.products}</LocaleLink>
            <LocaleLink href="/plans">{dict.company.plans}</LocaleLink>
            <LocaleLink href="/accessories">{dict.company.accessories}</LocaleLink>
          </div>

          <div className="fcol">
            <h4>{dict.products.heading}</h4>
            <LocaleLink href="/products#smart-lock">{dict.products.locks}</LocaleLink>
            <LocaleLink href="/products#doorbell">{dict.products.doorbells}</LocaleLink>
            <LocaleLink href="/products#ip-camera">{dict.products.cameras}</LocaleLink>
            <LocaleLink href="/products#dash-cam">{dict.products.dashcams}</LocaleLink>
            <LocaleLink href="/accessories">{dict.products.accessories}</LocaleLink>
          </div>

          <div className="fcol">
            <h4>{dict.support.heading}</h4>
            <a href="https://support.arpha.com" target="_blank" rel="noopener noreferrer">{dict.support.help}</a>
            <LocaleLink href="/support">{dict.support.contact}</LocaleLink>
            <LocaleLink href="/support">{dict.support.partner}</LocaleLink>
          </div>

          <div className="fcol news">
            <h4>{dict.news.heading}</h4>
            <input type="email" placeholder={dict.news.placeholder} aria-label={dict.news.placeholder} />
            <button className="btn btn--bronze btn--block">{dict.news.subscribe}</button>
            <p style={{ fontSize: ".78rem", color: "#857b6b", marginTop: "12px" }}>
              {dict.news.note}
            </p>
          </div>
        </div>

        <div className="foot-bot">
          <p>{dict.copyright}</p>
          <div className="links">
            <LocaleLink href="/privacy">{dict.legal.privacy}</LocaleLink>
            <LocaleLink href="/terms">{dict.legal.terms}</LocaleLink>
            <LocaleLink href="/warranty">{dict.legal.shipping}</LocaleLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
