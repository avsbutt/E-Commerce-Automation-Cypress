import { SearchProductLocators } from "../locators/SearchProduct.json"

export class P04_SearchProductClass {
    ClickAndSelectCatagories(){
        cy.xpath(SearchProductLocators.AllCatagories).click()
        cy.xpath(SearchProductLocators.Tablets).click()
    }
    TypeInSearchField(){
        cy.xpath(SearchProductLocators.SearchField).type('iMac')
    }
    CountSearchResult(){
        cy.xpath(SearchProductLocators.SearchResult).its('length').then(itemCount => {
            // Perform assertions or other actions with itemCount
            expect(itemCount).to.be.greaterThan(0); // Example assertion
            cy.log(`Number of Search Result: ${itemCount}`);
          });
        
    }

}