import React from 'react';
import { 
  Award, 
  FileCheck2, 
  ShieldCheck, 
  MapPin,
  Calendar
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutOwnerSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section 
      id="about-owner" 
      aria-label="About the Owner — Mr. Pankaj Awasthi"
      className="pt-8 pb-4 sm:pt-14 sm:pb-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative bg-white/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#E7E5E0] shadow-2xs hover:shadow-xs transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Left Column: Portrait & Badge */}
            <div className="lg:col-span-4 flex flex-col items-center sm:flex-row lg:flex-col gap-4 text-center sm:text-left lg:text-center">
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-2 border-[#C9272C]/30 shadow-md bg-gradient-to-b from-slate-100 to-slate-200 ring-4 ring-[#C9272C]/10">
                  <img
                    src="/owner.png"
                    alt="Mr. Pankaj Awasthi — Owner of Awasthi Consultancy Services"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Verified Owner Pill */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#202A35] text-white text-[10px] font-bold shadow-xs whitespace-nowrap">
                  <ShieldCheck className="w-3 h-3 text-[#C9272C]" />
                  <span>Owner & Principal</span>
                </div>
              </div>

              <div className="space-y-1 pt-1.5 sm:pt-0 lg:pt-2 min-w-0">
                <h3 className="text-lg sm:text-xl font-black text-[#202A35] tracking-tight leading-tight">
                  Mr. Pankaj Awasthi
                </h3>
                <p className="text-xs font-semibold text-[#667085]">
                  Founder & Principal Consultant
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] text-[#C9272C] font-semibold">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>Bhopal Commercial Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Credentials & Expertise */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 text-[#C9272C] text-[11px] font-bold uppercase tracking-wider border border-rose-200/70">
                <Award className="w-3 h-3 text-[#C9272C]" />
                <span>Leadership & Practice Head</span>
              </div>

              {/* Bio Summary Paragraph */}
              <p className="text-xs sm:text-sm text-[#475467] leading-relaxed font-normal">
                With over <strong className="text-[#202A35] font-bold">25+ years of hands-on practice</strong> in commercial administration and taxation, <strong className="text-[#202A35] font-semibold">Mr. Pankaj Awasthi</strong> leads Awasthi Consultancy Services as a dedicated, client-first partner for individuals, traders, and businesses. Having successfully handled <strong className="text-[#202A35] font-bold">1,000+ Income Tax Return (ITR) filings</strong>, he brings dependable clarity to complex statutory compliance.
              </p>

              {/* Two Highlight Cards: 25+ Years Experience & 1,000+ ITR Filings */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E7E5E0] flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200/80 text-[#C9272C] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-black text-[#202A35] font-mono leading-none">
                      25+ Years
                    </div>
                    <div className="text-[10.5px] sm:text-xs font-semibold text-[#667085] truncate mt-0.5">
                      Professional Practice
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E7E5E0] flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-700 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-black text-[#202A35] font-mono leading-none">
                      1,000+ Filings
                    </div>
                    <div className="text-[10.5px] sm:text-xs font-semibold text-[#667085] truncate mt-0.5">
                      ITR & Tax Cases
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Expertise Scope Strip */}
              <div className="pt-1 border-t border-[#E7E5E0]/70 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#344054]">
                <span className="font-bold text-[#202A35]">Core Expertise:</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                  Tax Filing & Planning
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                  Accounting & Bookkeeping
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                  Business Registration (Gumasta & GST)
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                  Documentation & Loan CMA Reports
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
