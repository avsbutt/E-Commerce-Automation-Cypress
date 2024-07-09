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
       cy.wait(300)
       cy.xpath(ShopByCatagoryLocators.FilterPriceSlider)
       .invoke('val', 10.6204)
       .trigger('change')
       cy.xpath(ShopByCatagoryLocators.FilterPriceSlider)
       .siblings('style')
       .should('have.text', '10.6204')
       
       //.should('have.text', '25')
        
    }


}