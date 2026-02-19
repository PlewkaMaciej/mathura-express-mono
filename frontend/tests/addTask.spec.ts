import { test, expect } from "@playwright/test";

test.describe("add task", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/admin-panel");
  });

  test("test add open task", async ({ page }) => {
    await page.getByTestId("task-name").fill("test task");

    await page
      .getByTestId("task-content")
      .fill("Rozwiąż równanie: 2x + 4 = 10");

    await page.getByTestId("section-select").selectOption({ label: "Algebra" });

    await page
      .getByTestId("subsection-select")
      .selectOption({ label: "Równania liniowe" });

    await page.getByRole("radio", { name: /zadanie otwarte/i }).check();

    await page.getByLabel(/maks\. punkty/i).fill("2");

    await page
      .getByLabel(/rubric/i)
      .fill("1 pkt – poprawne przekształcenie\n1 pkt – poprawny wynik x=3");
    await page.getByLabel(/referenceanswer/i).fill("x = 3");
    await page.getByTestId("save-task").click();
    await expect(page.getByText(/zadanie zostało zapisane/i)).toBeVisible();
  });
});
