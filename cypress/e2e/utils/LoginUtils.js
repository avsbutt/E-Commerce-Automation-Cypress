import { LoginLocators} from "../locators/Login.json";
import {P02_LoginClass} from "../pages/P02_Login"

const P02_LoginUtils = new P02_LoginClass;

export function LoginUtils() {
    cy.visit('account/login')
    
    P02_LoginUtils.loginWithSavedCredentials()
    P02_LoginUtils.LoginBtnClick()
    P02_LoginUtils.LoginUrlCheck()


    //---------------#### IF WE DONT USE ABOVE FUNCTION AND LOGIN WITH DIRECT METHOD #### -------------\\
    // cy.readFile('cypress/e2e/fixtures/RegisteredUserData.json').then((data) => {   //THIS FUNCTION READ THE DATA FROM THE SAVED FILE 
    //     cy.xpath(LoginLocators.Email).type(data.email);
    //     cy.xpath(LoginLocators.Password).type(data.password);
    //     cy.xpath(LoginLocators.LoginBtn).click();
    //     cy.url().should('include', 'account/account')
    // })
    //dfds

}