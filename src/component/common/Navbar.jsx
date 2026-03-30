import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, ChevronDown, Phone, Calendar, X } from "lucide-react";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation links
  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    {
      id: "services",
      label: "Services",
      dropdown: [
        { id: "repair", label: "Repair & Maintenance", path: "/services/repair-maintenance" },
        { id: "renovation", label: "Renovation & Construction", path: "/services/renovation-construction" },
        { id: "buy-resell", label: "Buy & Resell Properties", path: "/services/buy-resell" },
      ],
    },
    { id: "about", label: "About", path: "/about" },
    { id: "properties", label: "Properties", path: "/properties" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleBookService = () => {
    navigate("/book-service");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg "
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <img src="/image/logo.png" alt="logo" className="h-28 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <div
                key={item.id}
                className="relative"
                ref={item.dropdown ? dropdownRef : null}
              >
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`flex items-center gap-1 text-[#334155] font-semibold hover:text-[#2563EB] transition-colors duration-300 py-2 ${
                        openDropdown === item.id ? "text-[#2563EB]" : ""
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E2E8F0] overflow-hidden animate-fadeIn">
                        {item.dropdown.map((subItem) => (
                          <RouterLink
                            key={subItem.id}
                            to={subItem.path}
                            className="block px-5 py-3 text-sm text-[#334155] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition-colors duration-200"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </RouterLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`text-[#334155] font-semibold hover:text-[#2563EB] transition-colors duration-300 py-2 ${
                      location.pathname === item.path ? "text-[#2563EB]" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleBookService}
              className="group relative overflow-hidden text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 35%, #38BDF8 70%, #2DD4BF 100%)",
                backgroundSize: "200% auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "100% center";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "0% center";
              }}
            >
              <Calendar size={18} />
              <span>Book Service</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#334155] focus:outline-none cursor-pointer p-2 hover:bg-[#EFF6FF] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;