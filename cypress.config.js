const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://app-expenses-tracker.devioneprojects.com/',
    apiUrl: 'https://expenses-tracker.devioneprojects.com/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
