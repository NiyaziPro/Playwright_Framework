import { test } from '@playwright/test';
import NavigationPage from '../../page-objects/navigationPage';

// Playwright Page Object Model Test - https://playwright.dev/docs/pom
// This test demonstrates how to use the Page Object Model (POM) pattern in Playwright to interact with the navigation elements of a web application.
// The test will navigate to the Practice Software Testing website and open the sign-in page using the NavigationPage class.

// Before each test, we navigate to the Practice Software Testing website
test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/#/');
});

// Test to open the sign-in page using the NavigationPage class
test('Navigation Test', async ({ page }) => {
  const navigationPage = new NavigationPage(page);
  await navigationPage.openSignInPage();
  
});
