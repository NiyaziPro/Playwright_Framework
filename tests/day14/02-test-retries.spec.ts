import { expect, test } from "@playwright/test";
// test retries

test.describe("Test Suite", () => {
  test.describe.configure({ retries: 2 }); // just for this Test Suite retries failled  tests 2 times
  
  test("Test - 1", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
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
