import { test, expect } from "@playwright/test";

// Auto Retrying Assertion - https://playwright.dev/docs/test-assertions
// Auto retrying assertions are assertions that automatically retry until they pass or a timeout occurs.

test("Auto Retrying Assertion", async ({ page }) => {
  // Navigate to the letskodeit practice page
  await page.goto("https://www.letskodeit.com/practice");
  // Wait for the page to load
  await page.waitForLoadState("networkidle");

  // toBeChecked Assertion or notToBeChecked Assertion - this assertion is used to verify that a checkbox or radio button is checked or not.
  const bmwCheckBox = page.locator("#bmwcheck");
  // Verify that the BMW checkbox is not checked
  await expect(bmwCheckBox).not.toBeChecked();
  // Check the BMW checkbox
  await bmwCheckBox.check();
  // Verify that the BMW checkbox is checked
  await expect(bmwCheckBox).toBeChecked();

  // toBeEnabled Assertion or notToBeEnabled Assertion - this assertion is used to verify that an element is enabled or not.
  const enableDisableInput = page.locator("#enabled-example-input");
  // Verify that the input field is enabled
  await expect(enableDisableInput).toBeEnabled();
  // Disable the input field
  //await enableDisableInput.evaluate((el) => (el as HTMLInputElement).disabled = true);
  await page.getByRole("button", { name: "Disable" }).click();
  // Verify that the input field is disabled
  await expect(enableDisableInput).toBeDisabled();

  // toBeEditable Assertion or notToBeEditable Assertion - this assertion is used to verify that an element is editable or not.

  await expect(enableDisableInput).not.toBeEditable();
  // Enable the input field
  await page.getByRole("button", { name: "Enable" }).click();
  // Verify that the input field is editable
  await expect(enableDisableInput).toBeEditable();

  // toBeEmpty Assertion or notToBeEmpty Assertion - this assertion is used to verify that an element is empty or not.
  await expect(enableDisableInput).toBeEmpty();
  // Type some text in the input field
  await enableDisableInput.fill("Hello World");
  // Verify that the input field is not empty
  await expect(enableDisableInput).not.toBeEmpty();

  // toBeVisible Assertion or toBeHidden Assertion - this assertion is used to verify the visibility of an element.
  const hiddenElement = page.getByPlaceholder("Hide/Show Example");
  // Verify that the hidden element is  visible
  await expect(hiddenElement).toBeVisible();
  // Click the button to hide the element
  await page.getByRole("button", { name: "Hide" }).click();
  // Verify that the hidden element is not visible
  await expect(hiddenElement).toBeHidden();

  // toContainText Assertion or notToContainText Assertion - this assertion is used to verify the text content of an element.
  const textElement = page.locator("#alert-example-div");
  // Verify that the text element contains the text "Hello"
  await expect(textElement).toContainText("Switch To Alert");
  // Verify that the text element does not contain the text "Hello"
  await expect(textElement).not.toContainText("Hello");

  // toHaveAttribute Assertion or notToHaveAttribute Assertion - this assertion is used to verify the attributes of an element.
  await expect(bmwCheckBox).toHaveAttribute("name");
  await expect(bmwCheckBox).toHaveAttribute("name", "cars");
  // Verify that the BMW checkbox does not have the attribute "class"
  await expect(bmwCheckBox).not.toHaveAttribute("class");
  // Verify that the BMW checkbox has the attribute "type" with value "checkbox"
  await expect(bmwCheckBox).toHaveAttribute("type", "checkbox");
  // Verify that the BMW checkbox does not have the attribute "type" with value "radio"
  await expect(bmwCheckBox).not.toHaveAttribute("type", "radio");

  // toHaveClass Assertion or notToHaveClass Assertion - this assertion is used to verify the class of an element.
  const button = page.getByRole("button", { name: "Open Window" });
  // Verify that the button has the class "btn-style"
  await expect(button).toHaveClass("btn-style class1");
  // Verify that the button does not have the class "btn-style2"
  await expect(button).not.toHaveClass("btn-style2");

  // toHaveCount Assertion or notToHaveCount Assertion - this assertion is used to verify the number of elements that match a given selector.
  const radioButtons = page.getByRole("radio");
  // Verify that the radio buttons have a count of 3
  await expect(radioButtons).toHaveCount(3);
  // Verify that the radio buttons do not have a count of 4
  await expect(radioButtons).not.toHaveCount(4);

  // toHaveId Assertion or notToHaveId Assertion - this assertion is used to verify the id of an element.
  await expect(button).toHaveId("openwindow");
  // Verify that the button does not have the id "closewindow"
  await expect(button).not.toHaveId("closewindow");

  // toHaveText Assertion or notToHaveText Assertion - this assertion is used to verify the text content of an element.
  await expect(button).toHaveText("Open Window");
  // Verify that the button does not have the text "Close Window"
  await expect(button).not.toHaveText("Close Window");

  // toHaveValue Assertion or notToHaveValue Assertion - this assertion is used to verify the value of an input element.
  await expect(enableDisableInput).toHaveValue("Hello World");
  // Verify that the input field does not have the value "Hello"
  await expect(enableDisableInput).not.toHaveValue("Hello");
  // Clear the input field
  await enableDisableInput.fill("");
  // Verify that the input field has an empty value
  await expect(enableDisableInput).toHaveValue("");
  // Verify that the input field does not have the value "Hello World"
  await expect(enableDisableInput).not.toHaveValue("Hello World");

  // toHaveTitle Assertion or notToHaveTitle Assertion - this assertion is used to verify the title of the page.
  await expect(page).toHaveTitle("Practice Page");
  // Verify that the page does not have the title "Home Page"
  await expect(page).not.toHaveTitle("Home Page");

  // toHaveURL Assertion or notToHaveURL Assertion - this assertion is used to verify the URL of the page.
  await expect(page).toHaveURL("https://www.letskodeit.com/practice");
  // Verify that the page does not have the URL "https://www.letskodeit.com/home"
  await expect(page).not.toHaveURL("https://www.letskodeit.com/home");
});
