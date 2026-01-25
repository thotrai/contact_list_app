export function generateRandomUser() {
    const timestamp = Date.now();

    return {
      firstName: 'Test',
      lastName: `User${timestamp}`,
      email: `user-${timestamp}@mail.com`,
      password: 'Test123@'
    };
}
