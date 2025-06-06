import { Page } from "@playwright/test";

export class SignInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async performLogin() {
    await this.page
      .getByPlaceholder("Your email")
      .fill("admin@practicesoftwaretesting.com");
    await this.page.getByPlaceholder("Your password").fill("welcome01");
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
