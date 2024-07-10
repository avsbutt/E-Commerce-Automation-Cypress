import { ShopByCatagoryLocators } from "../locators/ShopByCatagory.json"

export class P03_ShopByCatagoryClass {
    ShopByCatagoryHeaderMenuClick(){
        cy.xpath(ShopByCatagoryLocators.ShopByCatagoryMenu).click()
    }
    PhoneTabletiPodCatagoryClick(){
        cy.xpath(ShopByCatagoryLocators.PhoneTabletIpod).click()
        cy.url().should('include', 'product/category&path=57')
    }
    //APPLY FILTERS FOR ITEMS
    FilterApply(){
    
       cy.xpath(ShopByCatagoryLocators.FilterMaximumPriceInputField).clear().type('300')
       cy.xpath(ShopByCatagoryLocators.ManufacturerApple).click()
       cy.xpath(ShopByCatagoryLocators.AvailibilityInStock).click()
       cy.xpath(ShopByCatagoryLocators.iPodShuffle).trigger('mouseover')
       cy.wait(700)
    }
    iPodShuffleAddToCart(){
        cy.xpath(ShopByCatagoryLocators.iPodShuffle).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.iPodShuffle).realHover()
        cy.xpath(ShopByCatagoryLocators.iPodShuffleCartBtn).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })
       // cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('not.be.visible')
    }
    iPodNanoAddToCart(){
        cy.xpath(ShopByCatagoryLocators.iPodNano).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.iPodNano).realHover()
        cy.xpath(ShopByCatagoryLocators.iPodNanoCartBtn).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })
       // cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('not.be.visible')
    }
    iMacAddToCart(){
        cy.xpath(ShopByCatagoryLocators.iMac).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.iMac).realHover()
        cy.xpath(ShopByCatagoryLocators.iMacCartBtn).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })
        // cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('not.be.visible')

    }
    AppleCinemaAddToCart(){
        cy.xpath(ShopByCatagoryLocators.AppleCinema).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.AppleCinema).realHover()
        cy.xpath(ShopByCatagoryLocators.AppleCinemaAirCartBtn).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(ShopByCatagoryLocators.AppleCinemaSelectSize).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.AppleCinemaSelectSize).select('Large(+$18.00)')
        //cy.xpath(ShopByCatagoryLocators.AppleCinemaSelectSize).should('have.value', 'Large(+$18.00)')
        cy.xpath(ShopByCatagoryLocators.AppleCinemaAddToCartBtn).click()
        cy.wait(2000)
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })
       //cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('not.be.visible')
    }
    iPodClassicAddToCart(){
        cy.xpath(ShopByCatagoryLocators.iPodClassic).realHover()
        cy.xpath(ShopByCatagoryLocators.iPodClassicCartBtn).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(ShopByCatagoryLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })
        //cy.xpath(ShopByCatagoryLocators.ItemAddedNotification).should('not.be.visible')

    }





}