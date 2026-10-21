import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Building2, 
  Users2, 
  UtensilsCrossed, 
  Globe2, 
  CreditCard, 
  Receipt, 
  FileSpreadsheet, 
  Percent, 
  HeartHandshake, 
  ShieldAlert, 
  FileCheck2, 
  BookOpenCheck, 
  TrendingUp, 
  Scale, 
  GraduationCap, 
  BarChart3, 
  KeyRound, 
  Compass, 
  FileBadge, 
  FileCheck, 
  Home, 
  Car, 
  BriefcaseBusiness, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  PhoneCall, 
  HelpCircle,
  FileText,
  Sparkles,
  QrCode
} from 'lucide-react';
import { SERVICES_CATALOG, SERVICE_CATEGORIES, COMPANY_INFO } from '../data';
import type { ServiceCategoryKey, ServiceItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
  </svg>
);

interface OurServicesSectionProps {
  onRequestConsultation?: (serviceTitle: string) => void;
  selectedServiceToExpand?: string | null;
  onClearExpandedService?: () => void;
}

export const OurServicesSection: React.FC<OurServicesSectionProps> = ({ 
  onRequestConsultation,
  selectedServiceToExpand,
  onClearExpandedService
}) => {
  const { ref: sectionRef } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalService, setModalService] = useState<ServiceItem | null>(null);
  const [isUpiModalOpen, setIsUpiModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling while any modal is open
  useEffect(() => {
    if (modalService || isUpiModalOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [modalService, isUpiModalOpen]);

  // Handle Escape key to close modals
  useEffect(() => {
    if (!modalService && !isUpiModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modalService) {
          setModalService(null);
          if (onClearExpandedService) onClearExpandedService();
        }
        if (isUpiModalOpen) {
          setIsUpiModalOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalService, isUpiModalOpen, onClearExpandedService]);

  // Reset scroll container position when category or search changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeCategory, searchQuery]);

  // Sync external request to expand/view service (from Hero or navigation)
  const [prevSelected, setPrevSelected] = useState(selectedServiceToExpand);
  if (selectedServiceToExpand !== prevSelected) {
    setPrevSelected(selectedServiceToExpand);
    if (selectedServiceToExpand) {
      const match = SERVICES_CATALOG.find(
        s => s.id === selectedServiceToExpand || s.title.toLowerCase().includes(selectedServiceToExpand.toLowerCase())
      );
      if (match) {
        setActiveCategory(match.category);
        setModalService(match);
      }
    }
  }

  const filteredServices = useMemo(() => {
    return SERVICES_CATALOG.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.shortDesc.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) || 
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getServiceIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case 'Building2': return <Building2 className={className} />;
      case 'Users2': return <Users2 className={className} />;
      case 'UtensilsCrossed': return <UtensilsCrossed className={className} />;
      case 'Globe2': return <Globe2 className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Receipt': return <Receipt className={className} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={className} />;
      case 'Percent': return <Percent className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'FileCheck2': return <FileCheck2 className={className} />;
      case 'BookOpenCheck': return <BookOpenCheck className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Scale': return <Scale className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'BarChart3': return <BarChart3 className={className} />;
      case 'KeyRound': return <KeyRound className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'FileBadge': return <FileBadge className={className} />;
      case 'FileCheck': return <FileCheck className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Car': return <Car className={className} />;
      case 'BriefcaseBusiness': return <BriefcaseBusiness className={className} />;
      default: return <FileText className={className} />;
    }
  };

  const getCategoryTheme = (catKey: ServiceCategoryKey) => {
    switch (catKey) {
      case 'registration':
        return {
          pill: 'bg-[#E4F5E8] text-[#196B66] border-[#A9D6B0]',
          dot: 'bg-[#10B981]',
          accent: 'text-[#196B66]',
          hoverBg: 'hover:bg-[#E4F5E8]/60'
        };
      case 'taxation':
        return {
          pill: 'bg-[#EAF4FF] text-[#1E40AF] border-[#B9DEFF]',
          dot: 'bg-[#3478F6]',
          accent: 'text-[#3478F6]',
          hoverBg: 'hover:bg-[#EAF4FF]/80'
        };
      case 'accounting':
        return {
          pill: 'bg-[#E0F7F6] text-[#0F766E] border-[#43B7B0]/60',
          dot: 'bg-[#43B7B0]',
          accent: 'text-[#43B7B0]',
          hoverBg: 'hover:bg-[#E0F7F6]/60'
        };
      case 'documentation':
        return {
          pill: 'bg-[#EFEAFF] text-[#6B21A8] border-[#DDD6FE]',
          dot: 'bg-[#8B5CF6]',
          accent: 'text-[#7C3AED]',
          hoverBg: 'hover:bg-[#EFEAFF]/60'
        };
      case 'loans':
        return {
          pill: 'bg-[#FEF9E7] text-[#92400E] border-[#E5BC64]',
          dot: 'bg-[#E5BC64]',
          accent: 'text-[#B45309]',
          hoverBg: 'hover:bg-[#FEF9E7]/70'
        };
    }
  };

  const activeCategoryObject = SERVICE_CATEGORIES.find(c => c.key === activeCategory);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 bg-transparent relative"
      aria-label="Services Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================================
            DESKTOP & MOBILE EDITORIAL ASYMMETRICAL DIRECTORY
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* =======================================================================
              LEFT SIDE: Section Header & Sticky Category Navigation (approx 33% width)
             ======================================================================= */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24 space-y-4 sm:space-y-5">
            
            {/* Header Lockup with ACS Brand Emblem */}
            <div className="space-y-3 sm:space-y-3.5">
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-2.5 min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#3478F6]/30 text-[#3478F6] text-xs font-bold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Our Practice Areas</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#293D55] tracking-tight leading-[1.2] sm:leading-[1.18]">
                    Services Offered
                  </h2>
                </div>

                {/* ACS Brand Logo Emblem */}
                <div className="shrink-0 flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white border border-[#B9DEFF] shadow-xs hover:shadow-sm transition-all mr-4 sm:mr-8 lg:mr-5 -translate-x-2 sm:-translate-x-3">
                  <img
                    src="/acs_logo_official.png"
                    alt="Awasthi Consultancy Services (ACS) Official Brand Logo"
                    className="w-[86px] h-[86px] sm:w-[104px] sm:h-[104px] lg:w-[104px] lg:h-[104px] object-contain aspect-square select-none drop-shadow-xs"
                    loading="eager"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-base text-[#4E6178] font-normal leading-relaxed pt-0.5 sm:pt-1">
                From statutory registrations and tax compliance to balance sheets and loan dossiers, Awasthi Consultancy Services helps individuals and businesses navigate paperwork with clarity and accuracy.
              </p>
            </div>

            {/* Quick Keyword Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3478F6]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. GST, Gumasta, ITR, CMA)..."
                className="w-full pl-10 pr-9 py-2.5 sm:py-2 rounded-xl bg-white border-2 border-[#B9DEFF] text-[#293D55] text-base sm:text-sm font-medium placeholder:text-[#4E6178]/60 focus:outline-none focus:border-[#3478F6] focus:ring-2 focus:ring-[#3478F6]/20 shadow-2xs transition-all"
                aria-label="Filter services by keyword"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Desktop Category Navigation List (Hidden on Mobile, replaced by mobile rail) */}
            <div className="hidden lg:block space-y-1 pt-0.5" role="tablist" aria-label="Practice Categories">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#4E6178] px-3 pb-1">
                Browse Directory
              </div>

              {/* All Services Tab */}
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={`w-full flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl text-left text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#3478F6] text-white shadow-md shadow-[#3478F6]/25'
                    : 'text-[#4E6178] hover:text-[#293D55] hover:bg-[#EAF4FF]'
                }`}
              >
                <span>All Practice Areas</span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  activeCategory === 'all' ? 'bg-white/20 text-white font-black' : 'bg-[#EAF4FF] text-[#3478F6] font-bold'
                }`}>
                  {SERVICES_CATALOG.length}
                </span>
              </button>

              {/* 5 Distinct Categories */}
              {SERVICE_CATEGORIES.map((cat, index) => {
                const count = SERVICES_CATALOG.filter(s => s.category === cat.key).length;
                const isSelected = activeCategory === cat.key;
                
                return (
                  <button
                    key={cat.key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`w-full flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl text-left text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-l-4 border-[#3478F6] text-[#293D55] shadow-xs'
                        : 'text-[#4E6178] hover:text-[#293D55] hover:bg-[#EAF4FF]'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[11px] font-mono text-[#3478F6]">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <span className="truncate">{cat.label}</span>
                    </div>

                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0 ${
                      isSelected ? 'bg-[#EAF4FF] text-[#3478F6] font-black' : 'bg-slate-100 text-[#4E6178]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Direct Consultation Desk Prompt */}
            <div className="hidden lg:block p-3.5 rounded-xl bg-white border border-[#B9DEFF] shadow-2xs space-y-2">
              <div className="text-xs font-bold text-[#293D55]">
                Need urgent compliance advice?
              </div>
              <p className="text-[11px] text-[#4E6178] leading-relaxed">
                Direct consultation with Mr. Pankaj Awasthi for prompt paperwork evaluation.
              </p>
              <div className="flex flex-col gap-1.5 pt-0.5">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3478F6] hover:text-[#2457C5] transition-colors pt-0.5 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#3478F6]" />
                  <span>Call {COMPANY_INFO.phones[0]}</span>
                </a>
                <a
                  href="https://wa.me/919165894496?text=Hello%20Mr.%20Pankaj%20Awasthi%2C%20I%20need%20urgent%20advice%20regarding%20taxation%2Fcompliance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors pt-0.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsUpiModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3478F6] hover:text-[#2457C5] transition-colors pt-0.5 cursor-pointer text-left"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#3478F6]" />
                  <span>Pay via Paytm / PhonePe</span>
                </button>
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT SIDE: Interactive Editorial Service Directory Rows (approx 67% width)
             ======================================================================= */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-4">
            
            {/* Mobile Category Responsive Wrap Selector */}
            <div className="lg:hidden space-y-2">
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#4E6178] px-0.5">
                <span>Select Category:</span>
                <span>{filteredServices.length} Services</span>
              </div>

              <div 
                className="flex flex-wrap items-center gap-1.5 sm:gap-2" 
                role="tablist"
                aria-label="Filter services by category"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === 'all'}
                  onClick={() => setActiveCategory('all')}
                  className={`px-2.5 py-1.5 xs:px-3 rounded-xl text-[11px] xs:text-xs font-bold transition-all duration-150 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#3478F6] text-white shadow-xs'
                      : 'bg-white text-[#293D55] border border-[#B9DEFF] hover:bg-[#EAF4FF]'
                  }`}
                >
                  All ({SERVICES_CATALOG.length})
                </button>

                {SERVICE_CATEGORIES.map(cat => {
                  const count = SERVICES_CATALOG.filter(s => s.category === cat.key).length;
                  const isSelected = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`px-2 py-1.5 xs:px-2.5 rounded-xl text-[11px] xs:text-xs font-bold transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#3478F6] text-white shadow-xs'
                          : 'bg-white text-[#293D55] border border-[#B9DEFF] hover:bg-[#EAF4FF]'
                      }`}
                    >
                      {cat.shortLabel} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Mobile Urgent Advice Direct Prompt */}
              <div className="p-2.5 rounded-xl bg-white border border-[#B9DEFF] shadow-2xs flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] font-bold text-[#293D55]">
                  Need urgent compliance advice?
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3478F6] hover:text-[#2457C5] transition-colors"
                  >
                    <PhoneCall className="w-3 h-3 text-[#3478F6]" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/919165894496?text=Hello%20Mr.%20Pankaj%20Awasthi%2C%20I%20need%20urgent%20advice%20regarding%20taxation%2Fcompliance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <WhatsAppIcon className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsUpiModalOpen(true)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3478F6] hover:text-[#2457C5] transition-colors cursor-pointer"
                  >
                    <QrCode className="w-3 h-3 text-[#3478F6]" />
                    <span>Pay via Paytm / PhonePe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Directory Filter / Status Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#B9DEFF] text-xs font-medium text-[#4E6178]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#293D55]">
                  {activeCategory === 'all' ? 'All Practice Areas' : activeCategoryObject?.label}
                </span>
                <span>•</span>
                <span>{filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'}</span>
              </div>

              {(activeCategory !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-[#3478F6] hover:text-[#2457C5] font-bold transition-colors cursor-pointer"
                >
                  View All Services
                </button>
              )}
            </div>

            {/* Editorial Directory Table / Rows with Alternating Pale Blue, Fresh Mint, and Ivory Surfaces */}
            <div className="bg-white rounded-xl sm:rounded-3xl border-2 border-[#B9DEFF]/70 shadow-2xs overflow-hidden relative">
              <div 
                ref={scrollContainerRef}
                className="max-h-[500px] sm:max-h-[700px] lg:max-h-[756px] overflow-y-auto overscroll-contain divide-y divide-[#DCE6F2] services-scrollbar focus:outline-none"
                tabIndex={0}
                role="region"
                aria-label="Practice Services Directory"
              >
              
              {filteredServices.map((service, index) => {
                const theme = getCategoryTheme(service.category);
                const surfaceBg = index % 3 === 0 
                  ? 'bg-white' 
                  : index % 3 === 1 
                    ? 'bg-[#EAF4FF]/50' 
                    : 'bg-[#E4F5E8]/40';

                return (
                  <article
                    key={service.id}
                    id={`service-${service.id}`}
                    className={`transition-colors duration-200 ${surfaceBg} hover:bg-[#EAF4FF]`}
                  >
                    {/* Primary Clickable Editorial Row */}
                    <button
                      type="button"
                      onClick={() => setModalService(service)}
                      className="w-full text-left p-3 sm:p-4 sm:px-5 flex items-start sm:items-center justify-between gap-2.5 sm:gap-4 group cursor-pointer focus:outline-none focus-visible:bg-[#EAF4FF]"
                      aria-haspopup="dialog"
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        
                        {/* Restrained Mono Service Number */}
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#4E6178] group-hover:text-[#3478F6] transition-colors w-6 sm:w-7 flex-shrink-0 pt-0.5 sm:pt-0">
                          {service.num}
                        </span>

                        {/* Subtle Category/Service Icon */}
                        <div className={`hidden sm:flex items-center justify-center w-7 h-7 rounded-lg ${theme.pill} flex-shrink-0 transition-transform group-hover:scale-105 shadow-2xs`}>
                          {getServiceIcon(service.icon, "w-3.5 h-3.5")}
                        </div>

                        {/* Service Title and Short Description */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                            <h3 className="text-xs sm:text-base font-bold text-[#293D55] group-hover:text-[#3478F6] transition-colors">
                              {service.title}
                            </h3>

                            {/* Category Micro Badge */}
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border ${theme.pill}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                              <span>{service.categoryLabel}</span>
                            </span>
                          </div>

                          <p className="text-[11px] sm:text-sm text-[#4E6178] font-normal leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-1">
                            {service.shortDesc}
                          </p>
                        </div>

                      </div>

                      {/* Right Indicator / Details Button */}
                      <div className="flex items-center gap-2 flex-shrink-0 pt-0.5 sm:pt-0">
                        <span className="hidden sm:inline-block text-xs font-bold text-[#4E6178] group-hover:text-[#3478F6] transition-colors">
                          Details
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-200 bg-[#EAF4FF] border-[#B9DEFF] text-[#3478F6] group-hover:border-[#3478F6] group-hover:bg-[#3478F6] group-hover:text-white group-hover:scale-105 shadow-2xs">
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </div>
                      </div>

                    </button>
                  </article>
                );
              })}

              {/* Empty Search / Filter State */}
              {filteredServices.length === 0 && (
                <div className="p-8 sm:p-12 text-center space-y-3">
                  <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
                  <div className="text-sm font-bold text-[#293D55]">
                    No services matched "{searchQuery}"
                  </div>
                  <p className="text-xs text-[#4E6178] max-w-sm mx-auto">
                    Try searching for common terms like GST, Gumasta, ITR, Balance Sheet, or Loan assistance.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3478F6] hover:bg-[#2457C5] text-white text-xs font-bold cursor-pointer transition-colors shadow-xs"
                  >
                    <span>Reset Directory Filter</span>
                  </button>
                </div>
              )}

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Service Description Pop-up Modal */}
      {modalService && (
        <div 
          className="fixed inset-0 z-50 bg-[#293D55]/65 backdrop-blur-xs flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => {
            setModalService(null);
            if (onClearExpandedService) onClearExpandedService();
          }}
        >
          <div 
            className="relative bg-white rounded-2xl sm:rounded-3xl border-2 border-[#3478F6]/30 shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-scaleUp my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setModalService(null);
                if (onClearExpandedService) onClearExpandedService();
              }}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-[#EAF4FF] hover:bg-[#B9DEFF] text-[#293D55] hover:text-[#3478F6] flex items-center justify-center transition-colors cursor-pointer z-20 border border-[#B9DEFF]"
              aria-label="Close service details modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Scrollable Content Container */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-4 sm:space-y-5 services-scrollbar">
              
              {/* Header Lockup: Genuine Transparent ACS Logo, Category Badge, Title */}
              <div className="text-left sm:text-center pt-1 sm:pt-2">
                {/* Genuine ACS Logo with Transparent Background - STRICTLY NO BORDER/OUTLINE/BOX/BADGE */}
                {/* Positioned upper-left on mobile aligned with modal padding, centered on desktop */}
                <img
                  src="/acs_logo_transparent.png"
                  alt="Awasthi Consultancy Services (ACS)"
                  className="w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] object-contain block mr-auto sm:mx-auto mb-2.5 sm:mb-3 select-none aspect-square"
                  loading="eager"
                />

                {/* Number & Category Badge */}
                <div className="flex items-center justify-start sm:justify-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#4E6178]">
                    #{modalService.num}
                  </span>
                  {(() => {
                    const theme = getCategoryTheme(modalService.category);
                    return (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${theme.pill}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                        <span>{modalService.categoryLabel}</span>
                      </span>
                    );
                  })()}
                </div>

                <h3 id="service-modal-title" className="text-xl sm:text-2xl font-black text-[#293D55] tracking-tight leading-snug text-left sm:text-center">
                  {modalService.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4E6178] font-normal mt-1 sm:max-w-lg sm:mx-auto leading-relaxed text-left sm:text-center">
                  {modalService.shortDesc}
                </p>
              </div>

              {/* Full Overview Description */}
              <div className="pt-2 border-t border-[#B9DEFF]/60">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#3478F6] mb-1">
                  Overview
                </div>
                <p className="text-xs sm:text-sm text-[#293D55] leading-relaxed">
                  {modalService.description}
                </p>
              </div>

              {/* Two Columns: Scope of Assistance & Required Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                
                {/* Scope of Assistance */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#E4F5E8]/60 border border-[#A9D6B0]/60 space-y-2">
                  <div className="text-xs font-bold text-[#196B66] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Scope of Assistance</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#293D55]/90">
                    {modalService.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-snug">
                        <span className="text-[#10B981] font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Documents Commonly Required */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#EAF4FF]/60 border border-[#B9DEFF] space-y-2">
                  <div className="text-xs font-bold text-[#1E40AF] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#3478F6]" />
                    <span>Commonly Required Documents</span>
                  </div>
                  {modalService.documentsRequired && modalService.documentsRequired.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {modalService.documentsRequired.map((doc, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-lg bg-white border border-[#B9DEFF] text-[#293D55] text-[11px] font-medium shadow-2xs"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[#4E6178]">
                      Contact our desk for the precise document checklist based on your entity constitution.
                    </p>
                  )}
                </div>

              </div>

              {/* Who Needs This Guidance Banner */}
              {modalService.whoNeedsThis && (
                <div className="text-xs text-[#293D55] bg-[#FEF9E7] border border-[#E5BC64]/70 rounded-xl p-3 flex items-start gap-2">
                  <strong className="text-[#92400E] font-bold flex-shrink-0">Who needs this:</strong>
                  <span>{modalService.whoNeedsThis}</span>
                </div>
              )}

              {/* Action Row: Direct Inquire & Phone Call */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#B9DEFF]/60">
                <p className="text-[11px] text-[#4E6178] italic">
                  * Final statutory grant/approval subject to competent government authority review.
                </p>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#EAF4FF] hover:bg-[#B9DEFF]/60 text-[#293D55] text-xs font-bold transition-colors cursor-pointer border border-[#B9DEFF]"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#3478F6]" />
                    <span>Call Desk</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      if (onRequestConsultation) {
                        onRequestConsultation(modalService.title);
                      }
                      setModalService(null);
                      if (onClearExpandedService) onClearExpandedService();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#3478F6] hover:bg-[#2457C5] text-white text-xs font-bold shadow-md shadow-[#3478F6]/25 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Inquire for {modalService.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Pay via UPI (Paytm & PhonePe) Modal Popup */}
      {isUpiModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#293D55]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="upi-modal-title"
          onClick={() => setIsUpiModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-5 sm:p-7 max-w-sm w-full border-2 border-[#B9DEFF] shadow-2xl relative text-center animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsUpiModalOpen(false)}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#EAF4FF] hover:bg-[#B9DEFF] text-[#293D55] hover:text-[#3478F6] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close UPI Payment modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon Badge */}
            <div className="w-10 h-10 rounded-full bg-[#EAF4FF] border border-[#3478F6]/30 flex items-center justify-center text-[#3478F6] mb-3 mx-auto shadow-2xs">
              <QrCode className="w-5 h-5" />
            </div>

            {/* Modal Heading */}
            <h3 id="upi-modal-title" className="text-xl font-black text-[#293D55] tracking-tight">
              Pay via UPI
            </h3>

            {/* Subtitle / Instructions */}
            <p className="text-xs text-[#4E6178] font-medium mt-1">
              Scan the QR code using Paytm, PhonePe, Google Pay, or any UPI app.
            </p>

            {/* QR Code Container */}
            <div className="mt-4 p-3 bg-white rounded-2xl border-2 border-[#B9DEFF] shadow-2xs inline-block">
              <img 
                src="/upi_qr.jpg" 
                alt="Scan to pay via Paytm, PhonePe or any UPI app" 
                className="w-52 h-52 sm:w-56 sm:h-56 object-contain rounded-xl block mx-auto aspect-square select-none"
              />
            </div>

            {/* Supported Apps */}
            <div className="mt-3 text-[11px] text-[#4E6178] font-medium">
              Paytm • PhonePe • Google Pay • BHIM • Any UPI App
            </div>

            <button
              type="button"
              onClick={() => setIsUpiModalOpen(false)}
              className="mt-4 w-full py-2.5 rounded-xl bg-[#3478F6] hover:bg-[#2457C5] text-white text-xs font-bold shadow-md shadow-[#3478F6]/25 transition-colors cursor-pointer"
            >
              Done / Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
