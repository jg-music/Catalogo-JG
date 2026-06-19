// ═══════════════════════════════════════════════════
// src/lib/data.ts — Datos estáticos de la landing
// ═══════════════════════════════════════════════════

export interface HeroSlide {
  title: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  { title: "Bodas",                 image: "/images/hero/bodas.jpg" },
  { title: "Eventos Corporativos",  image: "/images/hero/corporativos.jpg" },
  { title: "Conciertos",            image: "/images/hero/conciertos.jpg" },
  { title: "Quinceañeros",          image: "/images/hero/quinceaneros.jpg" },
  { title: "Lanzamientos de Marca", image: "/images/hero/lanzamientos.jpg" },
];

export const BENEFITS = [
  { icon: "Users",          title: "Equipo Profesional",       text: "Técnicos y productores con años de trayectoria en eventos de alto nivel." },
  { icon: "Cpu",            title: "Tecnología de Vanguardia", text: "Equipos de sonido, iluminación y video de última generación." },
  { icon: "Award",          title: "Experiencia Comprobada",   text: "Cientos de eventos exitosos nos respaldan en todo tipo de formatos." },
  { icon: "HeartHandshake", title: "Atención Personalizada",   text: "Acompañamiento dedicado desde la cotización hasta el último aplauso." },
] as const;

export const PACKAGES = [
  {
    name: "Sociales",
    image: "/images/packages/sociales.jpg",
    items: ["Bodas", "Quinceañeros", "Cumpleaños"],
    description: "Producción integral para celebraciones que merecen ser perfectas: sonido, luces, DJ y entretenimiento premium.",
  },
  {
    name: "Corporativos",
    image: "/images/packages/corporativos.jpg",
    items: ["Eventos Corporativos", "Lanzamiento de Marca", "Conferencias"],
    description: "Soluciones técnicas impecables que elevan la imagen de tu marca ante clientes, aliados y colaboradores.",
  },
  {
    name: "Conciertos",
    image: "/images/packages/conciertos.jpg",
    items: ["Conciertos", "Mega Eventos"],
    description: "Infraestructura de gran formato: tarimas, line arrays, pantallas LED y operación técnica profesional.",
  },
] as const;

export const GALLERY = [
  { src: "/images/gallery/01.jpg", alt: "Iluminación de concierto en vivo", tall: true },
  { src: "/images/gallery/02.jpg", alt: "Montaje de boda elegante" },
  { src: "/images/gallery/03.jpg", alt: "Pantallas LED en evento corporativo" },
  { src: "/images/gallery/04.jpg", alt: "DJ en cabina profesional", tall: true },
  { src: "/images/gallery/05.jpg", alt: "Tarima y estructura de gran formato" },
  { src: "/images/gallery/06.jpg", alt: "Efectos especiales con chispas frías" },
  { src: "/images/gallery/07.jpg", alt: "Orquesta en vivo", tall: true },
  { src: "/images/gallery/08.jpg", alt: "Hora loca premium" },
  { src: "/images/gallery/09.jpg", alt: "Quinceañera en pista de baile" },
] as const;
