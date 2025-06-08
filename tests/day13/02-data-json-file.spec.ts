import { test } from "@playwright/test";
import { PageManager } from "../../page-objects/pageManager";
import userDataList from "../../data/userDataList.json";

test.beforeEach(async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.waitForLoadState("networkidle");
});

for (const user of userDataList) {
  test(`Login Test with List Json Data file - ${user.email}`, async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().openSignInPage();
    await pm.signIn().performLoginWithData(user.email, user.password);

    await pm.signIn().waitForSeconds(2);
  });
}
