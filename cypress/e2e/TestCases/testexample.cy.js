describe('test', ()=>{
    it("example test", ()=>{
       //cy.visit('https://example.cypress.io/commands/actions')
       // cy.get('.trigger-input-range').invoke('val', 25)
       // cy.get('.trigger-input-range').trigger('change')
       //cy.get('.trigger-input-range').siblings('p').should('have.text', '25')

       
cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57&mz_fp=p300&mz_fm=8&mz_fss=-1')
cy.xpath("//a[@id='mz-product-grid-image-34-212408']//div[@class='carousel-item active']//img[@title='iPod Shuffle']").realHover()
cy.xpath("//button[@class='btn btn-cart cart-34']").should('be.visible').click({ force: true });
    })
})