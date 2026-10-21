import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { SiteBackground } from './components/SiteBackground';
import { HeroSection } from './components/HeroSection';
import { OurServicesSection } from './components/OurServicesSection';
import { AboutOwnerSection } from './components/AboutOwnerSection';
import { PayViaUPISection } from './components/PayViaUPISection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { AboutCompanySection } from './components/AboutCompanySection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { scrollToTop } from './utils/scrollToTop';

export const App: React.FC = () => {
  const [selectedServiceToExpand, setSelectedServiceToExpand] = useState<string | null>(null);
  const [leadInitialService, setLeadInitialService] = useState<string | undefined>(undefined);

  // Handle URL hash navigation
  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handleNavigation);
    const timer = setTimeout(handleNavigation, 100);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      clearTimeout(timer);
    };
  }, []);

  const navigateToHome = useCallback((targetHash?: string, skipScroll = false) => {
    const url = targetHash ? `/${targetHash}` : '/';
    window.history.pushState({}, '', url);

    if (targetHash && !skipScroll) {
      setTimeout(() => {
        const id = targetHash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (!targetHash) {
      scrollToTop();
    }
  }, []);

  const handleSelectService = useCallback((serviceId: string) => {
    navigateToHome('#services', true);
    setSelectedServiceToExpand(serviceId);
  }, [navigateToHome]);

  const handleExploreServices = useCallback(() => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleRequestConsultation = useCallback((serviceTitle?: string) => {
    if (serviceTitle) {
      setLeadInitialService(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F4] text-[#29332F] selection:bg-[#2563EB] selection:text-white font-sans flex flex-col overflow-x-hidden relative">
      {/* Continuous 3-Layer Architectural Background System */}
      <SiteBackground />

      {/* 1. Global Navigation Bar */}
      <Navbar 
        onNavigateHome={navigateToHome}
        onSelectService={handleSelectService}
      />

      <main className="flex-1 relative z-10">
        {/* 2. Hero Section with Clean Static Layout */}
        <HeroSection 
          onExploreServices={handleExploreServices}
          onRequestConsultation={() => handleRequestConsultation()}
        />

        {/* 3. All 23 Services with 5 Color-Coded Categories & Search */}
        <OurServicesSection 
          onRequestConsultation={(title) => handleRequestConsultation(title)}
          selectedServiceToExpand={selectedServiceToExpand}
          onClearExpandedService={() => setSelectedServiceToExpand(null)}
        />

        {/* 4. About the Owner — Mr. Pankaj Awasthi */}
        <AboutOwnerSection />

        {/* Pay via UPI */}
        <PayViaUPISection />

        {/* 5. Google Maps Reviews — Genuine Social Proof */}
        <GoogleReviewsSection />

        {/* 5. About Awasthi Consultancy Services & Mr. Pankaj Awasthi */}
        <AboutCompanySection />

        {/* 6. Lead Capture & Inquiry Form (with unconfigured email fallback) */}
        <LeadCaptureSection 
          initialService={leadInitialService}
        />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 8. Corporate & Floating Footer */}
      <Footer onNavigateHome={navigateToHome} />

      {/* 9. Dedicated Back-to-Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
