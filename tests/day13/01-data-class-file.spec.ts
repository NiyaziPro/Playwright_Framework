import { test } from "@playwright/test";
import { listUserCredentials as list } from "../../data/user-credentials";
import { adminCredentials as admin } from "../../data/user-credentials";
import { PageManager } from "../../page-objects/pageManager";


test.beforeEach(async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.waitForLoadState("networkidle");
});

test("Login Test with Data file", async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().openSignInPage();
  await pm.signIn().performLoginWithData(admin.email, admin.password);

  await pm.signIn().waitForSeconds(5);
});

for (const user of list) {
  test(`Login Test with List Data file - ${user.email}`, async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().openSignInPage();
    await pm.signIn().performLoginWithData(user.email, user.password);

    await pm.signIn().waitForSeconds(5);
  });
}
