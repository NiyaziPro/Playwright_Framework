import { Page } from "playwright";
import { NavigationPage } from "./navigationPage";
import { SignInPage } from "./signInPage";
import { th } from "@faker-js/faker";
import { RegisterPage } from "./registerPage";
import { MyAccountPage } from "./myAccountPage";
import { ProfilePage } from "./profilePage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly signInPage: SignInPage;
  private readonly registerPage: RegisterPage;
  private readonly myAccountPage: MyAccountPage;
  private readonly profilePage: ProfilePage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.signInPage = new SignInPage(this.page);
    this.registerPage = new RegisterPage(this.page);
    this.myAccountPage = new MyAccountPage(this.page);
    this.profilePage = new ProfilePage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  signIn() {
    return this.signInPage;
  }

  onRegisterPage() {
    return this.registerPage;
  }

  onMyAccountPage() {
    return this.myAccountPage;
  }

  onProfilePage() {
    return this.profilePage;
  }
}
