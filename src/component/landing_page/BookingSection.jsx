import React, { useState, useRef } from 'react'
import {
  User,
  Phone,
  Mail,
  ChevronDown,
  MapPin,
  CalendarDays,
  MessageSquare,
  ImagePlus,
  ArrowRight,
  Wrench,
  HardHat,
  Building2,
  CheckCircle2,
  X,
} from 'lucide-react'

const services = [
  { label: 'Property Repair & Maintenance', icon: Wrench },
  { label: 'Renovation, Remodeling & Construction', icon: HardHat },
  { label: 'Buy & Resell Properties', icon: Building2 },
]

const fields = [
  { id: 'name',     label: 'Full Name',       placeholder: 'e.g. Rahim Ahmed',          type: 'text',  icon: User,          col: 1 },
  { id: 'phone',    label: 'Phone Number',     placeholder: '+91 98765 43210',           type: 'tel',   icon: Phone,         col: 1 },
  { id: 'email',    label: 'Email Address',    placeholder: 'you@example.com',           type: 'email', icon: Mail,          col: 1 },
  { id: 'location', label: 'Location',         placeholder: 'Your city or area',         type: 'text',  icon: MapPin,        col: 1 },
  { id: 'date',     label: 'Preferred Date',   placeholder: '',                          type: 'date',  icon: CalendarDays,  col: 1 },
]

