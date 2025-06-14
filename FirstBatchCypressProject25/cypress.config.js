const { defineConfig } = require("cypress");

{
  reporter:"mochawesome"
}
module.exports = defineConfig({
  projectId: 'cemkkf',

  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // 1. Load Cucumber plugin
      await cucumber.addCucumberPreprocessorPlugin(on, config);

      // 2. Use browserify preprocessor
      on(
        "file:preprocessor",
        createBrowserifyPreprocessor(config)
      );

      return config;
    },

    supportFile: "/cypress/support/e2e.js",
    
    baseUrl: "https://rahulshettyacademy.com/angularpractice",

    // Time Cypress will wait for page to load
    pageLoadTimeout: 100000, // 100 seconds

    // Time to wait for most Cypress commands like .get(), .contains(), etc.
    defaultCommandTimeout: 10000, // 10 seconds

    // Time to wait for cy.request() to respond
    requestTimeout: 15000, // 15 seconds

    // Time to wait for cy.visit() to resolve
    responseTimeout: 20000, // 20 seconds

    // Time to wait for an element to exist when using .should() or assertions
    execTimeout: 60000, // 60 seconds for system commands   
    
  },
});