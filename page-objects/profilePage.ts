import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class ProfilePage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async verifyPageHeader() {
    await expect(this.page.getByRole("heading",{name:'Profile'})).toHaveText("Profile");
  }

  async verifyFirstNameInputValue(firstName: string) {
    await expect(this.page.getByTestId("first-name")).toHaveValue(firstName);
  }

  async verifyLastNameInputValue(lastName: string) {
    await expect(this.page.getByTestId("last-name")).toHaveValue(lastName);
  }

  async verifyEmailInputValue(email: string) {
    await expect(this.page.getByTestId("email")).toHaveValue(email);
  }

  async verifyPhoneInputValue(phone: string) {
    await expect(this.page.getByTestId("phone")).toHaveValue(phone);
  }

  async verifyStreetInputValue(street: string) {
    await expect(this.page.getByTestId("street")).toHaveValue(street);
  }

  async verifyPostalCodeInputValue(postalCode: string) {
    await expect(this.page.getByTestId("postal_code")).toHaveValue(postalCode);
  }

  async verifyCityInputValue(city: string) {
    await expect(this.page.getByTestId("city")).toHaveValue(city);
  }

  async verifyStateInputValue(state: string) {
    await expect(this.page.getByTestId("state")).toHaveValue(state);
  }
}
