import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('CSS Selector Locators', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/register');
   // await page.locator('#first_name').fill(faker.person.firstName());
   // Tag Name Selector
    await page.locator('input').first().fill(faker.person.firstName());
    // Id Selector
    await page.locator('#last_name').fill(faker.person.lastName());
    // Class Selector
    await page.locator('.form-control').nth(8).fill(faker.internet.email());
    // Class Value Selector
    await page.locator('[class="form-control ng-untouched ng-pristine ng-invalid"]').nth(1).fill(faker.location.streetAddress());
    // Tag Name and Attribute Value Selector
    await page.locator('input[type="password"]').fill(faker.internet.password());
    // Tag Name and Multiple Attribute Value Selector
    await page.locator('input[formcontrolname="city"][id="city"]').fill(faker.location.city());
    // Partial Text
    await expect(page.locator(':text("Customer")')).toBeVisible();
    // Exact Text
    await expect(page.locator(':text-is("Customer registration")')).toBeVisible();
});
