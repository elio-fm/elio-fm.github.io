import { defineConfig } from "astro/config";
import { copyFile } from "node:fs/promises";
import sitemap from "@astrojs/sitemap";

const stableSitemap = {
  name: "stable-sitemap",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      await copyFile(new URL("./sitemap-index.xml", dir), new URL("./sitemap.xml", dir));
    },
  },
};

export default defineConfig({
  site: "https://elio-fm.github.io",
  output: "static",
  integrations: [sitemap(), stableSitemap],
});
