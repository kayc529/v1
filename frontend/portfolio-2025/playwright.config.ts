/// <reference types="node" />
import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

const useRealAPI = process.env.E2E_USE_REAL_API === "1";
const baseURL = process.env.E2E_BASE_URL ?? "http://localhost:4173";

export default defineConfig({
  testDir: "./e2e",
  retries: useRealAPI ? 1 : 0,
  use: {
    baseURL,
    trace: "retain-on-failure",
    video: "off",
    screenshot: "on",
    testIdAttribute: "data-testid",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  // Start Vite preview only for local runs
  webServer: {
    command: "npm run preview -- --port=4173",
    url: "http://localhost:4173",
    reuseExistingServer: true,
  },
});
