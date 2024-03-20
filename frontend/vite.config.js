import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { backendUrl } from "./src/api";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": backendUrl,
    },
  },
});

//  hier habe ich ein proxy eingefügt, damit können wir das Cors-Problom bei PATCH löschen.
// wenn wir Data fetchen, können wir das URL einfach schreiben "/api/v1/users..."
