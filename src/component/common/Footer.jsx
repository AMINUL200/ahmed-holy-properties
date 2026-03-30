import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Home,
  Wrench,
  Building2,
  Info,
  PhoneCall,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Properties', href: '/properties', icon: Building2 },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  const services = [
    { name: 'Repair & Maintenance', href: '/services/repair' },
    { name: 'Renovation & Construction', href: '/services/renovation' },
    { name: 'Buy & Resell Properties', href: '/services/buy-resell' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const handleDeveloperClick = (e) => {
    e.preventDefault();
    window.open('https://skilledworks.cloud', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              Ahmed Holy Properties
            </h3>
            <p className="text-[#94A3B8] leading-relaxed text-sm">
              We provide complete property solutions including repair, renovation, 
              and property buying & selling services.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon size={16} className="text-[#94A3B8] group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-300 text-sm"
                    >
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group flex items-center gap-2 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-300 text-sm"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 group">
                <MapPin size={18} className="text-[#2563EB] mt-1 flex-shrink-0 group-hover:text-[#38BDF8] transition-colors" />
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Kolkata, West Bengal, India
                </p>
              </div>
              <div className="flex gap-3 group">
                <Phone size={18} className="text-[#2563EB] mt-1 flex-shrink-0 group-hover:text-[#38BDF8] transition-colors" />
                <a href="tel:+919876543210" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors text-sm">
                  +91 9876543210
                </a>
              </div>
              <div className="flex gap-3 group">
                <Mail size={18} className="text-[#2563EB] mt-1 flex-shrink-0 group-hover:text-[#38BDF8] transition-colors" />
                <a href="mailto:info@ahmedholyproperties.com" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors text-sm break-all">
                  info@ahmedholyproperties.com
                </a>
              </div>
            </div>
          </div>
        </div>

      
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm text-center md:text-left">
              © {currentYear} Ahmed Holy Properties. All rights reserved.
            </p>
            <p className="text-[#94A3B8] text-sm text-center">
              Developed by{' '}
              <button
                onClick={handleDeveloperClick}
                className="text-[#38BDF8] hover:text-[#2563EB] transition-colors font-medium hover:underline focus:outline-none"
              >
                Skilled Works Cloud
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;