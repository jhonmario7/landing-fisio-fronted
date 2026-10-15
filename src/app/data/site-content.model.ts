export interface SiteContent {
  identity: SiteIdentity;
  credentials: ProfessionalCredentials;
  services: Service[];
  identificationPoints: string[];
  operation: OperationInfo;
  differentiators: Differentiator[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  contact: ContactContent;
  social: SocialChannels;
  seo: SeoConfig;
  legal: LegalInfo;
}

export interface SiteIdentity {
  businessName: string;
  professionalName: string;
  tagline: string;
  brandTagline: string;
  subtitle: string;
  bio: string;
  heroPhoto: MediaAsset;
  aboutPhoto: MediaAsset;
  painPhoto: MediaAsset;
}

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  isStockTemporary?: boolean;
}

export interface Credential {
  label: string;
  detail?: string;
  year?: string; // '2023', 'En curso'... ordena la línea de tiempo; sin año va al final
  verifiable?: boolean;
}

export interface ProfessionalCredentials {
  yearsOfExperience: number | null;
  patientsServed: number | null;
  education: Credential[];
  specializations: Credential[];
  professionalCardNumber?: string | null;
  rethusRegistry?: string | null;
}

export type PaymentMethod = 'cash' | 'card' | 'transfer' | 'insurance_prepaid' | 'insurance_policy';
export type ServiceModality = 'in_office' | 'home_visit' | 'virtual';

export interface Service {
  id: string;
  name: string;
  image: MediaAsset;
  shortDescription: string;
  benefit: string;
  sessionDurationMinutes: number | null;
  requiresMedicalOrder: boolean | null;
  modalities: ServiceModality[];
}

export interface OperatingHoursRange {
  day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
  opens: string | null;
  closes: string | null;
}

export interface ClinicLocation {
  addressLine: string;
  city: string;
  country: string;
  googleMapsDirectionsUrl: string;
  coordinates: { lat: number; lng: number } | null;
  photos: MediaAsset[];
}

export interface OperationInfo {
  modalities: ServiceModality[];
  hours: OperatingHoursRange[];
  paymentMethods: PaymentMethod[];
  acceptsInsurance: boolean;
  insuranceProviders?: string[];
  location: ClinicLocation;
}

export interface Testimonial {
  id: string;
  authorName: string;
  text: string;
  authorizedInWriting: boolean;
  rating?: number;
  source?: 'direct' | 'google';
  photo?: MediaAsset;
  // Testimonio genérico de maqueta (no es de un paciente real). Se renderiza aunque
  // authorizedInWriting sea false; debe eliminarse antes de publicar.
  isPlaceholder?: boolean;
}

// Formulario de contacto. Los motivos son GENERALES a propósito (Ley 1581):
// nunca pedir diagnósticos ni historia clínica.
export interface ContactContent {
  reasons: string[];
  nextSteps: { title: string; description: string }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Differentiator {
  icon: string; // nombre de IconName (shared/ui/icon)
  title: string;
  description: string;
}

export interface SocialChannels {
  whatsappPhoneE164: string;
  phoneDisplay: string;
  email?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
  googleBusinessProfileUrl?: string;
}

export interface SeoConfig {
  defaultTitle: string;
  defaultDescription: string;
  canonicalUrl: string;
  ogImage: MediaAsset;
  keywords: string[];
  jsonLd: PhysiotherapySchema;
}

export interface PhysiotherapySchema {
  '@context': 'https://schema.org';
  '@type': 'MedicalBusiness';
  medicalSpecialty: 'PhysicalTherapy';
  name: string;
  image: string;
  url?: string;
  telephone: string;
  email?: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  areaServed?: { '@type': 'City'; name: string };
  geo?: { '@type': 'GeoCoordinates'; latitude: number; longitude: number };
  openingHoursSpecification: Array<{
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
}

export interface LegalPolicySection {
  heading: string;
  paragraphs: string[];
}

export interface LegalInfo {
  dataPolicyUrl: string;
  dataPolicyLastUpdated: string;
  dataPolicySections: LegalPolicySection[];
}
