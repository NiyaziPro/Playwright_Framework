import { test, expect } from "@playwright/test";
import contactData from "../../data/postContact.json";
import { getToken } from "../utils/api-utils/auth-service";
import putContact from "../../data/putContact.json";

test.describe("Contact List - API Test", () => {
  test.describe.configure({ mode: "serial" });
  let token: string;
  let responseData;
  let contactId;

  test.beforeAll(async () => {
    token = await getToken();
  });

  test("Add Contact with API - token", async ({ request }) => {
    const response = await request.post(
      "https://thinking-tester-contact-list.herokuapp.com/contacts",
      { data: contactData, headers: { Authorization: "Bearer " + token } }
    );
    responseData = await response.json();
    contactId = responseData._id;
    console.log(responseData);
    // Verify Status Code
    expect(response.status()).toBe(201);

    // Verify Response data
    expect(responseData.firstName).toEqual(contactData.firstName);
    expect(responseData.lastName).toEqual(contactData.lastName);
    expect(responseData.birthdate).toEqual(contactData.birthdate);
    expect(responseData.email).toEqual(contactData.email);
    expect(responseData.phone).toEqual(contactData.phone);
    expect(responseData.street1).toEqual(contactData.street1);
    expect(responseData.street2).toEqual(contactData.street2);
    expect(responseData.city).toEqual(contactData.city);
    expect(responseData.postalCode).toEqual(contactData.postalCode);
    expect(responseData.country).toEqual(contactData.country);

    // Verify property
    expect(responseData).toHaveProperty("_id");
    expect(responseData).toHaveProperty("owner");
  });
  test("GET Contact with API - token", async ({ request }) => {
    const response = await request.get(
      "https://thinking-tester-contact-list.herokuapp.com/contacts/" +
        contactId,
      { headers: { Authorization: "Bearer " + token } }
    );
    responseData = await response.json();
    console.log(responseData._id);
    expect(response.status()).toBe(200);

    expect(responseData.firstName).toEqual(contactData.firstName);
    expect(responseData.lastName).toEqual(contactData.lastName);
    expect(responseData.birthdate).toEqual(contactData.birthdate);
    expect(responseData.email).toEqual(contactData.email);
    expect(responseData.phone).toEqual(contactData.phone);
    expect(responseData.street1).toEqual(contactData.street1);
    expect(responseData.street2).toEqual(contactData.street2);
    expect(responseData.city).toEqual(contactData.city);
    expect(responseData.postalCode).toEqual(contactData.postalCode);
    expect(responseData.country).toEqual(contactData.country);
    expect(responseData).toHaveProperty("_id");
    expect(responseData).toHaveProperty("owner");
  });

  test("GET Contact List with API - token", async ({ request }) => {
    const response = await request.get(
      "https://thinking-tester-contact-list.herokuapp.com/contacts/",
      { headers: { Authorization: "Bearer " + token } }
    );
    responseData = await response.json();
    console.log(responseData);
    expect(response.status()).toBe(200);

    expect(typeof responseData).toBe("object");
    expect(Array.isArray(responseData)).toBeTruthy();
    expect(responseData.length).toBeGreaterThan(0);
  });

  test("PUT Contact with API - token", async ({ request }) => {
    const response = await request.put(
      "https://thinking-tester-contact-list.herokuapp.com/contacts/" +
        contactId,
      {
        data: putContact,
        headers: { Authorization: "Bearer " + token },
      }
    );
    responseData = await response.json();
    console.log(responseData);
    expect(response.status()).toBe(200);

    expect(responseData.firstName).toEqual(putContact.firstName);
    expect(responseData.lastName).toEqual(putContact.lastName);
    expect(responseData.birthdate).toEqual(putContact.birthdate);
    expect(responseData.email).toEqual(putContact.email);
    expect(responseData.phone).toEqual(putContact.phone);
    expect(responseData.street1).toEqual(putContact.street1);
    expect(responseData.street2).toEqual(putContact.street2);
    expect(responseData.city).toEqual(putContact.city);
    expect(responseData.postalCode).toEqual(putContact.postalCode);
    expect(responseData.country).toEqual(putContact.country);
  });

  test("PATCH Contact with API - token", async ({ request }) => {
    const response = await request.patch(
      "https://thinking-tester-contact-list.herokuapp.com/contacts/" +
        contactId,
      {
        data: { firstName: "Maks", phone: "1234567890" },
        headers: { Authorization: "Bearer " + token },
      }
    );
    responseData = await response.json();
    console.log(responseData);
    expect(response.status()).toBe(200);
  });

  test("DELETE Contact with API - token", async ({ request }) => {
    const response = await request.delete(
      "https://thinking-tester-contact-list.herokuapp.com/contacts/" +
        contactId,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    expect(response.status()).toBe(200);
  });
});
