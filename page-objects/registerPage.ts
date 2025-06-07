import { Page } from "playwright";
import { HelperBase } from "./helperBase";

export class RegisterPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async enterFirstname(firstname: string) {
    await this.page.getByLabel("First name").fill(firstname);
  }

  async enterLastname(lastname: string) {
    await this.page.getByLabel("Last name").fill(lastname);
  }

  async enterDateOfBirth(dateOfBirth: string) {
    await this.page.getByLabel("Date of Birth *").fill(dateOfBirth);
  }
  async enterStreet(street: string) {
    await this.page.getByLabel("Street").fill(street);
  }
  async enterPostalCode(postalCode: string) {
    await this.page.getByLabel("Postal code").fill(postalCode);
  }
  async enterCity(city: string) {
    await this.page.getByLabel("City").fill(city);
  }

  async enterState(state: string) {
    await this.page.getByLabel("State").fill(state);
  }

  async selectCountry(country: string) {
    await this.page.getByLabel("Country").selectOption(country);
  }

  async enterPhone(phone: string) {
    await this.page.getByLabel("Phone").fill(phone);
  }

  async enterEmailAddress(email: string) {
    await this.page.getByLabel("Email address").fill(email);
  }

  async enterPassword(password: string) {
    await this.page.getByLabel("Password").fill(password);
  }

  async clickRegisterButton() {
    await this.page.getByRole("button", { name: "Register " }).click();
  }
}
