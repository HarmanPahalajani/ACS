import React, { useState, useEffect, useRef } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Star, 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { scrollToTop } from '../utils/scrollToTop';

interface FooterProps {
  onNavigateHome: (targetHash?: string, skipScroll?: boolean) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('preview_footer=true')) {
      return true;
    }
    return false;
  });
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.location.search.includes('preview_footer=true')) {
      return;
    }

    // High-performance bottom sentinel observer with zero scroll-event overhead
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtBottom(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '140px 0px 0px 0px',
        threshold: 0,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNav = (hash: string) => {
    onNavigateHome(hash);
  };

  return (
    <footer role="contentinfo" aria-label="Awasthi Consultancy Services Footer">
      {/* 
        Static Spacer in Document Flow:
        Comfortably accommodates the wide, low-profile floating capsule panel when it opens at the page bottom,
        ensuring zero overlap or occlusion of the last content section.
      */}
      <div className="h-20 sm:h-20 pointer-events-none" aria-hidden="true" />
      
      {/* Sentinel element placed at the absolute end of the page document flow */}
      <div ref={sentinelRef} className="h-2 w-full pointer-events-none" aria-hidden="true" />

      {/* =========================================================================
          WIDE, LOW-PROFILE CAPSULE FLOATING FOOTER PANEL
          Inspired by Foxwyn Global Assurance bottom-triggered floating footer.
          - Wide layout spanning ~90% of screen width on desktop
          - Significantly shorter, compact capsule height
          - Two organized horizontal rows on desktop (zero unnecessary wrapping)
          - Completely hidden during normal scrolling; reveals only at bottom
          - Retains all genuine ACS branding, navigation, actions, and metadata
         ========================================================================= */}
      <div 
        className="fixed bottom-2.5 sm:bottom-4 left-3 right-3 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-40 sm:w-[94vw] lg:w-[90vw] max-w-[1536px] pb-[env(safe-area-inset-bottom)] pointer-events-none"
      >
        <div 
          className={`transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none will-change-transform ${
            isAtBottom 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
        >
          <div className="relative bg-gradient-to-b from-white/95 via-[#FAF9F6]/85 to-white/80 backdrop-blur-2xl backdrop-saturate-150 border-2 border-[#C9272C]/35 ring-1 ring-[#C9272C]/15 shadow-[0_16px_45px_rgba(201,39,44,0.08),_0_4px_12px_rgba(32,42,53,0.04),_inset_0_1px_1.5px_rgba(255,255,255,0.95),_inset_0_-1px_1px_rgba(255,255,255,0.5)] rounded-2xl sm:rounded-3xl py-2 sm:py-2.5 px-3.5 sm:px-6 overflow-hidden">
          
          {/* Liquid Glass Top Specular Rim */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
          
          {/* Subtle Ambient Liquid Glass Sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-[#FAF9F6]/15 pointer-events-none rounded-2xl sm:rounded-3xl" />
          
          {/* Soft Warm Diagonal Reflection */}
          <div className="absolute -top-10 left-1/4 w-72 sm:w-96 h-16 bg-gradient-to-r from-amber-100/15 via-white/30 to-transparent blur-xl pointer-events-none -rotate-3" />
          
          {/* =========================================================================
              1. DESKTOP & TABLET FOOTER LAYOUT (hidden sm:block)
             ========================================================================= */}
          <div className="hidden sm:block relative z-10">
            
            {/* Row 1: Brand Identity, Nav Links, Discuss Requirement, and Compact Actions */}
            <div className="flex items-center justify-between gap-x-3 gap-y-1 py-0.5">
              
              {/* Left: Genuine ACS Brand Mark & Descriptor */}
              <button
                type="button"
                onClick={() => handleNav('')}
                className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none select-none shrink-0"
                aria-label="Awasthi Consultancy Services Home"
              >
                <img 
                  src="/acs_logo_official.png" 
                  alt="Awasthi Consultancy Services — Complete Accounting Solution" 
                  className="h-7 lg:h-8 w-auto object-contain shrink-0 transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-xs lg:text-sm font-black tracking-tight text-[#202A35] group-hover:text-[#C9272C] transition-colors">
                    Awasthi Consultancy Services
                  </span>
                  <span className="text-[9.5px] lg:text-[10px] font-semibold text-[#667085] uppercase tracking-wider hidden md:block">
                    Taxation & Compliance • Bhopal Desk
                  </span>
                </div>
              </button>

              {/* Center-Right: Essential Nav Links & Discuss Requirement */}
              <nav 
                aria-label="Footer Navigation"
                className="flex items-center gap-x-2 md:gap-x-2.5 lg:gap-x-4 text-[11px] lg:text-xs font-bold text-[#202A35]"
              >
                <button 
                  type="button"
                  onClick={() => handleNav('')} 
                  className="hover:text-[#C9272C] transition-colors cursor-pointer py-1"
                >
                  Home
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#services')} 
                  className="hover:text-[#C9272C] transition-colors cursor-pointer py-1"
                >
                  Services
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#reviews')} 
                  className="inline-flex items-center gap-1 hover:text-amber-700 transition-colors cursor-pointer py-1 whitespace-nowrap"
                >
                  <span className="hidden xl:inline">Trusted by Our Customers</span>
                  <span className="xl:hidden">Reviews</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800">
                    <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    4.9
                  </span>
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#about')} 
                  className="hover:text-[#C9272C] transition-colors cursor-pointer py-1 whitespace-nowrap"
                >
                  <span className="hidden lg:inline">About ACS</span>
                  <span className="lg:hidden">About</span>
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#contact')} 
                  className="text-[#C9272C] hover:text-[#B22025] font-black transition-colors cursor-pointer py-1 whitespace-nowrap"
                >
                  <span className="hidden lg:inline">Discuss Requirement →</span>
                  <span className="lg:hidden">Inquire →</span>
                </button>
              </nav>

              {/* Far Right: Compact Phone, Google Maps & Back to Top */}
              <div className="flex items-center gap-1 md:gap-1.5 shrink-0 pl-1">
                <a 
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/80 hover:bg-white text-slate-800 border border-white/80 shadow-[0_1px_2px_rgba(32,42,53,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] text-[10.5px] lg:text-[11px] font-bold transition-all shrink-0"
                  title={`Call ${COMPANY_INFO.phones[0]}`}
                >
                  <PhoneCall className="w-3 h-3 text-rose-600 shrink-0" />
                  <span className="font-mono text-[10.5px] hidden xl:inline">{COMPANY_INFO.phones[0]}</span>
                  <span className="text-[10.5px] xl:hidden">Call</span>
                </a>

                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50/85 hover:bg-amber-100/95 text-amber-900 border border-amber-200/80 shadow-[0_1px_2px_rgba(32,42,53,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] text-[10.5px] lg:text-[11px] font-bold transition-all shrink-0"
                  title="Google Maps Location"
                >
                  <MapPin className="w-3 h-3 text-rose-600 shrink-0" />
                  <span className="hidden lg:inline text-[10.5px]">Maps</span>
                  <ExternalLink className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={() => scrollToTop()}
                  className="p-1 rounded-lg bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-white/80 shadow-[0_1px_2px_rgba(32,42,53,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all cursor-pointer shrink-0 hidden lg:block"
                  title="Scroll back to top"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Hairline Glass Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#E7E5E0] to-transparent my-1.5" />

            {/* Row 2: Copyright, Address, and Representative */}
            <div className="flex items-center justify-between gap-x-4 text-[10.5px] text-[#667085] py-0.5 leading-none">
              <div className="shrink-0">
                © {CURRENT_YEAR} Awasthi Consultancy Services (ACS). All rights reserved.
              </div>

              <div className="flex items-center gap-1 text-[#202A35] truncate max-w-xl mx-2">
                <MapPin className="w-3 h-3 text-[#C9272C] shrink-0" />
                <span className="truncate">{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} – {COMPANY_INFO.pincode}</span>
              </div>

              <div className="shrink-0 text-[#667085]">
                <span>Representative: <strong className="text-[#202A35] font-semibold">{COMPANY_INFO.representative}</strong></span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              2. MOBILE COMPACT FOOTER LAYOUT (block sm:hidden)
             ========================================================================= */}
          <div className="block sm:hidden space-y-1 relative z-10">
            
            {/* Top Row: Brand & Compact Action Icons */}
            <div className="flex items-center justify-between gap-1">
              <button
                type="button"
                onClick={() => handleNav('')}
                className="flex items-center gap-1.5 text-left cursor-pointer select-none shrink min-w-0"
                aria-label="Awasthi Consultancy Services Home"
              >
                <img 
                  src="/acs_logo_official.png" 
                  alt="ACS" 
                  className="h-5 w-auto object-contain shrink-0"
                />
                <span className="text-xs font-black text-[#202A35] truncate">
                  Awasthi Consultancy
                </span>
              </button>

              <div className="flex items-center gap-1 shrink-0">
                <a 
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#C9272C] text-white text-[10px] font-bold shadow-xs active:bg-[#B22025] shrink-0"
                  title="Call Primary Desk"
                >
                  <PhoneCall className="w-2.5 h-2.5" />
                  <span>Call</span>
                </a>
                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 rounded-lg bg-amber-50/90 text-amber-800 border border-amber-200/80 shadow-[0_1px_2px_rgba(32,42,53,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] shrink-0"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-3 h-3 text-rose-600" />
                </a>
                <button
                  type="button"
                  onClick={() => scrollToTop()}
                  className="p-1 rounded-lg bg-white/80 text-slate-600 border border-white/80 shadow-[0_1px_2px_rgba(32,42,53,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] shrink-0"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Navigation Strip */}
            <nav 
              aria-label="Mobile Footer Navigation"
              className="flex items-center justify-between text-[10px] font-bold text-slate-700 pt-0.5 border-t border-white/80"
            >
              <button type="button" onClick={() => handleNav('')} className="hover:text-rose-600 py-0.5">
                Home
              </button>
              <button type="button" onClick={() => handleNav('#services')} className="hover:text-rose-600 py-0.5">
                Services
              </button>
              <button type="button" onClick={() => handleNav('#reviews')} className="hover:text-amber-700 py-0.5">
                Reviews
              </button>
              <button type="button" onClick={() => handleNav('#about')} className="hover:text-rose-600 py-0.5">
                About
              </button>
              <button type="button" onClick={() => handleNav('#contact')} className="text-rose-600 font-black py-0.5">
                Inquire →
              </button>
            </nav>

            {/* Mobile Address & Copyright */}
            <div className="flex items-center justify-between text-[8px] text-slate-400 pt-0.5 border-t border-white/80 leading-tight">
              <span className="truncate pr-1">SR LIG, Ashoka Palace, Bhopal</span>
              <span className="shrink-0">© {CURRENT_YEAR} ACS • Pankaj Awasthi</span>
            </div>

          </div>

        </div>
        </div>
      </div>
    </footer>
  );
};
