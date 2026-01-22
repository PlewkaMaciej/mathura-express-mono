import { test, expect } from "@playwright/test";

test("generator page loads", async ({ page }) => {
  await page.goto("http://localhost:3000/generator");

  await expect(page.getByRole("heading", { name: /generator/i })).toBeVisible();
});
