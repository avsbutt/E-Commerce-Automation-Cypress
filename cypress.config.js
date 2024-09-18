const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xfw14i',
  e2e: {

    specPattern: "cypress/e2e/TestCases/**/*.cy.js",     //The specPattern tells Cypress where to find your test files.

    baseUrl: "https://ecommerce-playground.lambdatest.io/index.php?route=",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // testomat.io reporter plugin:
      require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);  //Testomatio Plugin 
    },


    fixturesFolder: 'cypress/e2e/fixtures',
    tsc: 'cypress/support/commands.ts',
    defaultCommandTimeout: 10000,

   
    video: false,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
    pageLoadTimeout:60000 ,
    screenshots: false,
    
    viewportWidth: 1280,
    viewportHeight: 800,
  
    

    screenshotOnRunFailure: true,
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results',
      "viewportWidth":1280
    }
  },
});
