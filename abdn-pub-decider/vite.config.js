import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build", // Set build output to 'build' folder for GitHub Pages
  },
  base: "/abdn_pub_decider/", // Add this line to set the base path
});
