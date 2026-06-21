import LocaleLink from "@/components/LocaleLink";
import DeviceVisual from "./DeviceVisual";

export default function ProductCard({ p, localized }) {
  const tagline = localized?.tagline || p.tagline;
  const feature = localized?.feature || p.feature;
  return (
    <LocaleLink href={`/products/${p.slug}`} className="card reveal">
      <div className={`ph${p.image && !p.imageLight ? " has-photo" : ""}`}>
        {p.badge && <span className={`badge${p.badgeAlt ? " alt" : ""}`}>{p.badge}</span>}
        {p.image
          ? <img className={`prod-photo${p.imageFill ? " fill" : ""}`} src={p.image} alt={`${p.name} ${p.model}`} loading="lazy" style={p.imageStyle || undefined} />
          : <DeviceVisual type={p.deviceType} />}
      </div>
      <div className="body">
        <div className="cat">{p.category}{p.sub ? ` · ${p.sub}` : ""}</div>
        <h3>{p.name}{p.model && p.name !== p.model ? ` ${p.model}` : ""}</h3>
        <p className="desc">{tagline}</p>
        <div className="feat">
          {feature.slice(0, 3).map((f) => (
            <span className="chip" key={f}>{f}</span>
          ))}
        </div>
        {p.price && (
          <div className="price">${p.price}{p.was && <s>${p.was}</s>}</div>
        )}
      </div>
    </LocaleLink>
  );
}
