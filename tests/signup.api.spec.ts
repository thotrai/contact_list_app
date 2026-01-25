import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../utils/helperFunctions';

test('Verify that the account has been created and logged in via API calls.', async ({ request }) => {
    const user = generateRandomUser();

    const signupResponse = await request.post('https://thinking-tester-contact-list.herokuapp.com/users', {
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password 
        }
    });

    const signupResponseBody = await signupResponse.json();
    expect(signupResponse.status()).toBe(201);
    expect(signupResponseBody).toHaveProperty('user');
    expect(signupResponseBody.user.email).toBe(user.email);

    const loginResponse = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
        data: {
            email: user.email,
            password: user.password 
        }
    });

    const loginResponseBody = await loginResponse.json();
    expect(loginResponse.status()).toBe(200);
    expect(loginResponseBody.user).toHaveProperty('_id');
    expect(loginResponseBody._id).toBe(signupResponseBody._id);

});