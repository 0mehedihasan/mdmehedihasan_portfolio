import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    nitro({
      // Radix's SSR output imports tslib at runtime. Bundle it so the Vercel
      // function does not rely on an external node_modules copy being retained.
      noExternals: ["tslib"],
      preset: "vercel",
    }),
    react(),
    tailwindcss(),
  ],
});
