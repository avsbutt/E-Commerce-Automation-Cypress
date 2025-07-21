describe('AI Travel Itinerary Creation', () => {
    it('should create an itinerary', () => {
      cy.prompt([
        `Visit https://aicotravel.com`,
        `Type Paris in "where do you want to go"`,
        `Click on the first result`,
        `Click on the number of day picker`,
        `Click on 4 days`,
        `Press the Create Itinerary Button`
      ]);
    });
  });
  