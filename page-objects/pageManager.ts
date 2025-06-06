import { Page } from "playwright";
import { NavigationPage } from "./navigationPage";
import { SignInPage } from "./signInPage";
import { th } from "@faker-js/faker";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly signInPage: SignInPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.signInPage = new SignInPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  signIn(){
    return this.signInPage;
  }
}
