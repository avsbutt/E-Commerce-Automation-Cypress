import { CheckoutLocators} from "../locators/Checkout.json"
import { P06_ProductCpmpareClass } from "../pages/P06_ProductCompare"


export class P07_CheckoutClass {




    ClickOnCheckoutHeaderIconandBtn(){
        cy.xpath(CheckoutLocators.CheckoutHeaderIcon).click()
    }
    VerifyShoppingCartEmptyOrNot(){
        cy.xpath(CheckoutLocators.EmptyShoppingCartText).should('not.be.visible');
        cy.log('Shopping Cart is not Empty');
    }
    ClickOnCheckoutBtn(){
        cy.xpath(CheckoutLocators.CheckoutSidebarBtn).click()
        //cy.xpath(CheckoutLocators.CheckoutCartBtn).click()
    }
    FilledShippingInfo(){

        cy.fixture('RegisteredUserData').then((data) => {

        cy.url().should('include', 'checkout/checkout')      //   VERIFY THE URL 

        cy.xpath(CheckoutLocators.FirstName).type(data.firstName)
        cy.xpath(CheckoutLocators.LastName).type(data.lastName)
        cy.xpath(CheckoutLocators.Address1).type(data.address)
        cy.xpath(CheckoutLocators.City).type(data.city)
        cy.xpath(CheckoutLocators.PostCode).type(data.postcode)
        cy.xpath(CheckoutLocators.Country).select('Pakistan').should('contain', 'Pakistan')
        cy.xpath(CheckoutLocators.RegionState).select('Punjab').should('contain', 'Punjab')
        cy.xpath(CheckoutLocators.TermsAndCondition).click()           //  USED check() TO SELECT THE CHECKBOX OR WE CAN USE Click() TOO.
        });
    }

        ClickOnContinueBtn(){
            cy.xpath(CheckoutLocators.ContinueBtn).click()
            
        }
        ConfirmOrder(){
            cy.url().should('include', 'extension/maza/checkout/confirm')
            cy.xpath(CheckoutLocators.ConfirmOrderBtn).click()
        }
        CheckoutSuccess(){
            cy.url().should('include', 'checkout/success')
            cy.xpath(CheckoutLocators.OrderPlacedText).should('exist');
        }


    }
    
    
