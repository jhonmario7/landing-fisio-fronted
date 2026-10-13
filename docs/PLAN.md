# Plan — Landing page Angular para fisioterapeuta

## Contexto

El proyecto nace de `../prompt-landing-fisioterapeuta.md`, un brief que define rol, fases 0-7, criterios de calidad y restricciones para construir una landing que convierta visitantes en pacientes (WhatsApp, llamada o formulario). El directorio `fronted-landing-fisio` está completamente vacío (greenfield, sin git). La carpeta hermana `backend-landing-fisio` también está vacía — no se usará backend en esta etapa.

Entorno verificado:
- Node actual `v24.14.1` / npm `11.11.0` — **no cumple** el requisito de `@angular/cli` latest (`^22.22.3 || ^24.15.0 || >=26.0.0`).
- El usuario instalará una versión de Node aparte vía **nvm-windows** solo para este proyecto (no quiere tocar su Node global, usado por otros proyectos).
- Angular CLI estable más reciente confirmado en npm: **22.2.2**.

## Enfoque técnico confirmado (Angular 22)

- `ng new fronted-landing-fisio --style=scss --ssr --routing` genera standalone components y modo estricto por defecto (no se necesitan flags extra).
- Prerenderizado 100% estático: en `app.routes.server.ts` cada ruta usa `RenderMode.Prerender`; en `angular.json` se fija `"outputMode": "static"` dentro de las opciones de build. Con esto el CLI no genera `server.mjs` y la salida (`dist/fronted-landing-fisio/browser/`) es HTML/CSS/JS puro, apto para cualquier hosting estático gratuito.
- Se usa `@angular/router` de forma mínima (solo rutas `''` y `'politica-de-tratamiento-de-datos'`) porque el footer debe enlazar una página legal completa, que no cabe en un acordeón de la landing. Ambas rutas se prerenderizan.
- Sin Angular Material ni Tailwind: solo SCSS + CSS variables como design tokens.

## Estructura de carpetas final

```
fronted-landing-fisio/
├── public/
│   ├── favicon.ico, robots.txt, sitemap.xml
│   └── images/                       (fotos reales del consultorio/profesional)
└── src/
    ├── index.html, main.ts, main.server.ts, server.ts, styles.scss
    └── app/
        ├── app.component.ts/.html/.scss
        ├── app.config.ts, app.config.server.ts
        ├── app.routes.ts, app.routes.server.ts
        ├── core/
        │   ├── seo/seo.service.ts          (Title/Meta + inyección JSON-LD)
        │   └── whatsapp/whatsapp-link.util.ts
        ├── shared/
        │   ├── ui/button, section-header, icon, credential-badge, whatsapp-fab, accordion
        │   └── directives/reveal-on-scroll.directive.ts  (IntersectionObserver + prefers-reduced-motion)
        ├── sections/
        │   ├── header, hero, pain-points, services, about, process,
        │   │   testimonials, location, faq, contact, footer
        ├── pages/
        │   ├── home/home.component.ts            (orquesta las sections)
        │   └── privacy-policy/privacy-policy.component.ts
        └── data/
            ├── site-content.model.ts
            └── site-content.ts
```

## Interfaz de `site-content.model.ts`

