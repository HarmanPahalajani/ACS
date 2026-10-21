import React, { useEffect, useRef } from 'react';
import { Star, FileCheck2, TrendingUp, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  cardBg: string;
  iconBg: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'reviews',
    target: 130,
    suffix: '+',
    label: 'Reviews',
    subtitle: `${COMPANY_INFO.rating} ★ Rating`,
    icon: Star,
    cardBg: 'bg-[#EFF6FF] border-[#DCEBFF] hover:border-[#2563EB]/40',
    iconBg: 'bg-amber-50/90 border-[#D6B36A]/50 text-[#D6B36A]'
  },
  {
    id: 'services',
    target: SERVICES_CATALOG.length, // 23
    suffix: '',
    label: 'Practice Services',
    subtitle: 'GST, ITR, Loans',
    icon: FileCheck2,
    cardBg: 'bg-[#E6F1E6]/75 border-[#A8C3A0]/60 hover:border-[#399A9A]/60',
    iconBg: 'bg-white/80 border-[#A8C3A0]/80 text-[#399A9A]'
  },
  {
    id: 'filings',
    target: 1000,
    suffix: '+',
    label: 'ITR Filings',
    subtitle: 'Successful Cases',
    icon: TrendingUp,
    cardBg: 'bg-[#DCEBFF]/45 border-[#2563EB]/25 hover:border-[#2563EB]/50',
    iconBg: 'bg-white border-[#2563EB]/40 text-[#2563EB]'
  },
  {
    id: 'experience',
    target: 25,
    suffix: '+',
    label: 'Years in Practice',
    subtitle: 'Tax & Compliance',
    icon: Clock,
    cardBg: 'bg-[#FAF9F4] border-[#D6B36A]/45 hover:border-[#D6B36A]',
    iconBg: 'bg-amber-50/90 border-[#D6B36A]/50 text-[#D6B36A]'
  }
];

export const RollingStatistics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If reduced motion is preferred, initialize directly with final targets
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      countRefs.current.forEach((span, idx) => {
        if (span) span.textContent = String(STATS_DATA[idx].target);
      });
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.unobserve(entry.target);

          const duration = 1200; // 1.2s smooth count-up
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutCubic curve for natural deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);

            STATS_DATA.forEach((stat, idx) => {
              const span = countRefs.current[idx];
              if (span) {
                const currentVal = Math.round(stat.target * easeOut);
                span.textContent = String(currentVal);
              }
            });

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              STATS_DATA.forEach((stat, idx) => {
                const span = countRefs.current[idx];
                if (span) span.textContent = String(stat.target);
              });
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px 40px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-8"
      aria-label="Firm Statistics and Key Metrics"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {STATS_DATA.map((stat, idx) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className={`${stat.cardBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 border shadow-2xs hover:shadow-xs transition-all select-none group flex items-center gap-2.5 sm:gap-3.5`}
            >
              {/* Left Side: Icon */}
              <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${stat.iconBg} border flex items-center justify-center shrink-0 shadow-2xs`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Right Side: Heading, Count, and Subtitle */}
              <div className="min-w-0 flex-1">
                <div className="text-[20px] sm:text-2xl lg:text-[26px] font-extrabold text-[#2563EB] tracking-tight leading-none flex items-baseline tabular-nums">
                  <span ref={(el) => { countRefs.current[idx] = el; }}>
                    0
                  </span>
                  <span>{stat.suffix}</span>
                </div>
                
                <div className="text-xs sm:text-[13px] font-bold text-[#16324F] leading-tight truncate mt-1">
                  {stat.label}
                </div>

                <div className="text-[10px] sm:text-[11.5px] text-[#64748B] font-medium leading-tight truncate mt-0.5">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
