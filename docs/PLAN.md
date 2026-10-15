# Plan — Landing page Angular para fisioterapeuta

> Última revisión: **15 oct 2026**. Maquetación (fases 1-4) cerrada por decisión del usuario; se pasa a **Fase 5 — Despliegue de vista previa**.

## Contexto

El proyecto nace de `../prompt-landing-fisioterapeuta.md`, un brief que define rol, fases, criterios de calidad y restricciones para construir una landing que convierta visitantes en pacientes (WhatsApp, llamada o formulario). Cliente: **Yuli Fernanda Silva**, fisioterapeuta en Neiva, Huila. La carpeta hermana `backend-landing-fisio` sigue vacía — no hay backend en esta etapa.

Repositorio: `github.com/jhonmario7/landing-fisio-fronted` (rama `main`).

Entorno: Node `v24.15.0` vía nvm-windows (el Node global del usuario no se toca), Angular CLI **22.2.2**.

## Enfoque técnico (implementado)

- Angular 22: standalone components, signals, control flow `@if`/`@for`, Signal Forms (`@angular/forms/signals`).
- SSG puro: `app.routes.server.ts` usa `RenderMode.Prerender` para `**`; `angular.json` tiene `"outputMode": "static"`. `ng build` produce solo `dist/fronted-landing-fisio/browser/` (verificado 15 oct: "Prerendered 2 static routes", sin carpeta `server/`).
- Router mínimo con dos rutas lazy: `''` (home) y `'politica-de-tratamiento-de-datos'`.
- Sin Angular Material ni Tailwind: SCSS + variables CSS como design tokens (ver `CLAUDE.md`).
- `Seo` (`core/seo.ts`) fija title/description/OG/canonical por página e inyecta el JSON-LD; queda horneado en el HTML prerenderizado.

## Estructura real

```
fronted-landing-fisio/
├── public/
│   ├── favicon.ico, favicon-32.png, apple-touch-icon.png
│   └── images/   hero, about(-cutout), pain-banner, service-*, espacio-*, testimonio-*, logo-light.svg, icon
└── src/
    ├── index.html, main.ts, main.server.ts, server.ts, styles.scss
    └── app/
        ├── app.ts/.html/.scss, app.config(.server).ts, app.routes(.server).ts
        ├── core/        seo.ts, whatsapp-link.util.ts
        ├── shared/
        │   ├── ui/          button, section-header, icon, credential-badge, whatsapp-fab, accordion
        │   └── directives/  reveal-on-scroll.ts
        ├── sections/    header, hero, pain-points, services, about, space,
        │                testimonials, location, faq, contact (oculta), footer
        ├── pages/       home, privacy-policy
        └── data/        site-content.model.ts, site-content.ts
```

## Modelo de contenido

La fuente de verdad del tipado es `src/app/data/site-content.model.ts` (no se duplica aquí para que no se desincronice). Respecto al diseño original se agregaron: `brandTagline`, `painPhoto`, `patientsServed`, `Credential.year`, imagen por servicio, icono por diferencial, `ContactContent` (motivos + próximos pasos), `Testimonial.photo` / `isPlaceholder`, `SocialChannels.email` y `LegalInfo.dataPolicySections` (la política completa vive en datos, no en el componente).

## Estado por fase

| Fase | Objetivo | Estado |
|---|---|---|
| **0 — Descubrimiento** | Reunir info real de la cliente | ✅ Mayormente resuelto con `docs/materiales-fisio/` y feedback directo. Quedan pendientes puntuales (ver abajo). |
| **1 — Arquitectura local** | Angular 22 SSG puro | ✅ Hecho y verificado. |
| **2 — Sistema de diseño** | Tokens SCSS + componentes base | ✅ Hecho con la marca real (dorado/chocolate, Lora/Carlito). |
| **3 — Secciones** | 11 secciones consumiendo `SITE_CONTENT` | ✅ Hecho: 1 solo `<h1>`, mapa SVG ilustrado + "Cómo llegar", FAB WhatsApp, botón "Volver arriba", `NgOptimizedImage` con `priority` solo en el hero, `prefers-reduced-motion` respetado. |
| **4 — Contacto** | WhatsApp sin backend | ✅ Implementado (Signal Forms + checkbox Ley 1581) pero **el formulario está oculto** desde el 14 oct a pedido del usuario (comentado en `home.html`/`home.ts`, se rediseñará). El contacto hoy es por los CTA/FAB de WhatsApp. |
| **5 — Despliegue de vista previa** | URL pública **no indexable** para que la cliente revise | ⏳ **Fase actual** (detalle abajo). |
| **6 — SEO/rendimiento/accesibilidad** | Lighthouse móvil ≥90×4 sobre la URL real | Pendiente. Se movió después del deploy: medir sobre la preview en Cloudflare es más fiel que sobre `localhost`. |
| **7 — Producción** | Dominio, correo, analítica, indexación | Pendiente (bloqueantes listados abajo). |

