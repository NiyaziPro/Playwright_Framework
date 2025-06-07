import { test } from "@playwright/test";
import { NavigationPage } from "../../page-objects/navigationPage";
import { SignInPage } from "../../page-objects/signInPage";
import { PageManager } from "../../page-objects/pageManager";

// Playwright Page Object Model Test - https://playwright.dev/docs/pom
// This test demonstrates how to use the Page Object Model (POM) pattern in Playwright to interact with the navigation elements of a web application.
// The test will navigate to the Practice Software Testing website and open the sign-in page using the NavigationPage class.

test.describe("Page Object Model", () => {
  // Before each test, we navigate to the Practice Software Testing website
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.waitForLoadState("networkidle");
  });

  // Test to open the sign-in page using the NavigationPage class
  test("Navigation Test", async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.openSignInPage();
    await navigateTo.openContactPage();
    await navigateTo.openHandToolsPage();
    await navigateTo.openPowerToolsPage();
  });

  test("Method with Parameter Test", async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.openCategoriesMenuItem("Special Tools");
  });

  test("Login Test", async ({ page }) => {
    const login = new SignInPage(page);
    const navigateTo = new NavigationPage(page);
    await navigateTo.openSignInPage();
    await login.performLogin();
  });

  test("Login Test 2", async ({ page }) => {
    const login = new SignInPage(page);
    const navigateTo = new NavigationPage(page);
    await navigateTo.openSignInPage();
    await login.performLoginWithData(
      "customer@practicesoftwaretesting.com",
      "welcome01",
      "Login"
    );
  });

  test("Page Manager Test", async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().openSignInPage();
    await pm.signIn().performLogin();
    await pm.signIn().waitForSeconds(3);
  });
});
