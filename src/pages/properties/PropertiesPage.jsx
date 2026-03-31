import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin, Bed, Bath, Square, Heart, Share2,
  ChevronLeft, ChevronRight, Search, Building2,
  CheckCircle2, XCircle, ArrowLeft, Phone, Mail,
  Calendar, TrendingUp, Eye, Filter, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const properties = [
  {
    id: 1, title: 'Luxury Villa with Pool', location: 'Kolkata, West Bengal',
    price: '₹1.2 Cr', priceNum: 12000000, status: 'Available',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
    bedrooms: 4, bathrooms: 3, area: '2500 sq.ft', type: 'Villa',
    features: ['Swimming Pool', 'Garden', 'Parking', 'Security', 'CCTV', 'Power Backup'],
    description: 'An extraordinary luxury villa nestled in the heart of Kolkata, offering the perfect blend of modern architecture and timeless elegance. Sprawling across 2500 sq.ft, this villa features expansive living spaces, a private swimming pool, lush garden, and premium finishes throughout. Ideal for families seeking a premium lifestyle.',
    agent: 'Rahul Sharma', agentPhone: '+91 98765 43210', yearBuilt: 2021,
  },
  {
    id: 2, title: 'Modern Apartment in City Center', location: 'Salt Lake, Kolkata',
    price: '₹85 Lacs', priceNum: 8500000, status: 'Available',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
    bedrooms: 3, bathrooms: 2, area: '1350 sq.ft', type: 'Apartment',
    features: ['Gym', 'Parking', 'Security', 'Lift', 'Power Backup', 'Clubhouse'],
    description: 'A contemporary apartment that redefines urban living. Situated in the vibrant Salt Lake area, this home offers stunning city views, premium fittings, and access to world-class amenities including a fully-equipped gym and clubhouse.',
    agent: 'Priya Das', agentPhone: '+91 87654 32109', yearBuilt: 2022,
  },
  {
    id: 3, title: 'Commercial Office Space', location: 'New Town, Kolkata',
    price: '₹2.5 Cr', priceNum: 25000000, status: 'Sold',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    bedrooms: 0, bathrooms: 2, area: '1800 sq.ft', type: 'Commercial',
    features: ['AC', 'Parking', 'Security', 'Conference Room', 'High-Speed Internet', 'Reception'],
    description: 'Premium commercial office space in New Town\'s thriving business district. This plug-and-play workspace features modern infrastructure, dedicated parking, and a prime location with excellent connectivity.',
    agent: 'Arif Khan', agentPhone: '+91 76543 21098', yearBuilt: 2020,
  },
  {
    id: 4, title: 'Family Home with Garden', location: 'Barasat, Kolkata',
    price: '₹65 Lacs', priceNum: 6500000, status: 'Available',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
    bedrooms: 3, bathrooms: 2, area: '1800 sq.ft', type: 'House',
    features: ['Garden', 'Parking', 'Terrace', 'Store Room', 'Modular Kitchen'],
    description: 'A warm, welcoming family home with a beautifully landscaped garden. This thoughtfully designed residence offers generous living spaces, a covered terrace, and a spacious kitchen — perfect for growing families.',
    agent: 'Suman Roy', agentPhone: '+91 65432 10987', yearBuilt: 2019,
  },
  {
    id: 5, title: 'Luxury Penthouse', location: 'Alipore, Kolkata',
    price: '₹3.8 Cr', priceNum: 38000000, status: 'Available',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    bedrooms: 4, bathrooms: 4, area: '3200 sq.ft', type: 'Penthouse',
    features: ['Rooftop', 'Private Lift', 'Jacuzzi', 'Smart Home', 'Wine Cellar', 'Home Theatre'],
    description: 'An exclusive penthouse crowning one of Alipore\'s most prestigious towers. With panoramic city views, a private rooftop terrace, jacuzzi, smart home automation, and bespoke interiors — this is the pinnacle of luxury living.',
    agent: 'Neha Gupta', agentPhone: '+91 54321 09876', yearBuilt: 2023,
  },
  {
    id: 6, title: 'Studio Apartment', location: 'Park Street, Kolkata',
    price: '₹45 Lacs', priceNum: 4500000, status: 'Sold',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
    bedrooms: 1, bathrooms: 1, area: '650 sq.ft', type: 'Studio',
    features: ['Fully Furnished', 'AC', 'Security', 'Lift'],
    description: 'A chic, fully furnished studio apartment on the iconic Park Street. Perfect for young professionals or investors, this compact home is designed with smart storage and a modern aesthetic.',
    agent: 'Amit Sen', agentPhone: '+91 43210 98765', yearBuilt: 2020,
  },
  {
    id: 7, title: 'Beachfront Villa', location: 'Digha, West Bengal',
    price: '₹2.2 Cr', priceNum: 22000000, status: 'Available',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80',
    bedrooms: 5, bathrooms: 4, area: '3500 sq.ft', type: 'Villa',
    features: ['Beach View', 'Swimming Pool', 'Garden', 'Parking', 'Barbecue Area'],
    description: 'A rare beachfront villa with direct access to Digha\'s pristine shores. This expansive 5-bedroom retreat features a pool, lush gardens, and breathtaking sea views — the perfect holiday home or investment property.',
    agent: 'Rahul Sharma', agentPhone: '+91 98765 43210', yearBuilt: 2021,
  },
  {
    id: 8, title: 'Modern Duplex', location: 'Rajarhat, Kolkata',
    price: '₹1.5 Cr', priceNum: 15000000, status: 'Available',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    bedrooms: 3, bathrooms: 3, area: '2200 sq.ft', type: 'Duplex',
    features: ['Private Terrace', 'Modern Kitchen', 'Parking', 'Study Room', 'Modular Wardrobes'],
    description: 'An elegant duplex home with a contemporary design language. Split across two well-planned floors, it offers a private terrace, a gourmet kitchen, and a tranquil study — perfect for modern professionals.',
    agent: 'Priya Das', agentPhone: '+91 87654 32109', yearBuilt: 2022,
  },
  {
    id: 9, title: 'Retail Shop', location: 'Esplanade, Kolkata',
    price: '₹95 Lacs', priceNum: 9500000, status: 'Sold',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    bedrooms: 0, bathrooms: 1, area: '500 sq.ft', type: 'Commercial',
    features: ['High Footfall', 'AC', 'Security', 'Display Window'],
    description: 'Prime retail space in Esplanade\'s bustling commercial corridor. This well-maintained shop benefits from exceptional visibility, high foot traffic, and excellent transport links.',
    agent: 'Arif Khan', agentPhone: '+91 76543 21098', yearBuilt: 2018,
  },
];

