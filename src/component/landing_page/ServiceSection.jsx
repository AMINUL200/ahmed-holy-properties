import React, { useState } from 'react'
import {
  Wrench,
  HardHat,
  Building2,
  Droplets,
  Zap,
  Hammer,
  Sofa,
  PaintBucket,
  Ruler,
  BrickWall,
  Layers,
  Home,
  TrendingUp,
  FileSearch,
  Handshake,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'

const services = [
  {
    id: 'repair',
    icon: Wrench,
    tag: '01',
    title: 'Property Repair & Maintenance',
    shortTitle: 'Repair & Maintenance',
    description:
      'Quick and reliable repair services for your home and property. We handle every issue with precision and speed — so your space stays safe, functional, and beautiful year-round.',
    accent: '#2563EB',
    accentSoft: '#EFF6FF',
    accentBorder: '#BFDBFE',
    items: [
      { icon: Droplets, label: 'Plumbing Services', detail: 'Leak fixes, pipe installation & drainage' },
      { icon: Zap, label: 'Electrical Fixes', detail: 'Wiring, panels, switches & safety checks' },
      { icon: Hammer, label: 'Carpentry Work', detail: 'Custom woodwork, doors & frames' },
      { icon: Sofa, label: 'Furniture Installation', detail: 'Assembly, mounting & repositioning' },
      { icon: PaintBucket, label: 'Painting & Maintenance', detail: 'Interior, exterior & touch-ups' },
    ],
  },
  {
    id: 'renovation',
    icon: HardHat,
    tag: '02',
    title: 'Renovation, Remodeling & Construction',
    shortTitle: 'Renovation & Construction',
    description:
      'Transform your space from the ground up. Our expert builders and designers craft stunning renovations tailored to your vision — on time, on budget, and built to last.',
    accent: '#0EA5E9',
    accentSoft: '#F0F9FF',
    accentBorder: '#BAE6FD',
    items: [
      { icon: Ruler, label: 'Interior Remodeling', detail: 'Full room redesign & space planning' },
      { icon: BrickWall, label: 'Structural Construction', detail: 'Foundations, walls & extensions' },
      { icon: Layers, label: 'Flooring & Tiling', detail: 'Premium materials & expert fitting' },
      { icon: PaintBucket, label: 'False Ceiling & Décor', detail: 'Gypsum, POP & designer finishes' },
      { icon: Home, label: 'Kitchen & Bath Remodel', detail: 'Modern upgrades & fixture fitting' },
    ],
  },
  {
    id: 'property',
    icon: Building2,
    tag: '03',
    title: 'Buy & Resell Properties',
    shortTitle: 'Buy & Resell',
    description:
      'Discover premium properties with maximum ROI potential. From verified listings to seamless transactions, our property experts guide every step of your investment journey.',
    accent: '#1E3A8A',
    accentSoft: '#EFF6FF',
    accentBorder: '#BFDBFE',
    items: [
      { icon: FileSearch, label: 'Property Listings', detail: 'Verified homes, plots & commercial' },
      { icon: TrendingUp, label: 'Investment Advisory', detail: 'ROI analysis & market insights' },
      { icon: Home, label: 'Site Visits & Tours', detail: 'Scheduled walkthroughs & inspections' },
      { icon: Handshake, label: 'Legal Assistance', detail: 'Documentation, title & registration' },
      { icon: Building2, label: 'Resale & Valuation', detail: 'Fair pricing & buyer matching' },
    ],
  },
]

function ServiceCard({ service, isActive, onClick }) {
  const Icon = service.icon
  return (
    <button
      onClick={onClick}
      className="w-full text-left group transition-all duration-300 focus:outline-none"
    >
      <div
        className="relative rounded-2xl p-6 border transition-all duration-300"
        style={{
          background: isActive ? service.accentSoft : '#FFFFFF',
          borderColor: isActive ? service.accent : '#E2E8F0',
          boxShadow: isActive
            ? `0 8px 32px ${service.accent}22`
            : '0 2px 8px rgba(15,23,42,0.06)',
          transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Tag */}
        <span
          className="absolute top-4 right-5 text-xs font-mono font-bold tracking-widest"
          style={{ color: isActive ? service.accent : '#CBD5E1' }}
        >
          {service.tag}
        </span>

        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              background: isActive ? service.accent : '#F1F5F9',
            }}
          >
            <Icon size={22} color={isActive ? '#FFFFFF' : '#64748B'} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <h3
              className="font-bold text-base leading-snug transition-colors duration-200"
              style={{ color: isActive ? service.accent : '#0F172A' }}
            >
              {service.shortTitle}
            </h3>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: '#64748B' }}>
              {service.description.slice(0, 72)}…
            </p>
          </div>
        </div>

        {/* Active bar */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-all duration-300"
          style={{
            height: isActive ? '60%' : '0%',
            background: service.accent,
          }}
        />
      </div>
    </button>
  )
}