export default function BookingSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', date: '', service: '', message: '' })
  const [image, setImage]       = useState(null)
  const [preview, setPreview]   = useState(null)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [submitted, setSubmitted]     = useState(false)
  const [focused, setFocused]         = useState('')
  const [errors, setErrors]           = useState({})
  const fileRef = useRef()

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.id]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.id]: '' }))
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const removeImage = () => { setImage(null); setPreview(null); fileRef.current.value = '' }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (!form.service)        e.service = 'Please select a service'
    if (!form.location.trim())e.location= 'Location is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .bk-section {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%);
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }

        /* subtle dot grid */
        .bk-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(56,189,248,0.07) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* glow blobs */
        .bk-blob-1 {
          position: absolute;
          top: -100px; left: -100px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .bk-blob-2 {
          position: absolute;
          bottom: -80px; right: -80px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .bk-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .bk-inner { grid-template-columns: 1fr; gap: 40px; }
          .bk-left  { text-align: center; }
        }

        /* ── LEFT PANEL ── */
        .bk-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Sora', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #38BDF8;
          margin-bottom: 18px;
        }
        .bk-eyebrow-line { width: 28px; height: 2px; background: #38BDF8; border-radius: 2px; }

        .bk-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .bk-title span {
          background: linear-gradient(90deg, #2563EB, #38BDF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bk-subtitle {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.7;
          margin: 0 0 40px;
          max-width: 340px;
        }
        @media (max-width: 900px) { .bk-subtitle { margin: 0 auto 32px; } }

        .bk-info-cards { display: flex; flex-direction: column; gap: 14px; }
        @media (max-width: 900px) { .bk-info-cards { flex-direction: row; flex-wrap: wrap; justify-content: center; } }

        .bk-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          transition: border-color 0.25s, background 0.25s;
        }
        .bk-info-card:hover {
          border-color: rgba(37,99,235,0.4);
          background: rgba(37,99,235,0.08);
        }
        .bk-info-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(37,99,235,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #60A5FA;
          flex-shrink: 0;
        }
        .bk-info-label { font-size: 0.78rem; color: #64748B; margin-bottom: 2px; }
        .bk-info-value { font-family: 'Sora', sans-serif; font-size: 0.9rem; font-weight: 600; color: #E2E8F0; }

        /* ── FORM CARD ── */
        .bk-card {
          background: #fff;
          border-radius: 24px;
          padding: 44px 40px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.35);
        }
        @media (max-width: 600px) { .bk-card { padding: 32px 22px; } }

        .bk-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 6px;
        }
        .bk-card-sub {
          font-size: 0.88rem;
          color: #64748B;
          margin: 0 0 32px;
        }

        .bk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 580px) { .bk-grid { grid-template-columns: 1fr; } }

        /* Field */
        .field-wrap { display: flex; flex-direction: column; gap: 6px; }
        .field-wrap.full { grid-column: 1 / -1; }

        .field-label {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          letter-spacing: 0.04em;
        }
        .field-label .req { color: #EF4444; margin-left: 2px; }

        .field-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          color: #94A3B8;
          pointer-events: none;
          transition: color 0.2s;
        }
        .field-input {
          width: 100%;
          padding: 11px 14px 11px 42px;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #0F172A;
          background: #F8FAFC;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field-input:focus {
          border-color: #2563EB;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .field-input.error { border-color: #EF4444; }
        .field-input:focus + .field-icon, .field-input-wrap:focus-within .field-icon { color: #2563EB; }
        .field-input[type="date"] { color: #64748B; }
        .field-input[type="date"]:valid { color: #0F172A; }

        .err-msg { font-size: 11px; color: #EF4444; margin-top: 2px; }

        /* Service Dropdown */
        .svc-trigger {
          width: 100%;
          padding: 11px 14px 11px 42px;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #64748B;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .svc-trigger.selected { color: #0F172A; }
        .svc-trigger.open, .svc-trigger:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
          background: #fff;
        }
        .svc-trigger.error { border-color: #EF4444; }

        .svc-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0; right: 0;
          background: #fff;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          z-index: 50;
          overflow: hidden;
        }
        .svc-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          cursor: pointer;
          font-size: 0.88rem;
          color: #334155;
          transition: background 0.15s;
        }
        .svc-option:hover { background: #EFF6FF; color: #2563EB; }
        .svc-option-icon { color: #2563EB; flex-shrink: 0; }

        /* Textarea */
        .field-textarea {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #0F172A;
          background: #F8FAFC;
          outline: none;
          resize: vertical;
          min-height: 96px;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .field-textarea:focus {
          border-color: #2563EB;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        /* Image Upload */
        .img-upload-zone {
          border: 1.8px dashed #CBD5E1;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s;
          background: #F8FAFC;
        }
        .img-upload-zone:hover { border-color: #2563EB; background: #EFF6FF; }
        .img-upload-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: #EFF6FF;
          display: flex; align-items: center; justify-content: center;
          color: #2563EB;
          flex-shrink: 0;
        }
        .img-upload-text { font-size: 0.85rem; color: #64748B; }
        .img-upload-text strong { color: #2563EB; font-weight: 600; }
        .img-upload-hint { font-size: 0.75rem; color: #94A3B8; margin-top: 2px; }

        .img-preview-wrap {
          position: relative;
          width: 64px; height: 64px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1.5px solid #E2E8F0;
        }
        .img-preview-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .img-remove {
          position: absolute;
          top: 3px; right: 3px;
          width: 18px; height: 18px;
          background: #EF4444;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          border: none;
          padding: 0;
        }

        /* Submit Button */
        .bk-submit {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2563EB, #1E3A8A);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(37,99,235,0.35);
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }
        .bk-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(37,99,235,0.45);
        }
        .bk-submit:active { transform: translateY(0); }

        /* Success */
        .bk-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 16px;
          padding: 48px 24px;
        }
        .bk-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22C55E22, #22C55E11);
          border: 2px solid #22C55E44;
          display: flex; align-items: center; justify-content: center;
        }
        .bk-success-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0F172A;
        }
        .bk-success-sub { font-size: 0.9rem; color: #64748B; line-height: 1.6; max-width: 300px; }
        .bk-success-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 16px;
          border-radius: 99px;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          font-size: 0.8rem;
          font-weight: 600;
          color: #16A34A;
        }
      `}</style>

      <section className="bk-section" id="booking">
        <div className="bk-blob-1" />
        <div className="bk-blob-2" />

        <div className="bk-inner">

          {/* ── LEFT ── */}
          <div className="bk-left">
           
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
                 Book a Service
              </span>
            </div>
            <h2 className="bk-title">
              Let's Get Your<br />
              <span>Project Started</span>
            </h2>
            <p className="bk-subtitle">
              Fill out the form and our team will get back to you within 24 hours to confirm your booking.
            </p>

            <div className="bk-info-cards">
              {[
                { icon: Wrench,     label: 'Service 01', value: 'Repair & Maintenance' },
                { icon: HardHat,    label: 'Service 02', value: 'Renovation & Construction' },
                { icon: Building2,  label: 'Service 03', value: 'Buy & Resell Properties' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div className="bk-info-card" key={i}>
                    <div className="bk-info-icon"><Icon size={18} /></div>
                    <div>
                      <div className="bk-info-label">{item.label}</div>
                      <div className="bk-info-value">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div className="bk-card">
            {submitted ? (
              <div className="bk-success">
                <div className="bk-success-icon">
                  <CheckCircle2 size={36} color="#22C55E" />
                </div>
                <div className="bk-success-badge">
                  <CheckCircle2 size={13} /> Request Submitted
                </div>
                <p className="bk-success-title">Thank You, {form.name.split(' ')[0] || 'there'}! 🎉</p>
                <p className="bk-success-sub">
                  Your service request has been submitted successfully. Our team will contact you shortly at <strong>{form.phone}</strong>.
                </p>
                <button
                  className="bk-submit"
                  style={{ marginTop: 8, maxWidth: 220 }}
                  onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',location:'',date:'',service:'',message:'' }); setImage(null); setPreview(null) }}
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <>
                <p className="bk-card-title">Book a Service</p>
                <p className="bk-card-sub">Fill out the form below and our team will get back to you shortly.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="bk-grid">

                    {/* Name */}
                    <div className="field-wrap">
                      <label className="field-label" htmlFor="name">Full Name <span className="req">*</span></label>
                      <div className="field-input-wrap">
                        <User size={15} className="field-icon" />
                        <input id="name" type="text" className={`field-input ${errors.name ? 'error' : ''}`}
                          placeholder="e.g. Rahim Ahmed" value={form.name} onChange={handleChange}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                      </div>
                      {errors.name && <span className="err-msg">{errors.name}</span>}
                    </div>

                    {/* Phone */}
                    <div className="field-wrap">
                      <label className="field-label" htmlFor="phone">Phone Number <span className="req">*</span></label>
                      <div className="field-input-wrap">
                        <Phone size={15} className="field-icon" />
                        <input id="phone" type="tel" className={`field-input ${errors.phone ? 'error' : ''}`}
                          placeholder="+91 98765 43210" value={form.phone} onChange={handleChange}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused('')} />
                      </div>
                      {errors.phone && <span className="err-msg">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div className="field-wrap">
                      <label className="field-label" htmlFor="email">Email Address <span className="req">*</span></label>
                      <div className="field-input-wrap">
                        <Mail size={15} className="field-icon" />
                        <input id="email" type="email" className={`field-input ${errors.email ? 'error' : ''}`}
                          placeholder="you@example.com" value={form.email} onChange={handleChange}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                      </div>
                      {errors.email && <span className="err-msg">{errors.email}</span>}
                    </div>

                    {/* Location */}
                    <div className="field-wrap">
                      <label className="field-label" htmlFor="location">Location <span className="req">*</span></label>
                      <div className="field-input-wrap">
                        <MapPin size={15} className="field-icon" />
                        <input id="location" type="text" className={`field-input ${errors.location ? 'error' : ''}`}
                          placeholder="Your city or area" value={form.location} onChange={handleChange}
                          onFocus={() => setFocused('location')} onBlur={() => setFocused('')} />
                      </div>
                      {errors.location && <span className="err-msg">{errors.location}</span>}
                    </div>

                    {/* Service Dropdown */}
                    <div className="field-wrap" style={{ position: 'relative' }}>
                      <label className="field-label">Service Type <span className="req">*</span></label>
                      <div className="field-input-wrap" style={{ position: 'relative' }}>
                        <Wrench size={15} className="field-icon" style={{ zIndex: 1 }} />
                        <button
                          type="button"
                          className={`svc-trigger ${form.service ? 'selected' : ''} ${serviceOpen ? 'open' : ''} ${errors.service ? 'error' : ''}`}
                          onClick={() => setServiceOpen(o => !o)}
                        >
                          <span>{form.service || 'Select a service…'}</span>
                          <ChevronDown size={15} style={{ transform: serviceOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: '#94A3B8', flexShrink: 0 }} />
                        </button>
                        {serviceOpen && (
                          <div className="svc-dropdown">
                            {services.map((s) => {
                              const Icon = s.icon
                              return (
                                <div key={s.label} className="svc-option"
                                  onClick={() => { setForm(f => ({ ...f, service: s.label })); setServiceOpen(false); setErrors(er => ({ ...er, service: '' })) }}>
                                  <Icon size={15} className="svc-option-icon" />
                                  {s.label}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                      {errors.service && <span className="err-msg">{errors.service}</span>}
                    </div>

                    {/* Date */}
                    <div className="field-wrap">
                      <label className="field-label" htmlFor="date">Preferred Date</label>
                      <div className="field-input-wrap">
                        <CalendarDays size={15} className="field-icon" />
                        <input id="date" type="date" className="field-input"
                          value={form.date} onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]} />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="field-wrap full">
                      <label className="field-label" htmlFor="message">Message</label>
                      <div className="field-input-wrap" style={{ alignItems: 'flex-start' }}>
                        <MessageSquare size={15} className="field-icon" style={{ top: 13, position: 'absolute' }} />
                        <textarea id="message" className="field-textarea"
                          placeholder="Describe your requirement in detail…"
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                      </div>
                    </div>

                    {/* Image Upload */}
                    <div className="field-wrap full">
                      <label className="field-label">Upload Image <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Optional)</span></label>
                      <input type="file" accept="image/*" ref={fileRef} onChange={handleImage} style={{ display: 'none' }} id="imgInput" />
                      {!preview ? (
                        <label htmlFor="imgInput" className="img-upload-zone">
                          <div className="img-upload-icon"><ImagePlus size={20} /></div>
                          <div>
                            <div className="img-upload-text"><strong>Click to upload</strong> or drag & drop</div>
                            <div className="img-upload-hint">PNG, JPG, WEBP up to 5MB</div>
                          </div>
                        </label>
                      ) : (
                        <div className="img-upload-zone" style={{ cursor: 'default' }}>
                          <div className="img-preview-wrap">
                            <img src={preview} alt="preview" />
                            <button type="button" className="img-remove" onClick={removeImage}>
                              <X size={10} color="#fff" />
                            </button>
                          </div>
                          <div>
                            <div className="img-upload-text"><strong>{image?.name}</strong></div>
                            <div className="img-upload-hint">{image ? (image.size / 1024).toFixed(0) + ' KB' : ''}</div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  <div style={{ marginTop: 28 }}>
                    <button type="submit" className="bk-submit">
                      Submit Request
                      <ArrowRight size={17} />
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94A3B8', marginTop: 12 }}>
                      🔒 Your information is safe and will never be shared.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  )
}