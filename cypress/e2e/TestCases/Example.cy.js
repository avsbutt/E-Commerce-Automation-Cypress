describe('Example Test', ()=>{
    it("Element on that Page is hidden", ()=>{


       
       
        //cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        //cy.get('#column-a').dragTo('#column-b');
        //cy.get('#column-a').realMouseDown();
        //cy.get('#column-b').realMouseMove().realMouseUp();

        cy.visit("https://example.cypress.io/commands/network-requests");  // DYNAMIC ELEMENTS USING NETWORKS WAITS 
        cy.intercept('POST', '/comments').as('getPoost')
        cy.get('.network-post.btn.btn-success').click();
        cy.wait('@getPost').its('response.statusCode').should('eq', 201);
        //----------------------
        cy.get('.list-item').each(($el, index, list) => {         //DYNAMIC DROPDOWN 
            if (list === 'Dropdown-1') {
              cy.wrap($el).click(); // Click the first item
            }



        cy.fixture('example.json').then((fixture)=>{  // FIXTURES FILE USAGE
            cy.get('#id').type(fixture.name)
        })

        cy.get('#id').realHover().click()     //HOVER USING REALEVENTS 
        cy.get('#id').trigger('mouseover').click()

        cy.get('#id').drag('#id2')      //USE DRAG DROP EVENTS >> npm install cypress-drag-drop << 
        cy.get('#id').realDrag('#id2')   



        

        //iFRMAES 

        cy.visit("https://practice.expandtesting.com/iframe")

        cy.frameLoaded('iframe#mce_0_ifr')
            cy.iframe().find('body').type('{cmd}a');


            
        
        cy.get('iframe#mce_0_ifr').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).contains('Your content goes here.').type('{cmd}a');
          });
        



       
    })
})
})