import { WishListLocators} from "../locators/WishList.json"

export class P05_WishListClass{
    ClickOnMenuAndSelectSamsung(){
        cy.xpath(WishListLocators.MegaMenu).realHover()
        cy.xpath(WishListLocators.Samsung).should('be.visible').click()
        cy.url().should('include', 'product/manufacturer/info&manufacturer_id=8');
    }
    ClickOnInStock(){
        cy.xpath(WishListLocators.AvailibilityInStock).click()
    }
    iPodShuffleAddToWishList(){
        cy.xpath(WishListLocators.iPodShuffle).should('be.visible')
        cy.xpath(WishListLocators.iPodShuffle).realHover()
        cy.xpath(WishListLocators.iPodShuffleWishListBtn).should('be.visible').click({ force: true })
        cy.wait(2000)
        cy.xpath(WishListLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(WishListLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })
    }
    iPodNanoAddToWishList(){
        cy.xpath(WishListLocators.iPodNano).should('be.visible')
        cy.xpath(WishListLocators.iPodNano).realHover()
        cy.xpath(WishListLocators.iPodNanoWishListBtn).should('be.visible').click({ force: true })
        cy.wait(2000)
        cy.xpath(WishListLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(WishListLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true }) 
    }
    iMacAddToWishList(){
        cy.xpath(WishListLocators.iMac).should('be.visible')
        cy.xpath(WishListLocators.iMac).realHover()
        cy.xpath(WishListLocators.iMacWishListBtn).should('be.visible').click({ force: true })
        cy.wait(2000)
        cy.xpath(WishListLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(WishListLocators.ItemAddedNotificationCloseBtn).click({force:true}, { multiple: true })   
    }
    ClickOnWishListIcon(){
        cy.xpath(WishListLocators.WishListHeaderIcon).click()
        cy.url().should('include', 'account/wishlist')
    }
    RemoveWishListItem(){
        cy.xpath(WishListLocators.RemoveItem1FromWishList).click()
        cy.xpath(WishListLocators.SuccessMessage).should('be.visible')
        cy.xpath(WishListLocators.SuccessMessageCloseBtn).click()
    }
    AddToCartFromWishListItem(){
        cy.xpath(WishListLocators.AddToCartItemFromWishList).click()
        cy.xpath(WishListLocators.ItemAddedNotification).should('be.visible')
        cy.xpath(WishListLocators.ItemAddedNotificationCloseBtn).click()
    }


}