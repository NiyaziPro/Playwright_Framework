import { test, expect } from "@playwright/test";

test("GET request - Pet Store", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/5");
  console.log(response);
  const responseData = await response.json();
  console.log(responseData);
  console.log(JSON.stringify(responseData, null, 3));

  const headers = response.headers();

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

  // Verify Headers Data
  console.log(headers);
  expect(headers["content-type"]).toEqual("application/json");
  expect(headers["server"]).toEqual("Jetty(9.2.9.v20150224)");
});

test("POST request - Pet Store", async ({ request }) => {
  const payload = {
    id: 9898,
    category: {
      id: 123,
      name: "Dog",
    },
    name: "Lasi",
    photoUrls: ["https://dxcgs7v732qty.cloudfront.net/kopekler.jpg"],
    tags: [
      {
        id: 1,
        name: "Samoed",
      },
    ],
    status: "available",
  };

  const response = await request.post("https://petstore.swagger.io/v2/pet", {
    data: payload,
  });

  const responseData = await response.json();
  console.log(responseData, null, 1);
});
