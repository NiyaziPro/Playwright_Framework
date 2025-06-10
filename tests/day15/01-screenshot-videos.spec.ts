import { expect, test } from "@playwright/test";

test.describe("Test Suite", () => {
    test.describe.configure({mode: "parallel" , retries: 1})
  test("Test - 1", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    await page.getByRole('button', { name: 'Alle ablehnen' }).click();
    await page.screenshot({ path: "screenshots/google.png" });
  });
  test("Test - 2", async ({ page }) => {
    await page.goto("https://www.youtube.com");
    await expect(page).toHaveTitle("YouTube");
  });
  test("Test - 3", async ({ page }) => {
    await page.goto("https://www.github.com");
    await expect(page).toHaveTitle("GitHub");
  });
});
