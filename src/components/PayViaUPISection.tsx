import React from 'react';
import { QrCode } from 'lucide-react';

export const PayViaUPISection: React.FC = () => {
  return (
    <section id="pay-via-upi" className="pt-2 sm:pt-4 pb-6 sm:pb-12 bg-transparent relative" aria-label="Pay via UPI">
      <div className="max-w-md sm:max-w-lg mx-auto px-4 sm:px-6">
        <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E7E5E0] shadow-xs text-center flex flex-col items-center relative">
          
          {/* Subtle Icon Badge */}
          <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 mb-3 shadow-2xs">
            <QrCode className="w-5 h-5" />
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-black text-[#1E293B] tracking-tight">
            Pay via UPI
          </h2>

          {/* Instruction */}
          <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1 max-w-xs">
            Scan the QR code using any UPI payment app.
          </p>

          {/* QR Code Container (preserving original image proportions strictly without distortion or cropping) */}
          <div className="mt-4 p-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
            <img 
              src="/upi_qr.jpg" 
              alt="Scan QR code to pay via UPI" 
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl block mx-auto aspect-square select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mt-3 text-[11px] sm:text-xs text-[#94A3B8] font-medium">
            Google Pay • PhonePe • Paytm • BHIM • Any UPI App
          </div>

        </div>
      </div>
    </section>
  );
};
