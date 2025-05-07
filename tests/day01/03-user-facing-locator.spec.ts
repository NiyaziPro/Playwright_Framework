import { test,expect } from '@playwright/test';

test('User Facing Locators', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/#/");

    // getByRole
    await page.getByRole('textbox', { name: 'Search' }).fill('Pliers');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('heading', { name: 'Combination Pliers' }).click();
    await page.goBack();

    //getByText
    await page.getByText('Combination Pliers').click();
    await page.getByText('Add to cart').click();
    await page.getByText('Contact').click();

    // getByLabel
    await page.getByLabel('First name').fill('Niko');
    await page.getByLabel('Last name').fill('Miko');

    // getByPlaceholder
    await page.getByPlaceholder('Email').fill('nikmik@mail.com');

    // getByTestId
    await page.getByTestId('message').fill('Test message');

    // getByAltText
    await page.getByText('Home').click();
    await page.getByAltText('Thor Hammer').click();

    // getByTitle
    await page.getByTitle('Practice Software Testing - Toolshop').click();
});
