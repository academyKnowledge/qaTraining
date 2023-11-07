/// <reference types="cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com",
    // viewportHeight:660,
    // viewportWidth:550,
    experimentalStudio:true, 
  },
});
