import { test, expect } from "@playwright/test";

test("admin can access admin panel", async ({ page }) => {
  await page.goto("/admin-panel");
  await expect(page).toHaveURL(/admin-panel/);
  await expect(
    page.getByRole("heading", { name: /panel administratora/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /dodaj zadanie/i }),
  ).toBeVisible();
});
