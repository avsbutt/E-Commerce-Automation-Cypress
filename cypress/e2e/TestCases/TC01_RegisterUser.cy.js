import { P01_RegisterUserClass } from "../pages/P01_RegisterUser"
const P01_Test = new P01_RegisterUserClass();

describe('Registered New User', ()=>{
    it("TestCase_001: Verify that User can be Registered Successfully", ()=>{

    cy.visit('common/home')
    P01_Test.openMyAccountClickRegister()
    P01_Test.FirstName()
    P01_Test.LastName()
    P01_Test.Email()
    P01_Test.Telephone()
    P01_Test.Password()
    P01_Test.PasswordConfirm()
    P01_Test.PrivacyPolicy()
    P01_Test.NewsletterSubscribe()
    P01_Test.ContinueBtn()
    P01_Test.saveUserCredentials()
    P01_Test.AccountCreatedUrlCheck()
    cy.screenshot('TC01: Verify that User can be Registered Successfully')
  })
})