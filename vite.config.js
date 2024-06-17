import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import he from "he";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [he.js],
    },
  },
});
