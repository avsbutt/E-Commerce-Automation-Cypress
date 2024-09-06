describe('Example Test', ()=>{
    it("Element on that Page is hidden", ()=>{


       
       
        //cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        //cy.get('#column-a').dragTo('#column-b');
        //cy.get('#column-a').realMouseDown();
        //cy.get('#column-b').realMouseMove().realMouseUp();

        cy.visit("https://example.cypress.io/commands/network-requests");   // DYNAMIC ELEMENTS USING NETWORKS WAITS 
        cy.intercept('POST', '/comments').as('getPoost')
        cy.get('.network-post.btn.btn-success').click();
        cy.wait('@getPost').its('response.statusCode').should('eq', 201);

        //----------------------
        cy.get('.list-item').each(($el, index, list) => {            //DYNAMIC DROPDOWN 
            if (list === 'Dropdown-1') {
              cy.wrap($el).click(); // Click the first item
            }



        cy.fixture('example.json').then((data)=>{                    // FIXTURES FILE USAGE
            cy.get('#id').type(data.name)
        })



        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//button[@id='mousehover']").realHover()
        cy.xpath("//a[normalize-space()='Reload']").click()                        //HOVER USING REALEVENTS 
        cy.get('#id').trigger('mouseover').click()                                 //HOVER USING TRIGGER (Not Working)

        cy.xpath("//input[@id='name']").type('awais')                          // Handle Alert 
        cy.xpath("//input[@id='confirmbtn']").click();
        cy.on('window:alert', (alertText) => {
         expect(alertText).to.equal('awais');
         return true;
        })

        cy.get('#id').drag('#id2')                                 //USE DRAG DROP EVENTS >> npm install cypress-drag-drop << 
        cy.get('#id').realDrag('#id2')                             //This is custom command its cmd is added in Command.js file 


        const filename = 'example.json'                           //File Upload intall plugin first cypress-file-upload and use attachFile
        cy.visit('https://commitquality.com/practice-file-upload')
        cy.xpath("//input[@id='file-input']").attachFile(filename)
        cy.xpath("//button[normalize-space()='Submit']").click();


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')         //Open a new tab Window 
        cy.xpath("//a[@id='opentab']").invoke('removeAttr', 'target').click()




        //iFRMAES 

        cy.visit("https://practice.expandtesting.com/iframe")
        cy.frameLoaded('iframe#mce_0_ifr')
        cy.iframe('iframe#mce_0_ifr').find('body').type('{cmd}a');



          cy.visit('https://ui.vision/demo/webtest/frames/');     //interact Multiple elements in iFrame best approach 
          // Step 1: Ensure the frame is loaded
          cy.frameLoaded('frame[src="frame_3.html"]', { timeout: 10000 }); //iFrame with plugin
          // Step 2: Access the iframe inside the frame
          cy.iframe('frame[src="frame_3.html"]').within(() => {
          // Step 3: Interact with elements inside the iframe
          cy.get('input[name="mytext3"]').type('awaiz');              
 


        cy.visit('https://ui.vision/demo/webtest/frames/');    //iFrame without plugin  Method 1 with alias
        cy.get('frame[src="frame_3.html"]').then((iframedata)=>{
        let idata = iframedata.contents().find('body')
        cy.wrap(idata).as('iframe')
        cy.get('@iframe').find('input[name="mytext3"]').type('awaiz')
        cy.get('@iframe').find('label[for="i8"]').click()
        })

        
        cy.get('iframe#mce_0_ifr').then($iframe => {           ////iFrame without plugin  Method 2 (its same without alias)
            const body = $iframe.contents().find('body');
            cy.wrap(body).contains('Your content goes here.').type('{cmd}a');
        });
        



       
    })
})
})
})