import { LoginClass } from "../pages/P02_Login";
const P02_Test = new LoginClass();

describe('Login User', ()=>{
    it("TC01: Verify that User can Login Successfully", ()=>{

    cy.visit('account/login')
    P02_Test.loginWithSavedCredentials()
    P02_Test.LoginBtnClick()
    P02_Test.LoginUrlCheck()
  })
})




