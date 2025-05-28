import { test, expect } from "@playwright/test";

// Playwright UI Components - Checkboxes - https://playwright.dev/docs/input#checkboxes-and-radio-buttons
// Checkboxes are used to select one or more options from a list of options.
test("UI Components - Checkboxes", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://www.practice-automation.com/form-fields/");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  // Checkboxes
  let checkboxWater = page.getByRole("checkbox", { name: "Water" });
  let checkboxMilk = page.getByRole("checkbox", { name: "Milk" });

  // Click the Water checkbox
  await checkboxWater.check(); // Check the Water checkbox
  await checkboxMilk.click(); // Click the Milk checkbox

  await checkboxWater.check(); // Check the Water checkbox again - this not change the state since it is already checked
  await checkboxMilk.click(); // Click the Milk checkbox again - this will uncheck it

  await checkboxWater.uncheck(); // Uncheck the Water checkbox - this will uncheck it
  await checkboxMilk.uncheck(); // Uncheck the Milk checkbox - this will uncheck it

  // Generic assertion
  let waterCheckboxStatus = await checkboxWater.isChecked();
  let milkCheckboxStatus = await checkboxMilk.isChecked();
  // Assert that the Water checkbox is unchecked and the Milk checkbox is checked
  expect(waterCheckboxStatus).toBeFalsy();
  expect(milkCheckboxStatus).toBeFalsy();

  await checkboxWater.check(); // Check the Water checkbox again
  await checkboxMilk.check(); // Check the Milk checkbox again
  // Generic assertion
  waterCheckboxStatus = await checkboxWater.isChecked();
  milkCheckboxStatus = await checkboxMilk.isChecked();
  // Assert that the Water checkbox is checked and the Milk checkbox is checked
  expect(waterCheckboxStatus).toBeTruthy();
  expect(milkCheckboxStatus).toBeTruthy();

  // Locator assertions
  await expect(checkboxWater).toBeChecked();
  await expect(checkboxMilk).toBeChecked();
  // Assert that the Water checkbox is checked and the Milk checkbox is checked
  expect(await checkboxWater.isChecked()).toBeTruthy();
  expect(await checkboxMilk.isChecked()).toBeTruthy();
  // Assert that the Water checkbox is not unchecked and the Milk checkbox is not unchecked
  expect(await checkboxWater.isChecked()).not.toBeFalsy();
  expect(await checkboxMilk.isChecked()).not.toBeFalsy();

  // Assign all checkboxes to a variable and iterate through them
  let allCheckboxes = page.getByRole("checkbox");

  // Check all checkboxes and assert that they are checked
  // Note: This will check all checkboxes on the page, so be careful if there are many checkboxes
  for (const box of await allCheckboxes.all()) {
    await box.check(); // Check all checkboxes - for unchecking use box.uncheck()
    // Assert that the checkbox is checked
    expect(await box.isChecked()).toBeTruthy();

    // Uncheck all checkboxes and assert that they are unchecked

    for (const box of await allCheckboxes.all()) {
      await box.uncheck(); // Uncheck all checkboxes
      // Assert that the checkbox is unchecked
      expect(await box.isChecked()).toBeFalsy();
    }
  }
});
