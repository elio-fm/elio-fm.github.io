import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://elio-fm.github.io",
  output: "static",
  integrations: [sitemap()],
});
