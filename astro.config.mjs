import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yourdomain.com", // Essential for sitemap & SEO
  integrations: [
    react(),
    sitemap(), // Enables automatic sitemap generation
  ],
  vite: {
    define: {
      // Expose only safe environment variables
      "import.meta.env.PUBLIC_API_BASE": JSON.stringify(
        process.env.PUBLIC_API_BASE
      ),
    },
    server: {
      fs: {
        strict: true, // Prevents file system access outside root
      },
    },
  },
});
