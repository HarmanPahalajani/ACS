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
        rootMargin: '240px 0px 0px 0px',
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
          WIDE, LOW-PROFILE CAPSULE FLOATING FOOTER PANEL (LIGHT & WELCOMING BLUE)
          - Light sky-blue to pale-blue gradient background
          - Deep blue-grey headings & text with vibrant royal blue links
          - Fresh mint, teal, and warm gold accents
          - Preserves existing compact two-row layout and full responsiveness
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
          <div className="relative bg-gradient-to-b from-white/95 via-[#EAF4FF]/95 to-[#B9DEFF]/90 backdrop-blur-2xl backdrop-saturate-150 border-2 border-[#3478F6]/30 ring-1 ring-[#3478F6]/20 shadow-[0_16px_40px_rgba(52,120,246,0.18),_0_4px_16px_rgba(41,61,85,0.08),_inset_0_1px_2px_rgba(255,255,255,0.95)] rounded-2xl sm:rounded-3xl py-2 sm:py-2.5 px-3.5 sm:px-6 overflow-hidden">
          
          {/* Liquid Glass Top Specular Rim */}
          <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#3478F6]/35 to-transparent pointer-events-none" />
          
          {/* Subtle Ambient Sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#3478F6]/5 pointer-events-none rounded-2xl sm:rounded-3xl" />
          
          {/* Soft Warm Teal & Gold Glow Accent */}
          <div className="absolute -top-10 left-1/4 w-72 sm:w-96 h-16 bg-gradient-to-r from-[#43B7B0]/20 via-[#3478F6]/20 to-[#E5BC64]/20 blur-xl pointer-events-none -rotate-3" />
          
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
                  className="h-8 lg:h-9 w-auto aspect-square object-contain shrink-0 transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-xs lg:text-sm font-black tracking-tight text-[#293D55] group-hover:text-[#3478F6] transition-colors">
                    Awasthi Consultancy Services
                  </span>
                  <span className="text-[9.5px] lg:text-[10px] font-bold text-[#4E6178] uppercase tracking-wider hidden md:block">
                    Taxation & Compliance • Bhopal Desk
                  </span>
                </div>
              </button>

              {/* Center-Right: Essential Nav Links & Discuss Requirement */}
              <nav 
                aria-label="Footer Navigation"
                className="flex items-center gap-x-2 md:gap-x-2.5 lg:gap-x-4 text-[11px] lg:text-xs font-bold text-[#293D55]"
              >
                <button 
                  type="button"
                  onClick={() => handleNav('')} 
                  className="hover:text-[#3478F6] transition-colors cursor-pointer py-1"
                >
                  Home
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#services')} 
                  className="hover:text-[#3478F6] transition-colors cursor-pointer py-1"
                >
                  Services
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#reviews')} 
                  className="inline-flex items-center gap-1 hover:text-[#B45309] transition-colors cursor-pointer py-1 whitespace-nowrap"
                >
                  <span className="hidden xl:inline">Trusted by Our Customers</span>
                  <span className="xl:hidden">Reviews</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-[#FEF9E7] text-[#92400E] border border-[#E5BC64]">
                    <Star className="w-2.5 h-2.5 fill-[#E5BC64] text-[#E5BC64]" />
                    4.9
                  </span>
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#about')} 
                  className="hover:text-[#3478F6] transition-colors cursor-pointer py-1 whitespace-nowrap"
                >
                  <span className="hidden lg:inline">About ACS</span>
                  <span className="lg:hidden">About</span>
                </button>
                <button 
                  type="button"
                  onClick={() => handleNav('#contact')} 
                  className="text-[#3478F6] hover:text-[#2457C5] font-black transition-colors cursor-pointer py-1 whitespace-nowrap"
                >
                  <span className="hidden lg:inline">Discuss Requirement →</span>
                  <span className="lg:hidden">Inquire →</span>
                </button>
              </nav>

              {/* Far Right: Compact Phone, Google Maps & Back to Top */}
              <div className="flex items-center gap-1 md:gap-1.5 shrink-0 pl-1">
                <a 
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#3478F6] hover:bg-[#2457C5] text-white border border-[#3478F6]/30 text-[10.5px] lg:text-[11px] font-bold shadow-xs transition-all shrink-0"
                  title={`Call ${COMPANY_INFO.phones[0]}`}
                >
                  <PhoneCall className="w-3 h-3 text-white shrink-0" />
                  <span className="font-mono text-[10.5px] hidden xl:inline">{COMPANY_INFO.phones[0]}</span>
                  <span className="text-[10.5px] xl:hidden">Call</span>
                </a>

                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#E0F7F6] hover:bg-[#CCFBF1] text-[#0F766E] border border-[#43B7B0]/60 text-[10.5px] lg:text-[11px] font-bold transition-all shrink-0"
                  title="Google Maps Location"
                >
                  <MapPin className="w-3 h-3 text-[#0F766E] shrink-0" />
                  <span className="hidden lg:inline text-[10.5px]">Maps</span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#0F766E] shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={() => scrollToTop()}
                  className="p-1 rounded-lg bg-white/80 hover:bg-[#3478F6] hover:text-white text-[#293D55] border border-[#B9DEFF] transition-all cursor-pointer shrink-0 hidden lg:block"
                  title="Scroll back to top"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Hairline Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#3478F6]/20 to-transparent my-1.5" />

            {/* Row 2: Copyright, Address, and Representative */}
            <div className="flex items-center justify-between gap-x-4 text-[10.5px] text-[#4E6178] py-0.5 leading-none">
              <div className="shrink-0 font-medium">
                © {CURRENT_YEAR} Awasthi Consultancy Services (ACS). All rights reserved.
              </div>

              <div className="flex items-center gap-1 text-[#293D55] font-medium truncate max-w-xl mx-2">
                <MapPin className="w-3 h-3 text-[#43B7B0] shrink-0" />
                <span className="truncate">{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} – {COMPANY_INFO.pincode}</span>
              </div>

              <div className="shrink-0 text-[#4E6178]">
                <span>Representative: <strong className="text-[#293D55] font-bold">{COMPANY_INFO.representative}</strong></span>
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
                  className="h-6 w-auto aspect-square object-contain shrink-0"
                />
                <span className="text-xs font-black text-[#293D55] truncate">
                  Awasthi Consultancy
                </span>
              </button>

              <div className="flex items-center gap-1 shrink-0">
                <a 
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#3478F6] text-white text-[10px] font-bold shadow-xs active:bg-[#2457C5] shrink-0"
                  title="Call Primary Desk"
                >
                  <PhoneCall className="w-2.5 h-2.5" />
                  <span>Call</span>
                </a>
                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 rounded-lg bg-[#E0F7F6] text-[#0F766E] border border-[#43B7B0]/60 shrink-0"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-3 h-3 text-[#0F766E]" />
                </a>
                <button
                  type="button"
                  onClick={() => scrollToTop()}
                  className="p-1 rounded-lg bg-white/90 text-[#293D55] border border-[#B9DEFF] shrink-0"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Navigation Strip */}
            <nav 
              aria-label="Mobile Footer Navigation"
              className="flex items-center justify-between text-[10px] font-bold text-[#293D55] pt-0.5 border-t border-[#3478F6]/20"
            >
              <button type="button" onClick={() => handleNav('')} className="hover:text-[#3478F6] py-0.5">
                Home
              </button>
              <button type="button" onClick={() => handleNav('#services')} className="hover:text-[#3478F6] py-0.5">
                Services
              </button>
              <button type="button" onClick={() => handleNav('#reviews')} className="hover:text-[#B45309] py-0.5">
                Reviews
              </button>
              <button type="button" onClick={() => handleNav('#about')} className="hover:text-[#3478F6] py-0.5">
                About
              </button>
              <button type="button" onClick={() => handleNav('#contact')} className="text-[#3478F6] font-black py-0.5">
                Inquire →
              </button>
            </nav>

            {/* Mobile Address & Copyright */}
            <div className="flex items-center justify-between text-[8px] text-[#4E6178] pt-0.5 border-t border-[#3478F6]/20 leading-tight">
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
