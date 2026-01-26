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
        data: user
  });

  expect(addUserResponse.status()).toBe(201);

  return addUserResponse.json();
}

export async function addContactViaAPI(
    request: APIRequestContext,
    token: string,
    contact: {
        firstName: string,
        lastName: string,
        birthdate: string,
        email: string,
        phone: string,
        street1: string,
        street2: string,
        city: string,
        stateProvince: string,
        postalCode: string,
        country: string 
    }
) {
    const addContactResponse = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
        headers: { 
            Authorization: `Bearer ${token}`
        },
        data: contact
    });

    expect(addContactResponse.status()).toBe(201);

    return addContactResponse.json();
}