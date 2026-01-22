import { test, expect } from "@playwright/test";

test.describe("logowanie", () => {
  test("redirect", async ({ page }) => {
    await page.goto("/");
    const loginLink = page.getByRole("link", { name: "Zaloguj" });
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    await expect(page).toHaveURL(/\/sign-in/, {
      timeout: 10_000,
    });
    await expect(page.getByText(/sign in|zaloguj/i)).toBeVisible();
  });
});
