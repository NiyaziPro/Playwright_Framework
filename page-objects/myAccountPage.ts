import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class MyAccountPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async clickOnProfileButton() {
    await this.page.locator('[data-test="nav-profile"]').click();
  }

   async verifyPageHeader() {
    await expect(this.page.getByRole("heading")).toHaveText("My account");
  }
}
