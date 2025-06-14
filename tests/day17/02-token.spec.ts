import { test, expect } from "@playwright/test";
import contactData from "../../data/postContact.json";
import { getToken } from "../utils/api-utils/auth-service";

test("Add Contact with API - token", async ({ request }) => {

  const token = await getToken();
  const response = await request.post(
    "https://thinking-tester-contact-list.herokuapp.com/contacts",
    { data: contactData, headers: { Authorization: "Bearer " + token } }
  );
  const responseData = await response.json();
  console.log(responseData);
});
