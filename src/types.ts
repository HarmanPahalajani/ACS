export type ServiceCategoryKey = 'registration' | 'taxation' | 'accounting' | 'documentation' | 'loans';

export interface ServiceCategory {
  key: ServiceCategoryKey;
  label: string;
  shortLabel: string;
  description: string;
  colorName: string;
  badgeBg: string;
  badgeText: string;
  borderAccent: string;
  gradient: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: ServiceCategoryKey;
  categoryLabel: string;
  shortDesc: string;
  description: string;
  keyPoints: string[];
  documentsRequired?: string[];
  whoNeedsThis?: string;
  tagline: string;
  icon: string;
  badgeColor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  rating: number;
  text: string;
  source: 'Google Maps Review';
  badge: string;
  relativeTime?: string;
  isVerifiedExcerpt: boolean;
}

export interface InquiryPayload {
  fullName: string;
  phoneNumber: string;
  email?: string;
  serviceRequired: string;
  message: string;
  website_hp?: string; // Honeypot field for anti-bot
}

export interface InquiryApiResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  deliveredVia?: 'web3forms' | 'resend' | 'local_simulation' | 'unconfigured';
  error?: string;
  isUnconfigured?: boolean;
  alternativeContactNumbers?: string[];
}

export interface CompanyInfo {
  name: string;
  brandAbbreviation: string;
  monogramTagline: string;
  representative: string;
  address: string;
  branchOfficeAddress?: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  phones: string[];
  googleMapsUrl: string;
  rating: number;
  reviewCount: number;
  workingHours: string;
}
