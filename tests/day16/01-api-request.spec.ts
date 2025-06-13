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
    photoUrls: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiau.bg%2Fn-58212-%25D0%259E%25D1%2582%25D0%25B3%25D0%25BB%25D0%25B5%25D0%25B6%25D0%25B4%25D0%25B0%25D0%25BD%25D0%25B5_%25D0%25BD%25D0%25B0_%25D0%25A1%25D0%25B0%25D0%25BC%25D0%25BE%25D0%25B5%25D0%25B4_%25D0%25B2%25D0%25BA%25D1%258A%25D1%2589%25D0%25B8&psig=AOvVaw17TsQZPn7mNsG1uWJ6msPK&ust=1749905322953000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLD79Lq37o0DFQAAAAAdAAAAABAE",
    ],
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
