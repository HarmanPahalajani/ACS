import React from 'react';

interface ACSLogoProps {
  className?: string;
  variant?: 'mark' | 'full' | 'compact';
  showText?: boolean;
}

export const ACSLogo: React.FC<ACSLogoProps> = ({ 
  className = "h-9 sm:h-10", 
  variant = 'full',
  showText = true
}) => {
  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 select-none">
      {/* Official ACS Logo (Red & Yellow 3D mark with Complete Accounting Solution) */}
      <img
        src="/acs_logo_official.png"
        alt="Awasthi Consultancy Services — Complete Accounting Solution"
        className={`${className} w-auto object-contain flex-shrink-0 drop-shadow-xs`}
        loading="eager"
      />

      {variant === 'full' && showText && (
        <div className="flex flex-col justify-center leading-tight">
          <div className="flex items-center gap-1">
            <span className="text-sm sm:text-base font-black tracking-tight text-slate-900">
              Awasthi
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-rose-600">
              Consultancy
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Bhopal, MP
          </span>
        </div>
      )}
    </div>
  );
};
