// Hero feature: a wide lifestyle shot of an Arpha smart lock + video doorbell
// at a home entrance, with floating biometric callout tags.
export default function HeroLock() {
  return (
    <div className="lockstage scene">
      <div className="lock-glow" />
      <div className="hero-scene">
        <img
          className="hero-scene-photo"
          src="/products/hero-entry.jpg"
          alt="Arpha smart lock and video doorbell installed at a home entrance"
        />
      </div>
      <div className="lock-tag two"><span>RECOGNISES YOU IN</span><b>0.5 seconds</b></div>
      <div className="lock-tag"><span>WAYS TO UNLOCK</span><b>Face · Palm · Code</b></div>
    </div>
  );
}
