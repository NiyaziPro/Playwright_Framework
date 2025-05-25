import { test, expect } from "@playwright/test";

// Auto Retrying Assertion -    https://playwright.dev/docs/test-assertions
// Playwright automatically retries assertions until they pass or the timeout is reached.
// This is useful for assertions that may take some time to become true, such as waiting for an element to appear or change state.
// This feature helps to reduce flakiness in tests and ensures that assertions are robust against timing issues.
// In this example, we will demonstrate auto retrying assertions by checking the visibility of an element that may take some time to appear.
// This test will automatically retry the assertion until it passes or the timeout is reached.
// The test will fail if the element does not become visible within the specified timeout.

test("Reusing Locators", async ({ page }) => {
  // This test demonstrates how to reuse locators in Playwright
  // Reusing locators can help improve test readability and maintainability
  // by allowing you to define locators once and use them multiple times in your tests
  // The test will navigate to the letskodeit practice page and verify the presence of a button
  // that opens a new window when clicked
  // The test will also verify that the button text is "Open Window"
  // The test will use the getByRole locator to find the button and perform assertions on it

  // Navigate to the letskodeit practice page
  await page.goto("https://www.letskodeit.com/practice");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Assigning the button to a variable
  const openWindowButton = page.getByRole("button", { name: "Open Window" });

  // Verifying the new window is opened
  await expect(openWindowButton).toBeVisible();
  // Verifying the button text is "Open Window"
  await expect(openWindowButton).toHaveText("Open Window");
  // Click the button to open a new window
  await openWindowButton.click();
});
