import { test, expect } from "@playwright/test";

// Playwright practice

test("Practice 1", async ({ page }) => {
  // Navigate to the practice software testing page
  await page.goto("https://practicesoftwaretesting.com/#/");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  //Verify the URL
  await expect(page).toHaveURL("https://practicesoftwaretesting.com/#/");

  // Verify title
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

  // Search the "Hammer" keyword in the Search box
  const searchBox = page.getByPlaceholder("Search");
  const searchButton = page.getByRole("button", { name: "Search" });
  const searchWord = "Hammer";

  // Verify the search box is enabled, fill it with the search word, and click the search button
  await expect(searchBox).toBeEnabled();
  await searchBox.fill(searchWord);
  // Verify the search button is enabled and visible, then click it
  await expect(searchButton).toBeEnabled();
  await expect(searchButton).toBeVisible();
  await searchButton.click();
  // Verify the search results contain the search word
  const resultsHeading = page.getByRole("heading", { name: "Searched for: " });
  await expect(resultsHeading).toHaveText("Searched for: " + searchWord);

  console.log(await resultsHeading.innerText());

  // Products list count
  const productsList = page.locator("a:has(h5)");
  await expect(productsList).toHaveCount(7);
  //Click on the first product in the list
  const firstProduct = productsList.first();
  console.log(await firstProduct.textContent());
  await expect(firstProduct).toBeVisible();
  await firstProduct.click();
  // Verify the  product heading is visible
  const productHeading = page.getByRole("heading", {
    name: "Claw Hammer with Shock Reduction Grip",
  });
  await expect(productHeading).toBeVisible();
});
