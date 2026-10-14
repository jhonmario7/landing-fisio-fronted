# CLAUDE.md — Landing fisioterapeuta (Angular)

Ver `docs/PLAN.md` para el plan completo por fases. Este archivo son las convenciones a seguir en cualquier sesión.

## Stack

- Angular 22 (standalone components, signals, control flow `@if`/`@for`, `@defer`), TypeScript, SCSS.
- SSG puro vía `@angular/ssr`: todas las rutas en `app.routes.server.ts` usan `RenderMode.Prerender`; `angular.json` tiene `outputMode: "static"`. No hay servidor Node en producción — la salida (`dist/fronted-landing-fisio/browser/`) es HTML/CSS/JS estático.
- `@angular/router` solo para dos rutas: `''` (home) y `'politica-de-tratamiento-de-datos'`. No agregar más rutas sin que lo pida el brief.
- Sin Angular Material, sin Tailwind. Solo SCSS + variables CSS como design tokens.
- Sin backend en esta etapa (`backend-landing-fisio` permanece vacío). Contacto = formulario que abre WhatsApp (`wa.me/<numero>?text=` + `encodeURIComponent`).
- Formularios: **Signal Forms** (`@angular/forms/signals` — `form()`, `required()`, `pattern()`, `minLength()`, la directiva `[formField]`), NO el `ReactiveFormsModule` clásico (`FormGroup`/`FormControl`). Es la API nueva de formularios de Angular 22, confirmada en `node_modules/@angular/forms/types/signals.d.ts` (`publicApi 22.0`). Ver `sections/contact/contact.ts` como referencia de uso.

## Regla de contenido

Todo el texto, servicios, horarios, teléfono y redes vive en `src/app/data/site-content.ts`, tipado con las interfaces de `src/app/data/site-content.model.ts`. Ningún componente de `sections/` hardcodea texto — todos consumen `SITE_CONTENT`. El objetivo es que adaptar esta plantilla a otro profesional de salud sea editar solo `site-content.ts` y los tokens SCSS, nada de componentes.

## Estructura de carpetas

```
src/app/
├── core/       → seo.service.ts (Title/Meta + JSON-LD), whatsapp-link.util.ts
├── shared/     → ui/ (button, section-header, icon, credential-badge, whatsapp-fab, accordion), directives/ (reveal-on-scroll)
├── sections/   → header, hero, pain-points, services, about, process, testimonials, location, faq, contact, footer
├── pages/      → home (orquesta sections), privacy-policy
└── data/       → site-content.model.ts, site-content.ts
```

## Materiales de la cliente

`docs/materiales-fisio/` (ignorado por git) guarda documentos fuente que la cliente comparte: brandbook/logo, tarjeta de presentación, etc. Son la fuente de verdad para datos de marca — revisar ahí antes de asumir que algo sigue `[PENDIENTE]`.

## Restricciones no negociables

- **Nunca inventar datos**: nombre, credenciales, cifras, testimonios o fotos deben venir confirmados por la cliente. Lo no confirmado se marca `[PENDIENTE: detalle]` en `site-content.ts`.
- **Publicidad en salud**: prohibido "cura garantizada", "resultados en X sesiones", o comparaciones con otros profesionales.
- **Datos personales (Ley 1581 de 2012, Colombia)**: el formulario de contacto pide solo nombre, teléfono y motivo general. Nunca pedir historia clínica ni diagnósticos. Checkbox de autorización obligatorio, con link a la política de tratamiento de datos.
- **Testimonios**: solo reales y con autorización escrita (`authorizedInWriting: true`); si el array está vacío no se renderizan tarjetas falsas. La sección en sí **ya no se oculta por completo** cuando no hay testimonios: siempre muestra un CTA "Comparte tu experiencia" que abre WhatsApp con un mensaje prellenado (reseña + estrellas). Es la recolección de reseñas que pidió la cliente — sin backend: ella las recibe por WhatsApp, decide cuáles aprobar, y se agregan manualmente a `site-content.ts` cuando las confirme (`sections/testimonials/testimonials.ts`).
- **Fotos de stock**: si se usan temporalmente, marcar `isStockTemporary: true` en el `MediaAsset` correspondiente.
- **Accesibilidad**: WCAG 2.1 AA, contraste mínimo 4.5:1, navegable por teclado con foco visible, alt text descriptivo real (nunca genérico).
- **Un solo `<h1>`** por página, jerarquía de encabezados correcta.
- **Animaciones**: deben respetar `prefers-reduced-motion`.
- **Imágenes**: `NgOptimizedImage`, `priority` solo en la foto del hero, lazy en el resto, WebP/AVIF con dimensiones explícitas.

