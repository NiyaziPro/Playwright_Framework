import { request } from "@playwright/test";
import authData from "..//..//..//data/credentials.json";

export async function getToken() {
  const context = await request.newContext();

  const response = await context.post(
    "https://thinking-tester-contact-list.herokuapp.com/users/login",
    { data: authData }
  );
  const responseData = await response.json();

  return responseData.token;
}
