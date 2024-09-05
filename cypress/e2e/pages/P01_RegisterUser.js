import {RegisterUserLocators} from "../locators/RegisterUser.json"
import { generateAndSaveRandomUserData } from '../utils/FakerRandomData'; // Import the utility function

const { faker } = require('@faker-js/faker');  //USED FAKER FOR RANDOM FirstName, LastName, Email, Telephone


export class P01_RegisterUserClass {


  init() {
    return generateAndSaveRandomUserData().then((userData) => {
      this.RegisteredUserData = userData;
    });
  }

  
    openMyAccountClickRegister() {
      cy.xpath(RegisterUserLocators.MyAccount).trigger('mouseover');
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