## Design tokens (marca real de la cliente)

**La paleta y tipografía NO son una elección de diseño nuestra — son la identidad de marca real de Yuli Fernanda Silva**, extraída de `docs/materiales-fisio/logo.pdf` (brandbook con valores CMYK oficiales) y convertida a hex. Esto reemplaza una paleta verde/naranja que se había usado provisionalmente antes de tener el brandbook real; nunca se debe volver a esa paleta.

```scss
--color-bg: #FFFFFF;
--color-bg-alt: #FAF5E9;         // crema cálido derivado del dorado
--color-text: #26170F;           // Chocolate (marca)
--color-text-soft: #6B5847;
--color-border: rgba(38,23,15,.12);

--color-primary: #C39800;        // Dorado Medio (marca) — iconos, links grandes/bold, bordes, fondos con tint
--color-primary-tint: #FBEFD1;
--color-cta: #26170F;            // Chocolate (marca) — ÚNICO color válido para fondo de botón con texto blanco (~17:1, muy por encima de AA)
--color-cta-hover: #3D2A1C;
--color-accent: #AD7A00;         // Dorado Oscuro (marca) — SOLO decorativo (no pasa AA con texto blanco, ~3.8:1)
--color-accent-tint: #F3E2BE;
--color-danger: #B42318;         // mensajes de error de formulario (no es color de marca, estándar de accesibilidad)
```

**Regla de uso de color**: los dorados (`--color-primary`, `--color-accent`) son para iconos, bordes, fondos-con-tint o texto grande/bold — nunca texto normal ni botones con texto blanco (fallan AA 4.5:1 en esa combinación). El único color apto como fondo de botón/FAB con texto blanco es `--color-cta` (chocolate) — así es como la propia cliente usa su marca en la tarjeta de presentación (panel chocolate + dorado/blanco). El texto siempre usa `--color-text` / `--color-text-soft`.

**Tipografía**: `--font-display: 'Poppins'` + `--font-sans: 'Manrope'`, ambas cargadas en `index.html` con `font-display: swap`.

⚠️ **Decisión explícita del usuario que contradice el brandbook** (14 oct 2026): el brandbook real de Yuli especifica Book Antiqua Bold + Calibri Light (para las que ya habíamos elegido los equivalentes web Lora + Carlito). El usuario vio la tipografía Poppins/Manrope en una landing de la competencia (M&M Fisioterapia) y pidió explícitamente adoptarla en su lugar, aun sabiendo que no coincide con el brandbook de Yuli. No revertir a Lora/Carlito sin que el usuario lo pida — esta fue una elección consciente, no un error.

## Comandos

```bash
nvm use <versión activa para este proyecto>   # Node ^22.22.3 | ^24.15.0 | >=26.0.0, instalada aparte vía nvm
npm install -g @angular/cli@22.2.2
ng new fronted-landing-fisio --style=scss --ssr --routing   # solo si el proyecto aún no existe
ng serve      # desarrollo local
ng build      # debe producir dist/fronted-landing-fisio/browser/ sin carpeta server/
```

## Git

Versionar desde el primer commit, con mensajes de commit descriptivos (no "wip", no "fix").

## Metodología de trabajo

Se avanza por fases (0 a 7, ver `docs/PLAN.md`) y se espera confirmación del usuario antes de pasar a la siguiente. No agregar features, rutas o dependencias fuera de lo que pide el brief sin señalarlo explícitamente primero.
