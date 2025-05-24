import { test, expect } from '@playwright/test';

test('Xpath practicesoftwaretesting', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
   
    // Using XPath to fill the username field
    await page.locator('//input[@id="user-name"]').fill('locked_out_user');
    // Verifying the username field is filled
    const usernameField = await page.locator('//input[@id="user-name"]');
    await expect(usernameField).toHaveValue('locked_out_user');
    // Using XPath to fill the password field
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    // Verifying the password field is filled
    const passwordField = await page.locator('//input[@id="password"]');
    await expect(passwordField).toHaveValue('secret_sauce');
    // Using XPath to click the login button
    await page.locator('//input[@id="login-button"]').click();  
    // Verifying the error message is displayed
    await expect(page.locator('//h3[contains(text(), "Epic sadface: Sorry, this user has been locked out.")]')).toBeVisible();
});
