import {RegisterUserLocators} from "../locators/RegisterUser.json"
const { faker } = require('@faker-js/faker');  //USED FAKER FOR RANDOM FirstName, LastName, Email, Telephone


export class P01_RegisterUserClass {
    constructor() {
      this.RegisteredUserData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        telephone: faker.phone.number('##########'), // Generates a 10-digit number
        password: faker.internet.password() // Generates a random password
      };
    }


    saveUserCredentials() {
        cy.writeFile('cypress/e2e/fixtures/RegisteredUserData.json', this.RegisteredUserData);    //THIS FUNCTION CREATE A FILE IN FIXTURE AND SAVE THE DATA THAT IS TYPED, FILE IS OVERWRITE EVERYTIME WHEN NEW TEST IS RUN
      }
  
    openMyAccountClickRegister() {
      cy.xpath(RegisterUserL11ocators.MyAccount).trigger('mouseover');
      cy.xpath(RegisterUserLocators.Register).click();
    }
  
    FirstName() {
      cy.xpath(RegisterUserLocators.FirstName).type(this.RegisteredUserData.firstName);
    }
    LastName(){
        cy.xpath(RegisterUserLocators.LastName).type(this.RegisteredUserData.lastName);
    }
    Email(){
        cy.xpath(RegisterUserLocators.Email).type(this.RegisteredUserData.email);
    }
    Telephone(){
        cy.xpath(RegisterUserLocators.Telephone).type(this.RegisteredUserData.telephone);
    }
    Password(){
        cy.xpath(RegisterUserLocators.Password).type(this.RegisteredUserData.password);
    }
    PasswordConfirm(){
        cy.xpath(RegisterUserLocators.PasswordConfirm).type(this.RegisteredUserData.password); // Ensure confirm password matches, Retype the same password
    }
    NewsletterSubscribe(){
        cy.xpath(RegisterUserLocators.NewsletterSubscribe).click()
    }
    PrivacyPolicy(){
        cy.xpath(RegisterUserLocators.PrivacyPolicy).click()
    }
    ContinueBtn(){
        cy.xpath(RegisterUserLocators.ContinueBtn).click()
    }
    AccountCreatedUrlCheck(){
      cy.url().should('include', 'account/success');
    }
}