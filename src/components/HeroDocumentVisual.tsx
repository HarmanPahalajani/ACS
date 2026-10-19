import React from 'react';

export const HeroDocumentVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[285px] xs:max-w-[340px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] 2xl:max-w-[740px] mx-auto lg:mr-0 select-none" aria-hidden="true">
      {/* Ambient Warm Desk Lighting */}
      <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-amber-200/25 via-emerald-100/15 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

      {/* Photorealistic Accounting & Taxation Illustration from Reference */}
      <div className="relative flex items-center justify-center">
        <img 
          src="/hero_accounting_illustration.png" 
          alt="Accounting documents, tax filings, business registration files, calculator, and executive stationery"
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};
