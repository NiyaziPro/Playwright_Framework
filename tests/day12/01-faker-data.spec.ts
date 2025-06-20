import { test, expect } from "@playwright/test";
import { PageManager } from "../../page-objects/pageManager";
import { faker, fakerDE, fakerTR } from "@faker-js/faker";

test.describe("User Profil Data Test", () => {
  test.describe.configure({ mode: "serial" });
  let firstName,
    lastName,
    dob,
    street,
    postalCode,
    city,
    state,
    country,
    phone,
    email,
    password;

  test.beforeAll(async ({ page }) => {
    firstName = fakerDE.person.firstName();
    lastName = fakerDE.person.lastName();
    dob = "1980-12-12";
    street = fakerDE.location.street();
    postalCode = fakerDE.location.zipCode();
    city = fakerDE.location.city();
    state = fakerDE.location.state();
    country = "Germany";
    phone = fakerDE.string.numeric({ length: 12 });
    email = fakerDE.internet.email({
      firstName: firstName,
      lastName: lastName,
    });
    password = fakerDE.internet.password() + "A#";
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.waitForLoadState("networkidle");
  });

  test("Faker Data Register Test", async ({ page }) => {
    const pm = new PageManager(page);
    pm.navigateTo().openSignInPage();
    pm.signIn().registerYourAccountLink();

    await pm.onRegisterPage().enterFirstname(firstName);
    await pm.onRegisterPage().enterLastname(lastName);
    await pm.onRegisterPage().enterDateOfBirth(dob);
    await pm.onRegisterPage().enterStreet(street);
    await pm.onRegisterPage().enterPostalCode(postalCode);
    await pm.onRegisterPage().enterCity(city);
    await pm.onRegisterPage().enterState(state);
    await pm.onRegisterPage().selectCountry(country);
    await pm.onRegisterPage().enterPhone(phone);
    await pm.onRegisterPage().enterEmailAddress(email);
    await pm.onRegisterPage().enterPassword(password);

    await pm.onRegisterPage().clickRegisterButton();

    await pm.signIn().verifyPageHeader();
  });

  test("Faker Data Login Test", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().openSignInPage();
    await pm.signIn().performLoginWithData(email, password);
    await pm.signIn().verifyWithProfileName(firstName, lastName);
  });

  test("Faker Data Profile Test", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().openSignInPage();
    await pm.signIn().performLoginWithData(email, password);

    await pm.onMyAccountPage().clickOnProfileButton();
    await pm.onProfilePage().verifyPageHeader();

    await pm.onProfilePage().verifyFirstNameInputValue(firstName);
    await pm.onProfilePage().verifyLastNameInputValue(lastName);
    await pm.onProfilePage().verifyEmailInputValue(email);
    await pm.onProfilePage().verifyPhoneInputValue(phone);
    await pm.onProfilePage().verifyStreetInputValue(street);
    await pm.onProfilePage().verifyPostalCodeInputValue(postalCode);
    await pm.onProfilePage().verifyCityInputValue(city);
    await pm.onProfilePage().verifyStateInputValue(state);
  });
});
