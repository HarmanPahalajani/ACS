import React from 'react';
import { QrCode } from 'lucide-react';

export const PayViaUPISection: React.FC = () => {
  return (
    <section id="pay-via-upi" className="pt-2 sm:pt-4 pb-6 sm:pb-12 bg-transparent relative" aria-label="Pay via UPI">
      <div className="max-w-md sm:max-w-lg mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-[#EFF6FF]/60 via-white to-[#FAF9F4] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#DCEBFF] shadow-xs text-center flex flex-col items-center relative">
          
          {/* Subtle Icon Badge */}
          <div className="w-10 h-10 rounded-full bg-[#EFF6FF] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] mb-3 shadow-2xs">
            <QrCode className="w-5 h-5" />
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-black text-[#16324F] tracking-tight">
            Pay via UPI
          </h2>

          {/* Instruction */}
          <p className="text-xs sm:text-sm text-[#475569] font-medium mt-1 max-w-xs">
            Scan the QR code using any UPI payment app.
          </p>

          {/* QR Code Container (preserving original image proportions strictly without distortion or cropping) */}
          <div className="mt-4 p-3 bg-white rounded-2xl border border-[#DCEBFF] shadow-2xs">
            <img 
              src="/upi_qr.jpg" 
              alt="Scan QR code to pay via UPI" 
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl block mx-auto aspect-square select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mt-3 text-[11px] sm:text-xs text-[#64748B] font-medium">
            Google Pay • PhonePe • Paytm • BHIM • Any UPI App
          </div>

        </div>
      </div>
    </section>
  );
};
