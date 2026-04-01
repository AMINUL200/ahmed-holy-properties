import React, { useState } from 'react'
import {
  Home,
  ChevronRight,
  Wrench,
  HardHat,
  Building2,
  Target,
  Eye,
  Users,
  DollarSign,
  Clock,
  Layers,
  Heart,
  Star,
  Trophy,
  TrendingUp,
  ArrowRight,
  Phone,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award,
} from 'lucide-react'
import PageHelmet from '../../component/common/PageHelmet'
import PageLoading from '../../component/common/PageLoading'

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  {
    icon: Wrench,
    tag: '01',
    title: 'Property Repair & Maintenance',
    desc: 'Quick fixes and maintenance services for homes and offices — plumbing, electrical, carpentry & more.',
    accent: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    icon: HardHat,
    tag: '02',
    title: 'Renovation & Construction',
    desc: 'Transform your space with modern, efficient construction solutions tailored to your vision.',
    accent: '#0EA5E9',
    bg: '#F0F9FF',
    border: '#BAE6FD',
  },
  {
    icon: Building2,
    tag: '03',
    title: 'Buy & Resell Properties',
    desc: 'Helping clients buy, sell, and invest in the right properties with verified listings & expert guidance.',
    accent: '#1E3A8A',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
]

const whyUs = [
  { icon: Award, title: 'Experienced Team', desc: 'Professional and skilled experts in every field with 15+ years of hands-on experience.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Budget-friendly solutions with transparent costs and absolutely no hidden charges.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your time and deliver every project on schedule without compromise.' },
  { icon: Layers, title: 'Complete Solutions', desc: 'All property services under one trusted roof — repair, renovation, and real estate.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: 'We focus on quality, care, and building long-term relationships with every client.' },
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully certified, background-checked professionals you can trust in your space.' },
]

const stats = [
  { icon: Trophy, value: '500+', label: 'Projects Completed', color: '#2563EB' },
  { icon: Users, value: '300+', label: 'Happy Clients', color: '#0EA5E9' },
  { icon: Star, value: '4.9★', label: 'Average Rating', color: '#F59E0B' },
  { icon: TrendingUp, value: '15+', label: 'Years Experience', color: '#22C55E' },
]

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */
function SectionBadge({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
      style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
      {children}
    </span>
  )
}

function GradientText({ children }) {
  return (
    <span
      style={{
        background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}

/* ─────────────────────────────────────────
   SECTIONS
───────────────────────────────────────── */

/* 1 ── HERO */
function HeroBlock() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #2563EB 100%)' }}
    >
      {/* SVG pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#hero-grid)" />
        <circle cx="700" cy="100" r="220" fill="none" stroke="#fff" strokeWidth="0.5" />
        <circle cx="700" cy="100" r="140" fill="none" stroke="#fff" strokeWidth="0.4" />
      </svg>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(56,189,248,0.18) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 text-xs font-medium mb-6" style={{ color: '#93C5FD' }}>
          <Home size={13} />
          <span>Home</span>
          <ChevronRight size={12} />
          <span className="text-white font-semibold">About</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          About <span style={{ background: 'linear-gradient(90deg,#38BDF8,#93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Us</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
          Your trusted partner for property repair, renovation, and real estate solutions — built on integrity, craftsmanship, and care.
        </p>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 rounded-full" style={{ background: 'rgba(148,163,184,0.3)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#38BDF8' }} />
          <div className="h-px w-16 rounded-full" style={{ background: 'rgba(148,163,184,0.3)' }} />
        </div>
      </div>
    </section>
  )
}

/* 2 ── COMPANY INTRO */
function CompanyIntro() {
  const points = [
    'Repair, renovation, and real estate under one roof',
    'Transparent pricing with zero hidden costs',
    'Certified professionals with 15+ years experience',
    'Post-project support and satisfaction guarantee',
  ]

  return (
    <section className="w-full py-20 sm:py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — visual card */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #38BDF8 100%)',
                minHeight: 400,
                boxShadow: '0 24px 64px rgba(37,99,235,0.28)',
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="intro-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#fff" />
                  </pattern>
                </defs>
                <rect width="500" height="400" fill="url(#intro-dots)" />
              </svg>
              <div className="relative z-10 p-10 flex flex-col h-full justify-between" style={{ minHeight: 400 }}>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#93C5FD]">Est. 2010</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 leading-snug">
                    A Decade of Trust<br />& Excellence
                  </h3>
                  <p className="mt-3 text-sm text-[#93C5FD] leading-relaxed max-w-xs">
                    From a small repair team to a full-service property company — our journey is built on hard work and client trust.
                  </p>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 mt-10">
                  {[['500+', 'Projects'], ['300+', 'Clients'], ['15+', 'Years']].map(([v, l]) => (
                    <div key={l} className="text-center p-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <p className="text-xl font-extrabold text-white">{v}</p>
                      <p className="text-[10px] text-[#93C5FD] mt-0.5 font-medium">{l}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <p className="text-xs text-[#7DD3FC]">Serving communities across the region with integrity.</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-4 sm:-right-6 px-5 py-3 rounded-2xl"
              style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(37,99,235,0.14)' }}
            >
              <div className="flex items-center gap-2">
                <Zap size={16} style={{ color: '#2563EB' }} />
                <p className="text-xs font-bold" style={{ color: '#0F172A' }}>Fast & Reliable Service</p>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="space-y-7 lg:pl-4">
            <div>
              <SectionBadge>Who We Are</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 leading-tight tracking-tight" style={{ color: '#0F172A' }}>
                Ahmed Holy <GradientText>Properties</GradientText>
              </h2>
              <div className="mt-3 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563EB,#38BDF8)' }} />
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: '#334155' }}>
              <p>
                Ahmed Holy Properties is a <strong style={{ color: '#0F172A' }}>professional property service company</strong> dedicated to delivering high-quality solutions for homes and commercial spaces.
              </p>
              <p>
                We specialize in repair, renovation, and property buying & selling services — ensuring reliability, affordability, and customer satisfaction in every project we undertake.
              </p>
              <p style={{ color: '#64748B' }}>
                Our goal is to make property management <strong style={{ color: '#334155' }}>simple, efficient, and stress-free</strong> for every single client we work with.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {points.map(p => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#2563EB' }} strokeWidth={2} />
                  <p className="text-sm font-medium" style={{ color: '#334155' }}>{p}</p>
                </div>
              ))}
            </div>

            <button
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg,#2563EB,#1E3A8A)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}
            >
              Learn More About Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 3 ── MISSION SECTION (Image Right, Content Left) */
function MissionSection() {
  const missionPoints = [
    'Deliver exceptional quality in every project',
    'Ensure complete customer satisfaction',
    'Maintain transparent and fair pricing',
    'Use eco-friendly and sustainable materials',
    'Provide timely and reliable service',
  ]

  return (
    <section className="w-full py-20 sm:py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div>
              <SectionBadge>Our Purpose</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 leading-tight tracking-tight" style={{ color: '#0F172A' }}>
                Our <GradientText>Mission</GradientText>
              </h2>
              <div className="mt-3 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563EB,#38BDF8)' }} />
            </div>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#334155' }}>
              To deliver excellence in every property solution we provide, ensuring our clients experience 
              unmatched quality, reliability, and peace of mind throughout their journey with us.
            </p>

            <div className="space-y-4 pt-2">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 size={14} style={{ color: '#2563EB' }} strokeWidth={2} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#334155' }}>{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="p-5 rounded-2xl" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                <p className="text-sm italic" style={{ color: '#1E3A8A' }}>
                  "Our mission is to transform properties into dream spaces while maintaining the highest 
                  standards of integrity and professionalism."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Our Mission - Professional construction team"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/40 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Target size={16} style={{ color: '#2563EB' }} />
                  <p className="text-xs font-bold" style={{ color: '#0F172A' }}>Quality First Approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 4 ── VISION SECTION (Image Left, Content Right) */
function VisionSection() {
  const visionPoints = [
    'Become the most trusted property service provider in the region',
    'Set new standards for quality and customer satisfaction',
    'Innovate and evolve with modern construction technologies',
    'Create lasting relationships with every client we serve',
    'Contribute to building better, sustainable communities',
  ]

  return (
    <section className="w-full py-20 sm:py-28" style={{ background: '#EFF6FF' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - Image */}
          <div className="relative group order-1 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Our Vision - Modern city development"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#0F172A]/40 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Eye size={16} style={{ color: '#2563EB' }} />
                  <p className="text-xs font-bold" style={{ color: '#0F172A' }}>Vision 2030</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-2 lg:order-2">
            <div>
              <SectionBadge>Our Future</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 leading-tight tracking-tight" style={{ color: '#0F172A' }}>
                Our <GradientText>Vision</GradientText>
              </h2>
              <div className="mt-3 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563EB,#38BDF8)' }} />
            </div>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#334155' }}>
              To become the most trusted and innovative property solutions provider, setting new benchmarks 
              for quality, reliability, and customer satisfaction across the industry.
            </p>

            <div className="space-y-4 pt-2">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 size={14} style={{ color: '#2563EB' }} strokeWidth={2} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#334155' }}>{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)', border: '1px solid #BFDBFE' }}>
                <p className="text-sm italic" style={{ color: '#1E3A8A' }}>
                  "Our vision is to build not just properties, but lasting relationships and communities 
                  that thrive for generations to come."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 5 ── SERVICES OVERVIEW */
function ServicesOverview() {
  return (
    <section className="w-full py-20 sm:py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight" style={{ color: '#0F172A' }}>
            Our Core <GradientText>Services</GradientText>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Three powerful service pillars designed to cover every property need you have.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, tag, title, desc, accent, bg, border }) => (
            <div
              key={tag}
              className="group relative rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ background: '#fff', borderColor: border, boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 40px ${accent}22` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,23,42,0.06)' }}
            >
              <span className="absolute top-5 right-5 text-xs font-mono font-bold" style={{ color: '#CBD5E1' }}>{tag}</span>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105" style={{ background: bg, border: `1.5px solid ${border}` }}>
                <Icon size={24} style={{ color: accent }} strokeWidth={1.8} />
              </div>

              <h3 className="font-extrabold text-base leading-snug mb-2" style={{ color: '#0F172A' }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748B' }}>{desc}</p>

              <button
                className="flex items-center gap-1.5 text-xs font-bold group/btn transition-colors"
                style={{ color: accent }}
              >
                View Services
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 6 ── WHY CHOOSE US */
function WhyChooseUs() {
  return (
    <section className="w-full py-20 sm:py-28" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <SectionBadge>Our Advantage</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight" style={{ color: '#0F172A' }}>
            Why Choose <GradientText>Ahmed Holy Properties</GradientText>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            We combine expertise, affordability, and care to give you the best property experience possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group rounded-2xl p-6 border bg-white transition-all duration-300 hover:-translate-y-1.5 cursor-default"
              style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,0.12)'; e.currentTarget.style.borderColor = '#BFDBFE' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.05)'; e.currentTarget.style.borderColor = '#E2E8F0' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105" style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE' }}>
                  <Icon size={20} style={{ color: '#2563EB' }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: '#0F172A' }}>{title}</h3>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 7 ── STATS */
function StatsSection() {
  return (
    <section className="w-full py-16"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #2563EB 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="text-center group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}22`, border: `1.5px solid ${color}44` }}
              >
                <Icon size={22} style={{ color }} strokeWidth={1.8} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white">{value}</p>
              <p className="text-xs sm:text-sm font-medium mt-1" style={{ color: '#94A3B8' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 8 ── CTA */
function CTASection() {
  return (
    <section className="w-full py-20 sm:py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <SectionBadge>Get Started Today</SectionBadge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight tracking-tight" style={{ color: '#0F172A' }}>
          Ready to Work <GradientText>With Us?</GradientText>
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: '#64748B' }}>
          Contact us today and let's make your property better — fast, affordable, and stress-free.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <button
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-[1.04] hover:shadow-2xl active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg,#2563EB,#1E3A8A)', boxShadow: '0 6px 24px rgba(37,99,235,0.35)' }}
          >
            <FileText size={16} />
            Get a Quote
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.04] active:scale-[0.98]"
            style={{ border: '1.5px solid #BFDBFE', color: '#2563EB', background: '#EFF6FF' }}
          >
            <Phone size={16} />
            Contact Us
          </button>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8" style={{ borderTop: '1px solid #E2E8F0' }}>
          {['Free Consultation', 'No Hidden Fees', '24/7 Support', 'Satisfaction Guaranteed'].map(t => (
            <div key={t} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#64748B' }}>
              <CheckCircle2 size={13} style={{ color: '#22C55E' }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function AboutPage() {
    const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time (e.g., fetching data or assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


if(loading){
  return <PageLoading/>
}
  return (
    <>
      <PageHelmet title="About Us | Ahmed Holy Properties - Trusted Property Services" />
      <main className="w-full font-sans">
        <HeroBlock />
        <CompanyIntro />
        <MissionSection />
        <VisionSection />
        <ServicesOverview />
        <WhyChooseUs />
        <StatsSection />
        <CTASection />
      </main>
    </>
  )
}