import { test, expect } from "@playwright/test";

test("GET request - Pet Store", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/5");
  console.log(response);
  const responseData = await response.json();
  console.log(responseData);
  console.log(JSON.stringify(responseData, null, 3));

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(response.statusText()).toEqual("OK");

  // Verify Property
  expect(responseData).toHaveProperty("id");
  expect(responseData).toHaveProperty("name");
  expect(responseData).toHaveProperty("status");

  // Verify Data type
  expect(typeof responseData.id).toBe("number");
  expect(typeof responseData.category).toBe("object");
  expect(typeof responseData.photoUrls).toBe("object");
  expect(typeof responseData.tags[0].name).toBe("string");

  // Verify Data
  expect(responseData.id).toBe(5);
  expect(responseData.category.id).toBe(0);
  expect(responseData.category.name).toEqual("string");
  expect(responseData.name).toEqual("doggie");
  expect(responseData.tags[0].name).toEqual("string");
  expect(responseData.status).toEqual("string");
});
