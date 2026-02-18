import "dotenv/config";
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  projects: [
    {
      name: "setup",
      testMatch: /setup-admin\.spec\.ts/,
    },
    {
      name: "e2e",
      testIgnore: /setup-admin\.spec\.ts/,
      use: {
        baseURL: "http://localhost:3000",
        storageState: "admin-auth.json",
      },
      dependencies: ["setup"],
    },
  ],

  use: {
    trace: "on-first-retry",
  },

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
