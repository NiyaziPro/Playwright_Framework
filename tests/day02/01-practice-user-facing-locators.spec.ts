import { test, expect } from "@playwright/test";

test("Practice 1 - User Facing Locators", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await expect(page.getByAltText("company-branding")).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "My Info" }).click();
  await expect(
    page.getByRole("heading", { name: "Personal Details" })
  ).toBeVisible();
});

test('Practice 2 - User Facing Locators', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByTestId('title')).toBeVisible();
    await expect(page.locator('.app_logo')).toContainText('Swag Labs');
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await page.getByTestId('item-0-title-link').click();
    
    await page.getByTestId('add-to-cart').click();
    await page.getByTestId('remove').click();
    await page.getByTestId('shopping-cart-link').click();
    await page.getByTestId('checkout').click();
    await page.getByTestId('cancel').click();
    await page.getByTestId('continue-shopping').click();
});

test('Practice 3', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/', { waitUntil: 'load' });
    await page.getByRole('button', { name: 'DISAGREE' }).click();
    await page.getByPlaceholder('Search entire store here...').fill('t-shirt');
    await page.getByTitle('Search').click();

    await page.getByAltText('Balboa Persistence Tee').click();
    await expect(page.getByRole('heading', { name: 'Balboa Persistence Tee' })).toBeVisible();
   
});
