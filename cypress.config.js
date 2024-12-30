const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'xfw14i',
  e2e: {

   // specPattern: "cypress/e2e/TestCases/**/*.cy.js",     //The specPattern tells Cypress where to find your test files.

    specPattern: "cypress/e2e/features/**/*.feature",
    stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,mjs,ts,tsx}", // Matches any JavaScript/TypeScript file in the step_definitions folder

    baseUrl: "https://ecommerce-playground.lambdatest.io/index.php?route=",
    setupNodeEvents(on, config) {
      
      console.log('Step definitions path:', config.stepDefinitions);
      // implement node event listeners here
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin.default(config)],     }))
        preprocessor.addCucumberPreprocessorPlugin(on, config);
        require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);  //Testomatio Plugin 
        return config;
      // testomat.io reporter plugin:
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
