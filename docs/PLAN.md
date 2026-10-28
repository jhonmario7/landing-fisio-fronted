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
| **5 — Despliegue de vista previa** | URL pública **no indexable** para que la cliente revise | ✅ Publicado el 15 oct 2026 en `https://yuli-fisioterapia.pages.dev` (Cloudflare Pages, flujo "legacy Pages", conectado a GitHub). Verificado: ambas rutas 200, `noindex`, `robots.txt` `Disallow: /`, JSON-LD, 1 `<h1>`, sin errores de consola ni scroll horizontal en 375px. Falta solo ver la primera preview de `develop` (se crea con el próximo push a esa rama). |
| **6 — SEO/rendimiento/accesibilidad** | Lighthouse móvil ≥90×4 sobre la URL real | ✅ Cerrada (19 oct 2026). **PageSpeed Insights (servidores de Google)** — Móvil: Performance **94**, Accessibility **100**, Best Practices **100**. Ordenador: **100 / 100 / 100**. SEO 69 solo por el `noindex`, a propósito (sube al quitarlo en Fase 7). |
| **7 — Producción** | Dominio, correo, analítica, indexación | ✅ Cerrada (26 oct 2026): `fisioyuli.com` y `www` activos con SSL, indexable, sitemap enviado y leído por Google, Cloudflare Web Analytics activo, reseñas reales, sin fotos de stock, textos e imágenes aprobados. |

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

**Primera medición (19 oct 2026, `yuli-fisioterapia.pages.dev`, Lighthouse 12 móvil):** Performance 84 · Accessibility 92 · Best Practices 100 · SEO 69.

Corregido:
- Contraste: los eyebrows usaban el dorado de marca (2.5:1). Nuevo token `--color-gold-text: #8F6500` (mismo dorado, más oscuro; ≥4.5:1 sobre blanco, crema y tint).
- Nombres accesibles: el logo del header (link) y el botón de WhatsApp en móvil no tenían texto visible → `aria-label`.
- `icon.webp` 240px/22 KB → 140px/8 KB, con `width`/`height` explícitos en header y footer.
- **Hidratación incremental** (`withIncrementalHydration` + `@defer (hydrate on viewport)` en todas las secciones bajo el hero y el footer): el HTML prerenderizado se ve completo; el JS de cada sección se descarga al entrar en pantalla (2 chunks al cargar, 11 tras recorrer la página). Verificado en Chrome headless: menú, FAQ, reveal-on-scroll y "Volver arriba" funcionan, sin errores.
- Imagen OG real `public/images/og-image.jpg` (1200×630, 44 KB): foto recortada de Yuli + logo + Book Antiqua/Calibri + colores de marca.
- JSON-LD revisado: estructura válida (`MedicalBusiness`); se agregó `addressRegion: 'Huila'`. Quedan `postalCode` y `geo` pendientes del Perfil de Negocio de Google. El Rich Results Test por URL no sirve mientras `robots.txt` bloquee: usar la opción "Código" pegando el JSON-LD del HTML.

- **Fuentes autoalojadas** en `public/fonts/` (Lora variable + Carlito 400/700/700i, subconjunto latino, OFL), `@font-face` inline en `index.html` y `preload` de las dos de la primera pantalla. Ya no hay peticiones a Google Fonts (mejor rendimiento y privacidad).

**Medición tras desplegar (develop, 3 corridas de Lighthouse local):** Performance 81 / 85 / 89 · Accessibility 100 · Best Practices 100 · SEO 69. FCP 1.7–2.6 s, LCP 2.9–3.1 s, CLS 0. El TBT varía 110–350 ms según la carga de la CPU local, por eso el número final se toma de PageSpeed Insights. En una carga real (sin la simulación de 4G lento) el FCP es 0.3–0.8 s.

Resultado final en PageSpeed Insights (develop): Móvil 94 / 100 / 100 / 69 · Ordenador 100 / 100 / 100 / 69. El `sitemap.xml` pasa a Fase 7 (se publica al quitar el `noindex`).

- Lighthouse móvil ≥90 en Performance, Accessibility, Best Practices y SEO (SEO dará bajo por el `noindex` a propósito; evaluarlo ignorando ese ítem).
- JSON-LD validado en el Rich Results Test / validator.schema.org (con URL absolutas).
- `public/sitemap.xml` con las 2 rutas (se publica recién en Fase 7, con el dominio final).
- Revisar presupuesto de bundle (`angular.json`: inicial 500 kB warn / 1 MB error) y peso de imágenes.
- Limpieza opcional: `server.ts`, `express` y el script `serve:ssr` no se usan con `outputMode: "static"`; se pueden quitar si no estorban al prerender (verificar con build).

## Fase 7 — Producción

