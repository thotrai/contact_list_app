import { APIRequestContext, expect } from "@playwright/test";

export async function createUserViaAPI(
    request: APIRequestContext,
    user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }
) {
  const addUserResponse = await request.post('https://thinking-tester-contact-list.herokuapp.com/users', {
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }
  });

  expect(addUserResponse.status()).toBe(201);

  return addUserResponse.json();

}