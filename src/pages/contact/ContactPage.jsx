import React, { useState } from "react";
import {
  Home,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  User,
  AtSign,
  FileText,
  AlignLeft,
  Smartphone,
} from "lucide-react";
import PageHelmet from "../../component/common/PageHelmet";
import PageLoading from "../../component/common/PageLoading";

/* ─────────────────────────────────────────
   SHARED
───────────────────────────────────────── */
function SectionBadge({ text }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
      style={{
        background: "#EFF6FF",
        color: "#2563EB",
        border: "1px solid #BFDBFE",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
      {text}
    </span>
  );
}

function GradientText({ children }) {
  return (
    <span
      style={{
        background: "linear-gradient(90deg, #2563EB, #38BDF8)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────
   1. HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #0EA5E9 100%)",
      }}
    >
      {/* Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 1200 280"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="contact-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#fff"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="1200" height="280" fill="url(#contact-grid)" />
        <circle
          cx="100"
          cy="240"
          r="180"
          fill="none"
          stroke="#fff"
          strokeWidth="0.5"
        />
        <circle
          cx="1100"
          cy="40"
          r="200"
          fill="none"
          stroke="#fff"
          strokeWidth="0.4"
        />
        <circle
          cx="1100"
          cy="40"
          r="120"
          fill="none"
          stroke="#fff"
          strokeWidth="0.4"
        />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(56,189,248,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24 text-center">
        {/* Breadcrumb */}
        <div
          className="flex items-center justify-center gap-1.5 text-xs font-medium mb-6"
          style={{ color: "#93C5FD" }}
        >
          <Home size={13} />
          <span>Home</span>
          <ChevronRight size={12} />
          <span className="text-white font-semibold">Contact</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          Contact Us
        </h1>
        <p
          className="mt-4 text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
          style={{ color: "#BAE6FD" }}
        >
          Get in touch with us for any property service or inquiry — we're here
          to help you every step of the way.
        </p>

        {/* Quick info strip */}
        <div
          className="mt-10 inline-flex flex-wrap justify-center gap-6 sm:gap-10 px-8 py-4 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          {[
            { icon: Phone, text: "+91 9876543210" },
            { icon: Mail, text: "info@ahmedholyproperties.com" },
            { icon: Clock, text: "Mon–Sat: 9AM – 7PM" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={14} style={{ color: "#93C5FD" }} />
              <span className="text-xs sm:text-sm font-medium text-white">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   2. FORM + INFO
───────────────────────────────────────── */
const inputBase = {
  width: "100%",
  padding: "11px 14px 11px 42px",
  borderRadius: 10,
  border: "1.5px solid #E2E8F0",
  background: "#F8FAFC",
  color: "#0F172A",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function FloatingInput({
  icon: Icon,
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold" style={{ color: "#334155" }}>
        {label} {required && <span style={{ color: "#EF4444" }}>*</span>}
      </label>
      <div className="relative">
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: focused ? "#2563EB" : "#94A3B8" }}
        >
          <Icon size={15} strokeWidth={1.8} />
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...inputBase,
            borderColor: focused ? "#2563EB" : "#E2E8F0",
            boxShadow: focused ? "0 0 0 3px rgba(37,99,235,0.12)" : "none",
            background: focused ? "#fff" : "#F8FAFC",
          }}
        />
      </div>
    </div>
  );
}

function FloatingTextarea({
  icon: Icon,
  label,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold" style={{ color: "#334155" }}>
        {label} {required && <span style={{ color: "#EF4444" }}>*</span>}
      </label>
      <div className="relative">
        <div
          className="absolute left-3 top-3.5 pointer-events-none"
          style={{ color: focused ? "#2563EB" : "#94A3B8" }}
        >
          <Icon size={15} strokeWidth={1.8} />
        </div>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...inputBase,
            padding: "11px 14px 11px 42px",
            resize: "vertical",
            minHeight: 110,
            borderColor: focused ? "#2563EB" : "#E2E8F0",
            boxShadow: focused ? "0 0 0 3px rgba(37,99,235,0.12)" : "none",
            background: focused ? "#fff" : "#F8FAFC",
          }}
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <div
      className="rounded-3xl p-8 sm:p-10 h-full"
      style={{
        background: "#fff",
        border: "1px solid #E2E8F0",
        boxShadow: "0 16px 48px rgba(37,99,235,0.10)",
      }}
    >
      <div className="mb-7">
        <SectionBadge text="Get In Touch" />
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: "#0F172A" }}
        >
          Send Us a <GradientText>Message</GradientText>
        </h2>
        <p className="mt-2 text-sm" style={{ color: "#64748B" }}>
          Fill in the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div
          className="flex flex-col items-center justify-center text-center py-14 rounded-2xl gap-4"
          style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
            }}
          >
            <CheckCircle2 size={32} color="#fff" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-extrabold" style={{ color: "#0F172A" }}>
            Thank You!
          </h3>
          <p className="text-sm max-w-xs" style={{ color: "#64748B" }}>
            Your message has been sent successfully. We will contact you soon.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            }}
            className="mt-2 text-xs font-bold px-5 py-2.5 rounded-xl text-white transition-all hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #2563EB, #1E3A8A)" }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FloatingInput
              icon={User}
              label="Full Name"
              name="name"
              placeholder="Ahmed Khan"
              value={form.name}
              onChange={handleChange}
              required
            />
            <FloatingInput
              icon={AtSign}
              label="Email Address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FloatingInput
              icon={Smartphone}
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={form.phone}
              onChange={handleChange}
            />
            <FloatingInput
              icon={FileText}
              label="Subject"
              name="subject"
              placeholder="Property Repair Query"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <FloatingTextarea
            icon={AlignLeft}
            label="Message"
            name="message"
            placeholder="Describe your requirement in detail..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #2563EB, #1E3A8A)",
              boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            }}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="3"
                  />
                  <path
                    d="M12 2a10 10 0 0 1 10 10"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

