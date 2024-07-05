import {RegisterUserLocators} from "../locators/RegisterUser.json"
const { faker } = require('@faker-js/faker');  //USED FAKER FOR RANDOM FirstName, LastName, Email, Telephone

export class P01_RegisterUserClass{
    MyAccount(){
        cy.xpath(RegisterUserLocators.MyAccount).trigger('mouseover')
        cy.xpath(RegisterUserLocators.Register).click()

    }
    FirstName(){
        
    }
    LastName(){
        
    }
    Email(){
        
    }
    Telephone(){
        
    }
    Password(){
        
    }
    PasswordConfirm(){
        
    }
    PrivacyPolicy(){
        
    }
    SubscribeNewsLetter(){
        
    }
    ContinueBtn(){
        
    }
}