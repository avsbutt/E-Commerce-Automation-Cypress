import {RegisterUserLocators} from "../locators/RegisterUser.json"

export class P01_RegisterUserClass{
    MyAccount(){
        cy.xpath(RegisterUserLocators.MyAccount).trigger('mouseover')
        cy.xpath(RegisterUserLocators.Register).click

    }
    Register(){
        
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