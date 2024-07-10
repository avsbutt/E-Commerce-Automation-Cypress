import { P04_SearchProductClass } from "../pages/P04_SearchProduct";

const P04_Test = new P04_SearchProductClass

describe('User can shop from catagory', ()=>{
    it("TestCase_005: Verify that Search Field is working", ()=>{
        //LoginUtils();
        cy.visit('common/home')
        P04_Test.ClickAndSelectCatagories()
        P04_Test.TypeInSearchField()
        P04_Test.CountSearchResult()
        cy.screenshot('TC04: Verify that Search Field is working')
    })
})