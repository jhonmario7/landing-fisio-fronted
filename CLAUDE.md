# CLAUDE.md — Landing fisioterapeuta (Angular)

Ver `docs/PLAN.md` para el plan completo por fases. Este archivo son las convenciones a seguir en cualquier sesión.

## Stack

- Angular 22 (standalone components, signals, control flow `@if`/`@for`, `@defer`), TypeScript, SCSS.
- SSG puro vía `@angular/ssr`: todas las rutas en `app.routes.server.ts` usan `RenderMode.Prerender`; `angular.json` tiene `outputMode: "static"`. No hay servidor Node en producción — la salida (`dist/fronted-landing-fisio/browser/`) es HTML/CSS/JS estático.
- `@angular/router` solo para dos rutas: `''` (home) y `'politica-de-tratamiento-de-datos'`. No agregar más rutas sin que lo pida el brief.
- Sin Angular Material, sin Tailwind. Solo SCSS + variables CSS como design tokens.
- Sin backend en esta etapa (`backend-landing-fisio` permanece vacío). Contacto = formulario reactivo que abre WhatsApp (`wa.me/<numero>?text=` + `encodeURIComponent`).

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

## Restricciones no negociables

- **Nunca inventar datos**: nombre, credenciales, cifras, testimonios o fotos deben venir confirmados por la cliente. Lo no confirmado se marca `[PENDIENTE: detalle]` en `site-content.ts`.
- **Publicidad en salud**: prohibido "cura garantizada", "resultados en X sesiones", o comparaciones con otros profesionales.
- **Datos personales (Ley 1581 de 2012, Colombia)**: el formulario de contacto pide solo nombre, teléfono y motivo general. Nunca pedir historia clínica ni diagnósticos. Checkbox de autorización obligatorio, con link a la política de tratamiento de datos.
- **Testimonios**: solo reales y con autorización escrita (`authorizedInWriting: true`). Si el array está vacío, la sección se oculta automáticamente — no renderizar placeholders.
- **Fotos de stock**: si se usan temporalmente, marcar `isStockTemporary: true` en el `MediaAsset` correspondiente.
- **Accesibilidad**: WCAG 2.1 AA, contraste mínimo 4.5:1, navegable por teclado con foco visible, alt text descriptivo real (nunca genérico).
- **Un solo `<h1>`** por página, jerarquía de encabezados correcta.
- **Animaciones**: deben respetar `prefers-reduced-motion`.
- **Imágenes**: `NgOptimizedImage`, `priority` solo en la foto del hero, lazy en el resto, WebP/AVIF con dimensiones explícitas.

## Design tokens (paleta aprobada)

Paleta validada contra una landing real de fisioterapia ya en producción (estilo "bienestar" cálido-orgánico), con la fórmula de CTA oscurecida para garantizar AA 4.5:1 estricto:

```scss
--color-bg: #FFFFFF;
--color-bg-alt: #F1F8F3;         // paper-2, verde muy pálido
--color-text: #1C2622;           // ink
--color-text-soft: #5B6B62;      // ink-soft, texto secundario
--color-border: rgba(28,38,34,.10);

--color-primary: #3FA34D;        // green — iconos, links grandes/bold, bordes, fondos con tint
--color-primary-tint: #E7F5E9;   // green-tint, fondo de íconos/badges
--color-cta: #297A38;            // oscurecido desde #2E8A3E (ref: 4.35:1) para blanco-sobre-fondo ≥4.5:1 estricto — ÚNICO uso: fondo de botón primario con texto blanco
--color-accent: #F2933B;         // orange — SOLO decorativo: pin de mapa, badges, íconos sobre su propio tint. NUNCA como fondo de botón con texto blanco (da ~2.3:1, falla AA)
--color-accent-tint: #FDECDC;
```

**Regla de uso de color**: `--color-primary` (verde) y `--color-accent` (naranja) son para iconos, bordes, fondos-con-tint o texto grande/bold — nunca texto normal sobre blanco sin tint (ambos caen por debajo de 4.5:1 en esa combinación). El único color apto como fondo de botón con texto blanco es `--color-cta`. El texto siempre usa `--color-text` / `--color-text-soft`.

Tipografía: **Poppins** (500/600/700, títulos — `var(--display)`) + **Manrope** (400-700, cuerpo — `var(--sans)`), ambas de Google Fonts con `font-display: swap`. Combo validado contra la referencia; reemplaza la elección inicial de Inter única.

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
