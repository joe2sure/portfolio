const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CI ? 'https://joe-space.com.ng' : 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // This can include tasks like logging, preparing environment, etc.
    },
  },
});