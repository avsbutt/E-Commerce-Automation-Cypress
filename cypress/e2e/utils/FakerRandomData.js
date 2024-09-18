// cypress/utils/FakerRandomData.js
import { faker } from '@faker-js/faker';

export const generateAndSaveRandomUserData = () => {
  const RegisteredUserData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postcode: faker.address.zipCode(),
    telephone: faker.phone.number('##########'), // Generate 10-digit number
    password: faker.internet.password()
  };

  return cy.writeFile('cypress/fixtures/RegisteredUserData.json', RegisteredUserData)
    .then(() => RegisteredUserData); // Ensure it returns a promise
};