import { test, expect } from "@playwright/test";

test("Child locator-1", async ({ page }) => {
  // Navigate to the Practice Software Testing website
  await page.goto("https://www.practicesoftwaretesting.com/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Using parent-child locator to fill the username field
  await expect(page.getByText("Pliers").nth(1)).toBeVisible();

  // Using Css selector
  await page.locator('#filters .checkbox :text("Pliers")').click();

  // Using child locator to click on the Pliers checkbox
  await page
    .locator("#filters")
    .locator(".checkbox")
    .locator(':text("Pliers")')
    .click();

  // Alternatively, using a more specific child locator
  await page
    .locator("#filters")
    .locator(".checkbox")
    .getByText("Pliers")
    .click();

  // Verify that the Pliers checkbox is checked
  const pliersCheckbox = await page.locator(
    "#filters .checkbox :text('Pliers')"
  );
  await expect(pliersCheckbox).toBeChecked();

  // Using Xpath child locator to click on the Pliers checkbox
  await page
    .locator('//div[@id="filters"]//label[contains(text(), "Pliers")]')
    .click();
  // Alternatively, using a more specific Xpath child locator
  await page
    .locator('//div[@id="filters"]')
    .locator(".checkbox")
    .getByText("Pliers")
    .click();

  // Verify that the Pliers checkbox is checked
  const pliersCheckboxXpath = await page.locator(
    '//div[@id="filters"]//label[contains(text(), "Pliers")]'
  );
  await expect(pliersCheckboxXpath).toBeChecked();
});

test("Child Locator 2", async ({ page }) => {
  // Navigate to the Practice Software Testing website
  await page.goto("https://www.practicesoftwaretesting.com/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Using placeholder
  await page.locator('input[placeholder="Search"]').fill("Pliers");

  // Click on the search button
  await page.locator('button[type="submit"]').click();

  // Verify that the search results contain four items
  await expect(page.locator(".col-md-9").locator("a")).toHaveCount(4);

  // Verify that the search results contain the text "Out of stock" only once
  await expect(
    page.locator(".col-md-9").locator("a").getByText("Out of stock")
  ).toHaveCount(1);
});

test("Child Locator 3", async ({ page }) => {
  // Navigate to the Automation Test Store
  await page.goto("https://www.automationteststore.com/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // Using child locator to click on the special offer link with title 'Absolue Eye Precious Cells'
  await page
    .locator("#block_frame_special_1772")
    .getByTitle("Absolue Eye Precious Cells")
    .click();
});

test("Child locator 4", async ({ page }) => {
  // Navigate to the Kitapyurdu website
  await page.goto("https://www.kitapyurdu.com/");
  // Wait for the page to load
  //await page.waitForLoadState('networkidle');
  // Click cookie consent button
  await page.getByRole("button", { name: "Kabul Et ve Kapat" }).click();
  //Using child locator to click on the "Çocuk Kitapları"
  await page.getByRole("link", { name: "# Çocuk Kitapları" }).click();
});
