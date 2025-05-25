
// This file contains tests that demonstrate the basic structure of Playwright tests
// and how to group tests into suites.
import { test } from "@playwright/test";

// Basic test structure in Playwright - https://playwright.dev/docs/test-structure

test("First test", async ({ page }) => {
  // Navigate to the Practice Software Testing website
  await page.goto("https://practicesoftwaretesting.com/#/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  // Click on the "Sign in" link
  await page.getByText("Sign in").click();
  // Click on the "Register your account" link
  await page.getByText("Register your account").click();
});

test("Second test", async ({ page }) => {
  // Navigate to the Practice Software Testing website
  await page.goto("https://practicesoftwaretesting.com/#/");
});

test("Third test", async ({ page }) => {
  // Navigate to the Practice Software Testing website
  await page.goto("https://practicesoftwaretesting.com/#/");
});

// Grouping tests with test suite
test.describe("Test Suite 1", () => {
  // This suite contains multiple tests that share a common setup or context
  // Each test can be run independently, but they can also share setup code if needed
  // For example, you can use beforeEach or afterEach hooks to set up or clean up before/after each test
  // This is useful for organizing tests that are related to a specific feature or functionality

  test("First test", async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.goto("https://practicesoftwaretesting.com/#/");
    // Wait for the page to load
    await page.waitForLoadState("networkidle");
    // Click on the "Sign in" link
    await page.getByText("Sign in").click();
    // Click on the "Register your account" link
    await page.getByText("Register your account").click();
  });

  test("Second test", async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.goto("https://practicesoftwaretesting.com/#/");
  });

  test("Third test", async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.goto("https://practicesoftwaretesting.com/#/");
  });
});

// Grouping tests with test suite

test.describe("Test Suite 2", () => {
  test("First test", async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.goto("https://practicesoftwaretesting.com/#/");
    // Wait for the page to load
    await page.waitForLoadState("networkidle");
    // Click on the "Sign in" link
    await page.getByText("Sign in").click();

    // Click on the "Register your account" link
    await page.getByText("Register your account").click();
  });

  test("Second test", async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.goto("https://practicesoftwaretesting.com/#/");
  });
});
