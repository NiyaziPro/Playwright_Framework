import { test,expect } from '@playwright/test';

// Playwright UI Components - Checkboxes and Radio Buttons - https://playwright.dev/docs/input#checkboxes-and-radio-buttons

test('UI Components -  Radio Buttons', async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto('https://www.practice-automation.com/form-fields/');
  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Radio buttons
    const radioButtonRed = page.getByRole('radio', { name: 'Red' });
  const radioButtonGreen = page.getByRole('radio', { name: 'Green' });
    const radioButtonBlue = page.getByRole('radio', { name: 'Blue' });

    // Click the Red radio button
    await radioButtonRed.click();
    // Generic assertion
    let redRadioButtonStatus = await radioButtonRed.isChecked();
    let greenRadioButtonStatus = await radioButtonGreen.isChecked();
    let blueRadioButtonStatus = await radioButtonBlue.isChecked();

    // Assert that the Red radio button is checked and the others are not
    expect(redRadioButtonStatus).toBeTruthy();
    expect(greenRadioButtonStatus).toBeFalsy(); 
    expect(blueRadioButtonStatus).toBeFalsy();
   
    // Click the Green radio button
    await radioButtonGreen.click();
    // Generic assertion
    redRadioButtonStatus = await radioButtonRed.isChecked();
    greenRadioButtonStatus = await radioButtonGreen.isChecked();
    blueRadioButtonStatus = await radioButtonBlue.isChecked();
    // Assert that the Green radio button is checked and the others are not
    expect(redRadioButtonStatus).toBeFalsy();
    expect(greenRadioButtonStatus).toBeTruthy();
    expect(blueRadioButtonStatus).toBeFalsy();
    // Click the Blue radio button
    await radioButtonBlue.click();
    // Generic assertion
    redRadioButtonStatus = await radioButtonRed.isChecked();
    greenRadioButtonStatus = await radioButtonGreen.isChecked();
    blueRadioButtonStatus = await radioButtonBlue.isChecked();
    // Assert that the Blue radio button is checked and the others are not
    expect(redRadioButtonStatus).toBeFalsy();
    expect(greenRadioButtonStatus).toBeFalsy();
    expect(blueRadioButtonStatus).toBeTruthy();

    // Locator assertions
    await expect(radioButtonRed).not.toBeChecked();
    await expect(radioButtonGreen).not.toBeChecked();
    await expect(radioButtonBlue).toBeChecked();


});