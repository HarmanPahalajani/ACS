import React from 'react';
import { 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Sparkles,
  MessageSquareHeart,
  Zap
} from 'lucide-react';
import { COMPANY_INFO, ACS_VALUES } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutCompanySection: React.FC = () => {
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-8 sm:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Card */}
        <div 
          ref={overviewRef}
          className={`bg-white border-2 border-[#B9DEFF]/70 rounded-xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-xs mb-4 sm:mb-8 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#EAF4FF] text-[#3478F6] text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#3478F6]/30">
                <Building2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#3478F6]" />
                <span>About Awasthi Consultancy Services</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#293D55] tracking-tight leading-snug sm:leading-tight">
                Your Trusted Partner for Accounting & Paperwork in Bhopal
              </h2>

              <p className="text-xs sm:text-sm text-[#4E6178] leading-relaxed font-normal">
                Founded with a mission to simplify commercial administration, <strong className="text-[#293D55] font-semibold">Awasthi Consultancy Services (ACS)</strong> provides approachable, client-first consultancy in accounting, taxation, registrations, and official documentation for individuals and businesses across Madhya Pradesh.
              </p>

              <p className="text-xs sm:text-sm text-[#4E6178] leading-relaxed">
                Led by <strong className="text-[#293D55] font-semibold">{COMPANY_INFO.representative}</strong>, our team breaks down complex statutory codes into plain, understandable steps. Whether you need a local Gumasta license for your shop, monthly GST returns filed without errors, an Income Tax Return (ITR) planned to save tax, or a CMA report for a bank loan, we ensure smooth, timely execution.
              </p>

              {/* Office Details Card */}
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#FFFCF5] border-2 border-[#B9DEFF]/60 flex items-start gap-2 sm:gap-2.5">
                <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#3478F6] flex-shrink-0 mt-0.5" />
                <div className="text-[11px] sm:text-xs text-[#293D55] leading-relaxed">
                  <span className="font-bold text-[#293D55] block mb-0.5">Physical Office Location:</span>
                  {COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} – {COMPANY_INFO.pincode}
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-0.5 sm:pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#3478F6] hover:bg-[#2457C5] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#3478F6]/25 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-white" />
                  <span>Call Mr. Pankaj Awasthi: {COMPANY_INFO.phones[0]}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Infographic Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-2 sm:gap-3.5">
              
              <div className="p-3 sm:p-4 rounded-xl bg-[#EAF4FF] border-2 border-[#B9DEFF] shadow-2xs space-y-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#3478F6] text-white flex items-center justify-center font-bold shadow-2xs">
                  <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="text-lg sm:text-2xl font-black text-[#293D55]">100%</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#293D55]">Accurate Filings</div>
                <p className="text-[9.5px] sm:text-[10px] text-[#4E6178] leading-tight">Error-free GST, ITR, and returns with zero penalties</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#FEF9E7] border-2 border-[#E5BC64] shadow-2xs space-y-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E5BC64] text-white flex items-center justify-center font-bold shadow-2xs">
                  <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="text-lg sm:text-2xl font-black text-[#293D55]">4.9 ★</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#293D55]">Google Rating</div>
                <p className="text-[9.5px] sm:text-[10px] text-[#4E6178] leading-tight">Over 130+ Reviews on Google</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#E4F5E8] border-2 border-[#A9D6B0] shadow-2xs space-y-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#43B7B0] text-white flex items-center justify-center font-bold shadow-2xs">
                  <UserCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="text-lg sm:text-2xl font-black text-[#293D55]">23+</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#293D55]">Services Offered</div>
                <p className="text-[9.5px] sm:text-[10px] text-[#4E6178] leading-tight">From Shop Gumasta to Bank CMA Reports</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#FFFCF5] border-2 border-[#B9DEFF] shadow-2xs space-y-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#293D55] text-white flex items-center justify-center font-bold shadow-2xs">
                  <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="text-lg sm:text-2xl font-black text-[#293D55]">Fast</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#293D55]">Turnaround</div>
                <p className="text-[9.5px] sm:text-[10px] text-[#4E6178] leading-tight">Prompt handling of paperwork and urgent filings</p>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Guiding Principles / Values */}
        <div 
          ref={valuesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {ACS_VALUES.map((val, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-2.5 xs:p-3 sm:p-4.5 border-2 border-[#DCE6F2] hover:border-[#3478F6]/50 transition-all duration-200 shadow-2xs space-y-1.5 sm:space-y-2"
            >
              {/* On mobile: Icon and Headline on the same row. On sm+: Stacked as before */}
              <div className="flex items-center sm:block gap-2.5 sm:space-y-2">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white font-bold shadow-2xs shrink-0 ${
                  val.color === 'emerald' ? 'bg-[#10B981]' :
                  val.color === 'blue' ? 'bg-[#3478F6]' :
                  val.color === 'teal' ? 'bg-[#43B7B0]' :
                  'bg-[#E5BC64]'
                }`}>
                  {val.color === 'emerald' && <MessageSquareHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {val.color === 'blue' && <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {val.color === 'teal' && <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {val.color === 'amber' && <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </div>

                <h3 className="text-[13px] sm:text-sm font-bold text-[#293D55] leading-snug sm:leading-snug">
                  {val.title}
                </h3>
              </div>

              {/* Description below row */}
              <p className="text-[11.5px] sm:text-xs text-[#4E6178] leading-relaxed font-normal">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
