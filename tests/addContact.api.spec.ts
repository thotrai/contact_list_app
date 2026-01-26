import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../utils/helperFunctions';

test('Add a new contact via API using Bearer token', async ({ request }) => {
  const user = generateRandomUser();

  const createUserResponse = await request.post('https://thinking-tester-contact-list.herokuapp.com/users', {
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
        },
    });

  expect(createUserResponse.status()).toBe(201);
  const createUserResponseBody = await createUserResponse.json();

  const userId = createUserResponseBody.user._id;

  const token = createUserResponseBody.token;
  expect(token).toBeTruthy();

    const addContactResponse = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            firstName: 'Thodoris',
            lastName: 'Tester',
            birthdate: '2020-01-30',
            email: 'thodoris@mail.com',
            phone: '123456789',
            street1: 'Random Street',
            street2: 'Apartment B2',
            city: 'Thessaloniki',
            stateProvince: 'SKG',
            postalCode: '2310',
            country: 'Greece' 
        }
    });

    expect(addContactResponse.status()).toBe(201);
    const addContactResponseBody = await addContactResponse.json();

    expect(addContactResponseBody).toHaveProperty('_id');
    expect(addContactResponseBody.firstName).toBe('Thodoris');
    expect(addContactResponseBody.lastName).toBe('Tester');

    const contactOwnerId = addContactResponseBody.owner;
    expect(addContactResponseBody).toHaveProperty('owner');
    expect(contactOwnerId).toBe(userId);
});
