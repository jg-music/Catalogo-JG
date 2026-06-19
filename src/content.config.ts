import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().default("Sparkles"),
    image: z.string().default(""),
    order: z.number().default(99),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/testimonials" }),
  schema: z.object({
    name: z.string(),
    event: z.string(),
    quote: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { services, testimonials };
