import { SiteContent } from './site-content.model';

// Todo lo marcado [PENDIENTE] espera confirmación de la fisioterapeuta (ver docs/PLAN.md, Fase 0).
// Nunca reemplazar un [PENDIENTE] con un valor inventado.
//
// Excepción autorizada explícitamente por la cliente (14 oct 2026): bio, descripciones/beneficios
// de servicios y FAQ son BORRADOR redactado por Claude para que ella los revise sobre un prototipo
// visual y pida cambios — no son hechos inventados sobre ella, son copy de marketing a su criterio.

// Dominio definitivo (sin "/" final). Alimenta canonical, og:image y JSON-LD.
const SITE_URL = 'https://fisioyuli.com';

const FULL_ADDRESS =
  'Avenida 26 #51-101, Ciudadela Deportiva El Bosque, Neiva, Huila, Colombia';

export const SITE_CONTENT: SiteContent = {
  identity: {
    businessName: 'Yuli Fernanda Silva',
    professionalName: 'Yuli Fernanda Silva',
    tagline: 'Vuelve a moverte sin dolor.',
    brandTagline: 'Fisioterapia Integral Personalizada',
    subtitle:
      'Tratamientos personalizados para recuperar tu movilidad, aliviar el dolor y volver a tu rutina, con valoración integral y acompañamiento cercano en cada sesión.',
    bio: 'Soy fisioterapeuta egresada de la FUMC, sede Neiva, en 2024, y actualmente curso mi especialización en Terapia Manual y Ortopedia en la Universidad de la Sabana. Me he formado también en actividad deportiva y rehabilitación física, prevención de lesiones y readaptación funcional del deportista lesionado, porque quiero ofrecerte mucho más que un alivio temporal: busco ayudarte a recuperar tu movilidad y volver a lo que te gusta hacer, ya sea entrenar, trabajar o simplemente moverte sin dolor. En cada sesión combino terapia manual con las herramientas terapéuticas que mejor se ajusten a tu caso, y te acompaño de cerca durante todo tu proceso de recuperación.', // BORRADOR
    heroPhoto: {
      src: '/images/hero.webp',
      alt: 'Yuli Fernanda Silva, fisioterapeuta, sonriendo con su uniforme de trabajo',
      width: 787,
      height: 1231,
    },
    aboutPhoto: {
      src: '/images/about-cutout.webp',
      alt: 'Yuli Fernanda Silva, fisioterapeuta, de brazos cruzados en actitud profesional',
      width: 720,
      height: 1450,
    },
    painPhoto: {
      src: '/images/pain-ventosas.webp',
      alt: 'Paciente boca abajo en el consultorio recibiendo terapia con ventosas en la espalda',
      width: 800,
      height: 600,
    },
  },

  credentials: {
    yearsOfExperience: 2,
    patientsServed: 100,
    education: [
      { label: 'Fisioterapeuta — FUMC, sede Neiva', detail: 'Graduada', year: '2024', verifiable: true },
    ],
    specializations: [
      {
        label: 'Especialización en Terapia Manual y Ortopedia',
        detail: 'Universidad de la Sabana — prácticas en curso',
        year: 'En curso',
      },
      { label: 'Diplomado en actividad deportiva y rehabilitación física', year: '2023' },
      { label: 'Curso Internacional de prevención de lesiones', year: '2023' },
      { label: 'Taller de readaptación funcional del deportista lesionado', year: '2022' },
      { label: 'Taller teórico-práctico de terapia de Cupping (ventosas)' }, // [PENDIENTE: año]
    ],
    professionalCardNumber: null,
    rethusRegistry: null,
  },

  services: [
    {
      id: 'valoracion-integral',
      name: 'Valoración Integral Fisioterapéutica',
      image: {
        src: '/images/service-valoracion.webp',
        alt: 'Radiografía de un pie abierta en el portátil del consultorio durante una valoración',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Una evaluación completa de tu condición física, movilidad y dolor para identificar el origen del problema.',
      benefit: 'Entender qué te está pasando y con qué plan vamos a trabajar juntos.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'terapia-manual-ortopedica',
      name: 'Terapia Manual Ortopédica',
      // Foto de stock aprobada por la cliente como definitiva (22 oct 2026).
      image: {
        src: '/images/service-drenaje.webp',
        alt: 'Fisioterapeuta aplicando terapia manual con ambas manos sobre la pierna de un paciente',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Técnicas manuales aplicadas sobre músculos, articulaciones y tejidos para aliviar el dolor y mejorar el movimiento.',
      benefit: 'Recuperar movilidad y reducir las molestias en articulaciones y músculos.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'rehabilitacion-deportiva',
      name: 'Rehabilitación Deportiva',
      image: {
        src: '/images/service-deportiva.webp',
        alt: 'Paciente realizando una sentadilla con barra en la sala de ejercicio del consultorio',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Tratamiento enfocado en lesiones relacionadas con la práctica deportiva, para que vuelvas a entrenar con confianza.',
      benefit: 'Volver a tu actividad física o deporte favorito de forma segura.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'ejercicio-terapeutico',
      name: 'Ejercicio Terapéutico',
      // Foto de stock aprobada por la cliente como definitiva (22 oct 2026).
      image: {
        src: '/images/service-fisio.webp',
        alt: 'Paciente realizando un ejercicio con mancuerna guiado por la fisioterapeuta',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Rutinas de ejercicio diseñadas específicamente para tu recuperación y fortalecimiento.',
      benefit: 'Fortalecer tu cuerpo y prevenir que la lesión o el dolor vuelvan a aparecer.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'rehabilitacion-postquirurgica',
      name: 'Rehabilitación Postquirúrgica',
      image: {
        src: '/images/service-postquirurgica.webp',
        alt: 'Electrodos de electroterapia aplicados en la pierna de un paciente sobre la camilla',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Acompañamiento fisioterapéutico después de una cirugía, siguiendo tu proceso de recuperación paso a paso.',
      benefit: 'Recuperar tu funcionalidad de forma segura después de una operación.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'presoterapia',
      name: 'Presoterapia',
      image: {
        src: '/images/service-presoterapia.webp',
        alt: 'Paciente en camilla con botas de presoterapia en ambas piernas',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Terapia de compresión que estimula la circulación y ayuda a disminuir la inflamación.',
      benefit: 'Reducir la hinchazón y sentir las piernas o la zona tratada más ligeras.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'descarga-muscular',
      name: 'Descarga Muscular',
      image: {
        src: '/images/service-descarga.webp',
        alt: 'Ventosas aplicadas sobre la espalda de un paciente para liberar tensión muscular',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Masaje y técnicas específicas para liberar tensión muscular acumulada por esfuerzo o estrés físico.',
      benefit: 'Aliviar la tensión muscular y sentir más libertad de movimiento.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
    {
      id: 'vendaje-neuromuscular',
      name: 'Vendaje Neuromuscular',
      image: {
        src: '/images/service-vendaje.webp',
        alt: 'Vendaje neuromuscular rosado aplicado sobre la rodilla de un paciente',
        width: 240,
        height: 240,
      },
      shortDescription:
        'Aplicación de vendaje terapéutico que da soporte a músculos y articulaciones durante tu recuperación o actividad.',
      benefit: 'Mantener soporte en la zona tratada mientras te mantienes activo.',
      sessionDurationMinutes: null,
      requiresMedicalOrder: null,
      modalities: [],
    },
  ],

  identificationPoints: [
    'Haces deporte o actividad física con frecuencia y sientes molestias que no se van.',
    'Sufriste una lesión muscular, articular o ligamentaria.',
    'Estás en proceso de rehabilitación después de una cirugía.',
  ],

  operation: {
    modalities: ['in_office', 'home_visit', 'virtual'],
    hours: [
      { day: 'mon', opens: '07:00', closes: '19:00' },
      { day: 'tue', opens: '07:00', closes: '19:00' },
      { day: 'wed', opens: '07:00', closes: '19:00' },
      { day: 'thu', opens: '07:00', closes: '19:00' },
      { day: 'fri', opens: '07:00', closes: '19:00' },
      { day: 'sat', opens: '08:00', closes: '15:00' },
      { day: 'sun', opens: null, closes: null },
    ],
    paymentMethods: ['cash', 'transfer'],
    acceptsInsurance: false,
    location: {
      addressLine: 'Avenida 26 #51-101, Ciudadela Deportiva El Bosque',
      city: 'Neiva',
      country: 'Colombia',
      googleMapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}`,
      coordinates: null,
      // Fotos reales del consultorio (entregadas por la cliente).
      photos: [
        { src: '/images/espacio-recepcion.webp', alt: 'Recepción del consultorio con el logo dorado de Yuli Fernanda Silva y sus diplomas en la pared', width: 800, height: 992 },
        { src: '/images/espacio-ejercicio.webp', alt: 'Sala de ejercicio terapéutico con balones, bandas elásticas, pesas y cajón pliométrico', width: 800, height: 1281 },
        { src: '/images/espacio-camilla.webp', alt: 'Cubículo de tratamiento con camilla y repisa de insumos terapéuticos', width: 800, height: 1172 },
        { src: '/images/espacio-fachada.webp', alt: 'Entrada del consultorio con el aviso de Fisioterapia de Yuli Fernanda Silva', width: 800, height: 902 },
        { src: '/images/espacio-sentadilla.webp', alt: 'Paciente haciendo una sentadilla con barra en la sala de ejercicio terapéutico', width: 800, height: 600 },
        { src: '/images/espacio-presoterapia.webp', alt: 'Paciente recibiendo presoterapia en la camilla del cubículo de tratamiento', width: 800, height: 600 },
      ],
    },
  },

  differentiators: [
    {
      icon: 'target',
      title: 'Tratamiento personalizado',
      description:
        'Cada paciente recibe una atención adaptada a su dolor, condición física y objetivos de recuperación.',
    },
    {
      icon: 'activity',
      title: 'Atención enfocada en resultados funcionales',
      description:
        'No se trata solo de aliviar el dolor, sino de ayudarte a recuperar tu movilidad y volver a tus actividades cotidianas o deportivas.',
    },
    {
      icon: 'hand',
      title: 'Técnicas y herramientas especializadas',
      description:
        'Integro terapia manual y recursos terapéuticos según las necesidades de cada paciente y los objetivos del tratamiento.',
    },
    {
      icon: 'heart',
      title: 'Acompañamiento profesional y cercano',
      description:
        'Escucho a cada paciente, resuelvo sus dudas y lo oriento durante su proceso de rehabilitación.',
    },
  ],

  // Reseñas reales copiadas literal de Google (más recientes primero). Solo se muestran
  // las que la cliente elija; nunca editar el texto ni inventar.
  testimonials: [
    {
      id: 'google-jimmy-hernandez',
      authorName: 'Jimmy Alejandro Hernandez Yara',
      text: 'Excelente consultorio, con una atención de primera y un servicio muy profesional. Desde el primer momento, te hacen sentir cómodo, te escuchan y se enfocan en tus necesidades y objetivos personales. Lo que más destaco es el compromiso, la dedicación y el interés por ayudar a cada persona a recuperarse y mejorar su bienestar. También te acompañan durante todo el proceso, buscando siempre los mejores resultados para tu recuperación. Se nota el amor y la pasión con la que hace su trabajo. Sin duda, un lugar totalmente recomendado.',
      rating: 5,
      source: 'google',
      dateLabel: 'Octubre 2026',
    },
    {
      id: 'google-jhon-rodriguez',
      authorName: 'Jhon Mario Rodríguez Ramirez',
      text: 'Excelente atención. Yuli se toma el tiempo de explicarte qué te está pasando y te arma un plan a tu medida. Se nota su preparación y lo cercana que es durante todo el proceso. El consultorio es cómodo y está muy bien equipado. 100% recomendada.',
      rating: 5,
      source: 'google',
      dateLabel: 'Octubre 2026',
      // Foto autorizada por él mismo (22 oct 2026).
      photo: {
        src: '/images/resenas/jhon-rodriguez.webp',
        alt: 'Foto de perfil de Jhon Mario Rodríguez Ramirez',
        width: 96,
        height: 96,
      },
    },
    {
      id: 'google-laura-tejada',
      authorName: 'Laura Tejada Gutierrez',
      text: 'Amo mis sesiones de terapia con la Fisio Yuli es muy atenta, humana y la verdad la recuperación después de mi lesión de rodilla ha sido excelente',
      rating: 5,
      source: 'google',
      dateLabel: 'Octubre 2026',
    },
  ],

  faq: [
    {
      id: 'orden-medica',
      question: '¿Necesito orden médica para asistir?',
      answer:
        'No es obligatoria, pero si ya tienes una orden médica puedes traerla a tu cita para complementar la valoración.',
    },
    {
      id: 'que-llevar',
      question: '¿Qué debo llevar a mi cita?',
      answer:
        'Ropa cómoda que te permita moverte con libertad y, si los tienes, tus estudios o exámenes médicos relacionados.',
    },
    {
      id: 'duracion-valoracion',
      question: '¿Cuánto dura la valoración inicial?',
      answer: 'La valoración inicial dura aproximadamente 45 a 60 minutos, dependiendo de tu caso.',
    },
    {
      id: 'domicilio',
      question: '¿Atiendes a domicilio?',
      answer:
        'Sí, ofrezco atención en consultorio, a domicilio y de forma virtual, según lo que más te convenga.',
    },
    {
      id: 'medios-pago',
      question: '¿Qué medios de pago aceptas?',
      answer: 'Acepto efectivo y transferencias.',
    },
    {
      id: 'convenios',
      question: '¿Manejas convenios con EPS o seguros?',
      answer: 'Por ahora la atención es particular, sin convenios con EPS ni aseguradoras.',
    },
    {
      id: 'ninos',
      question: '¿Atiendes niños?',
      answer: 'Sí, atiendo a partir de los 11 años.',
    },
    {
      id: 'como-agendar',
      question: '¿Cómo agendo mi cita?',
      answer: 'Escríbeme por WhatsApp contándome brevemente tu caso y te confirmo disponibilidad.',
    },
  ],

  // BORRADOR: textos para que la cliente los revise.
  contact: {
    reasons: [
      'Dolor o molestia',
      'Lesión deportiva',
      'Rehabilitación postquirúrgica',
      'Descarga muscular',
      'Otro',
    ],
    nextSteps: [
      { title: 'Envías tus datos', description: 'Completa el formulario; solo toma un minuto.' },
      { title: 'Te escribo por WhatsApp', description: 'Reviso tu mensaje y te contacto personalmente.' },
      { title: 'Agendamos tu cita', description: 'Acordamos juntos el día, la hora y la modalidad que mejor te funcionen.' },
    ],
  },

  social: {
    whatsappPhoneE164: '573144085632',
    phoneDisplay: '314 408 5632',
    email: 'yulifernanda28@hotmail.com',
    instagramUrl: 'https://instagram.com/ft.yulifernandasilva',
    google: {
      profileUrl: 'https://g.page/r/CR0sE00rkJrIECE',
      writeReviewUrl: 'https://g.page/r/CR0sE00rkJrIECE/review',
      rating: null, // [PENDIENTE: promedio que muestra Google, p. ej. 5.0]
      count: null, // [PENDIENTE: número de reseñas en Google]
    },
  },

  seo: {
    defaultTitle: 'Yuli Fernanda Silva | Fisioterapia Integral en Neiva',
    defaultDescription:
      'Fisioterapia integral personalizada en Neiva, Huila. Atención en consultorio, a domicilio o virtual. Agenda tu valoración por WhatsApp.',
    canonicalUrl: SITE_URL,
    // Tarjeta para compartir en redes/WhatsApp: foto real + logo + fuentes de marca (JPG por compatibilidad).
    ogImage: {
      src: `${SITE_URL}/images/og-image.jpg`,
      alt: 'Yuli Fernanda Silva, fisioterapeuta en Neiva, con su logo y el texto Fisioterapia Integral Personalizada',
      width: 1200,
      height: 630,
    },
    keywords: ['fisioterapeuta en Neiva', 'fisioterapia Neiva Huila', 'rehabilitación deportiva Neiva'],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      medicalSpecialty: 'PhysicalTherapy',
      name: 'Yuli Fernanda Silva',
      image: `${SITE_URL}/images/hero.webp`,
      url: SITE_URL,
      telephone: '+573144085632',
      email: 'yulifernanda28@hotmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Avenida 26 #51-101, Ciudadela Deportiva El Bosque',
        addressLocality: 'Neiva',
        addressRegion: 'Huila',
        addressCountry: 'CO',
        // [PENDIENTE: postalCode y geo (coordenadas) — tomarlos del Perfil de Negocio de Google cuando esté verificado]
      },
      areaServed: { '@type': 'City', name: 'Neiva' },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '15:00',
        },
      ],
      sameAs: ['https://instagram.com/ft.yulifernandasilva', 'https://g.page/r/CR0sE00rkJrIECE'],
    },
  },

  legal: {
    dataPolicyUrl: '/politica-de-tratamiento-de-datos',
    dataPolicyLastUpdated: '13 de octubre de 2026',
    dataPolicySections: [
      {
        heading: '1. Identificación del responsable',
        paragraphs: [
          'La responsable del tratamiento de datos personales es Yuli Fernanda Silva Avilés, fisioterapeuta independiente, con domicilio profesional en Neiva, Huila, Colombia.',
          'Correo electrónico: yulifernanda28@hotmail.com',
          'Teléfono o WhatsApp: 314 408 5632',
          'La presente política establece los lineamientos para la recolección, almacenamiento, uso, circulación y protección de los datos personales obtenidos a través del sitio web, los formularios de contacto y los canales de comunicación habilitados, incluido WhatsApp.',
          'Esta política se rige por la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demás normas colombianas aplicables en materia de protección de datos personales.',
        ],
      },
      {
        heading: '2. Datos personales que se pueden recolectar',
        paragraphs: [
          'A través del sitio web y de los canales de contacto, podrán recopilarse los siguientes datos, según la información que proporcione voluntariamente el usuario:',
          '• Nombre y apellido.',
          '• Número de teléfono o WhatsApp.',
          '• Correo electrónico.',
          '• Motivo general de la consulta.',
          '• Información adicional que el usuario decida proporcionar para solicitar información sobre los servicios de fisioterapia.',
          'Se recomienda no enviar diagnósticos, historias clínicas, fotografías de lesiones ni otros datos sensibles mediante formularios generales de contacto o mensajes de WhatsApp, salvo que exista una necesidad justificada y se hayan adoptado las medidas y autorizaciones correspondientes.',
        ],
      },
      {
        heading: '3. Finalidades del tratamiento',
        paragraphs: [
          'Los datos personales recolectados podrán utilizarse para:',
          '1. Responder las solicitudes de información realizadas por los usuarios.',
          '2. Contactar a las personas interesadas en los servicios de fisioterapia.',
          '3. Brindar información sobre los servicios ofrecidos, sus características y tarifas.',
          '4. Atender solicitudes de información sobre disponibilidad y programación de citas.',
          '5. Dar seguimiento a las consultas comerciales realizadas por los usuarios.',
          '6. Mantener comunicaciones relacionadas con los servicios solicitados.',
          '7. Atender peticiones, consultas y reclamos relacionados con el tratamiento de datos personales.',
          '8. Cumplir obligaciones legales aplicables a la responsable del tratamiento.',
          'El envío de publicidad, promociones o comunicaciones comerciales que requieran autorización se realizará únicamente cuando se cuente con el consentimiento correspondiente. El usuario podrá solicitar que cesen dichas comunicaciones.',
        ],
      },
      {
        heading: '4. Tratamiento de datos sensibles',
        paragraphs: [
          'Los datos relativos a la salud son considerados datos personales sensibles de conformidad con la legislación colombiana.',
          'Si durante una comunicación el usuario proporciona información sobre sus síntomas, antecedentes médicos, diagnósticos o tratamientos, dicha información recibirá protección especial y solo será tratada cuando exista una base jurídica válida y se cumplan los requisitos legales aplicables.',
          'Cuando se requiera autorización para tratar datos sensibles, esta se solicitará de manera previa, expresa e informada. El titular será informado de que no está obligado a autorizar su tratamiento, salvo las excepciones legales aplicables.',
          'La información de salud no será utilizada con fines publicitarios ni divulgada a terceros sin autorización o fundamento jurídico válido.',
        ],
      },
      {
        heading: '5. Contacto a través de WhatsApp',
        paragraphs: [
          'El sitio web podrá ofrecer un enlace para que los usuarios se comuniquen directamente con la profesional mediante WhatsApp.',
          'Cuando el usuario utilice este canal, sus datos de contacto y el contenido de los mensajes podrán ser tratados para responder su solicitud y gestionar la comunicación relacionada con los servicios consultados.',
          'El usuario debe tener presente que WhatsApp es una plataforma de un tercero y que el tratamiento de información realizado por dicha plataforma se encuentra sujeto a sus propias condiciones y políticas de privacidad.',
          'Se recomienda evitar el envío de información médica sensible por este canal hasta que se hayan establecido las condiciones adecuadas para su tratamiento seguro.',
        ],
      },
      {
        heading: '6. Formularios de contacto',
        paragraphs: [
          'Cuando el sitio web disponga de un formulario de contacto, los datos ingresados serán utilizados para responder la solicitud y comunicarse con el usuario respecto del servicio consultado.',
          'Antes de enviar el formulario, el usuario deberá tener acceso a esta política y al mecanismo de autorización para el tratamiento de datos personales, cuando corresponda legalmente.',
          'La información recopilada mediante estos formularios no será utilizada para finalidades distintas de las informadas, salvo que exista una base jurídica válida para ello.',
        ],
      },
      {
        heading: '7. Derechos de los titulares',
        paragraphs: [
          'Los titulares de los datos personales tienen derecho a:',
          '• Conocer, actualizar y rectificar sus datos personales.',
          '• Solicitar prueba de la autorización otorgada, cuando sea exigible.',
          '• Ser informados sobre el uso dado a sus datos personales.',
          '• Presentar consultas o reclamos relacionados con el tratamiento de su información.',
          '• Solicitar la revocatoria de la autorización o la supresión de sus datos cuando legalmente proceda.',
          '• Acceder gratuitamente a sus datos personales, en los términos previstos por la ley.',
          '• Presentar quejas ante la Superintendencia de Industria y Comercio, una vez agotado el trámite de consulta o reclamo ante la responsable, cuando corresponda.',
          'Estos derechos se ejercerán respetando las obligaciones legales de conservación y las excepciones previstas en la normativa vigente.',
        ],
      },
      {
        heading: '8. Procedimiento para consultas y reclamos',
        paragraphs: [
          'Para ejercer sus derechos, los titulares podrán comunicarse a través de los siguientes canales:',
          'Correo electrónico: yulifernanda28@hotmail.com',
          'WhatsApp: 314 408 5632',
          'La solicitud deberá identificar al titular, describir la petición y proporcionar un medio para recibir la respuesta. Cuando sea necesario, podrá solicitarse información adicional para verificar la identidad del solicitante o su representación.',
          'Las consultas se atenderán dentro de los diez (10) días hábiles siguientes a su recepción. Cuando no sea posible responder dentro de ese término, se informarán los motivos de la demora y la nueva fecha de respuesta, que no podrá superar cinco (5) días hábiles adicionales.',
          'Los reclamos se atenderán dentro de los quince (15) días hábiles siguientes al día de su recepción. Si no fuera posible resolverlos dentro de ese término, se informarán los motivos de la demora y la nueva fecha de respuesta, que no podrá superar ocho (8) días hábiles adicionales.',
          'El trámite se realizará conforme a la Ley 1581 de 2012 y las disposiciones que la reglamentan.',
        ],
      },
      {
        heading: '9. Seguridad y confidencialidad',
        paragraphs: [
          'La responsable adoptará medidas técnicas, humanas y administrativas razonables para proteger los datos personales contra pérdida, acceso no autorizado, uso indebido, alteración o divulgación.',
          'El acceso a la información estará limitado a las personas autorizadas que requieran conocerla para cumplir las finalidades informadas.',
          'La información relacionada con la salud recibirá especial protección, de acuerdo con las obligaciones legales y profesionales aplicables.',
        ],
      },
      {
        heading: '10. Conservación de los datos',
        paragraphs: [
          'Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades informadas y las obligaciones legales aplicables.',
          'Cuando los datos formen parte de una historia clínica o de otros documentos sujetos a conservación obligatoria, se respetarán los plazos y las condiciones establecidos en la normativa correspondiente.',
          'Una solicitud de supresión no procederá cuando exista una obligación legal o contractual de conservar la información u otra excepción prevista en la ley.',
        ],
      },
      {
        heading: '11. Divulgación a terceros',
        paragraphs: [
          'Los datos personales no serán comercializados ni divulgados indiscriminadamente.',
          'Podrán compartirse cuando exista autorización del titular, una obligación legal, un requerimiento de autoridad competente u otra circunstancia permitida por la normativa vigente.',
          'Los proveedores tecnológicos que intervengan en el funcionamiento del sitio web o en la gestión de las comunicaciones podrán acceder a determinados datos cuando sea necesario, de acuerdo con las condiciones contractuales y las medidas de protección que resulten aplicables.',
        ],
      },
      {
        heading: '12. Cookies y tecnologías similares',
        paragraphs: [
          'Si el sitio web utiliza cookies u otras tecnologías de seguimiento, se informará a los usuarios sobre su finalidad y se implementarán los mecanismos de información y consentimiento que correspondan según la normativa aplicable.',
          'Si el sitio web no utiliza estas tecnologías, este apartado deberá ajustarse a su funcionamiento real.',
        ],
      },
      {
        heading: '13. Modificaciones de la política',
        paragraphs: [
          'La responsable podrá actualizar esta política cuando sea necesario para reflejar cambios normativos o modificaciones en las prácticas de tratamiento de datos personales.',
          'Las modificaciones sustanciales se comunicarán por los medios disponibles, conforme a las disposiciones legales aplicables.',
          'La versión vigente estará disponible para consulta en el sitio web.',
        ],
      },
      {
        heading: '14. Vigencia y contacto',
        paragraphs: [
          'La presente política entra en vigencia a partir del 13 de octubre de 2026.',
          'Para consultas, solicitudes o reclamos relacionados con el tratamiento de datos personales, los titulares podrán comunicarse mediante los canales indicados en la sección de identificación de la responsable.',
          'Responsable: Yuli Fernanda Silva Avilés',
          'Ciudad: Neiva, Huila, Colombia.',
          'Correo electrónico: yulifernanda28@hotmail.com',
          'WhatsApp: 314 408 5632',
        ],
      },
    ],
  },
};
