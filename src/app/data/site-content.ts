import { SiteContent } from './site-content.model';

// Todo lo marcado [PENDIENTE] espera confirmación de la fisioterapeuta (ver docs/PLAN.md, Fase 0).
// Nunca reemplazar un [PENDIENTE] con un valor inventado.

const FULL_ADDRESS =
  'Avenida 26 #51-101, Ciudadela Deportiva El Bosque, Neiva, Huila, Colombia';

export const SITE_CONTENT: SiteContent = {
  identity: {
    businessName: 'Yuli Fernanda Silva',
    professionalName: 'Yuli Fernanda Silva',
    tagline: 'Vuelve a moverte sin dolor',
    subtitle:
      'Fisioterapia personalizada en Neiva, con valoración integral y seguimiento de tu evolución.',
    bio: '[PENDIENTE: historia, formación y motivación de la fisioterapeuta, en primera persona o narrada]',
    logoUrl: '/images/logo-dark.svg',
    heroPhoto: {
      src: '/images/hero.webp',
      alt: 'Yuli Fernanda Silva, fisioterapeuta, sonriendo con su uniforme de trabajo',
      width: 787,
      height: 1400,
    },
    aboutPhoto: {
      src: '/images/about.webp',
      alt: 'Yuli Fernanda Silva, fisioterapeuta, de brazos cruzados en actitud profesional',
      width: 787,
      height: 1400,
    },
  },

  credentials: {
    yearsOfExperience: 2,
    education: [
      { label: 'Fisioterapeuta — FUMC, sede Neiva', detail: 'Graduada en 2024', verifiable: true },
    ],
    specializations: [
      {
        label: 'Especialización en Terapia Manual y Ortopedia',
        detail: 'Universidad de la Sabana — prácticas en curso',
      },
      { label: 'Diplomado en actividad deportiva y rehabilitación física', detail: '2023' },
      { label: 'Curso Internacional de prevención de lesiones', detail: '2023' },
      { label: 'Taller de readaptación funcional del deportista lesionado', detail: '2022' },
      { label: 'Taller teórico-práctico de terapia de Cupping (ventosas)' },
    ],
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
    'Haces deporte o actividad física con frecuencia y sientes molestias que no se van.',
    'Tienes dolor musculoesquelético crónico que ya hace parte de tu día a día.',
    'Sufriste una lesión muscular, articular o ligamentaria.',
    'Estás en proceso de rehabilitación después de una cirugía.',
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
      googleMapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&output=embed`,
      googleMapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}`,
      coordinates: null,
      photos: [],
    },
  },

  differentiators: [
    {
      title: 'Tratamiento personalizado',
      description:
        'Cada paciente recibe una atención adaptada a su dolor, condición física y objetivos de recuperación.',
    },
    {
      title: 'Atención enfocada en resultados funcionales',
      description:
        'No se trata solo de aliviar el dolor, sino de ayudarte a recuperar tu movilidad y volver a tus actividades cotidianas o deportivas.',
    },
    {
      title: 'Técnicas y herramientas especializadas',
      description:
        'Integro terapia manual y recursos terapéuticos según las necesidades de cada paciente y los objetivos del tratamiento.',
    },
    {
      title: 'Acompañamiento profesional y cercano',
      description:
        'Escucho a cada paciente, resuelvo sus dudas y lo oriento durante su proceso de rehabilitación.',
    },
  ],

  testimonials: [],

  faq: [],

  social: {
    whatsappPhoneE164: '573144085632',
    phoneDisplay: '314 408 5632',
    email: 'yulifernanda28@hotmail.com',
    instagramUrl: 'https://instagram.com/ft.yulifernandasilva',
  },

  seo: {
    defaultTitle: 'Yuli Fernanda Silva | Fisioterapia Integral en Neiva',
    defaultDescription:
      'Fisioterapia integral personalizada en Neiva, Huila. Atención en consultorio, a domicilio o virtual. Agenda tu valoración por WhatsApp.',
    canonicalUrl: '[PENDIENTE: dominio definitivo]',
    ogImage: {
      src: '/images/og-image-placeholder.jpg',
      alt: '[PENDIENTE: imagen horizontal para compartir en redes, 1200x630]',
      width: 1200,
      height: 630,
      isStockTemporary: true,
    },
    keywords: ['fisioterapeuta en Neiva', 'fisioterapia Neiva Huila', 'rehabilitación deportiva Neiva'],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      medicalSpecialty: 'PhysicalTherapy',
      name: 'Yuli Fernanda Silva',
      image: '[PENDIENTE: URL de imagen]',
      telephone: '+573144085632',
      email: 'yulifernanda28@hotmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Avenida 26 #51-101, Ciudadela Deportiva El Bosque',
        addressLocality: 'Neiva',
        addressCountry: 'CO',
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
      sameAs: ['https://instagram.com/ft.yulifernandasilva'],
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
