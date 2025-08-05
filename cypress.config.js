const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://trello.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
      
      chromeWebSecurity: false,
  },
});
