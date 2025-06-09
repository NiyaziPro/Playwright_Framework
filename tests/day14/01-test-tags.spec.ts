import { test } from "@playwright/test";
// tags
//$ npx playwright test --headed --grep @smoke --project=chromium
//$ npx playwright test --headed --grep "@tc02|@smoke"  --project=chromium

test.describe("Test Suite @regression", () => {
  test("Test - 1 @smoke", async ({ page }) => {
    await page.goto("https://www.google.com");
  });
  test("Test - 2 @tc02", async ({ page }) => {
    await page.goto("https://www.youtube.com");
  });
  test("Test - 3", async ({ page }) => {
    await page.goto("https://www.github.com");
  });
});
