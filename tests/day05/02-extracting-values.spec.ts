import { test, expect } from "@playwright/test";

// Extracting Values - https://playwright.dev/docs/api/class-playwrightassertions#playwright-assertions-expect-generic

test("Extracting Values", async ({ page }) => {
  // Navigate to the letskodeit practice page
  await page.goto("https://www.letskodeit.com/practice");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Text Value
  const openWindowButton = page.getByRole("button", { name: "Open Window" });
  const buttonText = await openWindowButton.textContent();

  // Verify the button text
  expect(buttonText).toEqual("Open Window");

  // Input Value
  const inputField = page.getByPlaceholder("Enter your name");
  // Fill the input field with a value
  await inputField.fill("John Doe");
  // Get the value from the input field
  const inputValue = await inputField.inputValue();
  // Verify the input value
  expect(inputValue).toEqual("John Doe");

  // Attribute Value
  const inputFieldNameAttributeValue = await inputField.getAttribute("name");
  // Verify the name attribute value
  expect(inputFieldNameAttributeValue).toEqual("enter-name");
});
