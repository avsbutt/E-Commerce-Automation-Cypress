import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the login page', () => {
  cy.visit('account/login');
});

When('the user enters {string} and {string}', (username, password) => {
  cy.get('#input-email').type(username);
  cy.get('#input-password').type(password);
  cy.get('form > .btn').click();  
});

Then('the user should be redirected to the dashboard', () => {
  cy.url().should('include', '/account');
});
