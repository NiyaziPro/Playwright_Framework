import { test, expect } from "@playwright/test";

// Playwright UI Components - Lists - https://playwright.dev/docs/input#lists

test("UI Components - Lists", async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto("https://www.practice-automation.com/form-fields/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Lists
  const list = page.getByRole("list");
  const playwright = page.getByText("Playwright");

  const listText = await list.allTextContents();
  const pwText = await playwright.textContent();
  console.log(listText);
  console.log(pwText);

  // Generic assertions
  expect(listText).toEqual([
    "Courses\nBlog\n",
    "\n  Selenium\n  Playwright\n  Cypress\n  Appium\n  Katalon Studio\n",
  ]);
  expect(pwText).toBe("Playwright");

  // Locator assertions
  await expect(list).toHaveText([
    "Courses\nBlog\n",
    "\n  Selenium\n  Playwright\n  Cypress\n  Appium\n  Katalon Studio\n",
  ]);
  await expect(playwright).toHaveText("Playwright");
});
