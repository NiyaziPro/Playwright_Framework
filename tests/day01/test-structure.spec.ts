import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/#/");
  await page.getByText("Sign in").click();
  await page.getByText("Register your account").click();
});

test("Second test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/#/");
});

test("Third test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/#/");
});

// Grouping tests with test suite
test.describe("Test Suite 1", () => {
  test("First test", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/#/");
    await page.getByText("Sign in").click();
    await page.getByText("Register your account").click();
  });

  test("Second test", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/#/");
  });

  test("Third test", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/#/");
  });
});

test.describe("Test Suite 2", () => {
  test("First test", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/#/");
    await page.getByText("Sign in").click();
    await page.getByText("Register your account").click();
  });

  test("Second test", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/#/");
  });
  
});
