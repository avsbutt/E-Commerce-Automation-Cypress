import { P05_WishListClass } from "../pages/P05_WishList"
import { LoginUtils } from "../utils/LoginUtils";

const P05_Test = new P05_WishListClass

describe('WishList', ()=>{
    it("TestCase_006: Verify that User can Add Product To WishList", ()=>{

        LoginUtils();
        P05_Test.ClickOnMenuAndSelectSamsung()
        P05_Test.ClickOnInStock()
        cy.scrollTo('top')
        P05_Test.iPodShuffleAddToWishList()
        P05_Test.iPodNanoAddToWishList()
        P05_Test.iMacAddToWishList()     
        
    })

    it("TestCase_007: Verify that User can Delete Product From WishList", ()=>{
        LoginUtils();
        cy.screenshot('007 Items in WishList Before Deleting')
        P05_Test.ClickOnWishListIcon()
        P05_Test.RemoveWishListItem()
        P05_Test.RemoveWishListItem()
        cy.screenshot('TC007 Items in WishList After Deleting')

    })
    it("TestCase_008: Verify that User can Add Product To Cart From WishList", ()=>{
        LoginUtils();
        P05_Test.ClickOnWishListIcon()
        P05_Test.AddToCartFromWishListItem()
        cy.screenshot('TC008 Item is added to Cart from WishList')
    })


})