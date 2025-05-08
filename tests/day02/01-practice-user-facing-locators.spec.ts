import { test, expect } from "@playwright/test";

test("Practice 1 - User Facing Locators", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await expect(page.getByAltText("company-branding")).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "My Info" }).click();
});