> Cambio de orden (15 oct 2026): antes la Fase 5 era SEO/rendimiento y la 6 el deploy. Se invirtieron porque el usuario quiere tener la preview publicada ya, y la auditoría Lighthouse/Rich Results se hace mejor contra la URL desplegada.

## Fase 5 — Despliegue de vista previa (detalle)

Proveedor: **Cloudflare Pages** conectado al repo de GitHub (decisión ya tomada: HTTPS automático, previews por rama/PR, free tier sin restricción comercial).

### 5.1 Preparación en código — ✅ hecha (15 oct 2026)

Resultado: `noindex` en `index.html`, `public/robots.txt` con `Disallow: /`, `.nvmrc` = `24.15.0`, `<title>` real, y `SITE_URL = 'https://yuli-fisioterapia.pages.dev'` en `site-content.ts` alimentando canonical, `og:image` y JSON-LD (`image` + `url`). OG usa temporalmente `hero.webp` (vertical) hasta tener una 1200×630. Verificado en el HTML de `dist/`. **El proyecto de Cloudflare debe llamarse `yuli-fisioterapia`**; si ese nombre está ocupado, cambiar `SITE_URL`.

Detalle original:

1. **`noindex` doble** — mientras sea preview no debe aparecer en Google:
   - `<meta name="robots" content="noindex, nofollow">` en `src/index.html` (viaja en el HTML estático de ambas rutas).
   - `public/robots.txt` con `Disallow: /`.
   - Ojo: Cloudflare solo añade `X-Robots-Tag: noindex` automático a los deploys de **rama**, no al dominio principal `*.pages.dev`, por eso hace falta lo nuestro.
2. **Versión de Node para el build remoto** — Angular CLI 22 exige `^22.22.3 || ^24.15.0`; la imagen de build de Cloudflare puede traer otra. Agregar `.nvmrc` con `24.15.0` (Cloudflare lo lee) o la variable `NODE_VERSION=24.15.0` en el proyecto de Pages.
3. **`canonicalUrl` y JSON-LD `image`** — hoy son `[PENDIENTE: ...]` y salen literal en el HTML (`<link rel="canonical" href="[PENDIENTE: dominio definitivo]">`, URL inválida). Para la preview: usar la URL `https://<proyecto>.pages.dev` una vez exista; en Fase 7 se cambia por el dominio definitivo. `og:url`/`og:image` deben ser **absolutas** para que WhatsApp/Instagram muestren la tarjeta del link.
4. **Imagen OG** — `/images/og-image-placeholder.jpg` no existe (404). Crear una 1200×630 a partir de fotos/logo reales que ya tenemos (no inventada) o, mínimo, apuntar temporalmente a `hero.webp`. Útil porque la preview se compartirá con la cliente por WhatsApp.
5. **`<title>` de `index.html`** — quedó `FrontedLandingFisio`; el prerender lo sobrescribe, pero se ve en `index.csr.html` y mientras carga. Cambiar al nombre real.
6. Verificar `ng build` local + revisar en el HTML de `dist/.../browser/` que estén `noindex`, canonical y JSON-LD correctos.

### 5.2 Configuración en Cloudflare (lo hace el usuario — requiere su cuenta)

| Campo | Valor |
|---|---|
| Framework preset | None (o Angular) |
| Build command | `npx ng build` |
| Build output directory | `dist/fronted-landing-fisio/browser` |
| Variable de entorno | `NODE_VERSION=24.15.0` (si no se usa `.nvmrc`) |
| Rama de producción | `main` |

Cloudflare despliega lo que esté **pusheado** en `main`; los cambios locales sin commit no salen.

### 5.3 Criterio de terminado

