import { test } from "@playwright/test";

// Hooks in Playwright - https://playwright.dev/docs/test-annotations#use-fixme-in-beforeeach-hook
// This file demonstrates the use of hooks in Playwright tests
// Hooks allow you to run setup and teardown code before and after tests or test suites

test.beforeAll(async ({ page }) => {
  // This hook runs once before all tests in the file
  // You can use it to set up a common context or perform actions that are needed for all tests
});

test.afterAll(async ({ page }) => {
  // This hook runs once after all tests in the file
  // You can use it to clean up resources or perform actions that are needed after all tests have run
});

//test.beforeEach(async ({ page }) => {
// This hook runs before each test in the file
// You can use it to set up a common context or perform actions that are needed before each test
//await page.goto("https://practicesoftwaretesting.com/#/");
//});
test.afterEach(async ({ page }) => {
  // This hook runs after each test in the file
  // You can use it to clean up resources or perform actions that are needed after each test has run
  // For example, you can take a screenshot or log information about the test
  await page.screenshot({ path: `screenshot-${Date.now()}.png` });
});

test.describe("Contact Page Test Suite", () => {
  // This suite contains tests related to the Contact page
  // Each test can be run independently, but they can also share setup code if needed
  // For example, you can use beforeEach or afterEach hooks to set up or clean up before/after each test

  test.beforeEach(async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.getByText("Contact").click();
  });

  test("Test 1", async ({ page }) => {
    // This test will run after the beforeEach hook
    // You can perform actions specific to this test here
  });
  test("Test 2", async ({ page }) => {
    // This test will also run after the beforeEach hook
    // You can perform actions specific to this test here
  });
});

test.describe("Login Page Test Suite", () => {
  // This suite contains tests related to the Login page
  // Each test can be run independently, but they can also share setup code if needed
  // For example, you can use beforeEach or afterEach hooks to set up or clean up before/after each test

  test.beforeEach(async ({ page }) => {
    await page.getByText("Sign in").click();
  });

  test("Test 1", async ({ page }) => {
    // This test will run after the beforeEach hook
    // You can perform actions specific to this test here
  });
  test("Test 2", async ({ page }) => {
    // This test will also run after the beforeEach hook
    // You can perform actions specific to this test here
  });
});
