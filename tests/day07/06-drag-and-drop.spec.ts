import { test, expect } from "@playwright/test";

// Playwright Drag and Drop - Drag and drop elements on a page
// In Playwright, you can perform drag and drop actions using the `dragTo` method on a locator.
// The `dragTo` method simulates a drag and drop action by dragging an element to a specified target element.
// The `dragTo` method takes a target locator as an argument and performs the drag and drop action.
// Example: Drag and drop an element to a target element
test("Drag and Drop - Drag and drop elements on a page", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://practice.expandtesting.com/drag-and-drop");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Get the source and target elements for drag and drop
  const sourceElement = page.locator("#column-a");
  const targetElement = page.locator("#column-b");

  // Perform drag and drop action
  await sourceElement.dragTo(targetElement);
});

test("Drag and Drop - Drag and drop elements on a page with offset", async ({
  page,
}) => {
  // Navigate to the practice automation page
  await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  // Cookie consent handling
  await page.getByRole("button", { name: "Consent" }).click();

  // Switch to the frame that contains the drag and drop elements
  const frame = page.frameLocator(".demo-frame.lazyloaded");

  const photo1 = frame.getByAltText("The peaks of High Tatras");
  const photo2 = frame.getByAltText("The chalet at the Green mountain lake");
  const photo3 = frame.getByAltText("Planning the ascent");
  const photo4 = frame.getByAltText("On top of Kozi kopka");
  const trash = frame.locator("#trash");

  // Perform drag and drop action with offset
  await photo1.dragTo(trash);
  // Wait for the first photo to be dropped
  await page.waitForTimeout(2000); // Adjust the timeout as needed
  await photo2.dragTo(trash);
  // Wait for the second photo to be dropped
  await page.waitForTimeout(2000); // Adjust the timeout as needed
  await photo3.dragTo(trash);
  // Wait for the third photo to be dropped
  await page.waitForTimeout(2000); // Adjust the timeout as needed
  await photo4.dragTo(trash);
  // Wait for the fourth photo to be dropped
  await page.waitForTimeout(2000); // Adjust the timeout as needed
});
