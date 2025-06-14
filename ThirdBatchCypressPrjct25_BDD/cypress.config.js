const cypress = require("cypress");
const { defineConfig } = require("cypress");
const { default: preprocessor } = require("cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  projectId: 'cemkkf',


  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
   async setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", createBundler({
      plugins:[createEsbuildPlugin(config)],
    }));
    
    return config;
    
    },    

    baseUrl: "https://rahulshettyacademy.com/angularpractice",
    
    // Time Cypress will wait for page to load
    pageLoadTimeout: 100000, // 100 seconds

    // Time to wait for most Cypress commands like .get(), .contains(), etc.
    defaultCommandTimeout: 10000, // 10 seconds

    env : {

      url : "https://rahulshettyacademy.com/angularpractice"
    },

    retries : {
      runMode : 2,
      openMode: 0
    },

    reporter : "mochawesome",
    reporterOptions : { 
      reportDir : "cypress/reports/mochawesome",
      overwrite : false,
      html : false,
      json : true

    },
    // Time to wait for cy.request() to respond
    requestTimeout: 15000, // 15 seconds

    retries : 1,

    // Time to wait for cy.visit() to resolve
    responseTimeout: 20000, // 20 seconds

    // Time to wait for an element to exist when using .should() or assertions
    execTimeout: 60000, // 60 seconds for system commands   
  },
});
