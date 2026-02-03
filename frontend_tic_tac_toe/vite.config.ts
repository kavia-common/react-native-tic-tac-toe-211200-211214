import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginReactNativeWeb } from "vite-plugin-react-native-web";

/**
 * Vite config for React Native Web preview.
 * Keeps native builds intact (native uses Metro via Expo), while web uses Vite.
 */
export default defineConfig({
  plugins: [
    react(),
    // Provides correct aliasing and environment shims for react-native-web.
    VitePluginReactNativeWeb(),
  ],
  server: {
    // Let the platform pass PORT/HOST via .project_manifest.yaml placeholders.
    port: Number(process.env.PORT ?? 3000),
    host: true,
    strictPort: true,
  },
  // Some RN web deps expect global-like values; keep them defined.
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "development"),
  },
});
