import React, { useState, useEffect, useRef } from 'react';
import { Star, FileCheck2, TrendingUp, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  iconBg: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'reviews',
    target: COMPANY_INFO.reviewCount, // 127
    suffix: '+',
    label: 'Google Reviews',
    subtitle: `${COMPANY_INFO.rating} ★ Rating`,
    icon: Star,
    accentColor: 'text-amber-500',
    iconBg: 'bg-amber-50 border-amber-200/80 text-amber-700'
  },
  {
    id: 'services',
    target: SERVICES_CATALOG.length, // 23
    suffix: '',
    label: 'Practice Services',
    subtitle: 'GST, ITR, Loans',
    icon: FileCheck2,
    accentColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200/80 text-emerald-700'
  },
  {
    id: 'filings',
    target: 500,
    suffix: '+',
    label: 'Successful Filings',
    subtitle: 'Compliance Cases',
    icon: TrendingUp,
    accentColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200/80 text-blue-700'
  },
  {
    id: 'experience',
    target: 15,
    suffix: '+',
    label: 'Years in Practice',
    subtitle: 'Bhopal Commercial Desk',
    icon: Clock,
    accentColor: 'text-rose-600',
    iconBg: 'bg-rose-50 border-rose-200/80 text-[#C9272C]'
  }
];

export const RollingStatistics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  
  // Initialize values: 0 if animated, or target if reduced motion
  const [counts, setCounts] = useState<number[]>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return STATS_DATA.map(s => s.target);
    }
    return STATS_DATA.map(() => 0);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If reduced motion is preferred, values are already initialized to target
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

            const nextCounts = STATS_DATA.map(stat => Math.round(stat.target * easeOut));
            setCounts(nextCounts);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCounts(STATS_DATA.map(s => s.target));
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
        {STATS_DATA.map((stat, idx) => {
          const Icon = stat.icon;
          const displayValue = counts[idx];

          return (
            <div
              key={stat.id}
              className="bg-white/95 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-[#E7E5E0] shadow-2xs hover:shadow-xs transition-shadow select-none group flex items-center gap-2.5 sm:gap-3"
            >
              {/* Left Side: Icon */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${stat.iconBg} border flex items-center justify-center shrink-0`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Right Side: Heading, Count, and Subtitle */}
              <div className="min-w-0 flex-1">
                <div className="text-lg sm:text-2xl font-black text-[#202A35] tracking-tight font-mono leading-none flex items-baseline">
                  <span>{displayValue}</span>
                  <span>{stat.suffix}</span>
                </div>
                
                <div className="text-[11px] sm:text-xs font-bold text-[#202A35] leading-tight truncate mt-0.5 sm:mt-1">
                  {stat.label}
                </div>

                <div className="text-[9.5px] sm:text-[10.5px] text-[#667085] font-medium leading-tight truncate">
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
