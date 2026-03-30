import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  X,
  ChevronRight,
  Home,
  Wrench,
  Building2,
  Info,
  Phone,
  Calendar,
  User,
  LogOut,
  LayoutDashboard,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

const SideBar = ({ toggleMenu, isOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar navigation links for Ahmed Holy Properties
  const sidebarLinks = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: "services",
      label: "Services",
      icon: <Wrench className="w-5 h-5" />,
      dropdown: [
        { 
          id: "repair-maintenance", 
          label: "Repair & Maintenance", 
          path: "/services/repair-maintenance",
          icon: <Wrench className="w-4 h-4" />
        },
        { 
          id: "renovation-construction", 
          label: "Renovation & Construction", 
          path: "/services/renovation-construction",
          icon: <Building2 className="w-4 h-4" />
        },
        { 
          id: "buy-resell", 
          label: "Buy & Resell Properties", 
          path: "/services/buy-resell",
          icon: <Star className="w-4 h-4" />
        },
      ],
    },
    {
      id: "about",
      label: "About",
      path: "/about",
      icon: <Info className="w-5 h-5" />,
    },
    {
      id: "properties",
      label: "Properties",
      path: "/properties",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      id: "contact",
      label: "Contact",
      path: "/contact",
      icon: <Phone className="w-5 h-5" />,
    },
  ];

  // Quick contact info (optional section)
  const contactInfo = [
    { icon: <MapPin size={14} />, text: "Kolkata, West Bengal" },
    { icon: <Mail size={14} />, text: "info@ahmedholyproperties.com" },
    { icon: <Phone size={14} />, text: "+91 9876543210" },
  ];

  // Auth state (dummy data - replace with your actual auth logic)
  const isAuthenticated = false;
  const userData = { user_type: 2 };

  // Close sidebar when route changes
  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
  }, [location.pathname]);

  // Toggle dropdown
  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownId]: !prev[dropdownId],
    }));
  };

  // Handle navigation
  const handleNavClick = (path) => {
    if (path) {
      navigate(path);
      setOpenDropdowns({});
    }
  };

  // Handle logout
  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
    toggleMenu();
  };

  // Handle book service
  const handleBookService = () => {
    navigate("/book-service");
    toggleMenu();
  };

  // Check if current path matches
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Render dropdown items recursively
  const renderDropdownItem = (item, level = 1) => {
    const hasSubDropdown = item.dropdown && item.dropdown.length > 0;
    const dropdownKey = `${item.id}-sub-${level}`;
    const isOpen = openDropdowns[dropdownKey];
    const isActive = item.path && isActivePath(item.path);

    return (
      <div key={item.id} className="relative">
        {hasSubDropdown ? (
          <div
            className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-all duration-200 ${
              level > 1 ? "pl-10" : "pl-6"
            } ${
              isOpen
                ? "bg-[#2563EB]/10 text-[#2563EB]"
                : "text-gray-700 hover:bg-gray-50 hover:text-[#2563EB]"
            }`}
            onClick={() => toggleDropdown(dropdownKey)}
          >
            <div className="flex items-center gap-2">
              {item.icon && <span className="text-gray-500">{item.icon}</span>}
              <span className="font-medium">{item.label}</span>
            </div>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        ) : (
          <div
            className={`flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-all duration-200 ${
              level > 1 ? "pl-10" : "pl-6"
            } ${
              isActive
                ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold"
                : "text-gray-700 hover:bg-gray-50 hover:text-[#2563EB]"
            }`}
            onClick={() => handleNavClick(item.path)}
          >
            {item.icon && <span className={isActive ? "text-white" : "text-gray-500"}>{item.icon}</span>}
            <span className="font-medium">{item.label}</span>
          </div>
        )}

        {/* Nested dropdown */}
        {hasSubDropdown && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-50/50 border-l-2 border-[#2563EB]/30 ml-4">
              {item.dropdown.map((subItem) =>
                renderDropdownItem(subItem, level + 1)
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render navigation item
  const renderNavItem = (item) => {
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const isOpen = openDropdowns[item.id];
    const isActive = item.path && isActivePath(item.path);

    return (
      <div key={item.id} className="mb-1">
        {hasDropdown ? (
          <div
            className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${
              isOpen
                ? "bg-[#2563EB]/10 text-[#2563EB]"
                : "text-gray-700 hover:bg-gray-100 hover:text-[#2563EB]"
            }`}
            onClick={() => toggleDropdown(item.id)}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </div>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        ) : (
          <div
            className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${
              isActive
                ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold shadow-md"
                : "text-gray-700 hover:bg-gray-100 hover:text-[#2563EB]"
            }`}
            onClick={() => handleNavClick(item.path)}
          >
            {item.icon}
            <span className="font-semibold">{item.label}</span>
          </div>
        )}

        {/* Dropdown menu */}
        {hasDropdown && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-1">
              {item.dropdown.map((dropdownItem) => renderDropdownItem(dropdownItem))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC]">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
          >
            <div className="text-xl font-bold">
              <span className="text-[#1E3A8A]">Ahmed Holy</span>
              <span className="text-[#2563EB]"> Properties</span>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 h-[calc(100vh-280px)]">
          {sidebarLinks.map((item) => renderNavItem(item))}
        </nav>

        {/* Book Service Button */}
        <div className="px-4 py-3">
          <button
            onClick={handleBookService}
            className="w-full bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#38BDF8] text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
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
            <Calendar className="w-5 h-5" />
            <span>Book Service</span>
          </button>
        </div>

        {/* Quick Contact Info */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="space-y-2 mb-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                <span className="text-[#2563EB]">{info.icon}</span>
                <span>{info.text}</span>
              </div>
            ))}
          </div>

         
        </div>
      </aside>
    </>
  );
};

export default SideBar;