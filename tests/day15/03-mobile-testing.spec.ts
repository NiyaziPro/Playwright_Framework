import { expect, test } from "@playwright/test";

test.describe("Test Suite", () => {
  test("Test - 1", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    await page.getByRole("button", { name: "Alle ablehnen" }).click();
  });
});