const PER_PAGE = 6;

/* ─────────────────────────────────────────────
   PROPERTY DETAIL PAGE
───────────────────────────────────────────── */
// function PropertyDetail({ property, onBack }) {
//   const [liked, setLiked] = useState(false);
//   const [tab, setTab] = useState('overview');

//   useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500;600;700;800&display=swap');
//         .detail-wrap { font-family:'Outfit',sans-serif; min-height:100vh; background:#F8FAFC; }

//         /* back bar */
//         .detail-topbar {
//           position:sticky; top:0; z-index:40;
//           background:rgba(248,250,252,0.92);
//           backdrop-filter:blur(12px);
//           border-bottom:1px solid #E2E8F0;
//           padding:14px 24px;
//           display:flex; align-items:center; justify-content:space-between;
//         }
//         .detail-back {
//           display:inline-flex; align-items:center; gap:8px;
//           font-size:0.88rem; font-weight:600; color:#2563EB;
//           background:none; border:none; cursor:pointer;
//           padding:8px 14px; border-radius:10px;
//           transition:background .2s;
//         }
//         .detail-back:hover { background:#EFF6FF; }

//         .detail-actions { display:flex; gap:10px; }
//         .detail-action-btn {
//           width:38px; height:38px; border-radius:10px;
//           border:1.5px solid #E2E8F0; background:#fff;
//           display:flex; align-items:center; justify-content:center;
//           cursor:pointer; transition:all .2s; color:#64748B;
//         }
//         .detail-action-btn:hover { border-color:#2563EB; color:#2563EB; background:#EFF6FF; }
//         .detail-action-btn.liked { border-color:#EF4444; color:#EF4444; background:#FEF2F2; }

//         /* hero image */
//         .detail-hero {
//           width:100%; height:clamp(280px,45vw,520px);
//           object-fit:cover; display:block;
//         }

