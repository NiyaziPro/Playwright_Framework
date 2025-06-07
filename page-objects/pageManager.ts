import { Page } from "playwright";
import { NavigationPage } from "./navigationPage";
import { SignInPage } from "./signInPage";
import { th } from "@faker-js/faker";
import { RegisterPage } from "./registerPage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly signInPage: SignInPage;
  private readonly registerPage: RegisterPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.signInPage = new SignInPage(this.page);
    this.registerPage = new RegisterPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  signIn() {
    return this.signInPage;
  }

  onRegisterPage(){
    return this.registerPage;
  }
}
