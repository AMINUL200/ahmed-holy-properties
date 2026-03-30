import React, { useState } from 'react'
import {
  ShieldCheck,
  Users,
  Trophy,
  Clock,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Building2,
} from 'lucide-react'

const stats = [
  { icon: Trophy, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '3,200+', label: 'Happy Clients' },
  { icon: Building2, value: '850+', label: 'Projects Completed' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
]

const pillars = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully certified professionals you can trust.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your time and keep every deadline.' },
  { icon: MapPin, title: 'Local Expertise', desc: 'Deep knowledge of regional property markets.' },
]

const highlights = [
  'Transparent pricing with no hidden charges',
  'Dedicated project manager for every client',
  'End-to-end service from planning to handover',
  'Post-service support & maintenance warranty',
]

export default function AboutSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="w-full py-16 sm:py-16 overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Section Badge ── */}
        <div className="flex justify-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            Who We Are
          </span>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Visual Block */}
          <div className="relative">

            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #38BDF8 100%)',
                boxShadow: '0 24px 64px rgba(37,99,235,0.3)',
                minHeight: 420,
              }}
            >
              {/* SVG pattern overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="about-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#fff" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="500" height="420" fill="url(#about-grid)" />
                <circle cx="400" cy="80" r="180" fill="none" stroke="#fff" strokeWidth="0.6" />
                <circle cx="400" cy="80" r="110" fill="none" stroke="#fff" strokeWidth="0.4" />
              </svg>

              {/* Radial glow */}
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(56,189,248,0.25) 0%, transparent 60%)' }} />

              {/* Content inside card */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between" style={{ minHeight: 420 }}>

                {/* Logo/Brand text */}
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#93C5FD]">Ahmed Holy Properties</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-snug">
                    Building Trust,<br />One Property at a Time
                  </h3>
                </div>

                {/* Pillars */}
                <div className="mt-8 space-y-4">
                  {pillars.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <Icon size={16} color="#fff" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="text-xs text-[#93C5FD] mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <p className="text-xs text-[#7DD3FC]">Serving clients since <strong className="text-white">2010</strong> · Trusted across the region</p>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 grid grid-cols-2 gap-3 z-20"
              style={{ width: 'min(260px, 55%)' }}
            >
              {stats.slice(0, 2).map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-4 text-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 24px rgba(37,99,235,0.12)',
                  }}
                >
                  <Icon size={18} className="mx-auto mb-1.5" style={{ color: '#2563EB' }} strokeWidth={1.8} />
                  <p className="text-lg font-extrabold" style={{ color: '#0F172A' }}>{value}</p>
                  <p className="text-[10px] font-medium leading-snug mt-0.5" style={{ color: '#64748B' }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Top-left accent dot */}
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)' }}
            />
          </div>

          {/* RIGHT — Text Block */}
          <div className="space-y-8 lg:pl-4">

            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: '#0F172A' }}>
                About{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ahmed Holy
                </span>
                <br />Properties
              </h2>
              <div className="mt-4 w-14 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8)' }} />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#334155' }}>
              Ahmed Holy Properties is your trusted partner for complete property solutions. From quick repairs to full renovations and property buying or selling, we deliver{' '}
              <strong style={{ color: '#0F172A' }}>reliable, affordable, and professional services</strong>{' '}
              tailored to your needs.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
              With over 15 years of hands-on experience, our certified team combines technical expertise with a client-first approach — ensuring every project is completed to the highest standard, every single time.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0" style={{ color: '#2563EB' }} strokeWidth={2} />
                  <p className="text-sm font-medium" style={{ color: '#334155' }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Bottom stats row */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.slice(2).map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl px-5 py-4 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#2563EB' }}>
                    <Icon size={18} color="#fff" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold" style={{ color: '#0F172A' }}>{value}</p>
                    <p className="text-xs font-medium" style={{ color: '#64748B' }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #1E3A8A)',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                }}
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  border: '1.5px solid #BFDBFE',
                  color: '#2563EB',
                  background: '#EFF6FF',
                }}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}