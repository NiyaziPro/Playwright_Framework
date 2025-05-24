import { test, expect } from "@playwright/test";

test("Practice - CSS Selector", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Using CSS Selector to fill the username field
  await page.locator("#user-name").fill("standard_user");

  // Using CSS Selector to fill the password field
  await page.locator('[id="password"]').fill("secret_sauce");

  // Using CSS Selector to click the login button
  await page.locator(".submit-button").click();

  // Verify that the login was successful by checking for the presence of the inventory container
  await expect(page.locator(':text-is("Products")')).toBeVisible();

  // Using CSS Selector to click on the Sauce Labs Bike Light product
  await page.locator('[alt="Sauce Labs Bike Light"]').click();

  // Verify that the product details page is displayed
  await expect(page.locator("#back-to-products")).toHaveText(
    "Back to products"
  );

  // Verify that the product name is displayed correctly
  await expect(page.locator(".btn_small")).toHaveText("Add to cart");

  // Using CSS Selector to add the product to the cart
  await page.locator(".btn_small").click();

  // Verify that the button text changes to 'Remove'
  await expect(page.locator(".btn_small")).toHaveText("Remove");

  //Verify that the product is added to the cart
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
  // Using CSS Selector to click on the cart icon
  await page.locator(".shopping_cart_badge").click();

  // Verify that the cart page is displayed
  await expect(page.locator(':text-is("Your Cart")')).toBeVisible();

  // Using CSS Selector to click on the continue shopping button
  await page.locator('button[name="continue-shopping"]').click();

  // Verify that the user is redirected back to the products page
  await expect(page.locator(':text-is("Products")')).toBeVisible();
});