//         /* body layout */
//         .detail-body {
//           max-width:1100px; margin:0 auto;
//           padding:48px 24px 80px;
//           display:grid; grid-template-columns:1fr 340px; gap:48px;
//         }
//         @media(max-width:900px) { .detail-body { grid-template-columns:1fr; } }

//         /* left */
//         .detail-badge-row { display:flex; align-items:center; gap:10px; margin-bottom:16px; }
//         .detail-type-badge {
//           font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
//           padding:4px 12px; border-radius:99px;
//           background:#EFF6FF; color:#2563EB; border:1px solid #DBEAFE;
//         }
//         .status-avail { background:#F0FDF4; color:#16A34A; border-color:#BBF7D0; }
//         .status-sold  { background:#FEF2F2; color:#DC2626; border-color:#FECACA; }

//         .detail-title {
//           font-family:'Instrument Serif',serif;
//           font-size:clamp(1.8rem,3.5vw,2.8rem);
//           font-weight:400; color:#0F172A; line-height:1.1;
//           letter-spacing:-.025em; margin:0 0 12px;
//         }
//         .detail-location {
//           display:flex; align-items:center; gap:6px;
//           font-size:.9rem; color:#64748B; margin-bottom:32px;
//         }

//         /* tabs */
//         .detail-tabs { display:flex; gap:4px; border-bottom:1.5px solid #E2E8F0; margin-bottom:32px; }
//         .detail-tab {
//           font-size:.88rem; font-weight:600; padding:10px 18px;
//           border:none; background:none; cursor:pointer; color:#64748B;
//           border-bottom:2.5px solid transparent; margin-bottom:-1.5px;
//           transition:color .2s, border-color .2s;
//         }
//         .detail-tab.active { color:#2563EB; border-bottom-color:#2563EB; }

//         .detail-desc { font-size:.95rem; color:#475569; line-height:1.82; margin:0 0 28px; }

//         /* stats row */
//         .detail-stats {
//           display:grid; grid-template-columns:repeat(3,1fr);
//           border:1px solid #E2E8F0; border-radius:16px; overflow:hidden;
//           margin-bottom:32px;
//         }
//         .detail-stat {
//           padding:20px; text-align:center;
//           border-right:1px solid #E2E8F0;
//           transition:background .2s;
//         }
//         .detail-stat:last-child { border-right:none; }
//         .detail-stat:hover { background:#FAFBFF; }
//         .detail-stat-val { font-family:'Instrument Serif',serif; font-size:1.5rem; color:#0F172A; }
//         .detail-stat-key { font-size:.75rem; font-weight:600; color:#94A3B8; text-transform:uppercase; letter-spacing:.08em; margin-top:4px; }

//         /* features grid */
//         .feature-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; }
//         .feature-item {
//           display:flex; align-items:center; gap:10px;
//           padding:11px 14px; border-radius:10px;
//           background:#F8FAFC; border:1px solid #E2E8F0;
//           font-size:.86rem; color:#334155; font-weight:500;
//           transition:border-color .2s, background .2s;
//         }
//         .feature-item:hover { border-color:#BFDBFE; background:#EFF6FF; color:#2563EB; }
//         .feature-dot { width:7px; height:7px; border-radius:50%; background:#22C55E; flex-shrink:0; }

//         /* right sidebar */
//         .detail-sidebar { display:flex; flex-direction:column; gap:20px; }

//         .price-card {
//           background:linear-gradient(135deg,#0F172A 0%,#1E3A8A 100%);
//           border-radius:20px; padding:28px;
//           position:relative; overflow:hidden;
//         }
//         .price-card::before {
//           content:''; position:absolute; inset:0;
//           background-image:radial-gradient(rgba(56,189,248,.07) 1.5px,transparent 1.5px);
//           background-size:20px 20px; pointer-events:none;
//         }
//         .price-label { font-size:.73rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(148,163,184,.7); margin-bottom:6px; }
//         .price-val {
//           font-family:'Instrument Serif',serif; font-size:2.4rem; font-weight:400;
//           color:#fff; line-height:1; letter-spacing:-.025em; margin-bottom:4px;
//         }
//         .price-sub { font-size:.8rem; color:rgba(148,163,184,.6); margin-bottom:28px; }

