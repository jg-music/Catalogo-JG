// ═══════════════════════════════════════════════════
// src/lib/site.ts — Configuración global del sitio
// ═══════════════════════════════════════════════════

export const SITE = {
  name: "JG Music Production",
  tagline: "Producimos Experiencias Inolvidables",
  description:
    "Sonido, iluminación, video y entretenimiento para eventos de alto nivel. Bodas, eventos corporativos, conciertos, quinceañeros y lanzamientos de marca.",
  url: "https://jgmusicproduction.com",
  locale: "es_CO",
  // WhatsApp de JG Music Production (+57 300 4057526)
  whatsapp: "573004057526",
  email: "jgmusicprodution@gmail.com",
  city: "Barranquilla, Colombia",
  social: {
    instagram: "https://www.instagram.com/jgmusicproduction",
    facebook: "https://www.facebook.com/profile.php?id=100070776054121",
  },
} as const;

/** Genera un enlace de WhatsApp con mensaje pre-cargado */
export function waLink(message: string = "Hola, quiero cotizar un evento 🎉"): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Galería", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;
