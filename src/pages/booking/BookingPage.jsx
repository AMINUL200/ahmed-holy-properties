import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Image as ImageIcon,
  Wrench,
  CheckCircle2,
  ArrowRight,
  X,
  Upload,
  Clock,
  Home,
  Building2,
  HardHat,
  Star,
  Shield,
  Clock as ClockIcon,
} from 'lucide-react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    location: '',
    date: '',
    message: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const serviceTypes = [
    { value: 'repair', label: 'Repair & Maintenance', icon: Wrench, color: '#2563EB' },
    { value: 'renovation', label: 'Renovation & Construction', icon: HardHat, color: '#0EA5E9' },
    { value: 'property', label: 'Buy & Resell Properties', icon: Building2, color: '#1E3A8A' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Image size should be less than 5MB' }));
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Please upload an image file' }));
        return;
      }
      
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setErrors(prev => ({ ...prev, image: '' }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const event = { target: { files: [file] } };
      handleImageChange(event);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after 5 seconds (optional)
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          location: '',
          date: '',
          message: '',
          image: null,
        });
        setImagePreview(null);
      }, 5000);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] px-4">
        <div className="text-center max-w-md animate-fadeInUp">
          <div className="w-24 h-24 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Thank You!</h2>
          <p className="text-[#64748B] mb-6">
            Your booking request has been received. Our team will contact you within 24 hours to confirm your appointment.
          </p>
          <div className="bg-white rounded-2xl p-4 shadow-md border border-[#E2E8F0] mb-6">
            <p className="text-sm text-[#334155]">
              <strong className="text-[#2563EB]">Booking Reference:</strong> AHP-{Math.random().toString(36).substr(2, 8).toUpperCase()}
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
          >
            Book Another Service
          </button>
        </div>
      </div>
    );
  }

  const selectedService = serviceTypes.find(s => s.value === formData.serviceType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <pattern id="booking-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 L20 40 M0 20 L40 20" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#booking-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-medium text-white">Schedule Your Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book a <span className="bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours to confirm your appointment.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E2E8F0]">
              <div className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] px-8 py-6">
                <h2 className="text-2xl font-bold text-white">Service Request Form</h2>
                <p className="text-[#BFDBFE] text-sm mt-1">Please fill in all required fields</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                    <User size={16} className="text-[#2563EB]" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone & Email Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <Phone size={16} className="text-[#2563EB]" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <Mail size={16} className="text-[#2563EB]" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                    <Wrench size={16} className="text-[#2563EB]" />
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {serviceTypes.map((service) => {
                      const Icon = service.icon;
                      const isSelected = formData.serviceType === service.value;
                      return (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, serviceType: service.value }));
                            if (errors.serviceType) setErrors(prev => ({ ...prev, serviceType: '' }));
                          }}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                            isSelected
                              ? 'border-[#2563EB] bg-[#EFF6FF] shadow-md'
                              : 'border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#F8FAFC]'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isSelected ? 'bg-[#2563EB]' : 'bg-[#EFF6FF] group-hover:bg-[#2563EB]/10'
                            }`}>
                              <Icon size={20} className={isSelected ? 'text-white' : 'text-[#2563EB]'} />
                            </div>
                            <span className={`font-semibold text-sm ${isSelected ? 'text-[#2563EB]' : 'text-[#334155]'}`}>
                              {service.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                </div>

                {/* Location & Date Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <MapPin size={16} className="text-[#2563EB]" />
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Area, Address"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 ${
                        errors.location
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                      <Calendar size={16} className="text-[#2563EB]" />
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getTodayDate()}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 ${
                        errors.date
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                    <MessageSquare size={16} className="text-[#2563EB]" />
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#334155] mb-2">
                    <ImageIcon size={16} className="text-[#2563EB]" />
                    Upload Reference Images (Optional)
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 cursor-pointer ${
                      isDragging
                        ? 'border-[#2563EB] bg-[#EFF6FF]'
                        : imagePreview
                        ? 'border-[#22C55E] bg-[#F0FDF4]'
                        : 'border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#F8FAFC]'
                    }`}
                    onClick={() => document.getElementById('image-upload').click()}
                  >
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    
                    {imagePreview ? (
                      <div className="relative">
                        <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg mb-3" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImagePreview(null);
                            setFormData(prev => ({ ...prev, image: null }));
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <X size={16} />
                        </button>
                        <p className="text-sm text-[#22C55E]">Image uploaded successfully</p>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-[#2563EB] mx-auto mb-3 opacity-50" />
                        <p className="text-[#64748B] text-sm">
                          Drag & drop an image here, or <span className="text-[#2563EB] font-semibold">click to browse</span>
                        </p>
                        <p className="text-[#94A3B8] text-xs mt-2">PNG, JPG, GIF up to 5MB</p>
                      </>
                    )}
                  </div>
                  {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Your Service
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Selected Service Preview */}
              {selectedService && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0] animate-fadeIn">
                  <h3 className="font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                    <Star size={18} className="text-[#F59E0B]" />
                    Selected Service
                  </h3>
                  <div className="flex items-center gap-3 p-3 bg-[#EFF6FF] rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center">
                      {React.createElement(selectedService.icon, { size: 24, className: "text-white" })}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A] text-sm">{selectedService.label}</p>
                      <p className="text-xs text-[#64748B]">Expert team assigned</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-4">Why Book With Us?</h3>
                <div className="space-y-3">
                  {[
                    { icon: ClockIcon, text: '24/7 Customer Support', color: '#2563EB' },
                    { icon: Shield, text: '100% Satisfaction Guarantee', color: '#22C55E' },
                    { icon: Star, text: '4.9★ Rated Service', color: '#F59E0B' },
                    { icon: Home, text: 'Free Site Inspection', color: '#0EA5E9' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                        <item.icon size={16} style={{ color: item.color }} />
                      </div>
                      <p className="text-sm text-[#334155]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Need Help?</h3>
                <p className="text-[#94A3B8] text-sm mb-4">Call us directly for quick assistance</p>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-[#38BDF8] hover:text-[#2DD4BF] transition-colors">
                  <Phone size={16} />
                  <span className="font-semibold">+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }
        .animate-fadeIn {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;