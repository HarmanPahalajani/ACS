import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS, COMPANY_INFO } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { RollingStatistics } from './RollingStatistics';

// Google G logo icon for verified review attribution
const GoogleGIcon: React.FC = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

// Review card strictly without reviewer personal names or avatars
interface ReviewCardProps {
  text: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, rating }) => (
  <div className="w-[195px] xs:w-[215px] sm:w-[350px] md:w-[380px] shrink-0 bg-white rounded-xl sm:rounded-2xl p-2.5 xs:p-3 sm:p-5 border border-[#E7E5E0] hover:border-amber-300 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between group select-none relative">
    <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
      {/* Top Header: Rating Stars & Google Attribution */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="flex items-center text-amber-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-[#202A35]">5.0</span>
        </div>

        <div className="flex items-center gap-0.5 xs:gap-1 px-1.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-[9px] xs:text-[10px] font-semibold text-slate-600">
          <GoogleGIcon />
          <span>Google Review</span>
        </div>
      </div>

      {/* Review Quote Body */}
      <div className="relative pt-0.5 flex items-start gap-1.5 xs:gap-2">
        <MessageSquareQuote className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-amber-400/80 shrink-0 mt-0.5" />
        <p className="text-[10.5px] xs:text-[11.5px] sm:text-sm text-slate-700 leading-snug sm:leading-relaxed font-normal italic pr-1">
          “{text}”
        </p>
      </div>
    </div>

    {/* Verified Reviewer Tag (No names/avatars) */}
    <div className="pt-2 xs:pt-2.5 sm:pt-3.5 mt-2 xs:mt-2.5 sm:mt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px]">
      <span className="inline-flex items-center gap-0.5 xs:gap-1 text-[9px] xs:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
        <CheckCircle className="w-2 h-2 xs:w-2.5 xs:h-2.5 text-emerald-600" />
        Verified Feedback
      </span>
      <span className="text-[9px] xs:text-[10px] text-slate-400 font-medium">
        5.0 ★ Client Exp.
      </span>
    </div>
  </div>
);

export const GoogleReviewsSection: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '200px' });

  // Genuine positive reviews from GOOGLE_REVIEWS distributed across Row 1 and Row 2
  const row1Base = [
    GOOGLE_REVIEWS[0], // Smooth, quick filing & helpful
    GOOGLE_REVIEWS[1], // Tax saving & documentation
    GOOGLE_REVIEWS[2], // Layman language guidance
    GOOGLE_REVIEWS[0],
    GOOGLE_REVIEWS[1],
    GOOGLE_REVIEWS[2]
  ];

  const row2Base = [
    GOOGLE_REVIEWS[3], // Gumasta & GST registration within days
    GOOGLE_REVIEWS[4], // Balance Sheet & CMA report for bank limit
    GOOGLE_REVIEWS[2], // Layman language guidance
    GOOGLE_REVIEWS[3],
    GOOGLE_REVIEWS[4],
    GOOGLE_REVIEWS[1]
  ];

  return (
    <section id="reviews" className="pt-6 pb-4 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Dynamic Rolling Statistics Metric Row immediately above Customer Reviews */}
      <RollingStatistics />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4 sm:mb-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-2.5 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-bold tracking-wide">
            <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-600" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-xl sm:text-4xl font-black text-[#202A35] tracking-tight">
            Trusted by Our Customers
          </h2>

          <p className="text-xs sm:text-base text-[#667085] font-normal leading-relaxed max-w-xl mx-auto">
            Authentic customer reviews and ratings directly from our Google Maps business listing in Bhopal.
          </p>

          {/* Compact Integrated Rating Bar */}
          <div className="pt-0.5 sm:pt-1 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 p-1.5 sm:p-2.5 px-3 sm:px-5 rounded-xl sm:rounded-2xl bg-amber-50/90 border border-amber-200 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-3xl font-black text-[#202A35] leading-none">
                  {COMPANY_INFO.rating}
                </span>
                <div className="flex flex-col items-start leading-none">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#667085] mt-0.5">
                    {COMPANY_INFO.reviewCount}+ Google reviews
                  </span>
                </div>
              </div>

              <div className="h-5 w-px bg-amber-200 hidden sm:block" />

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-[11px] sm:text-xs shadow-xs transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Two-Row Infinite Horizontal Marquee */}
      <div 
        className="relative w-full overflow-hidden pause-on-hover"
        aria-label="Customer Reviews Marquee"
      >
        {/* Left & Right Edge Gradient Fades for seamless entry and exit against warm ivory background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-28 md:w-36 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-28 md:w-36 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent z-20" />

        <div className="space-y-2.5 sm:space-y-5">
          {/* Row 1: Right to Left (Continuous linear movement) */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-left flex gap-2.5 sm:gap-5">
              {/* Primary Sequence */}
              {row1Base.map((review, i) => (
                <ReviewCard
                  key={`r1-orig-${review.id}-${i}`}
                  text={review.text}
                  rating={review.rating}
                />
              ))}
              {/* Duplicated Sequence for seamless loop */}
              {row1Base.map((review, i) => (
                <div key={`r1-dup-${review.id}-${i}`} aria-hidden="true" className="shrink-0">
                  <ReviewCard
                    text={review.text}
                    rating={review.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right (Continuous linear movement opposite direction) */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-right flex gap-2.5 sm:gap-5">
              {/* Primary Sequence */}
              {row2Base.map((review, i) => (
                <ReviewCard
                  key={`r2-orig-${review.id}-${i}`}
                  text={review.text}
                  rating={review.rating}
                />
              ))}
              {/* Duplicated Sequence for seamless loop */}
              {row2Base.map((review, i) => (
                <div key={`r2-dup-${review.id}-${i}`} aria-hidden="true" className="shrink-0">
                  <ReviewCard
                    text={review.text}
                    rating={review.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
