import { test,expect } from '@playwright/test';
import { validateHeaderValue } from 'http';
import { faker } from '@faker-js/faker';

// Playwright practice

test('Personal Details Test', async ({ page }) => { 

    // Navigate to the opensource-demo.orangehrmlive.com/ page
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    // Verify the URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Verify the title
    await expect(page).toHaveTitle('OrangeHRM');
    // Verify the login form is visible
    await expect (page.getByRole('heading')).toHaveText('Login');

    // Fill in the username and password fields
    const username = 'Admin';
    const password = 'admin123';
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    // Verify the username and password fields are editable, then fill them with the provided values
    await expect(page.getByPlaceholder('Username')).toBeEditable();
    await page.getByPlaceholder('Username').fill(username);
    await expect(page.getByPlaceholder('Password')).toBeEditable();
    await page.getByPlaceholder('Password').fill(password);

    // Verify the username and password fields are filled correctly
    await expect(usernameInput).toHaveValue(username);
    await expect(passwordInput).toHaveValue(password);

    // Verify the login button is enabled and visible, then click it
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    // Verify the user is logged in by checking the dashboard heading
    const dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    await expect(dashboardHeading).toBeVisible();

    // Navigate to the "My Info" page
    await page.getByRole('link', { name: 'My Info' }).click();

    // Verify the "Personal Details" heading is visible
    const personalDetailsHeading = page.getByRole('heading', { name: 'Personal Details' });
    await expect(personalDetailsHeading).toBeVisible();

    // Wait to ensure the page is fully loaded
    await page.waitForLoadState('networkidle');

    // Firstname Input 
    const firstNameInput = page.getByPlaceholder('First Name');
    const firstName = faker.person.firstName();
    console.log('Generated First Name:', firstName);
    // Verify the Firstname input is editable, fill it with a random first name, and verify the value
    await expect(firstNameInput).toBeEditable();
    await firstNameInput.fill(firstName);
    await expect(firstNameInput).toHaveValue(firstName);

    // Middle Name Input
    const middleNameInput = page.getByPlaceholder('Middle Name');
    const middleName = faker.person.middleName();
    console.log('Generated Middle Name:', middleName);
    // Verify the Middle Name input is editable, fill it with a random middle name, and verify the value
    await expect(middleNameInput).toBeEditable();
    await middleNameInput.fill(middleName);
    await expect(middleNameInput).toHaveValue(middleName);

    // Lastname Input
    const lastNameInput = page.getByPlaceholder('Last Name');
    const lastName = faker.person.lastName();
    console.log('Generated Last Name:', lastName);
    // Verify the Lastname input is editable, fill it with a random last name, and verify the value
    await expect(lastNameInput).toBeEditable();
    await lastNameInput.fill(lastName);
    await expect(lastNameInput).toHaveValue(lastName);

    // Save Button
    const saveButton = page.getByRole('button', { name: 'Save' }).first();
    // Verify the Save button is enabled and visible, then click it
    await expect(saveButton).toBeEnabled();
    await expect(saveButton).toBeVisible();
    await saveButton.click();

    // Success Message
    const successMessage = page.getByText('Successfully Updated');
    // Verify the success message is visible after saving the personal details
    await expect(successMessage).toBeVisible();
    console.log('Success Message:', await successMessage.textContent());

    // Verify the Firstname and Lastname are updated with the new values
    await expect(firstNameInput).toHaveValue(firstName);
    await expect(middleNameInput).toHaveValue(middleName);
    await expect(lastNameInput).toHaveValue(lastName);

});

test('Emergency Contact Test', async ({ page }) => { 

    // Navigate to the opensource-demo.orangehrmlive.com/ page
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    // Verify the URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Verify the title
    await expect(page).toHaveTitle('OrangeHRM');
    // Verify the login form is visible
    await expect (page.getByRole('heading')).toHaveText('Login');

    // Fill in the username and password fields
    const username = 'Admin';
    const password = 'admin123';
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    // Verify the username and password fields are editable, then fill them with the provided values
    await expect(page.getByPlaceholder('Username')).toBeEditable();
    await page.getByPlaceholder('Username').fill(username);
    await expect(page.getByPlaceholder('Password')).toBeEditable();
    await page.getByPlaceholder('Password').fill(password);

    // Verify the username and password fields are filled correctly
    await expect(usernameInput).toHaveValue(username);
    await expect(passwordInput).toHaveValue(password);

    // Verify the login button is enabled and visible, then click it
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    // Verify the user is logged in by checking the dashboard heading
    const dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    await expect(dashboardHeading).toBeVisible();

    // Navigate to the "My Info" page
    await page.getByRole('link', { name: 'My Info' }).click();
    // Navigate to the "Emergency Contacts" page
    await page.getByRole('link', { name: 'Emergency Contacts' }).click();

    const contacts = [
        { name: 'John Doe', relationship: 'Brother', phone: '123-456-7890' },
        { name: 'Jane Smith', relationship: 'Sister', phone: '987-654-3210' },
        { name: 'Mike Johnson', relationship: 'Father', phone: '555-555-5555' }
    ];

   for (const contact of contacts) {
        // Add button
        await page.locator('.orangehrm-action-header').filter({ hasText: 'Assigned Emergency Contacts' }).getByRole('button', { name: ' Add ' }).click();
       
       // Input fields
       // fill the Name field with Tab key Relationship field and Tab key Phone field
       const nameInput = page.locator('.oxd-input.oxd-input--active').nth(1);
       nameInput.fill(contact.name);
       await nameInput.press('Tab');
       await page.keyboard.type(contact.relationship);
       await page.keyboard.press('Tab');
       await page.keyboard.type(contact.phone);

       // Click the Save button
       await page.getByRole('button', { name: 'Save' }).click();
       // Success message
       const successMessage = page.getByText('Successfully Saved');
       await expect(successMessage).toBeVisible();
       console.log('Success Message:', await successMessage.textContent());
       // Loading Spinner
       await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });

   }
   // All Checkboxes
   await page.getByRole('row', { name: 'Relationship' }).locator('i').check();

   // Delete Buttons
   await page.getByRole('button', { name: 'Delete Selected' }).click();
    // Confirm Delete Button
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    // Success Message
    const deleteSuccessMessage = page.getByText('Successfully Deleted');
    await expect(deleteSuccessMessage).toBeVisible();
    console.log('Success Message:', await deleteSuccessMessage.textContent());

    // Logout
    await page.locator('.oxd-userdropdown-name').click();
    await page.getByText('Logout').click();
    // Verify the user is logged out by checking the login form heading
    await expect(page.getByRole('heading')).toHaveText('Login');
});