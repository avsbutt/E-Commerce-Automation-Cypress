import { ProductCompareLocators } from "../locators/ProductCompare.json"

export class P06_ProductCpmpareClass{
    ClickOnMenuAndSelectNokia(){
        cy.xpath(ProductCompareLocators.MegaMenu).realHover()
        cy.xpath(ProductCompareLocators.Nokia).click()
        cy.url().should('include', 'product/manufacturer/info&manufacturer_id=9')
    }
    ClickOnInStock(){
        cy.xpath(ProductCompareLocators.AvailibilityInStock).click()
    }
    CanonEos5DAddToProductCompare(){
        cy.xpath(ProductCompareLocators.CanonEOS5D).should('be.visible')
        cy.xpath(ProductCompareLocators.CanonEOS5D).realHover()
        cy.xpath(ProductCompareLocators.CanonEOS5DProductCompareBtn).should('be.visible').click({force: true})
        cy.wait(2000)
        cy.xpath(ProductCompareLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ProductCompareLocators.ItemAddedNotificationCloseBtn).click({force: true})
    }
    SamsungSyncMasterAddToProductCompare(){
        cy.xpath(ProductCompareLocators.SamsungSyncMaster).should('be.visible')
        cy.xpath(ProductCompareLocators.SamsungSyncMaster).realHover()
        cy.xpath(ProductCompareLocators.SamsungSyncMasterProductCompareBtn).should('be.visible').click({force: true})
        cy.wait(2000)
        cy.xpath(ProductCompareLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ProductCompareLocators.ItemAddedNotificationCloseBtn).click({force: true})
    }
    ClickOnProductCompareIcon(){
        cy.xpath(ProductCompareLocators.ProductCompareHeaderIcon).click()
        cy.url().should('include', 'product/compare')
    }
    RemoveItemFromProductCompare(){
        cy.xpath(ProductCompareLocators.RemoveBtn).eq(0).click()           //THERE ARE MULTIPLE BUTTON WITH SAME LOCATOR TO HANDLE THIS WE USE eq(0)/eq(1) THIS WILL CLICK ONLY ONE LOCATOR 
    }
    AddToCartItemFromProductCompare(){
        cy.xpath(ProductCompareLocators.AddToCart).eq(0).click()                 //THERE ARE MULTIPLE BUTTON WITH SAME LOCATOR TO HANDLE THIS WE USE eq(0)/eq(1) THIS WILL CLICK ONLY ONE LOCATOR
    }
}