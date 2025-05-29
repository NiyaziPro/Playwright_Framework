import { test, expect } from "@playwright/test";

// Playwright UI Components - Dropdown - https://playwright.dev/docs/input#select-options
// Dropdowns are used to select one or more options from a list of options.
// They are commonly used in forms and can be implemented using the <select> HTML element.
// In Playwright, you can interact with dropdowns using the `selectOption` method.
// This method allows you to select an option by its value, label, or index.
// You can also use the `getByRole` method to locate the dropdown element by its role.
// The following example demonstrates how to select an option from a dropdown.

test("UI Components - Single Select Dropdown", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://www.practice-automation.com/form-fields/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Dropdown
  const dropdown = page.locator("#automation");
  const dropdownOptions = await dropdown.locator("option").allTextContents();

  console.log(dropdownOptions);
  // Generic assertions
  expect(dropdownOptions).toEqual(["", "Yes", "No", "Undecided"]);
  // Locator assertions
  const options = dropdown.locator("option");
  await expect(options).toHaveText(["", "Yes", "No", "Undecided"]);

  // Select Undecided option
  await dropdown.selectOption({ label: "Undecided" });

  // Select Yes option
  await dropdown.selectOption({ value: "yes" });
  // Verify  the count of options
  const optionCount = await dropdown.locator("option").count();
  console.log(`Number of options: ${optionCount}`);
  expect(optionCount).toBe(4);

  // Verify the selected option
  await expect(dropdown).toHaveValue("yes");
});

test("UI Components - Multiple Select Dropdown", async ({ page }) => {
  // Navigate to the letscodeit page
  await page.goto("https://www.letskodeit.com/practice");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  // Multiple Select Dropdown
  const multiSelectDropdown = page.locator("#multiple-select-example");

  // Select multiple options
  await multiSelectDropdown.selectOption(["Apple", "Orange"]);
  // Verify the selected options
  const selectedOptions = await multiSelectDropdown
    .locator("option:checked")
    .allTextContents();
  console.log(selectedOptions);
  expect(selectedOptions).toEqual(["Apple", "Orange"]);
  // Verify the count of selected options
  const selectedCount = await multiSelectDropdown
    .locator("option:checked")
    .count();
  console.log(`Number of selected options: ${selectedCount}`);
  expect(selectedCount).toBe(2);

  // toBeVisible assertion
  await expect(multiSelectDropdown).toBeVisible();

  // toBeEnabled assertion
  await expect(multiSelectDropdown).toBeEnabled();
});
