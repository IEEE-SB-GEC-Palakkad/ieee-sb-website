import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Set VITE_BASE in your CI environment for sub-path GitHub Pages deployments
  // e.g. VITE_BASE=/ieee-sb-website/ for https://org.github.io/ieee-sb-website/
  // Leave unset (defaults to '/') when using a custom domain.
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
