
import { P02_LoginClass } from "../pages/P02_Login";
import { LoginUtils } from "../utils/LoginUtils";
const P02_Test = new P02_LoginClass();

describe('Login User', ()=>{
    it("TestCase_002: Verify that User can Login Successfully", ()=>{

      LoginUtils();
      cy.screenshot('Verify that User can Login Successfully')
  })

  it("TestCase_003: Verify that User cannot Login with invalid Credentials", ()=>{
    cy.visit('account/login')

    cy.fixture('InvalidCredential').then((data)=>{

       P02_Test.LoginWithInvalidEmail(data.InvalidEmail)
       P02_Test.LoginWithInvalidPassword(data.InvalidPassword)
       P02_Test.LoginBtnClick()
       P02_Test.WarningOnWrongEmailPassword()
       P02_Test.InvalidLoginUrlCheck()
       cy.screenshot('Verify that User cannot Login with invalid Credentials')

      })

  })

})

