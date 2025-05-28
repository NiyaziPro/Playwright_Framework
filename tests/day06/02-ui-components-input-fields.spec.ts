import { test,expect} from '@playwright/test';

// Playwright UI Components - https://playwright.dev/docs/input
// UI Components are elements that can be interacted with, such as buttons, checkboxes, radio buttons, etc.


test('UI Components - Input Fields', async ({ page }) => {
  // Navigate to the practice automation page
  await page.goto('https://www.practice-automation.com/form-fields/');
  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Input field 
  const nameInput = page.getByRole('textbox', { name: 'Name' });
  // Type a name into the input field
  await nameInput.fill('John Doe');
  // Clear the input field
  await nameInput.clear();
  // Type a name into the input field again with pressSequentially
  await nameInput.pressSequentially('Adam Smith', { delay: 200 });

  // Generic assertion
  const nameInputValue = await nameInput.inputValue();
  console.log(`Name input value: ${nameInputValue}`);
  // Assert that the input field value is 'Adam Smith'
  expect(nameInputValue).toBe('Adam Smith');
  // toEqual assertion
  expect(nameInputValue).toEqual('Adam Smith');
  // toContainText assertion
  expect(nameInputValue).toContain('Adam');
  // toHaveValue assertion
  await expect(nameInput).toHaveValue('Adam Smith', { timeout: 5000 });


});