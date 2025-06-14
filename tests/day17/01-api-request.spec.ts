import { test, expect } from "@playwright/test";
import postData from "../../data/petPostData.json";

test.describe("Pet Store API Suite", () => {
  test.describe.configure({ mode: "serial" });
  let petId;
  test("POST request - Pet Store", async ({ request }) => {
    const response = await request.post("https://petstore.swagger.io/v2/pet", {
      data: postData,
    });
    const responseData = await response.json();
    console.log(responseData);
    petId = responseData.id;

    expect(response.status()).toBe(200);
    expect(responseData.category.id).toBe(123);
    expect(responseData.category.name).toEqual("Dog");
    expect(responseData.name).toEqual("Lasi");
    expect(responseData.tags[0].name).toEqual("Samoed");
  });

  test("GET request - Pet Store", async ({ request }) => {
    const response = await request.get(
      "https://petstore.swagger.io/v2/pet/" + petId
    );
    const responseData = await response.json();
    console.log(responseData);
    expect(response.status()).toBe(200);
    expect(responseData.category.id).toBe(123);
    expect(responseData.category.name).toEqual("Dog");
    expect(responseData.name).toEqual("Lasi");
    expect(responseData.tags[0].name).toEqual("Samoed");
  });

  test("DELETE request - Pet Store", async ({ request }) => {
    const response = await request.delete(
      "https://petstore.swagger.io/v2/pet/" + petId
    );
    const responseData = await response.json();
    console.log(responseData);
    expect(response.status()).toBe(200);
    expect(responseData.type).toEqual("unknown");
    expect(responseData.message).toEqual(petId.toString());
  });

  test("GET request after DELETE- Pet Store", async ({ request }) => {
    const response = await request.get(
      "https://petstore.swagger.io/v2/pet/" + petId
    );
    expect(response.status()).toBe(404);
  });
});