function FeatureItem({ icon: Icon, label, detail, accent }) {
  return (
    <div className="flex items-start gap-3 group">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-105"
        style={{ background: `${accent}18`, border: `1px solid ${accent}33` }}
      >
        <Icon size={16} style={{ color: accent }} strokeWidth={1.8} />
      </div>
      <div>
        <p className="font-semibold text-sm" style={{ color: '#0F172A' }}>
          {label}
        </p>
        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#64748B' }}>
          {detail}
        </p>
      </div>
      <CheckCircle2
        size={14}
        className="ml-auto mt-1 flex-shrink-0 opacity-60"
        style={{ color: accent }}
      />
    </div>
  )
}

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const service = services[active]
  const MainIcon = service.icon

  return (
    <section
      className="w-full py-20 sm:py-16"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: '#EFF6FF',
              color: '#2563EB',
              border: '1px solid #BFDBFE',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight" style={{ color: '#0F172A' }}>
            Our Core{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-base mt-4 leading-relaxed" style={{ color: '#64748B' }}>
            From emergency repairs to full-scale construction and smart property investments — Ahmed Holy Properties is your single trusted partner.
          </p>
        </div>

        {/* ── Layout ── */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">

          {/* LEFT — Service Tabs */}
          <div className="flex flex-col gap-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.id}
                service={s}
                isActive={active === i}
                onClick={() => setActive(i)}
              />
            ))}

            {/* CTA Card */}
            <div
              className="rounded-2xl p-5 mt-1"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
              }}
            >
              <p className="text-white font-bold text-sm">Need a custom quote?</p>
              <p className="text-[#93C5FD] text-xs mt-1 leading-relaxed">
                Get a free consultation from our experts within 24 hours.
              </p>
              <button className="mt-3 flex items-center gap-1.5 text-xs font-bold text-white group">
                Contact Us Now
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT — Detail Panel */}
          <div
            key={service.id}
            className="rounded-3xl overflow-hidden border transition-all duration-500"
            style={{
              background: '#FFFFFF',
              borderColor: service.accentBorder,
              boxShadow: `0 16px 48px ${service.accent}18`,
            }}
          >
            {/* Panel Header */}
            <div
              className="relative px-8 pt-10 pb-8 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${service.accent}0a 0%, ${service.accent}18 100%)`,
                borderBottom: `1px solid ${service.accentBorder}`,
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-10"
                style={{ background: service.accent }}
              />
              <div
                className="absolute -right-2 top-8 w-20 h-20 rounded-full opacity-10"
                style={{ background: service.accent }}
              />

              <div className="relative flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}, ${service.accent}cc)`,
                    boxShadow: `0 8px 24px ${service.accent}44`,
                  }}
                >
                  <MainIcon size={30} color="#FFFFFF" strokeWidth={1.6} />
                </div>
                <div>
                  <span
                    className="text-xs font-mono font-bold tracking-widest"
                    style={{ color: service.accent }}
                  >
                    SERVICE {service.tag}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-extrabold mt-0.5 leading-snug"
                    style={{ color: '#0F172A' }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed" style={{ color: '#334155' }}>
                {service.description}
              </p>
            </div>

            {/* Feature List */}
            <div className="px-8 py-8">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: service.accent }}
              >
                What's Included
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.items.map((item) => (
                  <FeatureItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    detail={item.detail}
                    accent={service.accent}
                  />
                ))}
              </div>
            </div>

            {/* Panel Footer */}
            <div
              className="px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ borderTop: `1px solid ${service.accentBorder}`, background: service.accentSoft }}
            >
              <p className="text-xs" style={{ color: '#64748B' }}>
                All services include a <strong style={{ color: '#0F172A' }}>free consultation</strong> and{' '}
                <strong style={{ color: '#0F172A' }}>satisfaction guarantee</strong>.
              </p>
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
                style={{
                  background: `linear-gradient(135deg, ${service.accent}, #1E3A8A)`,
                  boxShadow: `0 4px 16px ${service.accent}44`,
                }}
              >
                Book This Service
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}