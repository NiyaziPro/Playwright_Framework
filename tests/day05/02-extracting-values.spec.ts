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
});
