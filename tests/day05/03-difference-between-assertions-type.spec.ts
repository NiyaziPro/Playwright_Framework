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

test('Difference between assertion types - 2', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

    // Wait for the page to load
    await page.waitForLoadState("networkidle");

    // Locate the checkbox
    const checkboxLocator = page.locator("#checkbox-example").getByRole("button");
    await checkboxLocator.click();

    // Auto retrying assertion
    await expect(checkboxLocator).toHaveText("Add"); // Auto retrying assertion
    // Wait for the checkbox to be removed
    await page.waitForSelector("#checkbox", { state: "detached" });


    // Non-retrying assertion
    const checkboxText = await checkboxLocator.textContent(); // <-- Removes the checkbox
    expect(checkboxText).toEqual("Add"); // Non-retrying assertion <==FAIL

});