const contactItems = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "Kolkata, West Bengal, India",
    sub: "Visit us at our office",
    accent: "#2563EB",
    soft: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 9876543210",
    sub: "Call us anytime during working hours",
    accent: "#0EA5E9",
    soft: "#F0F9FF",
    border: "#BAE6FD",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@ahmedholyproperties.com",
    sub: "We reply within 24 hours",
    accent: "#2563EB",
    soft: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM",
    sub: "Sunday: Closed",
    accent: "#0EA5E9",
    soft: "#F0F9FF",
    border: "#BAE6FD",
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div>
        <SectionBadge text="Reach Us" />
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: "#0F172A" }}
        >
          Contact <GradientText>Information</GradientText>
        </h2>
        <p className="mt-2 text-sm" style={{ color: "#64748B" }}>
          We're always available to assist you with any property service or
          question.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactItems.map(
          ({ icon: Icon, label, value, sub, accent, soft, border }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 group"
              style={{
                background: "#fff",
                border: `1px solid ${border}`,
                boxShadow: `0 2px 12px ${accent}0e`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
                  boxShadow: `0 4px 14px ${accent}44`,
                }}
              >
                <Icon size={19} color="#fff" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-bold tracking-wide uppercase"
                  style={{ color: accent }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-semibold mt-0.5 truncate"
                  style={{ color: "#0F172A" }}
                >
                  {value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>
                  {sub}
                </p>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Social / quick links */}
      <div
        className="rounded-2xl p-5 mt-auto"
        style={{
          background: "linear-gradient(135deg, #1E3A8A, #2563EB)",
          boxShadow: "0 8px 28px rgba(37,99,235,0.28)",
        }}
      >
        <p className="text-sm font-bold text-white">Prefer a quick chat?</p>
        <p className="text-xs mt-1" style={{ color: "#93C5FD" }}>
          Reach us directly via WhatsApp for instant responses.
        </p>
        <button
          className="mt-3 flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg text-white transition-all hover:scale-[1.03]"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <MessageCircle size={13} />
          WhatsApp Us
        </button>
      </div>
    </div>
  );
}

function FormInfoSection() {
  return (
    <section className="py-20 sm:py-24" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1fr_420px] gap-10 items-start">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   3. MAP
───────────────────────────────────────── */
function MapSection() {
  return (
    <section className="py-12 sm:py-16" style={{ background: "#EFF6FF" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8">
          <SectionBadge text="Find Us" />
          <h2
            className="text-2xl sm:text-3xl font-extrabold"
            style={{ color: "#0F172A" }}
          >
            Our <GradientText>Location</GradientText>
          </h2>
        </div>

        <div
          className="overflow-hidden rounded-3xl"
          style={{
            border: "1.5px solid #BFDBFE",
            boxShadow: "0 12px 40px rgba(37,99,235,0.14)",
          }}
        >
          <iframe
            title="Ahmed Holy Properties Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.46640875384!2d88.16366083773435!3d22.535564582818235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1712000000000"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   4. CTA
───────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="py-20 sm:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #0EA5E9 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 1200 260"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="cta-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#fff" />
          </pattern>
        </defs>
        <rect width="1200" height="260" fill="url(#cta-dots)" />
        <circle
          cx="200"
          cy="130"
          r="200"
          fill="none"
          stroke="#fff"
          strokeWidth="0.5"
        />
        <circle
          cx="1000"
          cy="130"
          r="180"
          fill="none"
          stroke="#fff"
          strokeWidth="0.5"
        />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
          style={{
            background: "rgba(255,255,255,0.12)",
            color: "#BAE6FD",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
          Need Immediate Help?
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Talk to Us <GradientText>Right Now</GradientText>
        </h2>
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "#BAE6FD" }}
        >
          Call us directly or reach out on WhatsApp for faster, real-time
          assistance with your property needs.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
            style={{
              background: "#fff",
              color: "#2563EB",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          >
            <PhoneCall size={16} />
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
            style={{
              border: "1.5px solid rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function ContactPage() {
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
      <PageHelmet title="Contact Us | Ahmed Holy Properties - Trusted Property Services" />

      <div
        className="min-h-screen font-sans pt-8"
        style={{ background: "#F8FAFC" }}
      >
        <HeroSection />
        <FormInfoSection />
        <MapSection />
        <CTASection />
      </div>
    </>
  );
}
