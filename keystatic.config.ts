import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  ui: { brand: { name: "JG Music Production" } },
  collections: {
    services: collection({
      label: "Servicios",
      slugField: "title",
      path: "src/content/services/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Nombre del servicio" } }),
        description: fields.text({ label: "Descripción", multiline: true }),
        icon: fields.text({
          label: "Icono (nombre Lucide)",
          description: "Ej: Speaker, Lightbulb, MonitorPlay, Music",
          defaultValue: "Sparkles",
        }),
        image: fields.text({
          label: "Imagen (ruta en /public)",
          description: "Ej: /images/services/sonido.jpg",
          defaultValue: "",
        }),
        order: fields.number({ label: "Orden", defaultValue: 99 }),
      },
    }),
    testimonials: collection({
      label: "Testimonios",
      slugField: "name",
      path: "src/content/testimonials/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({ name: { label: "Nombre del cliente" } }),
        event: fields.text({ label: "Tipo de evento" }),
        quote: fields.text({ label: "Testimonio", multiline: true }),
        order: fields.number({ label: "Orden", defaultValue: 99 }),
      },
    }),
  },
});
