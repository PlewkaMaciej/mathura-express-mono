import { test, expect } from "@playwright/test";

test("admin panel renders correctly", async ({ page }) => {
  await page.goto("/admin-panel");

  await expect(page).toHaveURL(/admin-panel/);

  await expect(
    page.getByRole("heading", { name: /administratora/i }),
  ).toBeVisible();

  await expect(
    page.getByRole("button", { name: /dodaj zadanie/i }),
  ).toBeVisible();
});
