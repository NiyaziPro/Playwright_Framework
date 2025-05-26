import { test, expect } from "@playwright/test";

test("Difference between assertion types", async ({ page }) => {
  // Navigate to the demoqa dynamic properties page
  await page.goto("https://demoqa.com/dynamic-properties");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Locate the button with id 'colorChange'
  const buttonLocator = page.locator("#colorChange");

  // Auto retrying assertion
  await expect(buttonLocator).toHaveClass("mt-4 text-danger btn btn-primary"); // Auto retrying assertion

  // Non-retrying assertion
  const buttonClassValue = await buttonLocator.getAttribute("class"); // --> mt-4 btn btn-primary
  expect(buttonClassValue).toEqual("mt-4 text-danger btn btn-primary"); // Non-retrying assertion <==FAIL
});
