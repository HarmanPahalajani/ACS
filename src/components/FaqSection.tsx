import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: listRef, isVisible: listVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-5 sm:mb-8 space-y-2 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-50 text-[#C9272C] text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#C9272C]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9272C]" />
            <span>Clear Answers</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202A35] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#667085] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Common questions regarding GST registration, ITR filing deadlines, Gumasta license in Bhopal, and loan CMA reports.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div 
          ref={listRef} 
          className={`space-y-2 sm:space-y-2.5 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 border ${
                  isOpen ? 'border-[#C9272C]/40 bg-white shadow-xs' : 'border-[#E7E5E0] hover:border-slate-300 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3 sm:p-4 px-3.5 sm:px-5 text-left flex justify-between items-center gap-3 sm:gap-4 hover:bg-[#FAF9F6]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[13px] sm:text-base font-extrabold pr-2 leading-snug transition-colors ${
                    isOpen ? 'text-[#C9272C]' : 'text-[#202A35]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-rose-50 text-[#C9272C]' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-3.5 pb-3 sm:px-5 sm:pb-4.5 text-[#667085] text-xs sm:text-sm leading-relaxed border-t border-[#E7E5E0]/70 pt-2.5 animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have a question? Call desk prompt */}
        <div className="mt-5 sm:mt-7 p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-white border border-[#E7E5E0] shadow-2xs text-center flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-bold text-[#202A35]">Have a specific or unusual question?</h4>
            <p className="text-xs text-[#667085] mt-0.5">Mr. Pankaj Awasthi and our team are happy to answer your questions.</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#202A35] hover:bg-[#151D26] text-white text-xs font-bold transition-all shadow-xs flex-shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
            <span>Call: {COMPANY_INFO.phones[0]}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
