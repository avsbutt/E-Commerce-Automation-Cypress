import { CheckoutLocators} from "../locators/Checkout.json"

export class CheckoutClass {

    ClickOnCheckoutHeaderIconandBtn(){
        cy.xpath(CheckoutLocators.CheckoutHeaderIcon).click()
        
        cy.xpath(CheckoutLocators.CheckoutSidebarBtn).click()
    }
    VerifyShoppingCartEmptyOrNot(){
        cy.contains('Your shopping cart is empty!').should('be.visible');
        cy.log('Shopping Cart is Empty');

    }
    
    
}