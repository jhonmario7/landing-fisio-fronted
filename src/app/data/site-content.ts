import { SiteContent } from './site-content.model';

// Todo lo marcado [PENDIENTE] espera confirmación de la fisioterapeuta (ver docs/PLAN.md, Fase 0).
// Nunca reemplazar un [PENDIENTE] con un valor inventado.
export const SITE_CONTENT: SiteContent = {
  identity: {
    businessName: 'Yuli Fernanda Silva',
    professionalName: 'Yuli Fernanda Silva',
    tagline: 'Vuelve a moverte sin dolor',
    subtitle:
      'Fisioterapia personalizada en [PENDIENTE: ciudad], con valoración integral y seguimiento de tu evolución.',
    bio: '[PENDIENTE: historia, formación y motivación de la fisioterapeuta, en primera persona o narrada]',
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

  services: [
    {
      id: 'valoracion-integral',
      name: 'Valoración Integral Fisioterapéutica',
      icon: 'target',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'terapia-manual-ortopedica',
      name: 'Terapia Manual Ortopédica',
      icon: 'hand',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'rehabilitacion-deportiva',
      name: 'Rehabilitación Deportiva',
      icon: 'activity',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'ejercicio-terapeutico',
      name: 'Ejercicio Terapéutico',
      icon: 'activity',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'rehabilitacion-postquirurgica',
      name: 'Rehabilitación Postquirúrgica',
      icon: 'shield-check',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'presoterapia',
      name: 'Presoterapia',
      icon: 'droplet',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'descarga-muscular',
      name: 'Descarga Muscular',
      icon: 'hand',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'vendaje-neuromuscular',
      name: 'Vendaje Neuromuscular',
      icon: 'shield-check',
      shortDescription: '[PENDIENTE: descripción breve del servicio]',
      benefit: '[PENDIENTE: beneficio principal para el paciente]',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
  ],

  identificationPoints: [
    'Sientes dolor lumbar que no cede con el descanso.',
    'Tienes una lesión deportiva que te impide entrenar con normalidad.',
    'Estás en recuperación después de una cirugía.',
  ],

  careProcess: [
    {
      title: 'Valoración inicial',
      description: 'Evaluamos tu caso a fondo para entender el origen del dolor o la lesión.',
    },
    {
      title: 'Plan de tratamiento',
      description: 'Diseñamos un plan personalizado según tu diagnóstico y tus objetivos.',
    },
    {
      title: 'Sesiones',
      description: 'Aplicamos el tratamiento con seguimiento de tu evolución en cada cita.',
    },
    {
      title: 'Seguimiento',
      description: 'Ajustamos el plan y acompañamos tu recuperación hasta el alta.',
    },
  ],

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
    whatsappPhoneE164: '573144085632',
    phoneDisplay: '314 408 5632',
    instagramUrl: 'https://instagram.com/ft.yulifernandasilva',
  },

  seo: {
    defaultTitle: 'Yuli Fernanda Silva | Fisioterapia Integral en [PENDIENTE: ciudad]',
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
      name: 'Yuli Fernanda Silva',
      image: '[PENDIENTE: URL de imagen]',
      telephone: '+573144085632',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '[PENDIENTE: dirección]',
        addressLocality: '[PENDIENTE: ciudad]',
        addressCountry: 'CO',
      },
      openingHoursSpecification: [],
      sameAs: ['https://instagram.com/ft.yulifernandasilva'],
    },
  },

  legal: {
    dataPolicyUrl: '/politica-de-tratamiento-de-datos',
    dataPolicyLastUpdated: '[PENDIENTE: fecha de redacción/revisión legal]',
  },
};
