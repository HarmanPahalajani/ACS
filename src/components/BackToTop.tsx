import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../utils/scrollToTop';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const clientHeight = window.innerHeight || document.documentElement.clientHeight;
          const distanceToBottom = scrollHeight - (scrollTop + clientHeight);

          // Show when scrolled > 400px, but hide when reaching bottom of page where wide footer is open
          const pastFold = (window.scrollY || document.documentElement.scrollTop) > 400;
          const nearBottom = distanceToBottom <= 110;

          setIsVisible(pastFold && !nearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 sm:bottom-7 sm:right-7 z-30 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-3 pointer-events-none scale-90'
      }`}
    >
      <button
        type="button"
        onClick={() => scrollToTop()}
        aria-label="Scroll back to top of page"
        className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#EAF4FF] text-[#293D55] hover:text-[#3478F6] border-2 border-[#B9DEFF] hover:border-[#3478F6] shadow-lg shadow-[#3478F6]/15 hover:shadow-xl hover:shadow-[#3478F6]/25 focus:outline-none focus:ring-2 focus:ring-[#3478F6]/30 focus:border-[#3478F6] transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-md"
        title="Back to Top"
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};