//         .cta-btn {
//           width:100%; padding:13px; border-radius:12px;
//           font-family:'Outfit',sans-serif; font-size:.9rem; font-weight:700;
//           border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:7px;
//           transition:all .25s;
//         }
//         .cta-primary {
//           background:linear-gradient(135deg,#2563EB,#38BDF8);
//           color:#fff; margin-bottom:10px;
//           box-shadow:0 6px 20px rgba(37,99,235,.35);
//         }
//         .cta-primary:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(37,99,235,.45); }
//         .cta-outline {
//           background:rgba(255,255,255,.06);
//           color:#E2E8F0; border:1.5px solid rgba(255,255,255,.12);
//         }
//         .cta-outline:hover { background:rgba(255,255,255,.1); }

//         /* agent card */
//         .agent-card {
//           background:#fff; border:1px solid #E2E8F0; border-radius:16px; padding:22px;
//         }
//         .agent-card-title { font-size:.75rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#94A3B8; margin-bottom:14px; }
//         .agent-avatar {
//           width:46px; height:46px; border-radius:50%;
//           background:linear-gradient(135deg,#2563EB,#38BDF8);
//           display:flex; align-items:center; justify-content:center;
//           font-family:'Instrument Serif',serif; font-size:1.1rem; color:#fff; flex-shrink:0;
//         }
//         .agent-name { font-weight:700; color:#0F172A; font-size:.95rem; }
//         .agent-role { font-size:.78rem; color:#64748B; margin-top:1px; }
//         .agent-contact {
//           display:flex; align-items:center; gap:9px;
//           padding:10px 13px; border-radius:10px; border:1px solid #E2E8F0;
//           font-size:.82rem; color:#334155; margin-top:8px;
//           transition:border-color .2s, background .2s;
//         }
//         .agent-contact:hover { border-color:#BFDBFE; background:#EFF6FF; }

//         /* info card */
//         .info-card {
//           background:#fff; border:1px solid #E2E8F0; border-radius:16px; padding:22px;
//         }
//         .info-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #F1F5F9; }
//         .info-row:last-child { border-bottom:none; }
//         .info-key { font-size:.82rem; color:#94A3B8; font-weight:500; }
//         .info-val { font-size:.84rem; font-weight:700; color:#334155; }
//       `}</style>

//       <div className="detail-wrap">
//         {/* Topbar */}
//         <div className="detail-topbar">
//           <button className="detail-back" onClick={onBack}>
//             <ArrowLeft size={16} />
//             Back to Listings
//           </button>
//           <div className="detail-actions">
//             <button className={`detail-action-btn ${liked ? 'liked' : ''}`} onClick={() => setLiked(l => !l)}>
//               <Heart size={16} fill={liked ? '#EF4444' : 'none'} />
//             </button>
//             <button className="detail-action-btn">
//               <Share2 size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Hero */}
//         <img src={property.image} alt={property.title} className="detail-hero" />

//         {/* Body */}
//         <div className="detail-body">

//           {/* LEFT */}
//           <div>
//             <div className="detail-badge-row">
//               <span className="detail-type-badge">{property.type}</span>
//               <span className={`detail-type-badge ${property.status === 'Available' ? 'status-avail' : 'status-sold'}`}>
//                 {property.status === 'Available' ? <CheckCircle2 size={11} style={{display:'inline',marginRight:4}} /> : <XCircle size={11} style={{display:'inline',marginRight:4}} />}
//                 {property.status}
//               </span>
//             </div>

//             <h1 className="detail-title">{property.title}</h1>
//             <div className="detail-location">
//               <MapPin size={15} />
//               {property.location}
//             </div>

//             {/* Stats */}
//             <div className="detail-stats">
//               {property.bedrooms > 0 && (
//                 <div className="detail-stat">
//                   <div className="detail-stat-val">{property.bedrooms}</div>
//                   <div className="detail-stat-key">Bedrooms</div>
//                 </div>
//               )}
//               {property.bathrooms > 0 && (
//                 <div className="detail-stat">
//                   <div className="detail-stat-val">{property.bathrooms}</div>
//                   <div className="detail-stat-key">Bathrooms</div>
//                 </div>
//               )}
//               <div className="detail-stat" style={{gridColumn: property.bedrooms === 0 ? 'span 2' : 'auto'}}>
//                 <div className="detail-stat-val">{property.area.replace(' sq.ft','')}</div>
//                 <div className="detail-stat-key">Sq. Ft.</div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="detail-tabs">
//               {['overview','features'].map(t => (
//                 <button key={t} className={`detail-tab ${tab===t?'active':''}`} onClick={() => setTab(t)}>
//                   {t.charAt(0).toUpperCase()+t.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {tab === 'overview' && (
//               <p className="detail-desc">{property.description}</p>
//             )}

