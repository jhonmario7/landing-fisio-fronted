import { SiteContent } from './site-content.model';

// Todo lo marcado [PENDIENTE] espera confirmación de la fisioterapeuta (ver docs/PLAN.md, Fase 0).
// Nunca reemplazar un [PENDIENTE] con un valor inventado.
export const SITE_CONTENT: SiteContent = {
  identity: {
    businessName: '[PENDIENTE: nombre comercial]',
    professionalName: '[PENDIENTE: nombre completo de la fisioterapeuta]',
    tagline: 'Vuelve a moverte sin dolor',
    heroPhoto: {
      src: '/images/hero-placeholder.jpg',
      alt: '[PENDIENTE: foto profesional real de la fisioterapeuta]',
      width: 960,
      height: 1200,
      isStockTemporary: true,
    },
    aboutPhoto: {
      src: '/images/about-placeholder.jpg',
      alt: '[PENDIENTE: foto profesional real para la sección "Sobre mí"]',
      width: 960,
      height: 1200,
      isStockTemporary: true,
    },
  },

  credentials: {
    yearsOfExperience: null,
    education: [],
    specializations: [],
    professionalCardNumber: null,
    rethusRegistry: null,
  },

  services: [],

  operation: {
    modalities: [],
    hours: [
      { day: 'mon', opens: null, closes: null },
      { day: 'tue', opens: null, closes: null },
      { day: 'wed', opens: null, closes: null },
      { day: 'thu', opens: null, closes: null },
      { day: 'fri', opens: null, closes: null },
      { day: 'sat', opens: null, closes: null },
      { day: 'sun', opens: null, closes: null },
    ],
    paymentMethods: [],
    acceptsInsurance: false,
    location: {
      addressLine: '[PENDIENTE: dirección exacta del consultorio]',
      city: '[PENDIENTE: ciudad]',
      country: 'Colombia',
      googleMapsEmbedUrl: '[PENDIENTE: URL de embed de Google Maps]',
      googleMapsDirectionsUrl: '[PENDIENTE: URL de direcciones de Google Maps]',
      coordinates: null,
      photos: [],
    },
  },

  differentiators: [],

  testimonials: [],

  faq: [],

  social: {
    whatsappPhoneE164: '[PENDIENTE: número de WhatsApp con código de país, ej. 573001234567]',
    phoneDisplay: '[PENDIENTE: teléfono para mostrar en UI]',
  },

  seo: {
    defaultTitle: '[PENDIENTE: nombre comercial] | Fisioterapia en [PENDIENTE: ciudad]',
    defaultDescription: '[PENDIENTE: descripción SEO de 150-160 caracteres]',
    canonicalUrl: '[PENDIENTE: dominio definitivo]',
    ogImage: {
      src: '/images/og-image-placeholder.jpg',
      alt: '[PENDIENTE: imagen para compartir en redes]',
      width: 1200,
      height: 630,
      isStockTemporary: true,
    },
    keywords: ['fisioterapeuta en [PENDIENTE: ciudad]'],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      medicalSpecialty: 'PhysicalTherapy',
      name: '[PENDIENTE: nombre comercial]',
      image: '[PENDIENTE: URL de imagen]',
      telephone: '[PENDIENTE: teléfono en formato +57...]',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '[PENDIENTE: dirección]',
        addressLocality: '[PENDIENTE: ciudad]',
        addressCountry: 'CO',
      },
      openingHoursSpecification: [],
      sameAs: [],
    },
  },

  legal: {
    dataPolicyUrl: '/politica-de-tratamiento-de-datos',
    dataPolicyLastUpdated: '[PENDIENTE: fecha de redacción/revisión legal]',
  },
};
