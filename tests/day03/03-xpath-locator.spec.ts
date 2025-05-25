import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

// Xpath Locators - https://playwright.dev/docs/locators#locate-by-css-or-xpath

test("Xpath Locators", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/register");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Verifying the page
  await expect(page.locator("//h3")).toHaveText("Customer registration");

  // Using XPath to fill the first name field
  await page.locator('//input[@id="first_name"]').fill("John");

  // Verifying the first name field is filled
  const firstNameField = await page.locator('//input[@id="first_name"]');
  await expect(firstNameField).toHaveValue("John");

  // Using XPath to fill the last name field
  await page
    .locator('//input[@id="last_name" and @placeholder="Your last name *"]')
    .fill("Doe");

  // Verifying the last name field is filled
  const lastNameField = await page.locator('//input[@id="last_name"]');
  await expect(lastNameField).toHaveValue("Doe");

  // Using XPath to fill the email field
  await page.locator('//input[@id="email"]').fill(faker.internet.email());
  // Verifying the email field is filled
  const emailField = await page.locator('//input[@id="email"]');
  await expect(emailField).toHaveValue(/.+@.+\..+/); // Regex to check valid email format

  // Verify with contains
  await expect(
    page.locator('//h3[contains(text(), "Customer registration")]')
  ).toBeVisible();
});
