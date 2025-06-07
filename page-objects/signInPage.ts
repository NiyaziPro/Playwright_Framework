import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class SignInPage extends HelperBase {

  constructor(page: Page) {
    super(page);
  }

  async performLogin() {
    await this.page
      .getByPlaceholder("Your email")
      .fill("admin@practicesoftwaretesting.com");
    await this.page.getByPlaceholder("Your password").fill("welcome01");
    await this.waitForSeconds(5);
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  /**
   *
   * @param email A registered user email must be entered
   * @param password A registered user password must be entered
   * @param optionText The name of the button to be clicked on the page must be entered
   */
  async performLoginWithData(
    email: string,
    password: string
  ) {
    await this.page.getByPlaceholder("Your email").fill(email);
    await this.page.getByPlaceholder("Your password").fill(password);
    await this.page.locator('.btnSubmit').click();
  }

  async registerYourAccountLink(){
    await this.page.getByRole('link',{name: 'Register your account'}).click();
  }
}
