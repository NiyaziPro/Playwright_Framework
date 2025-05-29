import { test,expect } from '@playwright/test';

// Playwright - mouse hover 
// Mouse hover is a common interaction in web applications where an element is highlighted or a tooltip is displayed when the user hovers over it with the mouse.
// In Playwright, you can simulate mouse hover using the `hover` method on a locator.
// This method triggers the mouse hover event on the specified element.

test('Mouse Hover', async ({ page }) => {   
        // Navigate to the letscodeit page
        await page.goto('https://www.letskodeit.com/practice');
        // Wait for the page to load
        await page.waitForLoadState('networkidle');
        // Hover over the "Mouse Hover" section
        await page.getByRole('button', { name: 'Mouse Hover' }).hover();
        // link reload
        await page.getByRole('link', { name: 'Reload' }).click();

});