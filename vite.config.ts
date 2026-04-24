import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true
  },

  server: {
    port: 5173,
    strictPort: true,
    open: true
  },

  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
