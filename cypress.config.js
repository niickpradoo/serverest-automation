const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/tests/*/*.cy.{js,jsx,ts,tsx}',
    baseUrl: "https://front.serverest.dev",
    apiUrl: "https://serverest.dev",
    supportFile: 'cypress/support/e2e.js',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Test Results',
      reportFilename: 'test-results',
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
    },
  }
});