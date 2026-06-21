'use client'
import { useState, useRef } from 'react'

const IMAGES = [
  '/products/Kidspalm.jpg',   // Families
  '/products/luggage.png',    // Renters & hosts
  '/products/duress4.png',    // Homes
  '/products/manage.jpg',     // Business
  '/products/h10.jpg',        // Apartments
  '/products/m660.jpg',       // Drivers
]

export default function UsesShowcase({ items }) {
  const [active, setActive] = useState(0)  // desktop hover
  const [slide, setSlide] = useState(0)    // mobile current index
  const touchX = useRef(null)

  const goTo = (i) => setSlide(Math.max(0, Math.min(items.length - 1, i)))

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const diff = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(slide + (diff > 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <div className="uses-showcase">
      {/* Mobile JS slider */}
      <div className="uss-mobile-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="uss-mobile-track" style={{ transform: `translateX(${-slide * 100}%)` }}>
          {items.map((item, i) => (
            <div key={i} className="uss-slide">
              <div className="uss-slide-img">
                <img src={IMAGES[i]} alt="" aria-hidden="true" />
              </div>
              <div className="uss-slide-text">
                <span className="uss-tag">{item.tag}</span>
                <div className="uss-text">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="uss-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`uss-dot${slide === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop list + image panel */}
      <div className="uss-list">
        {items.map((item, i) => (
          <div
            key={i}
            className={`uss-row${active === i ? ' active' : ''}`}
            onMouseEnter={() => setActive(i)}
          >
            <span className="uss-tag">{item.tag}</span>
            <div className="uss-text">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="uss-img-panel">
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className={`uss-img${active === i ? ' vis' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
