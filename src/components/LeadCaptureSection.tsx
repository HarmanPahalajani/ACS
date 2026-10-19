import React, { useState } from 'react';
import { 
  Send, 
  PhoneCall, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Loader2, 
  ShieldCheck,
  User,
  Phone,
  Mail,
  FileSpreadsheet
} from 'lucide-react';
import { SERVICES_CATALOG, COMPANY_INFO } from '../data';
import type { InquiryApiResponse } from '../types';
import confetti from 'canvas-confetti';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface LeadCaptureSectionProps {
  initialService?: string;
}

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '7a894256-9741-4f48-9982-90472ffd5502';

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ initialService }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(SERVICES_CATALOG[0].title);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<InquiryApiResponse | null>(null);

  // Sync initialService prop if preselected from service cards
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      const match = SERVICES_CATALOG.find(
        s => s.title.toLowerCase() === initialService.toLowerCase() || s.id === initialService
      );
      setServiceRequired(match ? match.title : initialService);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setApiResponse(null);

    if (isSubmitting) return;

    // Validate Full Name
    if (!fullName.trim() || fullName.trim().length < 2) {
      setValidationError("Please enter your full name.");
      return;
    }

    // Validate Indian Phone Number
    // Accepts formats like: 9876543210, +91 9876543210, +91-9876543210, 09876543210
    const cleanPhone = phoneNumber.replace(/[\s\-()]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
      setValidationError("Please enter a valid 10-digit Indian mobile number (e.g., 91658 94496).");
      return;
    }

    // Validate Optional Email
    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        setValidationError("Please enter a valid email address, or leave it blank.");
        return;
      }
    }

    // Validate Message
    if (!message.trim() || message.trim().length < 5) {
      setValidationError("Please enter a brief description of your requirement or query.");
      return;
    }

    setIsSubmitting(true);

    // Anti-bot honeypot check
    if (honeypot.trim()) {
      setIsSubmitting(false);
      return;
    }

    const referenceId = `ACS-${Math.floor(10000 + Math.random() * 90000)}`;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Client Inquiry [Ref: ${referenceId}] - ${serviceRequired} (${fullName.trim()})`,
      from_name: "Awasthi Consultancy Services Web Desk",
      name: fullName.trim(),
      phone: cleanPhone,
      email: email.trim() || undefined,
      service: serviceRequired,
      message: message.trim(),
      reference_id: referenceId,
      botcheck: honeypot.trim() || undefined
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setApiResponse({
          success: true,
          referenceId,
          deliveredVia: 'web3forms',
          message: "Thank you! Your requirement has been transmitted. We will review your details and reach out shortly."
        });
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setMessage('');
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {
          // ignore confetti if unsupported
        }
      } else {
        throw new Error(data.message || "Failed to submit inquiry. Please try again or call our office.");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please call our desk directly.";
      setApiResponse({
        success: false,
        message: msg,
        alternativeContactNumbers: COMPANY_INFO.phones
      });
      setValidationError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-6 sm:mb-9 space-y-2 sm:space-y-2.5 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-rose-50 text-[#C9272C] text-[11px] sm:text-xs font-black uppercase tracking-wider border border-rose-200/70">
            <Send className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C9272C]" />
            <span>Consultation & Inquiries</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#202A35] tracking-tight">
            Discuss Your Requirement
          </h2>

          <p className="text-xs sm:text-base text-[#667085] font-normal leading-relaxed max-w-2xl mx-auto">
            Send us your paperwork or taxation requirement, or call our Bhopal office directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left Column: Direct Phone & Office Details */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#E7E5E0] shadow-2xs space-y-3.5 sm:space-y-4">
              
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#202A35]">
                  Direct Phone Lines
                </h3>
                <p className="text-xs text-[#667085] mt-0.5">
                  Click on any number below to initiate a phone call immediately.
                </p>
              </div>

              {/* Phone Numbers List */}
              <div className="space-y-2.5">
                {/* Primary Desk */}
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-xl sm:rounded-2xl bg-rose-50/60 border border-rose-200/80 hover:bg-rose-100/70 text-[#202A35] font-bold text-sm transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#C9272C] text-white flex items-center justify-center shadow-xs">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-extrabold text-[#202A35]">{COMPANY_INFO.phones[0]}</span>
                      <span className="text-[10px] text-[#C9272C] font-bold">
                        Mr. Pankaj Awasthi
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#C9272C] group-hover:translate-x-0.5 transition-transform">
                    Call Now &rarr;
                  </span>
                </a>

                {/* Secondary Helplines in a compact 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPANY_INFO.phones.slice(1).map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E5E0] hover:bg-white text-[#202A35] text-xs font-bold transition-all group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-3 h-3" />
                        </div>
                        <div className="truncate">
                          <span className="block text-[11px] font-extrabold text-slate-900 truncate">{phone}</span>
                          <span className="text-[9px] text-slate-500 font-semibold block">Helpline {idx + 2}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-rose-600 group-hover:translate-x-0.5 transition-transform flex-shrink-0 ml-1">
                        &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Address Card */}
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Office Location</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} – {COMPANY_INFO.pincode}
                    </p>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Working Hours</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Approachable Guidance Note */}
              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900 leading-relaxed font-medium">
                  We speak your language. No matter how complicated your paperwork seems, feel free to visit or call us for clear guidance.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div 
            ref={formRef}
            className={`lg:col-span-7 bg-white rounded-xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#E7E5E0] shadow-2xs transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="mb-3.5 sm:mb-4">
              <h3 className="text-lg sm:text-2xl font-black text-[#202A35]">
                Send an Online Inquiry
              </h3>
              <p className="text-xs text-[#667085] mt-0.5">
                Fill in your details below and we will get back to you promptly.
              </p>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs font-bold text-red-700 animate-fadeIn">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Unconfigured Email Notification (Graceful fallback) */}
            {apiResponse?.isUnconfigured && (
              <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-2 sm:space-y-2.5 animate-fadeIn">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-900">
                      Online Email Inquiries Awaiting Configuration
                    </h4>
                    <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                      Our automated online email notification service is currently awaiting administrator email destination setup (<code className="font-mono bg-amber-100 px-1 py-0.5 rounded text-[10px]">INQUIRY_RECIPIENT_EMAIL</code>).
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-amber-200">
                  <p className="text-[11px] font-bold text-amber-900 mb-1.5">
                    Please call us directly for immediate assistance:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold shadow-xs"
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Live Success Banner */}
            {apiResponse?.success && !apiResponse.isUnconfigured && (
              <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-900">Inquiry Dispatched Successfully!</h4>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you! Your requirement has been transmitted. Reference ID: <strong className="font-mono">{apiResponse.referenceId}</strong>. We will review your details and reach out shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              
              {/* Anti-bot Honeypot field (hidden from real users) */}
              <input
                type="text"
                name="website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full pl-9 pr-3 py-2.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 text-slate-900 text-base sm:text-sm font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 91658 94496"
                      className="w-full pl-9 pr-3 py-2.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 text-slate-900 text-base sm:text-sm font-medium outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Email Address (Optional) & Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full pl-9 pr-3 py-2.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 text-slate-900 text-base sm:text-sm font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <FileSpreadsheet className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      id="serviceRequired"
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full pl-9 pr-7 py-2.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 text-slate-900 text-base sm:text-sm font-medium outline-none transition-all appearance-none cursor-pointer"
                    >
                      {SERVICES_CATALOG.map(s => (
                        <option key={s.id} value={s.title}>
                          #{s.num} - {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                  Requirement Details / Message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe what you need assistance with (e.g. Gumasta for new shop, GST registration, ITR filing for FY 2025-26, CMA report for loan)..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 text-slate-900 text-base sm:text-sm font-medium outline-none transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 rounded-xl bg-[#C9272C] hover:bg-[#B22025] text-white font-extrabold text-sm shadow-md shadow-[#C9272C]/20 hover:shadow-lg hover:shadow-[#C9272C]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center leading-normal">
                Your contact details are kept strictly confidential and used solely for addressing your inquiry.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
