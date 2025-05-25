import { test, expect } from "@playwright/test";

// User Facing Locators - https://playwright.dev/docs/locators
// These locators are designed to be more readable and user-friendly, making tests easier to write and maintain.

test("Practice 1 - User Facing Locators", async ({ page }) => {
  // This test demonstrates the use of user-facing locators in Playwright
  // The locators used in this test are designed to be more readable and user-friendly, making tests easier to write and maintain
  // The test will perform a login action and navigate to the "My Info" section
  // The test will also verify that the login was successful by checking for the presence of the "Dashboard" heading
  // and the "company-branding" image
  // The test will also verify that the "Personal Details" heading is visible after navigating to the "My Info" section
  // The test will use various user-facing locators such as getByRole, getByPlaceholder, and getByAltText
  // This test is a good example of how to use user-facing locators in Playwright to interact with web elements in a more readable and maintainable way

  // Navigate to the OrangeHRM demo site
  await page.goto("https://opensource-demo.orangehrmlive.com");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  // Verify that the login heading is visible
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  // Verify that the company branding image is visible
  await expect(page.getByAltText("company-branding")).toBeVisible();
  // Fill in the username fields
  await page.getByPlaceholder("Username").fill("Admin");
  // Fill in the password field
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  // Click the login button
  await page.getByRole("button", { name: "Login" }).click();
  // Verify that the dashboard heading is visible after login
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "My Info" }).click();
  // Verify that the "Personal Details" heading is visible after navigating to "My Info"
  await expect(
    page.getByRole("heading", { name: "Personal Details" })
  ).toBeVisible();
});

test("Practice 2 - User Facing Locators", async ({ page }) => {
  // Navigate to the Sauce Demo website
  await page.goto("https://saucedemo.com/");
  // Fill in the username and password fields
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  // Click the login button
  await page.getByRole("button", { name: "Login" }).click();
  // Verify that the title is visible and contains the text "Swag Labs"
  await expect(page.getByTestId("title")).toBeVisible();
  // Verify that the app logo is visible and contains the text "Swag Labs"
  await expect(page.locator(".app_logo")).toContainText("Swag Labs");
  // Click the "Add to cart" button for the first item
  await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
  // Click the "Shopping Cart" link
  await page.getByTestId("item-0-title-link").click();

  //Click the "Add to cart" button for the first item
  await page.getByTestId("add-to-cart").click();
  // Click the "Remove" button for the first item
  await page.getByTestId("remove").click();
  // Click the "Shopping Cart" link
  await page.getByTestId("shopping-cart-link").click();
  // Click the "Checkout" button
  await page.getByTestId("checkout").click();
  //Click the "cancel" button
  await page.getByTestId("cancel").click();
  // Click the "Continue Shopping" button
  await page.getByTestId("continue-shopping").click();
});

test("Practice 3", async ({ page }) => {
  // Navigate to the Magento website
  await page.goto("https://magento.softwaretestingboard.com/", {
    waitUntil: "load",
  });
  // Click the "DISAGREE" button to close the cookie consent popup
  await page.getByRole("button", { name: "DISAGREE" }).click();
  //Fill in the search input field with "t-shirt"
  await page.getByPlaceholder("Search entire store here...").fill("t-shirt");
  // Click the search button
  await page.getByTitle("Search").click();

  //Click the "Balboa Persistence Tee" product link
  await page.getByAltText("Balboa Persistence Tee").click();
  // Verify that the product page is displayed
  await expect(
    page.getByRole("heading", { name: "Balboa Persistence Tee" })
  ).toBeVisible();
});
