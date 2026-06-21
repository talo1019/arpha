import LocaleLink from "@/components/LocaleLink";
import ProductCard from "@/components/ProductCard";
import { getCategoriesForLocale, getByCategory } from "@/lib/products";
import { getDictionary } from "@/lib/i18n";

export function generateMetadata({ params }) {
  const t = getDictionary(params.lang);
  return { title: t.products.meta.title, description: t.products.meta.description };
}

export default function ProductsPage({ params }) {
  const t = getDictionary(params.lang);
  const p = t.products;
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>{p.breadcrumb}</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>{p.eyebrow}</span>
          <h1>{p.heading}</h1>
          <p>{p.sub}</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {getCategoriesForLocale(params.lang).map((cat) => {
            const items = getByCategory(cat.key, params.lang);
            if (!items.length) return null;
            const catT = p.categories?.[cat.key] || cat;
            return (
              <div className="cat-block" key={cat.key} id={cat.key.toLowerCase().replace(/\s+/g, "-")}>
                <div className="cat-title reveal">
                  <div>
                    <h2>{catT.label}</h2>
                    <p style={{ color: "var(--muted)", marginTop: "6px", fontSize: ".95rem" }}>{catT.blurb}</p>
                  </div>
                  <span className="ct-meta">{items.length} {items.length === 1 ? p.model : p.models}</span>
                </div>
                <div className="prod-grid">
                  {items.map((item) => <ProductCard key={item.slug} p={item} localized={t.productContent?.[item.slug]} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