```ts
export interface SiteContent {
  identity: SiteIdentity;
  credentials: ProfessionalCredentials;
  services: Service[];
  operation: OperationInfo;
  differentiators: Differentiator[];
  testimonials: Testimonial[];   // array vacío -> sección se oculta sola
  faq: FaqItem[];
  social: SocialChannels;
  seo: SeoConfig;
  legal: LegalInfo;
}

export interface SiteIdentity {
  businessName: string;
  professionalName: string;
  tagline: string;
  logoUrl?: string;
  colors?: { primary?: string; accent?: string };
  heroPhoto: MediaAsset;
  aboutPhoto: MediaAsset;
}

export interface MediaAsset {
  src: string; alt: string; width: number; height: number;
  isStockTemporary?: boolean;
}

export interface Credential { label: string; detail?: string; verifiable?: boolean; }

export interface ProfessionalCredentials {
  yearsOfExperience: number | null;
  education: Credential[];
  specializations: Credential[];
  professionalCardNumber?: string | null;
  rethusRegistry?: string | null;
}

export type PaymentMethod = 'cash' | 'card' | 'transfer' | 'insurance_prepaid' | 'insurance_policy';
export type ServiceModality = 'in_office' | 'home_visit' | 'virtual';

export interface Service {
  id: string; name: string; icon: string;
  shortDescription: string; benefit: string;
  sessionDurationMinutes: number | null;
  requiresMedicalOrder: boolean | null;
  modalities: ServiceModality[];
}

export interface OperatingHoursRange {
  day: 'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun';
  opens: string | null; closes: string | null;
}

export interface ClinicLocation {
  addressLine: string; city: string; country: string;
  googleMapsEmbedUrl: string; googleMapsDirectionsUrl: string;
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
  id: string; authorName: string; text: string;
  authorizedInWriting: boolean; rating?: number; source?: 'direct' | 'google';
}

export interface FaqItem { id: string; question: string; answer: string; }
export interface Differentiator { title: string; description: string; }

export interface SocialChannels {
  whatsappPhoneE164: string;    // "57XXXXXXXXXX", sin "+"
  phoneDisplay: string;
  instagramUrl?: string; facebookUrl?: string; tiktokUrl?: string;
  googleBusinessProfileUrl?: string;
}

export interface SeoConfig {
  defaultTitle: string; defaultDescription: string; canonicalUrl: string;
  ogImage: MediaAsset; keywords: string[]; jsonLd: PhysiotherapySchema;
}

export interface PhysiotherapySchema {
  '@context': 'https://schema.org';
  '@type': 'MedicalBusiness';
  medicalSpecialty: 'PhysicalTherapy';   // enum de schema.org; patrón verificado contra una landing real ya indexada
  name: string; image: string; telephone: string; email?: string;
  address: { '@type': 'PostalAddress'; streetAddress: string; addressLocality: string; addressCountry: string };
  areaServed?: { '@type': 'City'; name: string };
  geo?: { '@type': 'GeoCoordinates'; latitude: number; longitude: number };
  openingHoursSpecification: Array<{
    '@type': 'OpeningHoursSpecification'; dayOfWeek: string[]; opens: string; closes: string;
  }>;
  sameAs: string[];
}

export interface LegalInfo { dataPolicyUrl: string; dataPolicyLastUpdated: string; }
```

`site-content.ts` exporta `export const SITE_CONTENT: SiteContent = {...}` con los valores reales; lo no confirmado queda como `null` con comentario `// [PENDIENTE: ...]`. Todas las `sections/` consumen `SITE_CONTENT`, nunca texto hardcodeado — así, reusar la plantilla con otro profesional de salud es editar solo este archivo y los tokens SCSS.

## Fases de ejecución

| Fase | Objetivo | Archivos clave | Comandos | Criterio de terminado |
|---|---|---|---|---|
| **0 — Descubrimiento** | Reunir info real de la cliente | — | — | Usuario responde el cuestionario (abajo) o autoriza avanzar con `[PENDIENTE]` |
| **1 — Arquitectura local** | Proyecto Angular 22 SSG puro | `angular.json`, `app.routes.server.ts`, `app.config.server.ts`, `data/site-content.*` | `nvm use <v24.15+\|22.22.3+>`; `npm i -g @angular/cli@22.2.2`; `ng new fronted-landing-fisio --style=scss --ssr --routing` | `ng build` genera solo `dist/fronted-landing-fisio/browser/`, sin carpeta `server/`; `ng serve` sin errores de consola |
| **2 — Sistema de diseño** | Tokens SCSS + componentes base | `styles.scss`, `shared/ui/*` | — | Botones, tarjeta de servicio, acordeón FAQ, badge de credencial y FAB de WhatsApp con contraste ≥4.5:1 y soporte `prefers-reduced-motion` |
| **3 — Secciones** | Las 11 secciones consumiendo `SITE_CONTENT` | `sections/*`, `pages/home` | — | Un solo `<h1>`, jerarquía de encabezados correcta, testimonios ocultos si el array está vacío, mapa cargado con `@defer (on viewport)` |
| **4 — Contacto** | Opción A: WhatsApp sin backend | `sections/contact`, `core/whatsapp/whatsapp-link.util.ts` | — | Botón abre `wa.me/<numero>?text=...` con el mensaje armado; deshabilitado sin checkbox de autorización de datos marcado |
| **5 — SEO/rendimiento/accesibilidad** | Lighthouse móvil ≥90×4 | `core/seo/seo.service.ts`, `public/robots.txt`, `public/sitemap.xml` | — | JSON-LD válido (Rich Results Test), `NgOptimizedImage` con `priority` solo en hero, Lighthouse ≥90 en las 4 categorías |
| **6 — Deploy de vista previa** | URL pública no indexable | — | `ng build` → subir `dist/fronted-landing-fisio/browser/` | Preview carga con `noindex`, cada push a GitHub lo actualiza automáticamente |
| **7 — Producción** | Dominio, hosting, correo, analítica | — | — | Checklist de entrega firmado, dominio a nombre de la cliente, `noindex` removido, Search Console verificado |

