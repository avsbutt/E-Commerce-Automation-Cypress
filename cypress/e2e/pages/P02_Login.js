import { LoginLocators} from "../locators/Login.json"


export class P02_LoginClass {
    loginWithSavedCredentials() {
      cy.readFile('cypress/e2e/fixtures/RegisteredUserData.json').then((data) => {   //THIS FUNCTION READ THE DATA FROM THE SAVED FILE 
        cy.xpath(LoginLocators.Email).type(data.email);
        cy.xpath(LoginLocators.Password).type(data.password);
      });
    }
    LoginBtnClick() {
        cy.xpath(LoginLocators.LoginBtn).click();
      }
    LoginUrlCheck(){
      cy.url().should('include', 'account/account')
    }
    LoginWithInvalidEmail(InvalidEmail){
      cy.xpath(LoginLocators.Email).type(InvalidEmail)

    }
    LoginWithInvalidPassword(InvalidPassword){
      cy.xpath(LoginLocators.Password).type(InvalidPassword)
    }
    WarningOnWrongEmailPassword(){
      cy.xpath(LoginLocators.Warning).should('be.visible')
    }
    InvalidLoginUrlCheck(){
      cy.url().should('include', 'account/login')
    }
}