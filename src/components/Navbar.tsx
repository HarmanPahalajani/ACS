import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Star, 
  ArrowRight,
  PhoneCall,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../data';

interface NavbarProps {
  onNavigateHome: (targetHash?: string, skipScroll?: boolean) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome,
  onSelectService 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleNav = (hash: string) => {
    setMenuOpen(false);
    onNavigateHome(hash);
  };

  const handleCategoryClick = (categoryKey: string) => {
    setMenuOpen(false);
    onNavigateHome('#services');
    if (onSelectService) {
      onSelectService(categoryKey);
    }
  };

  return (
    <>
      {/* =========================================================================
          FLOATING PILL-SHAPED HEADER (TOP-LEFT CORNER)
          Exact reference layout: [ HAMBURGER ICON | ACS LOGO ]
          - Positioned near the top-left corner
          - Hamburger icon on the left
          - Subtle vertical divider
          - Original genuine ACS logo on the right
          - Fully rounded compact pill floating above the hero canvas
         ========================================================================= */}
      <header 
        className="fixed top-3 sm:top-4 left-3 sm:left-6 z-50 pointer-events-none"
        role="banner"
      >
        <div className="relative flex items-center gap-2.5 sm:gap-3 bg-gradient-to-b from-white/95 via-[#FFFCF5]/90 to-white/90 hover:from-white hover:to-white/95 backdrop-blur-2xl backdrop-saturate-150 border-2 border-[#3478F6]/30 ring-1 ring-[#3478F6]/20 shadow-[0_8px_30px_rgba(52,120,246,0.12),_0_2px_8px_rgba(41,61,85,0.06),_inset_0_1px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_12px_36px_rgba(52,120,246,0.18),_0_3px_10px_rgba(41,61,85,0.08)] rounded-full px-2.5 py-1.5 sm:px-3.5 sm:py-2 transition-all duration-200 pointer-events-auto overflow-hidden">
          
          {/* Liquid Glass Top Specular Rim */}
          <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-t-full" />
          
          {/* Subtle Ambient Glass Sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none rounded-full" />

          {/* 1. Left: Primary Navigation Hamburger Icon Button */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-10 p-1 rounded-full text-[#293D55] hover:text-[#3478F6] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6] flex items-center justify-center shrink-0 active:scale-95 min-w-[36px] min-h-[36px]"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="navigation-overlay-panel"
          >
            {menuOpen ? (
              <X className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#3478F6] transition-transform rotate-90 duration-200" />
            ) : (
              <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#293D55] transition-transform duration-200" />
            )}
          </button>

          {/* 2. Middle: Subtle Vertical Glass Divider */}
          <div className="relative z-10 h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-[#B9DEFF] to-transparent shrink-0" aria-hidden="true" />

          {/* 3. Right: Genuine ACS Brand Mark */}
          <button
            type="button"
            onClick={() => handleNav('')}
            className="relative z-10 flex items-center cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6] rounded group select-none shrink-0"
            aria-label="Awasthi Consultancy Services Home"
          >
            <img
              src="/acs_logo_official.png"
              alt="Awasthi Consultancy Services — Complete Accounting Solution"
              className="h-8 sm:h-9 w-auto aspect-square object-contain shrink-0 transition-transform group-hover:scale-105"
            />
          </button>

        </div>
      </header>

      {/* =========================================================================
          ACCESSIBLE FLOATING NAVIGATION OVERLAY PANEL
          Smoothly reveals directly beneath the top-left floating pill header.
         ========================================================================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 pointer-events-auto">
          {/* Subtle Dimming Backdrop */}
          <div 
            className="fixed inset-0 bg-[#293D55]/30 backdrop-blur-[3px] transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Navigation Menu Panel (Anchored to top-left beneath pill) */}
          <div 
            ref={menuRef}
            id="navigation-overlay-panel"
            className="fixed top-14 sm:top-16 left-3 sm:left-6 right-3 sm:right-auto sm:w-[380px] md:w-[400px] max-h-[calc(100dvh-76px)] bg-gradient-to-b from-white/98 via-[#FFFCF5]/95 to-white/98 backdrop-blur-2xl border-2 border-[#3478F6]/30 ring-1 ring-[#3478F6]/20 shadow-[0_24px_60px_rgba(41,61,85,0.18),_inset_0_1px_1px_rgba(255,255,255,0.95)] rounded-3xl p-4 sm:p-5 flex flex-col gap-3 overflow-hidden animate-in fade-in zoom-in-95 duration-200 will-change-transform z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Top specular reflection */}
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

            {/* Header: Title & Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-[#B9DEFF]/60 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <img
                  src="/acs_logo_official.png"
                  alt="ACS"
                  className="h-8 w-auto aspect-square object-contain flex-shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-xs font-black text-[#293D55]">Awasthi Consultancy</span>
                  <span className="text-[9px] font-bold text-[#3478F6] uppercase tracking-wider mt-0.5">Quick Directory</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-full text-[#4E6178] hover:text-[#293D55] hover:bg-[#EAF4FF] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <div className="space-y-1.5 overflow-y-auto max-h-[calc(100dvh-210px)] pr-1">
              
              {/* Home */}
              <button
                type="button"
                onClick={() => handleNav('')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[#293D55] hover:text-[#3478F6] hover:bg-[#EAF4FF] font-bold text-sm transition-all text-left group cursor-pointer"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-[#4E6178] group-hover:text-[#3478F6] group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* Services */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => handleNav('#services')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[#293D55] hover:text-[#3478F6] hover:bg-[#EAF4FF] font-bold text-sm transition-all text-left group cursor-pointer"
                >
                  <span>Services (23 Core Solutions)</span>
                  <ArrowRight className="w-4 h-4 text-[#4E6178] group-hover:text-[#3478F6] group-hover:translate-x-0.5 transition-all" />
                </button>

                {/* Sub-categories */}
                <div className="grid grid-cols-1 gap-1 pl-3 pt-0.5">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => handleCategoryClick(cat.key)}
                      className="px-3 py-1.5 text-xs text-[#4E6178] hover:text-[#3478F6] hover:bg-[#EAF4FF]/70 rounded-lg text-left transition-colors flex items-center justify-between cursor-pointer font-medium"
                    >
                      <span>{cat.label}</span>
                      <span className="text-[10px] text-[#3478F6]">→</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trusted by Our Customers */}
              <button
                type="button"
                onClick={() => handleNav('#reviews')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[#293D55] hover:text-[#3478F6] hover:bg-[#EAF4FF] font-bold text-sm transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>Trusted by Our Customers</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FEF9E7] text-[#92400E] border border-[#E5BC64]">
                    <Star className="w-3 h-3 fill-[#E5BC64] text-[#E5BC64]" />
                    4.9 ★
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#4E6178] group-hover:text-[#3478F6] group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* About ACS */}
              <button
                type="button"
                onClick={() => handleNav('#about')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[#293D55] hover:text-[#3478F6] hover:bg-[#EAF4FF] font-bold text-sm transition-all text-left group cursor-pointer"
              >
                <span>About ACS & Representative</span>
                <ArrowRight className="w-4 h-4 text-[#4E6178] group-hover:text-[#3478F6] group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* Contact Desk */}
              <button
                type="button"
                onClick={() => handleNav('#contact')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#3478F6] hover:bg-[#2457C5] text-white font-bold text-sm shadow-md shadow-[#3478F6]/25 transition-all text-left group cursor-pointer mt-1"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-all" />
              </button>

            </div>

            {/* Quick Action Footer in Panel: Direct Contacts */}
            <div className="pt-3 border-t border-[#B9DEFF]/60 flex items-center justify-between gap-2 text-xs text-[#4E6178] flex-shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 font-bold text-[#293D55] hover:text-[#3478F6] bg-[#EAF4FF] hover:bg-[#B9DEFF]/60 border border-[#B9DEFF] px-3 py-1.5 rounded-xl transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#3478F6]" />
                <span className="font-mono text-[11px]">{COMPANY_INFO.phones[0]}</span>
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0F766E] hover:text-[#134E4A] bg-[#E0F7F6] hover:bg-[#CCFBF1] border border-[#43B7B0]/60 px-2.5 py-1.5 rounded-xl transition-colors"
                title="Google Maps Location"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Bhopal Maps</span>
                <ExternalLink className="w-3 h-3 text-[#43B7B0]" />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