//             {tab === 'features' && (
//               <div className="feature-grid">
//                 {property.features.map((f, i) => (
//                   <div className="feature-item" key={i}>
//                     <span className="feature-dot" />
//                     {f}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="detail-sidebar">
//             {/* Price card */}
//             <div className="price-card">
//               <div className="price-label">Listing Price</div>
//               <div className="price-val">{property.price}</div>
//               <div className="price-sub">All-inclusive price</div>
//               {property.status === 'Available' ? (
//                 <>
//                   <button className="cta-btn cta-primary">
//                     <Calendar size={16} /> Schedule a Visit
//                   </button>
//                   <button className="cta-btn cta-outline">
//                     <Phone size={15} /> Contact Agent
//                   </button>
//                 </>
//               ) : (
//                 <div style={{background:'rgba(239,68,68,.12)',border:'1px solid rgba(239,68,68,.25)',borderRadius:10,padding:'12px 16px',textAlign:'center',color:'#FCA5A5',fontSize:'.85rem',fontWeight:600}}>
//                   This property has been sold
//                 </div>
//               )}
//             </div>

//             {/* Agent */}
//             <div className="agent-card">
//               <div className="agent-card-title">Listing Agent</div>
//               <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
//                 <div className="agent-avatar">{property.agent.split(' ').map(n=>n[0]).join('')}</div>
//                 <div>
//                   <div className="agent-name">{property.agent}</div>
//                   <div className="agent-role">Senior Property Advisor</div>
//                 </div>
//               </div>
//               <div className="agent-contact">
//                 <Phone size={14} style={{color:'#2563EB',flexShrink:0}} />
//                 {property.agentPhone}
//               </div>
//               <div className="agent-contact">
//                 <Mail size={14} style={{color:'#2563EB',flexShrink:0}} />
//                 contact@ahmedholyproperties.com
//               </div>
//             </div>

//             {/* Quick info */}
//             <div className="info-card">
//               {[
//                 ['Property Type', property.type],
//                 ['Year Built', property.yearBuilt],
//                 ['Total Area', property.area],
//                 ['Location', property.location],
//               ].map(([k,v]) => (
//                 <div className="info-row" key={k}>
//                   <span className="info-key">{k}</span>
//                   <span className="info-val">{v}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

