import React, { useState, useEffect, useRef } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Wrench, Home, Building2 } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'Excellent service! The team fixed my plumbing issue quickly and professionally. I was amazed by how efficiently they handled everything — will definitely call them again.',
    name: 'Rahim Ahmed',
    role: 'Homeowner',
    rating: 5,
    service: 'Repair & Maintenance',
    icon: Wrench,
    initials: 'RA',
    color: '#2563EB',
  },
  {
    id: 2,
    text: 'Very reliable and affordable. Highly recommended for home renovation. The team was transparent with pricing and delivered beyond expectations on schedule.',
    name: 'Suman Das',
    role: 'Property Owner',
    rating: 5,
    service: 'Renovation & Remodeling',
    icon: Home,
    initials: 'SD',
    color: '#0EA5E9',
  },
  {
    id: 3,
    text: 'Smooth property buying experience. Great support from start to finish. Ahmed Holy Properties made what seemed complex feel effortless and stress-free.',
    name: 'Arif Khan',
    role: 'Property Buyer',
    rating: 5,
    service: 'Buy & Resell',
    icon: Building2,
    initials: 'AK',
    color: '#1E3A8A',
  },
]

const StarRow = ({ count = 5 }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
)

const TestimonialsSection = () => {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('right')
  const intervalRef = useRef(null)

  const goTo = (idx, dir = 'right') => {
    if (animating || idx === active) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 320)
  }

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length, 'left')
  const next = () => goTo((active + 1) % testimonials.length, 'right')

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [active])

  const t = testimonials[active]
  const ServiceIcon = t.icon

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .testi-section {
          font-family: 'DM Sans', sans-serif;
          background: var(--color-bg-soft, #EFF6FF);
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }

        .testi-section::before {
          content: '"';
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Sora', sans-serif;
          font-size: 320px;
          font-weight: 800;
          color: rgba(37,99,235,0.045);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .testi-inner {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .testi-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Sora', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-brand, #2563EB);
          margin-bottom: 14px;
        }
        .testi-eyebrow-line {
          width: 28px;
          height: 2px;
          background: var(--color-brand, #2563EB);
          border-radius: 2px;
        }
        .testi-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--color-text-primary, #0F172A);
          margin: 0 0 56px;
          line-height: 1.2;
        }
        .testi-title span {
          color: var(--color-brand, #2563EB);
        }

        /* Card */
        .testi-card {
          background: var(--color-white, #fff);
          border: 1px solid var(--color-border, #E2E8F0);
          border-radius: 24px;
          padding: 48px 52px;
          box-shadow: 0 20px 60px rgba(37,99,235,0.10);
          position: relative;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }

        .testi-card.slide-in-right  { animation: slideInRight 0.32s ease forwards; }
        .testi-card.slide-in-left   { animation: slideInLeft  0.32s ease forwards; }
        .testi-card.slide-out-right { animation: slideOutRight 0.32s ease forwards; }
        .testi-card.slide-out-left  { animation: slideOutLeft  0.32s ease forwards; }

        @keyframes slideInRight  { from { opacity:0; transform:translateX(40px)  } to { opacity:1; transform:translateX(0) } }
        @keyframes slideInLeft   { from { opacity:0; transform:translateX(-40px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(-40px) } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(40px)  } }

        .quote-icon-wrap {
          position: absolute;
          top: -22px;
          left: 48px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-brand, #2563EB);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 5px 12px;
          border-radius: 99px;
          border: 1px solid rgba(37,99,235,0.2);
          color: var(--color-brand, #2563EB);
          background: var(--color-bg-soft, #EFF6FF);
          margin-bottom: 24px;
        }

        .testi-quote {
          font-size: 1.08rem;
          color: var(--color-text-secondary, #334155);
          line-height: 1.8;
          margin: 0 0 32px;
          font-style: italic;
        }

        /* Avatar */
        .testi-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        .testi-name {
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text-primary, #0F172A);
          margin: 0 0 2px;
        }
        .testi-role {
          font-size: 0.82rem;
          color: var(--color-text-light, #64748B);
        }

        /* Controls */
        .testi-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 40px;
        }

        .ctrl-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--color-border, #E2E8F0);
          background: var(--color-white, #fff);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--color-text-secondary, #334155);
          transition: all 0.25s ease;
        }
        .ctrl-btn:hover {
          background: var(--color-brand, #2563EB);
          border-color: var(--color-brand, #2563EB);
          color: #fff;
          box-shadow: 0 6px 18px rgba(37,99,235,0.25);
          transform: scale(1.08);
        }

        .dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 99px;
          background: var(--color-border, #E2E8F0);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }
        .dot.dot-active {
          width: 28px;
          background: var(--color-brand, #2563EB);
        }

        /* Thumbnail strip */
        .testi-thumbs {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 36px;
        }
        .thumb {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 12px;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
        }
        .thumb.thumb-active {
          background: var(--color-white, #fff);
          border-color: var(--color-brand, #2563EB);
          box-shadow: 0 4px 14px rgba(37,99,235,0.12);
        }
        .thumb-name {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-secondary, #334155);
        }
        .thumb.thumb-active .thumb-name {
          color: var(--color-brand, #2563EB);
        }
        .thumb-initials {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .testi-card { padding: 40px 24px 32px; }
          .quote-icon-wrap { left: 24px; }
          .testi-thumbs { flex-direction: column; align-items: center; }
        }
      `}</style>

      <section className="testi-section" id="testimonials">
        <div className="testi-inner">

          {/* Header */}
          <div className="text-center">
            
             {/* ── Section Badge ── */}
            <div className="flex justify-center mb-14">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
                style={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  border: "1px solid #BFDBFE",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Testimonials
              </span>
            </div>
            <h2 className="testi-title">
              What Our <span>Customers</span> Say
            </h2>
          </div>

          {/* Card */}
          <div
            className={`testi-card ${animating ? `slide-out-${direction}` : `slide-in-${direction}`}`}
            key={t.id}
          >
            {/* Quote icon */}
            <div className="quote-icon-wrap">
              <Quote size={22} color="#fff" fill="#fff" />
            </div>

            {/* Service badge */}
            <div>
              <span className="service-badge">
                <ServiceIcon size={13} />
                {t.service}
              </span>
            </div>

            {/* Stars */}
            <div className="mb-5">
              <StarRow count={t.rating} />
            </div>

            {/* Quote text */}
            <p className="testi-quote">"{t.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="testi-avatar" style={{ backgroundColor: t.color }}>
                {t.initials}
              </div>
              <div>
                <p className="testi-name">{t.name}</p>
                <p className="testi-role">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="testi-controls">
            <button className="ctrl-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>

            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? 'dot-active' : ''}`}
                  onClick={() => goTo(i, i > active ? 'right' : 'left')}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button className="ctrl-btn" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="testi-thumbs">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                className={`thumb ${i === active ? 'thumb-active' : ''}`}
                onClick={() => goTo(i, i > active ? 'right' : 'left')}
              >
                <div className="thumb-initials" style={{ backgroundColor: item.color }}>
                  {item.initials}
                </div>
                <span className="thumb-name">{item.name}</span>
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default TestimonialsSection