- La URL `*.pages.dev` carga ambas rutas (`/` y `/politica-de-tratamiento-de-datos`) sin errores de consola, incluyendo recarga directa en la ruta de política (SSG genera `politica-de-tratamiento-de-datos/index.html`, así que no hace falta regla SPA).
- En el `<head>` aparece `noindex` y `robots.txt` devuelve `Disallow: /`.
- Un push a `main` actualiza la preview automáticamente.
- Probado en incógnito, móvil real (360px) y escritorio (1440px); el link compartido por WhatsApp muestra título/imagen.

## Fase 6 — SEO, rendimiento y accesibilidad (sobre la preview)

- Lighthouse móvil ≥90 en Performance, Accessibility, Best Practices y SEO (SEO dará bajo por el `noindex` a propósito; evaluarlo ignorando ese ítem).
- JSON-LD validado en el Rich Results Test / validator.schema.org (con URL absolutas).
- `public/sitemap.xml` con las 2 rutas (se publica recién en Fase 7, con el dominio final).
- Revisar presupuesto de bundle (`angular.json`: inicial 500 kB warn / 1 MB error) y peso de imágenes.
- Limpieza opcional: `server.ts`, `express` y el script `serve:ssr` no se usan con `outputMode: "static"`; se pueden quitar si no estorban al prerender (verificar con build).

## Fase 7 — Producción: bloqueantes antes de quitar el `noindex`

1. **Testimonios de ejemplo** — hoy se muestran 3 tarjetas con nombres, textos y fotos genéricas (`isPlaceholder: true`, `authorizedInWriting: false`). Aceptable en la preview privada para que la cliente vea el diseño; **prohibido en producción** (regla de testimonios reales con autorización escrita). Reemplazar por reseñas reales o vaciar el array (queda solo el CTA "Comparte tu experiencia").
2. **Fotos de stock temporales** (`isStockTemporary: true`): las 8 de servicios, `painPhoto`, 2 del espacio. Reemplazar por fotos reales o aprobarlas explícitamente.
3. **Copy BORRADOR** (bio, servicios, FAQ, contacto) aprobado por la cliente.
4. Dominio definitivo a nombre de la cliente → `canonicalUrl`, `og:*`, JSON-LD `image`, `sitemap.xml`.
5. Quitar `noindex` (meta + `robots.txt` → `Allow` + `Sitemap:`), verificar en Search Console, vincular Google Business Profile en `sameAs`.
6. Decidir si se reactiva el formulario de contacto (rediseñado) o queda solo WhatsApp.
7. Sección 12 de la política (cookies): ajustarla al funcionamiento real si se agrega analítica.

## Decisiones del usuario

1. **Contacto** — Opción A (WhatsApp sin backend). Formulario oculto desde el 14 oct; para producción simple, si se necesitara correo: Web3Forms (verificar límites vigentes).
2. **Hosting** — Cloudflare Pages (Netlify como alternativa).
3. **UI** — Solo SCSS + variables CSS.
4. **Tipografía** — Lora + Carlito (equivalentes web de Book Antiqua Bold + Calibri Light del brandbook). Poppins/Manrope se probó y se revirtió el 14 oct.
5. **Paleta** — dorado + chocolate del brandbook; CTA siempre chocolate por contraste AA (detalle en `CLAUDE.md`).
6. **Router mínimo** — solo para la política de datos.
7. **Mapa** — SVG ilustrado propio + botón "Cómo llegar" a Google Maps (sin iframe).
8. **Testimonios** — CTA "Comparte tu experiencia" por WhatsApp siempre visible; tarjetas de ejemplo temporales solo hasta tener reseñas reales.
9. **Orden de fases** — deploy de preview (5) antes de auditoría SEO/rendimiento (6).

## Información aún `[PENDIENTE]` de la cliente

Resuelto: nombre, logo, colores, tipografía, WhatsApp, correo, Instagram, 8 servicios con copy borrador, dirección, horarios, modalidades, medios de pago, sin convenios, formación y especializaciones, años de experiencia, fotos de ella y 4 del consultorio, política de datos.

Sigue pendiente:
- **Credenciales**: año del taller de Cupping; tarjeta profesional y ReTHUS (opcionales).
- **Servicios**: duración de sesión, si requieren orden médica, modalidades por servicio, fotos propias.
- **Ubicación**: coordenadas (para `geo` en JSON-LD) y URL de Google Business Profile.
- **Prueba social**: reseñas reales con autorización escrita.
- **Canales**: Facebook/TikTok si existen.
- **Imagen para compartir** (OG 1200×630) y dominio definitivo.
