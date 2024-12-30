import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("i am on login page", ()=>{
    cy.visit("account/login")
})
When("i enter valid credentials", () => {
    cy.get("#input-email").type("bagypedozu@mailinator.com");
    cy.get("#input-password").type("password123");
    cy.get('form > .btn').click();    
})

Then("i should see the dashboard", () => {
    cy.url().should("include", "/account");
});
