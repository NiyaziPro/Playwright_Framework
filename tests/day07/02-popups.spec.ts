import { test, expect } from "@playwright/test";

// Playwright Popups - https://playwright.dev/docs/pages#handling-popups
// Popups are new browser windows or tabs that open when a user interacts with a web page.
// They can be triggered by clicking a link, submitting a form, or performing other actions.
// In Playwright, you can handle popups by listening for the `popup` event on the page object.
// The `popup` event is emitted when a new page is opened in a new window or tab.
// You can also use the `waitForEvent` method to wait for a popup to open.
// The following example demonstrates how to handle popups in Playwright.

test("Popups - Alert Popup", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://www.practice-automation.com/popups/");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  page.on("dialog", (dialog) => {
    expect(dialog.message()).toEqual("Hi there, pal!"); // Verify the alert message
    dialog.accept(); // Accept the alert popup
  });
  await page.getByRole("button", { name: "Alert Popup" }).click();
});

test("Popups - Confirm Popup", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://www.practice-automation.com/popups/");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  page.on("dialog", (dialog) => {
    expect(dialog.message()).toEqual("OK or Cancel, which will it be?"); // Verify the confirm message
    dialog.accept(); // Accept the confirm popup
  });
  await page.getByRole("button", { name: "Confirm Popup" }).click();
});

test("Popups - Prompt Popup", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://www.practice-automation.com/popups/");

  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  page.on("dialog", (dialog) => {
    expect(dialog.message()).toEqual("Hi there, what's your name?"); // Verify the prompt message
    dialog.accept("John Doe"); // Accept the prompt popup with a value
  });
  await page.getByRole("button", { name: "Prompt Popup" }).click();
});
