
const { defineConfig } = require("Cypress");
async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config
}
module.exports = defineConfig({
  e2e: {
   setupNodeEvents,
   /*specPattern:'cypress/TestExample.cy.js',*/
   //specPattern:'cypress/integration/TestExample',

specPattern:'cypress/integration/trello_api_spec.cy.js'
  
   
  },
});
