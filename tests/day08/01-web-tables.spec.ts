import { test, expect } from "@playwright/test";

// Playwright Web Tables - Interact with web tables
// In Playwright, you can interact with web tables by locating the table element and then using locators to access rows and cells.
// The `locator` method allows you to find elements within the table, and you can use various methods to interact with them.

test("Web Tables 1", async ({ page }) => {
  // Navigate to the letskode practice page
  await page.goto("https://www.letskodeit.com/practice");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");
  // Locate the table element
  const table = page.locator("#product > tbody");
  // Get all rows in the table
  const rows = table.locator("tr");
  // Get the number of rows in the table
  const rowCount = await rows.count();
  // Log the number of rows in the table
  console.log(`Number of rows in the table: ${rowCount}`);
  // Iterate through each row and log the text content of each cell
  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator("td");
    const cellCount = await cells.count();
    for (let j = 0; j < cellCount; j++) {
      const cellText = await cells.nth(j).innerText();
      console.log(`Row ${i + 1}, Cell ${j + 1}: ${cellText}`);
    }
  }
});

test("Web Tables 2", async ({ page }) => {
  // Navigate to the letcode practice page
  await page.goto("https://letcode.in/table");

  const rowApple = page.getByRole("row", { name: "Apple" });
  const targetColumn = rowApple.locator("td").last(); // Get the last cell in the row for Apple
  const targetText = await targetColumn.innerText(); // Get the text content of the target cell
  console.log(`Target text for Apple: ${targetText}`); // Log the target text for Apple
  // Verify the target text
  expect(targetText).toBe("180"); // Adjust the expected value as needed
});

test("Web Tables 3", async ({ page }) => {
  // Navigate to the letcode practice page
  await page.goto("https://letcode.in/table");

  const row = page.getByRole("row", { name: "man@letcode.in" }); // Locate the row with the email
  const checkbox = row.getByRole("checkbox"); // Get the checkbox in the row
  await checkbox.check(); // Check the checkbox
  const isChecked = await checkbox.isChecked(); // Verify if the checkbox is checked
  expect(isChecked).toBe(true); // Assert that the checkbox is checked
  console.log("Checkbox is checked:", isChecked); // Log the result
  // Uncheck the checkbox
  await checkbox.uncheck(); // Uncheck the checkbox
  const isUnchecked = await checkbox.isChecked(); // Verify if the checkbox is unchecked
  expect(isUnchecked).toBe(false); // Assert that the checkbox is unchecked
  console.log("Checkbox is unchecked:", isUnchecked); // Log the result
});

test("Web Tables 4", async ({ page }) => {
  // Navigate to the letcode practice page
  await page.goto("https://letcode.in/table");

  // Locate the row with the text "Gingerbread"
  const row = page
    .getByRole("row", { name: "16" })
    .filter({ hasText: "Gingerbread" });
  console.log("Row count:", await row.count()); // Log the row count

  const targetColumn = row.locator("td").nth(3); // Get the last cell in the row
  console.log("Target column text:", await targetColumn.innerText()); // Log the text content of the target cell
  // Verify the target text
  expect(await targetColumn.innerText()).toBe("49"); // Adjust the expected value as needed
});

test("Web Tables 5", async ({ page }) => {
  // Navigate to the letcode practice page
  await page.goto("https://letcode.in/advancedtable");

  // universities
  const universities = ['American','Wales','Khan'];
    // Locate the Search input field
  const searchInput = page.getByLabel("Search");
  // Iterate through each university and perform the search
  for (const university of universities) {
    await searchInput.fill(university);
    await searchInput.press("Enter");
    // Add assertions or further actions as needed
    const row = page.getByRole("row", { name: university });
    const cell = row.locator("td").nth(1); // Get the second cell in the row
    const cellText = await cell.innerText(); // Get the text content of the target cell
    console.log(`University: ${university}, Cell Text: ${cellText}`); // Log the university and cell text
    // Verify the cell text
    expect(cellText).toContain(university); // Adjust the expected value as needed
  } 

});
