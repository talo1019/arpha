'use client'
import { useState } from 'react'

const IMAGES = [
  '/products/Kidspalm.jpg',            // Families
  '/products/luggage.png',            // Renters & hosts
  '/products/duress4.png',            // Homes
  '/products/manage.jpg',             // Business
  '/products/h10.jpg',                // Apartments
  '/products/m660.jpg',               // Drivers
]

export default function UsesShowcase({ items }) {
  const [active, setActive] = useState(0)

  return (
    <div className="uses-showcase">
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
