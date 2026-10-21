import React from 'react';
import { 
  ArrowRight, 
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { HeroDocumentVisual } from './HeroDocumentVisual';

interface HeroSectionProps {
  onExploreServices: () => void;
  onRequestConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreServices, 
  onRequestConsultation 
}) => {
  return (
    <section 
      id="hero"
      className="relative pt-16 pb-6 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 bg-transparent overflow-hidden"
    >
      {/* =========================================================================
          BACKGROUND DECORATIVE ORGANIC WAVES & AMBIENT SHAPES
          Inspired by reference: soft ivory canvas, warm sage & olive curves, golden sand accents
         ========================================================================= */}
      
      {/* Top-Left Organic Sage Wave Shape */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-40 -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M-50 -50 C 150 -30, 280 80, 260 220 C 240 340, 100 380, -50 380 Z" 
            fill="url(#sage-gradient-tl)" 
          />
          <defs>
            <linearGradient id="sage-gradient-tl" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b4c2b0" stopOpacity="0.45" />
              <stop stopColor="#8d9f89" stopOpacity="0.15" />
              <stop stopColor="#FAF9F4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom-Right Layered Deep Olive & Golden Sand Organic Curves with Smooth Gradient Fade */}
      <div 
        className="absolute bottom-0 right-0 w-[340px] sm:w-[500px] lg:w-[650px] h-[260px] sm:h-[380px] lg:h-[480px] pointer-events-none z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 92%), linear-gradient(to left, black 0%, black 50%, transparent 98%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 92%), linear-gradient(to left, black 0%, black 50%, transparent 98%)',
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect'
        }}
      >
        <svg viewBox="0 0 650 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="sand-gradient-br" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d6c39f" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#d6c39f" stopOpacity="0.20" />
              <stop offset="80%" stopColor="#FAF9F4" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FAF9F4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sage-gradient-br" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#475949" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#475949" stopOpacity="0.30" />
              <stop offset="80%" stopColor="#FAF9F4" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FAF9F4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="olive-gradient-br" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#27382b" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#27382b" stopOpacity="0.40" />
              <stop offset="80%" stopColor="#FAF9F4" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FAF9F4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Golden Sand Wave Accent */}
          <path 
            d="M 220 480 C 280 360, 420 280, 650 240 L 650 480 Z" 
            fill="url(#sand-gradient-br)" 
          />
          {/* Muted Sage Middle Wave */}
          <path 
            d="M 290 480 C 350 370, 460 300, 650 270 L 650 480 Z" 
            fill="url(#sage-gradient-br)" 
          />
          {/* Deep Forest Olive Foreground Wave */}
          <path 
            d="M 370 480 C 420 390, 510 330, 650 305 L 650 480 Z" 
            fill="url(#olive-gradient-br)" 
          />
        </svg>
      </div>

      {/* Seamless Hero-to-Next-Section Canvas Transition Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-b from-transparent via-[#FAF9F4]/75 to-[#FAF9F4] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Subtle Natural Leaf Foliage Shadow (Top Right ambient overlay) */}
      <div className="absolute top-2 right-4 sm:top-6 sm:right-10 w-44 sm:w-64 h-44 sm:h-64 opacity-25 pointer-events-none mix-blend-multiply">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-950">
          <path d="M120 10 C140 40, 190 60, 200 100 C170 95, 140 80, 120 50 Z" fill="currentColor" />
          <path d="M140 45 C160 70, 185 105, 175 140 C155 125, 140 100, 135 70 Z" fill="currentColor" />
          <path d="M85 30 C110 50, 130 90, 120 120 C105 100, 95 70, 85 45 Z" fill="currentColor" />
        </svg>
      </div>

      {/* =========================================================================
          HERO CONTENT CONTAINER
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =======================================================================
            1. MOBILE HERO COMPOSITION (block lg:hidden)
            Strictly recreates the attached reference layout:
            - Top Row: Headline on Left (with red underline accent) & Illustration on Right
            - Description Paragraph full width underneath
            - 2 Vertically stacked CTA buttons
            - 3-Column horizontal Information Strip (23 Services | Layman | Bhopal Desk)
           ======================================================================= */}
        <div className="block lg:hidden text-left">
          
          {/* Top Row: Headline (Left) & Document Visual (Right) */}
          <div className="flex items-center justify-between gap-2 relative">
            
            {/* Left: Dominant Editorial Headline */}
            <div className="w-[53%] xs:w-[54%] flex-shrink-0 z-10">
              <h1 className="text-[25px] xs:text-[28px] font-black tracking-tight text-[#16324F] leading-[1.12]">
                <span className="block">Your</span>
                <span className="block">Business</span>
                <span className="block">Paperwork,</span>
                <span className="block text-[#2563EB] mt-0.5">Made Simpler.</span>
              </h1>
              {/* Primary Blue accent underline bar */}
              <div className="w-12 h-1 bg-[#2563EB] rounded-full mt-2" />
            </div>

            {/* Right: Actual Hero PNG Illustration with Botanical Foliage */}
            <div className="w-[47%] xs:w-[46%] relative flex items-center justify-end select-none">
              {/* Ambient Glow */}
              <div className="absolute -top-3 -right-2 w-28 xs:w-32 h-28 xs:h-32 bg-amber-200/25 rounded-full blur-xl pointer-events-none" />
              
              {/* Botanical Leaves Graphic matching reference */}
              <svg className="absolute -top-4 -right-1 w-28 xs:w-32 h-28 xs:h-32 pointer-events-none opacity-85 z-0" viewBox="0 0 120 120" fill="none">
                <path d="M70 20 C85 5, 105 15, 100 35 C95 55, 75 45, 70 20 Z" fill="#3D5A40" opacity="0.75" />
                <path d="M85 30 C105 25, 115 45, 105 60 C90 70, 80 50, 85 30 Z" fill="#587A5B" opacity="0.65" />
                <path d="M50 15 C65 2, 85 10, 80 28 C72 40, 58 30, 50 15 Z" fill="#4B6A4E" opacity="0.7" />
                <path d="M95 55 C110 50, 118 70, 108 82 C95 90, 88 72, 95 55 Z" fill="#344E37" opacity="0.6" />
              </svg>

              {/* Subtle blue connector lines and dots */}
              <svg className="absolute -top-2 right-12 w-16 h-16 pointer-events-none opacity-75 z-0" viewBox="0 0 60 60" fill="none">
                <circle cx="48" cy="12" r="3" fill="#2563EB" />
                <circle cx="12" cy="45" r="2.5" fill="#2563EB" opacity="0.8" />
                <path d="M48 12 Q30 20, 12 45" stroke="#2563EB" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.45" />
              </svg>

              {/* Actual Hero PNG Asset */}
              <img 
                src="/hero_accounting_illustration.png" 
                alt="Accounting paperwork, documents, calculator, and executive stationery"
                className="relative z-10 w-full max-w-[170px] xs:max-w-[195px] h-auto object-contain drop-shadow-md"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Supporting Paragraph full width underneath */}
          <p className="text-[12.5px] xs:text-[13px] text-[#5A6578] font-normal leading-relaxed mt-3.5">
            From tax filing and business registration to accounting and documentation, <strong className="text-[#16324F] font-semibold">Awasthi Consultancy Services</strong> helps you navigate essential paperwork with clearer guidance.
          </p>

          {/* 3 CTA Buttons: Explore Our Services, Discuss Your Requirement, and Visit Us */}
          <div className="space-y-2 mt-3.5">
            <button
              type="button"
              onClick={onExploreServices}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-[13px] xs:text-sm shadow-md shadow-[#2563EB]/25 active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              type="button"
              onClick={onRequestConsultation}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#EFF6FF] text-[#16324F] font-bold text-[13px] xs:text-sm border border-[#16324F]/20 shadow-2xs active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4 text-[#399A9A]" />
            </button>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#EFF6FF]/70 hover:bg-[#EFF6FF] text-[#16324F] font-bold text-[12.5px] xs:text-[13px] border border-[#DCEBFF] shadow-2xs active:scale-[0.99] transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#2563EB]" />
              <span>Visit Us (Google Maps)</span>
            </a>
          </div>

        </div>

        {/* =======================================================================
            2. DESKTOP HERO COMPOSITION (hidden lg:grid)
            Strictly preserved 100% untouched for PC/desktop viewport
           ======================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Headline, Supporting Copy, and CTAs */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-7 text-left">
            
            {/* Dominant Headline with brand accent */}
            <h1 className="text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-black tracking-tight text-[#16324F] leading-[1.12] animate-hero-fade-up">
              <span className="block lg:whitespace-nowrap">Your Business Paperwork,</span>
              <span className="block text-[#2563EB] mt-1.5">
                Made Simpler.
              </span>
            </h1>
            
            {/* Supporting Paragraph */}
            <p className="text-base md:text-lg text-[#667085] font-normal leading-relaxed max-w-xl animate-hero-fade-up motion-delay-100">
              From tax filing and business registration to accounting and documentation, <strong className="text-[#16324F] font-semibold">Awasthi Consultancy Services</strong> helps you navigate essential paperwork with clearer guidance.
            </p>

            {/* Action Buttons: Primary, Secondary, and Visit Us */}
            <div className="flex flex-row items-center gap-3 pt-1 animate-hero-fade-up motion-delay-150">
              
              {/* Primary CTA: Explore Our Services */}
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm md:text-base whitespace-nowrap shadow-md shadow-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/35 active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </button>

              {/* Secondary CTA: Discuss Your Requirement */}
              <button
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#EFF6FF] text-[#16324F] font-bold text-sm md:text-base whitespace-nowrap border border-[#16324F]/20 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4 text-[#399A9A] shrink-0" />
              </button>

              {/* Tertiary CTA: Visit Us with hyperlink to Google Maps */}
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#EFF6FF] text-[#16324F] font-bold text-sm md:text-base whitespace-nowrap border border-[#DCEBFF] hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer group"
              >
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 group-hover:scale-110 transition-transform" />
                <span>Visit Us</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: ENLARGED Static Document-Themed Visual (Clipboard, Paperwork, Pen) */}
          <div className="lg:col-span-4 xl:col-span-5 relative mt-0 flex justify-end animate-hero-fade-up motion-delay-100">
            <HeroDocumentVisual />
          </div>

        </div>

      </div>
    </section>
  );
};
