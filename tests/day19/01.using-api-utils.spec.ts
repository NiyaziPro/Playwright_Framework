import { test, expect } from "@playwright/test";
import postData from "../../data/postContact.json";
import { getToken } from "../utils/api-utils/auth-service";
import putData from "../../data/putContact.json";
import { makeRequest, verifyContact } from "../utils/api-utils/api-utils";
import { skip } from "node:test";

test.describe("Contact List - API Test", () => {
  test.describe.configure({ mode: "serial" });
  let token: string;
  let baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";
  let responseData;
  let contactId;

  test.beforeAll(async () => {
    token = await getToken();
  });

  test("POST - Add Contact with API - token", async ({ request }) => {
    const response = await makeRequest(
      request,
      "post",
      baseUrl,
      postData,
      token
    );

    responseData = await response.json();
    contactId = responseData._id;

    // Verify Status Code
    expect(response.status()).toBe(201);
    // Verify Response data
    verifyContact(responseData,postData);
  });
  test("GET Contact with API - token", async ({ request }) => {
    const response = await makeRequest(
      request,
      "get",
      `${baseUrl}${contactId}`,
      {},
      token
    );

    responseData = await response.json();
    expect(response.status()).toBe(200);
    verifyContact(responseData,postData);
  });

  test("GET Contact List with API - token", async ({ request }) => {
   const response = await makeRequest(
      request,
      "get",
      `${baseUrl}`,
      {},
      token
    );
    responseData = await response.json();
    expect(response.status()).toBe(200);

    expect(typeof responseData).toBe("object");
    expect(Array.isArray(responseData)).toBeTruthy();
    expect(responseData.length).toBeGreaterThan(0);
  });

  test("PUT Contact with API - token", async ({ request }) => {
    const response = await makeRequest(
      request,
      "put",
      `${baseUrl}${contactId}`,
      putData,
      token
    );
    
    responseData = await response.json();
    expect(response.status()).toBe(200);
    verifyContact(responseData,putData);
  });

  test("PATCH Contact with API - token", async ({ request }) => {
    const response = await makeRequest(
      request,
      "patch",
      `${baseUrl}${contactId}`,
      { firstName: "Maks", phone: "1234567890" },
      token
    );
    responseData = await response.json();
    expect(response.status()).toBe(200);
  });

  test("DELETE Contact with API - token", async ({ request }) => {
    const response = await makeRequest(
      request,
      "delete",
      `${baseUrl}${contactId}`,
      {},
      token
    );
    
    const responseDataText = await response.text();
    expect(response.status()).toBe(200);
    expect(responseDataText).toEqual("Contact deleted");
  });
});
