import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Wrench,
  HardHat,
  Droplet,
  Zap,
  Hammer,
  Sofa,
  Brush,
  Tv,
  Home,
  Paintbrush,
  Grid,
  Palette,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  User,
  MessageSquare,
  Calendar,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Award,
  Sparkles,
  TrendingUp,
  DollarSign,
} from 'lucide-react';

const ServiceCategoryTemplate = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic content based on category
  const getCategoryContent = () => {
    if (category === 'repair') {
      return {
        // Hero Section
        heroTitle: 'Repair & Maintenance Services',
        heroSubtitle: 'Quick and reliable repair solutions for your property.',
        heroIcon: Wrench,
        heroColor: '#2563EB',
        heroGradient: 'from-[#2563EB] to-[#38BDF8]',
        
        // Services List
        services: [
          {
            icon: Droplet,
            title: 'Plumbing Services',
            description: 'Expert plumbing solutions for leaks, clogs, installations, and emergency repairs.',
            color: '#2563EB',
          },
          {
            icon: Zap,
            title: 'Electrical Repairs',
            description: 'Safe and reliable electrical repairs, wiring, fixture installation, and troubleshooting.',
            color: '#F59E0B',
          },
          {
            icon: Hammer,
            title: 'Carpentry Work',
            description: 'Professional carpentry services including furniture repair, custom builds, and installations.',
            color: '#8B5CF6',
          },
          {
            icon: Sofa,
            title: 'Furniture Installation',
            description: 'Expert assembly and installation of all types of furniture and fixtures.',
            color: '#10B981',
          },
          {
            icon: Brush,
            title: 'Painting & Maintenance',
            description: 'Professional painting services for interiors and exteriors with quality finishes.',
            color: '#EF4444',
          },
          {
            icon: Tv,
            title: 'TV Mounting',
            description: 'Safe and secure TV wall mounting with cable management solutions.',
            color: '#EC4899',
          },
        ],
        
        // Description Section
        description: 'We provide all types of repair and maintenance services to keep your home in perfect condition. Our skilled team ensures fast and reliable solutions for all your property needs. From minor fixes to major repairs, we handle it all with professionalism and care.',
        
        // Service Type for Form
        serviceTypeValue: 'Repair & Maintenance',
        
        // Stats
        stats: [
          { value: '2,500+', label: 'Repairs Done', color: '#2563EB' },
          { value: '98%', label: 'Satisfaction Rate', color: '#10B981' },
          { value: '45min', label: 'Avg Response Time', color: '#F59E0B' },
        ],
      };
    } else if (category === 'renovation') {
      return {
        // Hero Section
        heroTitle: 'Renovation & Construction Services',
        heroSubtitle: 'Transform your space with modern and efficient solutions.',
        heroIcon: HardHat,
        heroColor: '#0EA5E9',
        heroGradient: 'from-[#0EA5E9] to-[#38BDF8]',
        
        // Services List
        services: [
          {
            icon: Home,
            title: 'Home Renovation',
            description: 'Complete home renovation services to transform your living space.',
            color: '#2563EB',
          },
          {
            icon: Paintbrush,
            title: 'Interior Remodeling',
            description: 'Professional interior design and remodeling services.',
            color: '#EC4899',
          },
          {
            icon: Grid,
            title: 'Flooring Installation',
            description: 'Expert flooring installation including tiles, wood, and laminate.',
            color: '#8B5CF6',
          },
          {
            icon: Brush,
            title: 'Painting & Decoration',
            description: 'High-quality painting and decorative finishes for walls and ceilings.',
            color: '#EF4444',
          },
          {
            icon: Palette,
            title: 'Wall Design & Finishing',
            description: 'Creative wall designs, textures, and finishing services.',
            color: '#F59E0B',
          },
          {
            icon: Building2,
            title: 'Small Construction Works',
            description: 'Professional construction services for extensions and additions.',
            color: '#10B981',
          },
        ],
        
        // Description Section
        description: 'Our renovation services help transform your property into a modern and functional space with high-quality materials and expert design. We work closely with you to bring your vision to life while ensuring durability and aesthetic appeal.',
        
        // Service Type for Form
        serviceTypeValue: 'Renovation & Construction',
        
        // Stats
        stats: [
          { value: '850+', label: 'Projects Completed', color: '#2563EB' },
          { value: '15+', label: 'Years Experience', color: '#10B981' },
          { value: '100%', label: 'Client Satisfaction', color: '#F59E0B' },
        ],
      };
    }
    return null;
  };

  const content = getCategoryContent();
  const Icon = content?.heroIcon;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', serviceType: '', message: '' });
    }, 3000);
  };

  if (!content) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] pt-25">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] py-20 mb-4">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#hero-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              {Icon && <Icon size={16} className="text-[#38BDF8]" />}
              <span className="text-xs font-medium text-white">Professional Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {content.heroTitle}
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              {content.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-sm text-[#64748B] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Our Services</h2>
          <p className="text-[#64748B]">Choose from our comprehensive range of services</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-[#E2E8F0]"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${service.color}10`, border: `1px solid ${service.color}20` }}>
                  <ServiceIcon size={28} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{service.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => navigate('/booking')}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  Book Now
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Why Choose Our Services?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-6"></div>
          <p className="text-[#64748B] text-lg leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl shadow-xl overflow-hidden border border-[#E2E8F0]">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Booking Form */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-full mb-4">
                  <Calendar size={14} className="text-[#2563EB]" />
                  <span className="text-xs font-semibold text-[#2563EB]">Schedule Service</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Book This Service</h2>
                <p className="text-[#64748B] text-sm">Fill out the form and our team will contact you</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Request Sent!</h3>
                  <p className="text-[#64748B]">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <User size={14} className="text-[#2563EB]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                        <Phone size={14} className="text-[#2563EB]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                        <Mail size={14} className="text-[#2563EB]" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <Wrench size={14} className="text-[#2563EB]" />
                      Service Type *
                    </label>
                    <input
                      type="text"
                      name="serviceType"
                      value={content.serviceTypeValue}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] font-medium cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <MessageSquare size={14} className="text-[#2563EB]" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Right Side - Why Choose Us */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'Experienced Team', desc: 'Skilled professionals with years of expertise' },
                  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Competitive rates with no hidden charges' },
                  { icon: Zap, title: 'Fast Service', desc: 'Quick response and timely completion' },
                  { icon: Star, title: 'Quality Work', desc: 'Premium materials and excellent craftsmanship' },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <ItemIcon size={18} className="text-[#38BDF8]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-[#94A3B8]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help With Your Property?</h2>
          <p className="text-[#EFF6FF] mb-8">Contact us today for quick assistance and expert advice</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-white text-[#2563EB] rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#2563EB] transition-all duration-300"
            >
              Book a Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCategoryTemplate;