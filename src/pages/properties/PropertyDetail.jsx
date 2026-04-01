import React, { useState } from 'react';
import {
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Square,
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  X,
  Wifi,
  Car,
  Coffee,
  Shield,
  Wind,
  Thermometer,
  Sun,
  Home,
  Building2,
  Star,
  Clock,
  CheckCircle2,
  Send,
  Map,
  Navigation,
} from 'lucide-react';
import PageLoading from '../../component/common/PageLoading';

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Property data
  const property = {
    id: 1,
    title: 'Luxury Villa with Pool and Garden',
    location: 'Kolkata, West Bengal, India',
    price: '₹1.2 Cr',
    status: 'Available',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    area: '2500 sq.ft',
    yearBuilt: '2022',
    description: `Experience unparalleled luxury in this stunning villa located in the heart of Kolkata. 
    This exquisite property combines modern architecture with classic elegance, featuring spacious interiors, 
    premium finishes, and state-of-the-art amenities. The open floor plan creates a seamless flow between 
    living spaces, perfect for both entertaining and comfortable family living.
    
    The villa boasts a private swimming pool, beautifully landscaped garden, and a rooftop terrace with 
    panoramic views. Each bedroom is designed as a private suite with en-suite bathrooms and walk-in closets. 
    The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry.
    
    Located in a prestigious neighborhood, this property offers convenient access to international schools, 
    shopping centers, and healthcare facilities. Experience the perfect blend of luxury, comfort, and 
    convenience in this exceptional home.`,
    
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    ],
    
    features: [
      { icon: Wifi, label: 'High-Speed WiFi', value: 'Fiber Optic' },
      { icon: Car, label: 'Parking', value: '2 Covered Spaces' },
      { icon: Coffee, label: 'Kitchen', value: 'Modular Kitchen' },
      { icon: Shield, label: 'Security', value: '24/7 CCTV' },
      { icon: Wind, label: 'Air Conditioning', value: 'Central AC' },
      { icon: Thermometer, label: 'Heating', value: 'Underfloor' },
      { icon: Sun, label: 'Natural Light', value: 'Floor-to-Ceiling Windows' },
      { icon: Home, label: 'Furnishing', value: 'Fully Furnished' },
    ],
    
    amenities: [
      'Swimming Pool',
      'Gymnasium',
      'Landscaped Garden',
      'Children\'s Play Area',
      'Club House',
      'Party Hall',
      'Jacuzzi',
      'Steam Room',
      'Terrace Garden',
      'Backup Generator',
    ],
    
    nearby: [
      { name: 'City Mall', distance: '1.2 km', type: 'Shopping' },
      { name: 'International School', distance: '2.5 km', type: 'Education' },
      { name: 'Metro Station', distance: '1.8 km', type: 'Transport' },
      { name: 'City Hospital', distance: '3.0 km', type: 'Healthcare' },
      { name: 'Central Park', distance: '2.0 km', type: 'Recreation' },
      { name: 'Business District', distance: '4.5 km', type: 'Commercial' },
    ],
    
    coordinates: {
      lat: 22.5726,
      lng: 88.3639,
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setShowInquiryForm(false);
    }, 3000);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this amazing property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      alert('Share feature is supported on modern browsers');
    }
  };


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
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] pt-26">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <pattern id="detail-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 L20 40 M0 20 L40 20" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#detail-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Home className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs font-medium text-white">Property Details</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-[#94A3B8]">
                <MapPin size={16} />
                <span className="text-sm">{property.location}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleFavorite}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Heart size={20} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'} />
              </button>
              <button
                onClick={handleShare}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Share2 size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Image Gallery */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={property.images[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-[500px] object-cover"
            />
            
            {/* Navigation Buttons */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} className="text-[#0F172A]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} className="text-[#0F172A]" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {property.images.length}
              </span>
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          {property.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                    currentImageIndex === idx ? 'ring-2 ring-[#2563EB] shadow-lg' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Status */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-3xl font-bold text-[#2563EB]">{property.price}</div>
                  <div className="text-sm text-[#64748B] mt-1">Negotiable</div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-700">
                  <CheckCircle2 size={14} />
                  {property.status}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="text-center">
                  <Bed className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
                  <p className="text-sm font-semibold text-[#0F172A]">{property.bedrooms} Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
                  <p className="text-sm font-semibold text-[#0F172A]">{property.bathrooms} Bathrooms</p>
                </div>
                <div className="text-center">
                  <Square className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
                  <p className="text-sm font-semibold text-[#0F172A]">{property.area}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Description</h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                {property.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC]">
                      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                        <Icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748B]">{feature.label}</p>
                        <p className="text-sm font-semibold text-[#0F172A]">{feature.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#64748B]">
                    <CheckCircle2 size={14} className="text-[#22C55E]" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Nearby Places</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {property.nearby.map((place, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC]">
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{place.name}</p>
                      <p className="text-xs text-[#64748B]">{place.type}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#2563EB]">
                      <Navigation size={12} />
                      <span className="text-xs font-semibold">{place.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form & Map */}
          <div className="space-y-8">
            {/* Inquiry Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden  top-24 border border-[#E2E8F0]">
              <div className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] px-6 py-4">
                <h3 className="text-lg font-bold text-white">Inquiry Form</h3>
                <p className="text-[#BFDBFE] text-sm">Interested in this property? Contact us now!</p>
              </div>
              
              {!showInquiryForm ? (
                <div className="p-6 text-center">
                  <button
                    onClick={() => setShowInquiryForm(true)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Inquiry
                  </button>
                  <p className="text-xs text-[#64748B] mt-3">No commitment, just information</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-green-600" />
                      </div>
                      <h4 className="text-lg font-bold text-[#0F172A] mb-2">Thank You!</h4>
                      <p className="text-sm text-[#64748B]">Your inquiry has been sent. We'll contact you soon.</p>
                    </div>
                  ) : (
                    <>
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
                          className="w-full px-4 py-2 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                          placeholder="Enter your name"
                        />
                      </div>
                      
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
                          className="w-full px-4 py-2 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
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
                          className="w-full px-4 py-2 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                          placeholder="you@example.com"
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
                          className="w-full px-4 py-2 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 resize-none"
                          placeholder="I'm interested in this property..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Send Inquiry
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setShowInquiryForm(false)}
                        className="w-full text-sm text-[#64748B] hover:text-[#2563EB] transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </form>
              )}
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E2E8F0]">
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Map size={18} />
                  Location Map
                </h3>
                <p className="text-[#94A3B8] text-sm">Approximate location</p>
              </div>
              
              <div className="p-6">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <iframe
                    title="Property Location"
                    src={`https://maps.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=15&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-xl"
                  />
                </div>
                <div className="mt-4 flex items-start gap-2 text-sm text-[#64748B]">
                  <MapPin size={14} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <p>{property.location}</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] mb-3">Property Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Property Type</span>
                  <span className="font-semibold text-[#0F172A]">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Year Built</span>
                  <span className="font-semibold text-[#0F172A]">{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Possession Status</span>
                  <span className="font-semibold text-[#22C55E]">Ready to Move</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">RERA Number</span>
                  <span className="font-semibold text-[#0F172A]">RERA-KOL-2024-001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PropertyDetail;