## Decisiones del usuario (con recomendación aplicada)

1. **Opción de contacto (Fase 4)** — **Opción A** (WhatsApp sin backend) para esta etapa de vista previa; coincide con que `backend-landing-fisio` sigue vacío. Para producción simple: **Web3Forms** sobre Formspree/EmailJS (mejor límite gratuito, menos exposición de key en cliente) — verificar límites vigentes antes de decidir.
2. **Proveedor de preview (Fase 6)** — **Cloudflare Pages**: HTTPS automático, previews por PR, free tier sin restricción de uso comercial (a diferencia de Vercel Hobby). Netlify es alternativa igualmente válida si se prefiere su flujo de arrastrar-y-soltar.
3. **UI: SCSS+CSS vars vs Tailwind/Angular Material** — **Solo SCSS + variables CSS**: Angular Material añade peso pensado para dashboards, no para una landing de ~10 componentes; Tailwind duplica lo que ya hacen los tokens.
4. **Tipografía** — **Poppins (500/600/700, títulos) + Manrope (400-700, cuerpo)**, vía Google Fonts con `font-display: swap`. Decisión tomada tras revisar `mymfisioterapiaintegral.com` (landing real de fisioterapia ya en producción) — se adoptó su combo de fuentes en vez de la propuesta inicial de Inter única.
5. **Paleta de colores** — Se adoptó el estilo "bienestar cálido-orgánico" de la referencia (verde + naranja) en vez de la paleta azul-verdosa/terracota inicial, con el CTA oscurecido para garantizar AA 4.5:1 estricto (el verde de la referencia da ~4.35:1, insuficiente):
   - `--color-bg: #FFFFFF`, `--color-bg-alt: #F1F8F3`
   - `--color-text: #1C2622`, `--color-text-soft: #5B6B62`
   - `--color-primary: #3FA34D` (verde — iconos/bordes/tints, no texto normal sobre blanco)
   - `--color-cta: #297A38` (oscurecido desde `#2E8A3E`; único color válido para fondo de botón con texto blanco, ratio ≥4.5:1)
   - `--color-accent: #F2933B` (naranja — solo decorativo: pin de mapa, badges, iconos sobre su propio tint `#FDECDC`; nunca fondo de botón con texto blanco, da ~2.3:1)
6. **Router mínimo** — Se agrega `@angular/router` solo para la página de política de datos (footer), en vez de meter ese contenido legal en la landing.
7. **Mapa de ubicación** — Se mantiene el Google Maps embebido real con `@defer`, tal como pide el brief original (la referencia usa una ilustración estática en su lugar, pero se descartó esa opción).

## Información `[PENDIENTE]` a pedir a la cliente (Fase 0)

**Identidad**: nombre comercial; logo (o decidir si se usa texto como logo); colores de marca si ya existen; fotos profesionales (mín. 1 hero, 1 "sobre mí", 3-4 del consultorio).
**Credenciales**: formación académica (universidad, título, año); especializaciones/certificaciones; tarjeta profesional; registro ReTHUS (si es público); años de experiencia.
**Servicios** (por cada uno): nombre, duración de sesión, si requiere orden médica, beneficio principal para el paciente.
**Operación**: dirección exacta (debe coincidir con Google Business Profile); ciudad/país; horarios por día; modalidades (consultorio/domicilio/virtual); medios de pago; convenios o solo particular (y cuáles).
**Diferenciales**: 3-4 razones concretas (sin comparar con otros profesionales).
**Prueba social**: testimonios reales con autorización escrita explícita; enlace a reseñas de Google.
**Canales**: WhatsApp (con código de país); teléfono alterno; Instagram; Facebook; TikTok; URL de Google Business Profile.
**Público objetivo**: confirmar o ajustar (deportistas, dolor crónico, post-quirúrgicos, adultos mayores, gestantes, otro).
**Legal**: ¿existe ya una política de tratamiento de datos (Ley 1581 de 2012) o se redacta una base genérica para revisión legal posterior?

## Verificación end-to-end (una vez se ejecute cada fase)

- Fase 1: `ng build` sin errores, carpeta `dist/fronted-landing-fisio/browser/` existe y no hay `server/`; `ng serve` abre en `localhost:4200` sin errores de consola.
- Fase 3-4: navegar la página completa en el navegador, confirmar que el botón de WhatsApp abre con el mensaje prellenado, probar en viewport 360px y 1440px.
- Fase 5: correr Lighthouse (modo móvil) desde Chrome DevTools y validar JSON-LD en el Rich Results Test de Google.
- Fase 6: abrir la URL de preview en una pestaña de incógnito, confirmar `noindex` en el `<head>` y que un nuevo commit la actualiza.
