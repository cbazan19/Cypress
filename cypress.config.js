const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 50000,	
    experimentalSesssionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
  },
});
