import { expect } from "@playwright/test";

export async function makeRequest(request, method, url, data, token) {
  return await request[method](url, {
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function verifyContact(responseData, expectedData) {
  for (const property in expectedData) {
    expect(responseData[property]).toEqual(expectedData[property]);
  }
  expect(responseData).toHaveProperty("_id");
  expect(responseData).toHaveProperty("owner");
}
