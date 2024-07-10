import { ShopByCatagoryLocators } from "../locators/ShopByCatagory.json"

export class P03_ShopByCatagory {
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
       cy.xpath(ShopByCatagoryLocators.AvailibilityInSrock).click()
       cy.xpath(ShopByCatagoryLocators.iPodShuffle).trigger('mouseover')
       cy.xpath(ShopByCatagoryLocators.AddToCartBtn).click()
    }
    iPodShuffleAddToCart(){
        cy.xpath(ShopByCatagoryLocators.iPodShuffle).trigger('mouseover')
        cy.xpath(ShopByCatagoryLocators.AddToCartBtn).click()
    }



}