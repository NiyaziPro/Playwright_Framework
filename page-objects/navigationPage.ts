import { Page, Locator } from "playwright";

// NavigationPage.ts
// This file defines the NavigationPage class, which contains methods to interact with the navigation elements of the Practice Software Testing website.
// This class is used to encapsulate the navigation functionality and can be used in tests to perform actions like opening the sign-in page or clicking on navigation links.
// Importing the Page class from Playwright to interact with the web page

export class NavigationPage {
  private readonly page: Page;
  private readonly signInMenuItem: Locator;
  private readonly contactMenuItem: Locator;
  private readonly categoriesMenuItem: Locator;
  private readonly handToolsMenuItem: Locator;
  private readonly powerToolsMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInMenuItem = this.page.getByRole("link", { name: "Sign in" });
    this.contactMenuItem = this.page.getByRole("link", { name: "Contact" });
    this.categoriesMenuItem = this.page.getByRole("button", {
      name: "Categories",
    });
    this.handToolsMenuItem = this.page.getByRole("link", {
      name: "Hand Tools",
    });
    this.powerToolsMenuItem = this.page.getByRole("link", {
      name: "Power Tools",
    });
  }

  // This method clicks on the Sign In menu item to navigate to the sign-in page
  async openSignInPage() {
    await this.signInMenuItem.click();
  }
  // This method clicks on the Contact menu item to navigate to the contact page
  async openContactPage() {
    await this.contactMenuItem.click();
  }
  // This method clicks on the Categories menu item to navigate to the categories page
  async openCategoriesPage() {
    await this.categoriesMenuItem.click();
  }
  // This method clicks on the Hand Tools menu item to navigate to the hand tools page
  async openHandToolsPage() {
    await this.categoriesMenuItem.click();
    await this.handToolsMenuItem.click();
  }
  async openPowerToolsPage() {
    await this.categoriesMenuItem.click();
    await this.powerToolsMenuItem.click();
  }

  async openCategoriesMenuItem(optionText: string) {
    await this.categoriesMenuItem.click();
    const menuItem = this.page.getByRole("link", { name: optionText });
    await menuItem.click();
  }
}
