import React from 'react';
import { 
  FileText, 
  Calculator, 
  Building2, 
  Folder 
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutOwnerSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section 
      id="about-owner" 
      aria-label="About the Owner"
      className="pt-6 pb-2 sm:pt-12 sm:pb-4 bg-transparent"
    >
      <div className="max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`relative bg-gradient-to-b from-[#EFF6FF]/60 via-white to-[#FAF9F4] rounded-3xl p-6 sm:p-9 border border-[#DCEBFF] ring-1 ring-[#D6B36A]/20 shadow-sm transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Top Circular Portrait with Blue & Golden Ring with Ambient Aura */}
          <div className="flex justify-center -mt-1 sm:-mt-2 mb-4 sm:mb-5">
            <div className="relative">
              {/* Soft blue/gold radial aura behind the circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2563EB]/15 via-[#D6B36A]/15 to-[#399A9A]/15 blur-xl scale-110 pointer-events-none" />
              
              {/* Circular portrait container */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[2.5px] border-[#2563EB]/80 ring-2 ring-[#D6B36A]/30 bg-slate-100 shadow-md">
                <img
                  src="/owner.png"
                  alt="Mr. Pankaj Awasthi"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Name & Title Header */}
          <div className="text-center space-y-1 mb-4 sm:mb-5">
            <h2 className="text-2xl sm:text-3xl font-black text-[#16324F] tracking-tight">
              Mr. Pankaj Awasthi
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#399A9A]">
              Founder & Principal Consultant
            </p>
          </div>

          {/* Body Narrative matching exact text */}
          <p className="text-[13px] sm:text-[14.5px] text-[#475569] leading-relaxed font-normal text-left sm:text-center max-w-xl mx-auto mb-5 sm:mb-6">
            With over <strong className="text-[#16324F] font-bold">25 years of hands-on practice</strong> in commercial administration and taxation, Mr. Pankaj Awasthi leads Awasthi Consultancy Services as a dedicated, client-first partner for individuals, traders, and businesses. Having successfully handled <strong className="text-[#2563EB] font-bold">1,000+ Income Tax Return (ITR) filings</strong>, he brings dependable clarity to complex statutory compliance.
          </p>

          {/* Thin Horizontal Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#DCEBFF] to-transparent w-full mb-4 sm:mb-5" />

          {/* Core Expertise Section */}
          <div className="space-y-3">
            {/* Heading with small blue vertical bar */}
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-3.5 rounded-full bg-[#2563EB]" />
              <span className="text-[11px] font-bold tracking-wider text-[#16324F] uppercase">
                CORE EXPERTISE
              </span>
            </div>

            {/* Multicoloured Refined Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DCEBFF] text-[#16324F] text-xs font-semibold shadow-2xs">
                <FileText className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Tax Filing & Planning</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F1E6] border border-[#A8C3A0]/60 text-[#16324F] text-xs font-semibold shadow-2xs">
                <Calculator className="w-3.5 h-3.5 text-[#399A9A] shrink-0" />
                <span>Accounting & Bookkeeping</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DCEBFF] text-[#16324F] text-xs font-semibold shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Business Registration (Gumasta & GST)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50/90 border border-[#D6B36A]/40 text-[#16324F] text-xs font-semibold shadow-2xs">
                <Folder className="w-3.5 h-3.5 text-[#D6B36A] shrink-0" />
                <span>Documentation & Loan CMA Reports</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
