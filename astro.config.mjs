// @ts-check 
import { defineConfig } from "astro/config"; 
import react from "@astrojs/react"; 
import sitemap from "@astrojs/sitemap"; 
import tailwindcss from "@tailwindcss/vite"; 
 
export default defineConfig({ 
  site: "https://jgmusicproduction.com", 
  output: "static", 
  integrations: [react(), sitemap()], 
  vite: { plugins: [tailwindcss()] }, 
  image: { remotePatterns: [{ protocol: "https" }] }, 
}); 
