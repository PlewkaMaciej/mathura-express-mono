import { test as setup, expect } from "@playwright/test";

setup("authenticate admin", async ({ page }) => {
  await page.goto("http://localhost:3000/sign-in");

  await page
    .getByPlaceholder("Wprowadź adres email")
    .fill(process.env.E2E_ADMIN_EMAIL!);

  await page.getByRole("button", { name: "Kontynuuj", exact: true }).click();

  await expect(page.getByText(/wprowadź swoje hasło/i)).toBeVisible();

  await page
    .getByPlaceholder("Wprowadź swoje hasło")
    .fill(process.env.E2E_ADMIN_PASSWORD!);

  await page.getByRole("button", { name: "Kontynuuj", exact: true }).click();

  await page.waitForURL("**/");

  await page.context().storageState({ path: "admin-auth.json" });
});
