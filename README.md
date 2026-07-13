# JG Music Production — Landing Premium

Astro 5 · Tailwind CSS 4 · TypeScript · Keystatic CMS · Vercel

## Inicio rápido

```bash
npm install
npm run dev
```

- Sitio: http://localhost:4321
- CMS Keystatic: http://localhost:4321/keystatic

## Antes de publicar

1. **WhatsApp**: edita `src/lib/site.ts` → `whatsapp` (código de país + número, sin "+").
2. **Dominio**: actualiza `site` en `astro.config.mjs` y `url` en `src/lib/site.ts`.
3. **Imágenes**: sube tus fotos a `public/images/` siguiendo las rutas usadas en
   `src/lib/data.ts` y en el contenido de servicios (`src/content/services`).
   - Hero: 1920×1080 (jpg/webp)
   - Open Graph: `public/images/og-cover.jpg` (1200×630)
4. **Redes sociales**: edita `src/lib/site.ts` → `social`.


## Cómo agregar tus fotos de Instagram

1. Descarga las fotos desde tu Instagram (@jgmusicproduction): en cada publicación
   usa "⋯ → Guardar" desde el celular, o descarga tu archivo completo en
   Instagram → Configuración → Tu actividad → Descargar tu información.
2. Renombra cada foto según la tabla y cópiala en `public/images/`:

| Archivo | Sección | Tamaño sugerido |
|---|---|---|
| `images/hero/bodas.jpg` | Slide hero 1 | 1920×1080 |
| `images/hero/corporativos.jpg` | Slide hero 2 | 1920×1080 |
| `images/hero/conciertos.jpg` | Slide hero 3 | 1920×1080 |
| `images/hero/quinceaneros.jpg` | Slide hero 4 | 1920×1080 |
| `images/hero/lanzamientos.jpg` | Slide hero 5 | 1920×1080 |
| `images/about/evento-premium.jpg` | Sección Nosotros | 1000×1250 (vertical) |
| `images/services/sonido-profesional.jpg` … (10 archivos, ver `src/content/services/`) | Tarjetas de servicios | 800×500 |
| `images/packages/sociales.jpg`, `corporativos.jpg`, `conciertos.jpg` | Paquetes | 900×560 |
| `images/gallery/01.jpg` … `09.jpg` | Galería (01, 04, 07 verticales) | 900×675 / 900×1200 |
| `images/og-cover.jpg` | Vista previa al compartir | 1200×630 |

3. Mantén los mismos nombres de archivo y el sitio las tomará automáticamente —
   no hay que tocar código. Formato JPG o WEBP, idealmente < 400 KB por imagen.

## Contenido editable (Keystatic)

- **Servicios** → `src/content/services/*.yaml`
- **Testimonios** → `src/content/testimonials/*.yaml`

Edítalos desde `/keystatic` en desarrollo (storage local → commitea los cambios).

## Despliegue en Vercel

```bash
npm run build
```

Conecta el repo en Vercel; el adaptador `@astrojs/vercel` ya está configurado.
El sitio es estático (máxima velocidad); las rutas de Keystatic quedan fuera de producción
por defecto con storage local.

## Estructura

```
src/
  components/        UI reutilizable (Navbar, Footer, Button, WhatsAppFloat…)
    sections/        Secciones de la landing (Hero, Servicios, Paquetes…)
  layouts/           BaseLayout (SEO, OG, fuentes, AOS, JSON-LD)
  pages/             index.astro
  content/           Contenido Keystatic (services, testimonials)
  lib/               site.ts (config) · data.ts (datos estáticos)
  styles/            global.css (tokens Tailwind 4)
keystatic.config.ts  Esquema del CMS
public/              robots.txt, favicon, imágenes
```
