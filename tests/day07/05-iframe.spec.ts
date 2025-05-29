import { test,expect } from '@playwright/test';

// IFrames are used to embed another document within the current HTML document.
// In Playwright, you can interact with elements inside an iframe by first getting the iframe element and then using the `contentFrame` method to access its content.
test('IFrame - Interact with elements inside an iframe', async ({ page }) => {

    // Navigate to the letskodeit page
    await page.goto('https://www.letskodeit.com/practice');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Get the iframe element
    const iframeElement = page.frameLocator('iframe');

    // Interact with elements outside the iframe
    const title = await page.locator('h1').textContent();
    console.log(`Title of the page: ${title}`);

    // Interact with elements inside the iframe
    const iframeTitle = await iframeElement.locator('h1').textContent();
    console.log(`Title of the iframe: ${iframeTitle}`);
    // Verify the title of the iframe
    expect(iframeTitle).toBe('All Courses');
});