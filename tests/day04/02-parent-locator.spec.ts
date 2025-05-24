import { test,expect } from '@playwright/test';

test('Parent Locator 1', async ({ page }) => {
    // Navigate to the Practice Software Testing website
    await page.goto('https://www.practicesoftwaretesting.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('.checkbox').filter({hasText: 'Hand Tools'}).locator('input')).toHaveCount(8);
    
});