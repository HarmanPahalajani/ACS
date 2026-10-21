import React from 'react';

/**
 * SiteBackground: Continuous, subtle, architectural background system
 * Layer 1: Warm ivory base (#FAF9F4)
 * Layer 2: Extremely subtle architectural fine-line grid (64px)
 * Layer 3: Soft ambient static radial gradients in sky blue, soft mint, and warm gold
 * Document Details: Restrained registration marks (+) and ledger reference rules
 */
export const SiteBackground: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none isolate" 
      style={{ contain: 'paint', willChange: 'transform' }}
      aria-hidden="true"
    >
      {/* Layer 1: Warm Ivory Base */}
      <div className="absolute inset-0 bg-[#FAF9F4]" />

      {/* Layer 2: Continuous Architectural Fine-Line Grid */}
      <div className="absolute inset-0 site-canvas-grid opacity-60" />

      {/* Layer 3: Soft Ambient Static Radial Glows */}
      <div className="absolute inset-0 site-ambient-lighting pointer-events-none" />

      {/* Subtle Document-Inspired Registration Marks (+) along margins */}
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative opacity-40 hidden sm:block">
        <div className="absolute top-16 left-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-16 right-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[800px] left-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[800px] right-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[1600px] left-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[1600px] right-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[2400px] left-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[2400px] right-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[3200px] left-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute top-[3200px] right-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute bottom-16 left-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
        <div className="absolute bottom-16 right-4 text-[#A8A29E] font-mono text-[11px] leading-none">+</div>
      </div>
    </div>
  );
};
