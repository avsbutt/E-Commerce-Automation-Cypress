import { P07_CheckoutClass } from "../pages/P07_Checkout"
import { LoginUtils } from "../utils/LoginUtils";



const P07_Test = new P07_CheckoutClass

describe('Product Compare', ()=>{
    it.skip("TestCase_012: Verify that User can Added items are displayed in Checkout", ()=>{
        LoginUtils();
        P07_Test.ClickOnCheckoutHeaderIconandBtn()
        P07_Test.ClickOnCheckoutBtn()
        //P07_Test.VerifyShoppingCartEmptyOrNot()
        P07_Test.FillShippingInfo()
        P07_Test.ClickOnContinueBtn()
        P07_Test.ConfirmOrder()
        P07_Test.CheckoutSuccess()

        cy.get('#order-id').invoke('val').then((retrivedid)=>{
            Cypress.env('orderid', retrivedid)

            const orderid = Cypress.env(retrivedid)
            cy.get('#search').type(orderid)
            cy.writeFile('Cypress/fixture/od.json', {order: retrivedid})
            cy.readFile('Cypress/fixture/od.json').then((data)=>{
                const id = data
            })
        })
  
    })
})
