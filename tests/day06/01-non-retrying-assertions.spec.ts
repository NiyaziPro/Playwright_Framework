import { test, expect } from "@playwright/test";

// Playwright Non-retrying assertions - https://playwright.dev/docs/test-assertions#non-retrying-assertions
// Non-retrying assertions are assertions that do not automatically retry until the expected condition is met.
// They are useful when you want to check a condition that is not expected to change over time, such as the initial state of an element.

test("Non-retrying assertion 1", async ({ page }) => {
  // Navigate to the letskodeit
  await page.goto("https://www.letskodeit.com/practice");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // toBeTruthy and toBeFalsy assertions
  const bmwCheckbox = page.locator("#bmwradio");
  let bmwCheckboxStatus = await bmwCheckbox.isChecked();
  // Non-retrying assertion
  expect(bmwCheckboxStatus).toBeFalsy();
  // Click the BMW checkbox
  await bmwCheckbox.click();
  // Non-retrying assertion
  bmwCheckboxStatus = await bmwCheckbox.isChecked();
  expect(bmwCheckboxStatus).toBeTruthy();

  // toBeGreaterThan and toBeLessThan assertions
  const radioButtons = page.getByRole("radio");

  const radioButtonsCount = await radioButtons.count();
  // Non-retrying assertion
  expect(radioButtonsCount).toBeGreaterThan(0);
  expect(radioButtonsCount).toBeLessThan(10);
  expect(radioButtonsCount).toBeGreaterThanOrEqual(3);
  expect(radioButtonsCount).toBeLessThanOrEqual(3);

  // toContainText assertion
  const header = await page.getByRole("heading").textContent();
  expect(header).toContain("Practice");

  // toEqual assertion
  expect(header).toEqual("Practice Page");
});