Hecho en `develop` (22 oct 2026):
- ✅ Textos aprobados por la cliente.
- ✅ Perfil de Negocio de Google verificado. Ficha: `https://g.page/r/CR0sE00rkJrIECE` (en `sameAs` del JSON-LD); reseñas: `.../review`.
- ✅ Testimonios de ejemplo eliminados (y sus 3 fotos). Nueva sección "Testimonios" (reseñas de Google): tarjeta resumen (logo, promedio, nº de reseñas, "Escribe una reseña" → Google) + carrusel con scroll-snap nativo, flechas en escritorio, swipe en móvil, "Leer más" para textos largos. Sin reseñas cargadas muestra solo la tarjeta resumen.
- ✅ `noindex` quitado, `robots.txt` → `Allow` + `Sitemap:`, `public/sitemap.xml` (2 URLs). `public/_headers` marca `noindex` solo en el espejo `yuli-fisioterapia.pages.dev`.
- ✅ Dominio `fisioyuli.com` activo en Cloudflare Pages con SSL.

Estado final de la Fase 7:
1. **Reseñas reales**: 3 cargadas (Jimmy Alejandro Hernandez Yara, Jhon Mario Rodríguez Ramirez —con foto autorizada— y Laura Tejada Gutierrez; todas 5★, oct 2026). Seguir agregando las nuevas (link de cada reseña → nombre, estrellas, texto literal, mes/año) y completar `social.google.rating` / `count` cuando haya varias. Con 1-2 reseñas la sección se centra; con 3+ es carrusel de 2 por vista con flechas (swipe en móvil).
2. ✅ Imágenes y textos aprobados por la cliente (26 oct 2026). Sin fotos de stock: Terapia Manual Ortopédica y Rehabilitación Deportiva usan fotos propias nuevas (fotos-fisio-10 y -9); la sentadilla del consultorio pasó a Ejercicio Terapéutico. Las fotos 7 (radiografía: muestra el nombre de una paciente) y 8 (ecografía: cara de la paciente + marca de agua Meta AI) quedan sin usar (decisión del usuario).
3. ✅ En producción e indexable desde el 22 oct 2026 (`robots.txt` abierto, sin `noindex`; el espejo `pages.dev` responde `X-Robots-Tag: noindex`, verificado).
4. ✅ Google Search Console (26 oct 2026): propiedad de dominio `fisioyuli.com`; `https://fisioyuli.com/sitemap.xml` enviado, estado Correcto, 2 páginas descubiertas.
5. ✅ `www.fisioyuli.com` Active con SSL (26 oct 2026). Opcional: regla de redirección www → raíz en Cloudflare (Rules → Redirect Rules → plantilla "Redirect from WWW to root").
6. `postalCode` y `geo` del JSON-LD: pendiente que la cliente confirme código postal y ubicación del pin (opcional, mejora Google Maps).
7. ✅ Sección 12 de la política reescrita (26 oct 2026): sin cookies; Cloudflare Web Analytics sin cookies con datos agregados; enlaces a terceros. `dataPolicyLastUpdated` → 26 oct 2026.
8. ✅ Titularidad: el dominio queda en la cuenta de Cloudflare del desarrollador (decisión del usuario, 26 oct 2026), que administra el sitio y avisa a la cliente de la renovación anual (comprado el 19 oct 2026 → renovar antes del 19 oct 2027; Cloudflare Registrar lo renueva solo si la tarjeta está activa).
9. ✅ Contacto: queda solo WhatsApp (decisión del usuario, 26 oct 2026). El formulario sigue en el código, comentado en `home.html`, por si la cliente lo pide más adelante.
10. ✅ Cloudflare Web Analytics activo (26 oct 2026): el beacon se inyecta en producción (verificado tras el Retry deployment).

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
10. **Ramas** — `develop` (trabajo diario, preview automática por rama) → merge a `main` (lo que ve la cliente / producción). Sin rama de testing aparte: la URL de `develop` cumple ese rol.

## Información aún `[PENDIENTE]` de la cliente

Resuelto: nombre, logo, colores, tipografía, WhatsApp, correo, Instagram, 8 servicios con copy borrador, dirección, horarios, modalidades, medios de pago, sin convenios, formación y especializaciones, años de experiencia, fotos de ella y 4 del consultorio, política de datos.

Sigue pendiente:
- **Credenciales**: año del taller de Cupping; tarjeta profesional y ReTHUS (opcionales).
- **Servicios**: duración de sesión, si requieren orden médica, modalidades por servicio, fotos propias.
- **Ubicación**: coordenadas (para `geo` en JSON-LD) y URL de Google Business Profile.
- **Prueba social**: reseñas reales con autorización escrita.
- **Canales**: Facebook/TikTok si existen.
- **Imagen para compartir** (OG 1200×630) y dominio definitivo.
