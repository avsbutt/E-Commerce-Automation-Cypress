import { CheckoutClass } from "../pages/P07_Checkout"
const P07_Test = new CheckoutClass
import { LoginUtils } from "../utils/LoginUtils";



describe('Product Compare', ()=>{
    it("TestCase_012: Verify that User can Added items are displayed in Checkout", ()=>{
        LoginUtils();
        P07_Test.ClickOnCheckoutHeaderIconandBtn()
        P07_Test.VerifyShoppingCartEmptyOrNot()
  
    })
})
