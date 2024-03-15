import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

});

  server: {
    proxy: {
      "/api": "http://localhost:4444",
    },
  },
});

//  hier habe ich ein proxy eingefügt, damit können wir das Cors-Problom bei PATCH löschen.
// wenn wir Data fetchen, können wir das URL einfach schreiben "/api/v1/users..."

