import { test, expect } from "@playwright/test";

// Tooltips are small pop-up boxes that appear when a user hovers over an element.
// In Playwright, you can handle tooltips by using the `hover` method on a locator.
// The `hover` method simulates a mouse hover event on the specified element.
test("Tooltips - Hover over element", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://practice.expandtesting.com/tooltips");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Hover over the "Hover me" button to trigger the tooltip
  await page.getByRole("button", { name: "Tooltip on top" }).hover();
  const tooltipText = await page
    .getByRole("button", { name: "Tooltip on top" })
    .textContent();
  expect(tooltipText).toEqual("Tooltip on top");
  
});
