import React, { useEffect, useRef } from "react";

const reasons = [
  {
    id: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Trusted Professionals",
    desc: "Skilled and experienced team delivering quality work every time.",
  },
  {
    id: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden costs.",
  },
  {
    id: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast & Reliable Service",
    desc: "Quick response and on-time project completion.",
  },
  {
    id: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Complete Property Solutions",
    desc: "All services under one roof — repair, renovation, and property deals.",
  },
  {
    id: "05",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Customer Satisfaction",
    desc: "We prioritize client needs and ensure the best experience.",
  },
  {
    id: "06",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Quality Assurance",
    desc: "High-quality materials and professional standards in every project.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".reason-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("card-visible");
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        .wcu-section {
          font-family: 'DM Sans', sans-serif;
          background-color: var(--color-bg, #F8FAFC);
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
        }

        .wcu-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .wcu-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .wcu-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .wcu-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-brand, #2563EB);
          margin-bottom: 16px;
        }

        .wcu-eyebrow-line {
          width: 32px;
          height: 2px;
          background: var(--color-brand, #2563EB);
          border-radius: 2px;
        }

        .wcu-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: var(--color-text-primary, #0F172A);
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .wcu-title span {
          color: var(--color-brand, #2563EB);
          position: relative;
          display: inline-block;
        }

        // .wcu-title span::after {
        //   content: '';
        //   position: absolute;
        //   bottom: 2px;
        //   left: 0;
        //   width: 100%;
        //   height: 4px;
        //   background: linear-gradient(90deg, var(--color-brand, #2563EB), var(--color-brand-light, #38BDF8));
        //   border-radius: 2px;
        //   opacity: 0.35;
        // }

        .wcu-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-light, #64748B);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Grid */
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .wcu-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .wcu-grid { grid-template-columns: 1fr; }
          .wcu-section { padding: 72px 20px; }
        }

        /* Card */
        .reason-card {
          background: var(--color-white, #fff);
          border: 1px solid var(--color-border, #E2E8F0);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s;
        }

        .reason-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reason-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-brand, #2563EB), var(--color-brand-light, #38BDF8));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          border-radius: 16px 16px 0 0;
        }

        .reason-card:hover {
          border-color: rgba(37,99,235,0.25);
          box-shadow: 0 16px 40px rgba(37,99,235,0.12);
          transform: translateY(-4px);
        }

        .reason-card:hover::before {
          transform: scaleX(1);
        }

        .card-number {
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-brand-light, #38BDF8);
          margin-bottom: 20px;
          display: block;
        }

        .card-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: var(--color-bg-soft, #EFF6FF);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: var(--color-brand, #2563EB);
          transition: background 0.3s, color 0.3s, transform 0.3s;
        }

        .reason-card:hover .card-icon-wrap {
          background: var(--color-brand, #2563EB);
          color: #fff;
          transform: rotate(-6deg) scale(1.08);
        }

        .card-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-primary, #0F172A);
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.93rem;
          color: var(--color-text-light, #64748B);
          line-height: 1.65;
          margin: 0;
        }

        .card-bg-number {
          position: absolute;
          bottom: -12px;
          right: 16px;
          font-family: 'Sora', sans-serif;
          font-size: 72px;
          font-weight: 800;
          color: var(--color-bg-soft, #EFF6FF);
          line-height: 1;
          pointer-events: none;
          transition: color 0.3s;
          user-select: none;
        }

        .reason-card:hover .card-bg-number {
          color: rgba(37,99,235,0.07);
        }

        /* Stats strip */
        .wcu-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 72px;
          padding: 40px 48px;
          background: var(--color-brand-dark, #1E3A8A);
          border-radius: 20px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Sora', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          display: block;
        }

        .stat-number span {
          color: var(--color-brand-light, #38BDF8);
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          margin-top: 6px;
          display: block;
          letter-spacing: 0.03em;
        }

        .stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.12);
          align-self: stretch;
        }

        @media (max-width: 640px) {
          .wcu-stats { gap: 28px; padding: 32px 24px; }
          .stat-divider { display: none; }
        }
      `}</style>

      <section className="wcu-section" ref={sectionRef} id="why-choose-us">
        <div className="wcu-inner">
          {/* Header */}
          <div className="wcu-header">
            
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
                Why Choose Us
              </span>
            </div>
            <h2 className="wcu-title">
              The <span>Ahmed Holy</span> Advantage
            </h2>
            <p className="wcu-subtitle">
              We combine expertise, integrity, and dedication to deliver
              property solutions that exceed expectations every single time.
            </p>
          </div>

          {/* Cards */}
          <div className="wcu-grid">
            {reasons.map((r) => (
              <div className="reason-card" key={r.id}>
                <span className="card-number">— {r.id}</span>
                <div className="card-icon-wrap">{r.icon}</div>
                <h3 className="card-title">{r.title}</h3>
                <p className="card-desc">{r.desc}</p>
                <span className="card-bg-number">{r.id}</span>
              </div>
            ))}
          </div>

          {/* Stats Strip */}
          <div className="wcu-stats">
            <div className="stat-item">
              <span className="stat-number">
                500<span>+</span>
              </span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">
                12<span>+</span>
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">
                98<span>%</span>
              </span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">
                24<span>/7</span>
              </span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
