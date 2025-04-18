import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node"; // Add this import

export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone", // Creates a standalone Node.js server
  }),
  experimental: {
    session: true, // Add this line to enable sessions
  },
});
