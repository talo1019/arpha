// CSS-rendered device silhouette. Swap for real <img> product photography later.
export default function DeviceVisual({ type = "lock", big = false }) {
  const cls = `device dev-${type}${big ? " big" : ""}`;
  if (type === "cam") {
    return (
      <div className={cls}>
        <div className="head" />
        <div className="base" />
      </div>
    );
  }
  return <div className={cls} />;
}
