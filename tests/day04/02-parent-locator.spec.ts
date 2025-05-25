import { test, expect } from "@playwright/test";

// Parent Locator - https://playwright.dev/docs/locators#filter-by-childdescendant

test("Parent Locator 1", async ({ page }) => {
  // Navigate to the Practice Software Testing website
  await page.goto("https://www.practicesoftwaretesting.com/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Verifying
  await expect(
    page.locator(".checkbox").filter({ hasText: "Hand Tools" }).locator("input")
  ).toHaveCount(8);
});