/* ─────────────────────────────────────────────
   MAIN LISTINGS PAGE
───────────────────────────────────────────── */
export default function PropertiesPage() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm]     = useState('');
  const [currentPage, setCurrentPage]   = useState(1);
  const [detail, setDetail]             = useState(null);
  const [likedIds, setLikedIds]         = useState([]);
  const cardsRef = useRef(null);
  const navigate = useNavigate();

  const filtered = properties.filter(p => {
    const okStatus = filterStatus === 'all' || p.status.toLowerCase() === filterStatus;
    const q = searchTerm.toLowerCase();
    const okSearch = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q);
    return okStatus && okSearch;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const current    = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const paginate = (n) => {
    setCurrentPage(n);
    cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

//   if (detail) return <PropertyDetail property={detail} onBack={() => setDetail(null)} />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500;600;700;800&display=swap');

        .pp-wrap { font-family:'Outfit',sans-serif; background:#F8FAFC; min-height:100vh; }

        /* ── HERO ── */
        .pp-hero {
          background:linear-gradient(135deg,#0F172A 0%,#1E3A8A 100%);
          padding:100px 24px 72px;
          position:relative; overflow:hidden;
        }
        .pp-hero::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
          background-size:44px 44px; pointer-events:none;
        }
        .pp-hero-glow {
          position:absolute; right:-80px; top:-80px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,.2) 0%,transparent 65%);
          pointer-events:none;
        }
        .pp-hero-inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; text-align:center; }

        .pp-hero-pill {
          display:inline-flex; align-items:center; gap:7px;
          background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12);
          backdrop-filter:blur(8px); padding:6px 14px; border-radius:99px;
          font-size:.75rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase;
          color:rgba(255,255,255,.75); margin-bottom:22px;
        }
        .pp-hero-pill span { width:6px;height:6px;border-radius:50%;background:#38BDF8;animation:ppulse 2s ease-in-out infinite; }
        @keyframes ppulse { 0%,100%{opacity:1}50%{opacity:.4} }

        .pp-hero-title {
          font-family:'Instrument Serif',serif;
          font-size:clamp(2.2rem,5vw,3.8rem);
          font-weight:400; color:#fff; margin:0 0 16px;
          line-height:1.1; letter-spacing:-.025em;
        }
        .pp-hero-title em { font-style:italic; color:#38BDF8; }
        .pp-hero-sub { font-size:.97rem; color:#94A3B8; max-width:480px; margin:0 auto; line-height:1.7; }

        /* ── FILTER BAR ── */
        .pp-bar-wrap { max-width:1100px; margin:-28px auto 0; padding:0 24px; position:relative; z-index:10; }
        .pp-bar {
          background:#fff; border:1px solid #E2E8F0; border-radius:18px;
          padding:22px 24px; display:flex; gap:16px; align-items:flex-end;
          box-shadow:0 8px 32px rgba(15,23,42,.1);
        }
        @media(max-width:640px){ .pp-bar { flex-direction:column; align-items:stretch; } }

        .pp-field { flex:1; }
        .pp-label { font-size:.74rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#64748B; margin-bottom:8px; }
        .pp-input-wrap { position:relative; }
        .pp-input-icon { position:absolute; left:13px; top:50%; transform:translateY(-50%); color:#94A3B8; pointer-events:none; }
        .pp-input {
          width:100%; padding:11px 14px 11px 40px;
          border:1.5px solid #E2E8F0; border-radius:11px;
          font-family:'Outfit',sans-serif; font-size:.88rem; color:#0F172A;
          background:#F8FAFC; outline:none;
          transition:border-color .2s, box-shadow .2s;
        }
        .pp-input:focus { border-color:#2563EB; background:#fff; box-shadow:0 0 0 3px rgba(37,99,235,.1); }

        .pp-filter-btns { display:flex; gap:7px; flex-shrink:0; }
        .pp-filter-btn {
          padding:10px 18px; border-radius:10px; font-size:.82rem; font-weight:600;
          border:1.5px solid #E2E8F0; background:#fff; color:#64748B; cursor:pointer;
          transition:all .2s;
        }
        .pp-filter-btn.active { background:#2563EB; border-color:#2563EB; color:#fff; }
        .pp-filter-btn:hover:not(.active) { border-color:#BFDBFE; color:#2563EB; background:#EFF6FF; }

        /* ── META ROW ── */
        .pp-meta { max-width:1100px; margin:32px auto 0; padding:0 24px; display:flex; align-items:center; justify-content:space-between; }
        .pp-count { font-size:.85rem; color:#64748B; }
        .pp-count strong { color:#0F172A; font-weight:700; }

        /* ── GRID ── */
        .pp-grid-wrap { max-width:1100px; margin:24px auto 0; padding:0 24px 80px; }
        .pp-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        @media(max-width:1024px){ .pp-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:600px) { .pp-grid{ grid-template-columns:1fr; } }

        /* ── CARD ── */
        .pp-card {
          background:#fff; border:1px solid #E2E8F0; border-radius:18px;
          overflow:hidden; cursor:pointer;
          transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s, border-color .3s;
          opacity:0; transform:translateY(18px);
        }
        .pp-card.visible { opacity:1; transform:translateY(0); }
        .pp-card:hover {
          transform:translateY(-5px);
          box-shadow:0 20px 56px rgba(37,99,235,.13);
          border-color:rgba(37,99,235,.2);
        }

        .pp-card-img-wrap { position:relative; height:210px; overflow:hidden; }
        .pp-card-img {
          width:100%; height:100%; object-fit:cover;
          transition:transform .55s cubic-bezier(.16,1,.3,1);
        }
        .pp-card:hover .pp-card-img { transform:scale(1.07); }

        .pp-card-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(15,23,42,.55) 0%,transparent 50%);
          opacity:0; transition:opacity .3s;
        }
        .pp-card:hover .pp-card-overlay { opacity:1; }

        .pp-card-top { position:absolute; top:12px; left:12px; right:12px; display:flex; justify-content:space-between; align-items:flex-start; }

        .pp-status {
          font-size:10.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
          padding:4px 10px; border-radius:99px; display:flex; align-items:center; gap:4px;
        }
        .pp-status.avail { background:rgba(240,253,244,.92); color:#16A34A; border:1px solid #BBF7D0; }
        .pp-status.sold  { background:rgba(254,242,242,.92); color:#DC2626; border:1px solid #FECACA; }

        .pp-like-btn {
          width:33px; height:33px; border-radius:50%;
          background:rgba(255,255,255,.92); border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          opacity:0; transform:scale(.85);
          transition:opacity .2s, transform .2s, background .2s;
        }
        .pp-card:hover .pp-like-btn { opacity:1; transform:scale(1); }
        .pp-like-btn.liked { opacity:1; background:#FEF2F2; }

        .pp-price-tag {
          position:absolute; bottom:12px; left:12px;
          background:rgba(255,255,255,.95); backdrop-filter:blur(6px);
          border-radius:8px; padding:5px 11px;
          font-family:'Instrument Serif',serif; font-size:1.1rem; font-weight:400;
          color:#0F172A; letter-spacing:-.01em;
        }

        /* card body */
        .pp-card-body { padding:18px 20px 20px; }
        .pp-card-type { font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#2563EB; margin-bottom:6px; }
        .pp-card-title {
          font-family:'Instrument Serif',serif; font-size:1.12rem; font-weight:400;
          color:#0F172A; margin:0 0 8px; line-height:1.25; letter-spacing:-.01em;
          transition:color .2s;
        }
        .pp-card:hover .pp-card-title { color:#2563EB; }
        .pp-card-loc { display:flex; align-items:center; gap:5px; font-size:.8rem; color:#94A3B8; margin-bottom:16px; }

        .pp-card-stats { display:flex; align-items:center; gap:16px; padding:12px 0; border-top:1px solid #F1F5F9; border-bottom:1px solid #F1F5F9; margin-bottom:14px; }
        .pp-card-stat { display:flex; align-items:center; gap:5px; font-size:.79rem; color:#334155; font-weight:500; }

        .pp-card-tags { display:flex; flex-wrap:wrap; gap:6px; }
        .pp-card-tag {
          font-size:.72rem; font-weight:600; padding:3px 9px; border-radius:99px;
          background:#F1F5F9; color:#64748B; transition:background .2s, color .2s;
        }
        .pp-card:hover .pp-card-tag { background:#EFF6FF; color:#2563EB; }

        /* view btn */
        .pp-card-cta {
          display:none; /* hidden — whole card is clickable */
        }

        /* ── EMPTY ── */
        .pp-empty { text-align:center; padding:80px 24px; }
        .pp-empty-icon { width:80px;height:80px;border-radius:20px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;margin:0 auto 16px; }

        /* ── PAGINATION ── */
        .pp-pagination { display:flex; justify-content:center; align-items:center; gap:8px; margin-top:48px; }
        .pp-page-btn {
          width:40px; height:40px; border-radius:10px;
          border:1.5px solid #E2E8F0; background:#fff; color:#64748B;
          font-family:'Outfit',sans-serif; font-size:.85rem; font-weight:600;
          cursor:pointer; display:flex; align-items:center; justify-content:center;
          transition:all .2s;
        }
        .pp-page-btn:hover:not(:disabled) { border-color:#2563EB; color:#2563EB; background:#EFF6FF; }
        .pp-page-btn.active { background:#2563EB; border-color:#2563EB; color:#fff; }
        .pp-page-btn:disabled { opacity:.35; cursor:not-allowed; }
      `}</style>

      <div className="pp-wrap">

        {/* ── HERO ── */}
        <div className="pp-hero">
          <div className="pp-hero-glow" />
          <div className="pp-hero-inner">
            <div className="pp-hero-pill">
              <span /><Building2 size={13} /> Premium Listings
            </div>
            <h1 className="pp-hero-title">
              Find Your<br /><em>Dream Property</em>
            </h1>
            <p className="pp-hero-sub">
              Curated collection of premium properties — from luxury villas to commercial spaces across West Bengal.
            </p>
          </div>
        </div>

        {/* ── FILTER BAR ── */}
        <div className="pp-bar-wrap">
          <div className="pp-bar">
            <div className="pp-field" style={{flex:2}}>
              <div className="pp-label">Search</div>
              <div className="pp-input-wrap">
                <Search size={15} className="pp-input-icon" />
                <input
                  className="pp-input"
                  placeholder="Search by title, location or type…"
                  value={searchTerm}
                  onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')}
                    style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',color:'#94A3B8'}}>
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
            <div>
              <div className="pp-label">Status</div>
              <div className="pp-filter-btns">
                {['all','available','sold'].map(s => (
                  <button key={s} className={`pp-filter-btn ${filterStatus===s?'active':''}`}
                    onClick={() => { setFilterStatus(s); setCurrentPage(1); }}>
                    {s.charAt(0).toUpperCase()+s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── META ── */}
        <div className="pp-meta">
          <p className="pp-count">Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'property' : 'properties'}</p>
        </div>

        {/* ── GRID ── */}
        <div className="pp-grid-wrap" ref={cardsRef}>
          {filtered.length === 0 ? (
            <div className="pp-empty">
              <div className="pp-empty-icon"><Building2 size={36} color="#2563EB" /></div>
              <h3 style={{fontFamily:'\'Instrument Serif\',serif',fontSize:'1.4rem',color:'#0F172A',marginBottom:8}}>No properties found</h3>
              <p style={{color:'#64748B',fontSize:'.9rem'}}>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="pp-grid">
                {current.map((p, i) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    index={i}
                    liked={likedIds.includes(p.id)}
                    onLike={toggleLike}
                    onClick={() => navigate(`/properties/${p.id}`, { state: { property: p } })}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pp-pagination">
                  <button className="pp-page-btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    <ChevronLeft size={16} />
                  </button>
                  {Array.from({length: totalPages}, (_, i) => i + 1).map(n => (
                    <button key={n} className={`pp-page-btn ${currentPage===n?'active':''}`} onClick={() => paginate(n)}>{n}</button>
                  ))}
                  <button className="pp-page-btn" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   CARD COMPONENT
───────────────────────────────────────────── */
function PropertyCard({ property: p, index, liked, onLike, onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => el.classList.add('visible'), index * 70); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div className="pp-card" ref={ref} onClick={onClick}>
      <div className="pp-card-img-wrap">
        <img src={p.image} alt={p.title} className="pp-card-img" loading="lazy" />
        <div className="pp-card-overlay" />
        <div className="pp-card-top">
          <span className={`pp-status ${p.status === 'Available' ? 'avail' : 'sold'}`}>
            {p.status === 'Available'
              ? <><CheckCircle2 size={10} />{p.status}</>
              : <><XCircle size={10} />{p.status}</>}
          </span>
          <button className={`pp-like-btn ${liked ? 'liked' : ''}`} onClick={e => onLike(e, p.id)}>
            <Heart size={15} color={liked ? '#EF4444' : '#64748B'} fill={liked ? '#EF4444' : 'none'} />
          </button>
        </div>
        <div className="pp-price-tag">{p.price}</div>
      </div>

      <div className="pp-card-body">
        <div className="pp-card-type">{p.type}</div>
        <h3 className="pp-card-title">{p.title}</h3>
        <div className="pp-card-loc"><MapPin size={12} />{p.location}</div>

        <div className="pp-card-stats">
          {p.bedrooms > 0 && <div className="pp-card-stat"><Bed size={14} color="#2563EB" />{p.bedrooms} Beds</div>}
          {p.bathrooms > 0 && <div className="pp-card-stat"><Bath size={14} color="#2563EB" />{p.bathrooms} Baths</div>}
          <div className="pp-card-stat"><Square size={14} color="#2563EB" />{p.area}</div>
        </div>

        <div className="pp-card-tags">
          {p.features.slice(0, 3).map((f, i) => <span key={i} className="pp-card-tag">{f}</span>)}
          {p.features.length > 3 && <span className="pp-card-tag">+{p.features.length - 3}</span>}
        </div>
      </div>
    </div>
  );
}