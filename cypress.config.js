const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.gov.il",
    pageLoadTimeout: 500000,
    defaultCommandTimeout: 10000 

  },
});
