import React, { useEffect, useRef } from 'react';
import { Wrench, HardHat, Building2, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const PageLoading = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const brandRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);
  const servicesRef = useRef([]);
  const taglineRef = useRef(null);
  const circlesRef = useRef([]);

  const loadingMessages = [
    'Preparing your experience',
    'Loading premium properties',
    'Getting services ready',
    'Almost there',
    'Welcome to Ahmed Holy Properties',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const masterTimeline = gsap.timeline();
      
      // Animate logo with 3D rotation and scale
      masterTimeline
        .fromTo(logoRef.current, 
          { scale: 0, rotationY: -180, opacity: 0 },
          { scale: 1, rotationY: 0, opacity: 1, duration: 1.2, ease: "back.out(1.2)" }
        )
        .fromTo(brandRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(textRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );

      // Animate dots with stagger effect
      dotsRef.current.forEach((dot, index) => {
        gsap.to(dot, {
          y: -15,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.05,
          stagger: {
            each: 0.05,
            repeat: -1,
            yoyo: true
          }
        });
      });

      // Animate service icons with floating effect
      servicesRef.current.forEach((service, index) => {
        gsap.to(service, {
          y: -5,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      });

      // Animate tagline with pulse effect
      gsap.to(taglineRef.current, {
        opacity: 0.7,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Animate background circles with rotation and scale
      circlesRef.current.forEach((circle, index) => {
        gsap.to(circle, {
          scale: 1.5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
        
        gsap.to(circle, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });
      });

      // Create floating particles
      const particles = [];
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-[#2563EB] rounded-full opacity-0';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        containerRef.current.appendChild(particle);
        
        gsap.to(particle, {
          y: -Math.random() * 100 - 50,
          x: (Math.random() - 0.5) * 100,
          opacity: 0.5,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2
        });
        
        particles.push(particle);
      }

      // Rotating ring animation
      const ring = document.querySelector('.rotating-ring');
      if (ring) {
        gsap.to(ring, {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: "none"
        });
      }

      const innerRing = document.querySelector('.inner-ring');
      if (innerRing) {
        gsap.to(innerRing, {
          rotation: -360,
          duration: 12,
          repeat: -1,
          ease: "none"
        });
      }

      // Change loading text with GSAP animation
      let messageIndex = 0;
      const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        
        gsap.to(textRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => {
            if (textRef.current) {
              textRef.current.textContent = loadingMessages[messageIndex];
              gsap.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "back.out"
              });
            }
          }
        });
      }, 1200);

      return () => {
        clearInterval(messageInterval);
        particles.forEach(particle => particle.remove());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2563EB]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="loader-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#loader-pattern)" />
        </svg>
      </div>

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => circlesRef.current[0] = el}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></div>
        <div 
          ref={el => circlesRef.current[1] = el}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></div>
        <div 
          ref={el => circlesRef.current[2] = el}
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#1E3A8A] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Container with Rotating Rings */}
        <div className="mb-10 relative">
          {/* Rotating Outer Ring */}
          <div className="rotating-ring absolute inset-[-15px] rounded-full border-2 border-[#38BDF8]/30"></div>
          <div className="inner-ring absolute inset-[-25px] rounded-full border border-[#2563EB]/20"></div>
          
          {/* Logo Animation */}
          <div ref={logoRef} className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] blur-xl animate-pulse-ring"></div>
            
            <div className="relative w-28 h-28 mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#38BDF8] animate-gradient-x"></div>
              <div className="absolute inset-[2px] bg-gradient-to-br from-[#0F172A]/90 to-[#1E3A8A]/90 rounded-xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 flex items-center justify-center space-x-1.5">
                <Wrench size={30} className="text-[#38BDF8] animate-pulse-glow" />
                <HardHat size={30} className="text-[#2563EB] animate-pulse-glow animation-delay-300" />
                <Building2 size={30} className="text-[#1E3A8A] animate-pulse-glow animation-delay-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div ref={brandRef}>
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-white drop-shadow-lg">Ahmed Holy</span>
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] bg-clip-text text-transparent drop-shadow-lg"> Properties</span>
          </h1>
          <div className="mt-2 h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent"></div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mt-8 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <Sparkles size={20} className="text-[#38BDF8] animate-spin-slow" />
            <span className="text-white! text-lg font-medium tracking-wide">
              {loadingMessages[0]}
            </span>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-4 mt-8">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col items-center space-y-2">
              {[...Array(4)].map((_, dotIndex) => {
                const dotRef = el => dotsRef.current[colIndex * 4 + dotIndex] = el;
                return (
                  <div
                    key={dotIndex}
                    ref={dotRef}
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                      colIndex === 0 ? 'from-[#2563EB] to-[#38BDF8]' :
                      colIndex === 1 ? 'from-[#38BDF8] to-[#2DD4BF]' :
                      'from-[#1E3A8A] to-[#2563EB]'
                    }`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Service Icons */}
        <div className="flex justify-center space-x-6 mt-12">
          {[
            { icon: Wrench, label: 'Repair', color: '#38BDF8' },
            { icon: HardHat, label: 'Renovation', color: '#2563EB' },
            { icon: Building2, label: 'Properties', color: '#2DD4BF' },
          ].map((service, idx) => {
            const Icon = service.icon;
            const serviceRef = el => servicesRef.current[idx] = el;
            return (
              <div
                key={idx}
                ref={serviceRef}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 hover:scale-110">
                  <div className="flex flex-col items-center">
                    <Icon size={18} style={{ color: service.color }} className="mb-1" />
                    <span className="text-[10px] text-white/70 font-medium">{service.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="mt-8">
          <p className="text-xs text-white/50 tracking-wider font-light">
            Your trusted partner for all property solutions
          </p>
          <div className="mt-2 flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white/30 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(56,189,248,0.5));
            opacity: 0.8;
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(56,189,248,0.8));
            opacity: 1;
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default PageLoading;