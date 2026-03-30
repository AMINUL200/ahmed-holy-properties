import React, { useState, useEffect, useCallback } from 'react'
import {
  Wrench,
  HardHat,
  Building2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  Star,
  Shield,
  Clock,
  CheckCircle2,
} from 'lucide-react'

const slides = [
  {
    id: 1,
    badge: 'Trusted Since 2010',
    headline: 'Expert Property',
    highlight: 'Repair & Maintenance',
    subtext:
      'Swift, reliable fixes for your home or commercial space. We keep your property in perfect condition — always.',
    icon: Wrench,
    cta: 'Book a Repair',
    ctaSecondary: 'View Services',
    stat1: { value: '2,400+', label: 'Repairs Done' },
    stat2: { value: '98%', label: 'Client Satisfaction' },
    accent: '#2563EB',
    gradientFrom: '#0F172A',
    gradientTo: '#1E3A8A',
    pattern: 'repair',
  },
  {
    id: 2,
    badge: 'Premium Craftsmanship',
    headline: 'Renovation &',
    highlight: 'Remodeling Experts',
    subtext:
      'Transform your space with precision construction and creative design. From concept to completion, we build your vision.',
    icon: HardHat,
    cta: 'Start Renovation',
    ctaSecondary: 'See Portfolio',
    stat1: { value: '850+', label: 'Projects Built' },
    stat2: { value: '15+', label: 'Years Experience' },
    accent: '#38BDF8',
    gradientFrom: '#0F172A',
    gradientTo: '#0C4A6E',
    pattern: 'construction',
  },
  {
    id: 3,
    badge: 'Verified Listings',
    headline: 'Buy & Resell',
    highlight: 'Premium Properties',
    subtext:
      'Discover handpicked properties with maximum ROI potential. Our experts guide every step of your investment journey.',
    icon: Building2,
    cta: 'Explore Listings',
    ctaSecondary: 'Get Valuation',
    stat1: { value: '320+', label: 'Properties Sold' },
    stat2: { value: '₹480Cr+', label: 'Deals Closed' },
    accent: '#2563EB',
    gradientFrom: '#0F172A',
    gradientTo: '#1E3A8A',
    pattern: 'property',
  },
]

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: '24/7 Support' },
  { icon: Star, text: '4.9★ Rated' },
  { icon: CheckCircle2, text: 'Verified Experts' },
]

/* ── Decorative SVG backgrounds per slide ── */
const PatternRepair = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38BDF8" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#grid)" />
    <circle cx="650" cy="120" r="200" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
    <circle cx="650" cy="120" r="140" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
    <circle cx="650" cy="120" r="80" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
  </svg>
)

const PatternConstruction = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="diag" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#38BDF8" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#diag)" />
    <rect x="500" y="50" width="280" height="280" fill="none" stroke="#38BDF8" strokeWidth="0.6" />
    <rect x="520" y="70" width="240" height="240" fill="none" stroke="#38BDF8" strokeWidth="0.4" />
  </svg>
)

const PatternProperty = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="#38BDF8" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#dots)" />
    <polygon points="620,80 760,180 760,380 620,480 480,380 480,180" fill="none" stroke="#38BDF8" strokeWidth="0.6" />
  </svg>
)

const patterns = { repair: PatternRepair, construction: PatternConstruction, property: PatternProperty }

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  const goTo = useCallback(
    (index, dir = 'next') => {
      if (animating) return
      setDirection(dir)
      setAnimating(true)
      setTimeout(() => {
        setCurrent(index)
        setAnimating(false)
      }, 380)
    },
    [animating]
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev')
  }, [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]
  const SlideIcon = slide.icon
  const Pattern = patterns[slide.pattern]

  const slideStyle = {
    background: `linear-gradient(135deg, ${slide.gradientFrom} 0%, ${slide.gradientTo} 100%)`,
  }

  const animClass = animating
    ? direction === 'next'
      ? 'opacity-0 translate-x-8'
      : 'opacity-0 -translate-x-8'
    : 'opacity-100 translate-x-0'

  return (
    <section className="relative w-full overflow-hidden font-sans pt-20">
      {/* ── Main Slide ── */}
      <div
        className="relative min-h-[92vh] flex flex-col justify-center"
        style={slideStyle}
      >
        <Pattern />

        {/* Radial glow */}
        <div
          className="absolute right-0 top-0 w-[55%] h-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% 40%, ${slide.accent}22 0%, transparent 65%)`,
          }}
        />

        {/* Content */}
        <div
          className={`relative z-10 max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-20 grid lg:grid-cols-2 gap-12 items-center transition-all duration-[380ms] ease-out ${animClass}`}
        >
          {/* LEFT */}
          <div className="space-y-7">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
              style={{
                background: `${slide.accent}22`,
                color: slide.accent === '#38BDF8' ? '#38BDF8' : '#93C5FD',
                border: `1px solid ${slide.accent}44`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: slide.accent === '#38BDF8' ? '#38BDF8' : '#93C5FD' }}
              />
              {slide.badge}
            </span>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
                {slide.headline}
                <br />
                <span
                  className="block mt-1 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${slide.accent}, #93C5FD)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {slide.highlight}
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: '#94A3B8' }}>
              {slide.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
                style={{ background: `linear-gradient(135deg, ${slide.accent}, #1E3A8A)`, boxShadow: `0 4px 24px ${slide.accent}44` }}
              >
                {slide.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  border: '1px solid rgba(148,163,184,0.25)',
                  color: '#E2E8F0',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Phone size={15} />
                {slide.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-4 border-t border-white/10">
              {[slide.stat1, slide.stat2].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#64748B' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Icon Display */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Outer ring */}
              <div
                className="w-72 h-72 rounded-full flex items-center justify-center"
                style={{
                  border: `1px solid ${slide.accent}33`,
                  boxShadow: `0 0 80px ${slide.accent}22, inset 0 0 60px ${slide.accent}11`,
                }}
              >
                {/* Mid ring */}
                <div
                  className="w-52 h-52 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${slide.accent}18 0%, transparent 70%)`,
                    border: `1px solid ${slide.accent}44`,
                  }}
                >
                  {/* Core */}
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accent}33, ${slide.accent}11)`,
                      border: `1.5px solid ${slide.accent}66`,
                      boxShadow: `0 0 30px ${slide.accent}44`,
                    }}
                  >
                    <SlideIcon size={52} color={slide.accent === '#38BDF8' ? '#38BDF8' : '#60A5FA'} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div
                className="absolute -top-4 -right-6 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-xl"
                style={{ background: 'rgba(15,23,42,0.85)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
              >
                <span style={{ color: '#22C55E' }}>✓</span> &nbsp;Certified Experts
              </div>
              <div
                className="absolute -bottom-4 -left-6 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-xl"
                style={{ background: 'rgba(15,23,42,0.85)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
              >
                <span style={{ color: '#F59E0B' }}>★</span> &nbsp;Top Rated Service
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#E2E8F0' }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  background: i === current ? slide.accent : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#E2E8F0' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide counter */}
        <div
          className="absolute top-8 right-8 text-xs font-mono font-semibold hidden sm:block"
          style={{ color: 'rgba(148,163,184,0.5)' }}
        >
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

     
    </section>
  )
}