'use client'
import { useState } from 'react'
import * as Icons from '@/components/Icons'

const ICON_NAMES = ['Face', 'Palm', 'Fingerprint', 'Keypad', 'Phone', 'Nfc', 'Card', 'Voice', 'Key']

const IMAGES = [
  '/products/h10.jpg',     // 3D Face
  '/products/h10.jpg',     // Palm Vein
  '/products/df360.jpg',   // Fingerprint
  '/products/L600.png',    // Passcode
  '/products/df360.jpg',   // App & Remote
  '/products/df360.jpg',   // NFC & Tap
  '/products/SF302.png',   // IC Card
  '/products/SF302.png',   // Voice
  '/products/df360.jpg',   // Backup Key
]

export default function UnlockShowcase({ items }) {
  const [active, setActive] = useState(0)

  return (
    <div className="unlock-showcase">
      <div className="us-img-panel">
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className={`us-img${active === i ? ' vis' : ''}`}
          />
        ))}
      </div>
      <div className="us-list">
        {items.map((item, i) => {
          const Icon = Icons[ICON_NAMES[i]]
          const n = String(i + 1).padStart(2, '0')
          return (
            <div
              key={n}
              className={`us-row${active === i ? ' active' : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              <span className="us-n">{n}</span>
              {Icon && <div className="us-ico"><Icon /></div>}
              <div className="us-text">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
