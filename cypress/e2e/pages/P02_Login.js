import { LoginLocators} from "../locators/Login.json"

export class LoginClass {
    loginWithSavedCredentials() {
      cy.readFile('cypress/e2e/fixtures/RegisteredUserData.json').then((data) => {   //THIS FUNCTION READ THE DATA FROM THE SAVED FILE 
        cy.xpath(LoginLocators.Email).type(data.email);
        cy.xpath(LoginLocators.Password).type(data.password);
      });
    }
    LoginBtnClick() {
        cy.xpath(LoginLocators.LoginBtn).click();
      }
}