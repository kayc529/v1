import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    css: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
    // only pick unit/component/integration tests under src/
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    // make sure e2e is excluded
    exclude: ["e2e/**", "node_modules/**", "dist/**"],
  },
});
