import { P01_RegisterUserClass } from "../pages/P01_RegisterUser"
const P01_Test = new P01_RegisterUserClass();

describe('Registered User', ()=>{
    it("TC01: Verify that User can be Registered Successfully", ()=>{

    cy.visit('common/home')
    P01_Test.MyAccount()
})
})