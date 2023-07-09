const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : 'cypress-mochawesome-reporter',
  reporterOptions : { 
    charts : true , 
    reportPageTitle : 'custom-title' , 
    builtScreenshots : true , 
    inlineAssets : true , 
    saveAllAttempts : false , 
  }, 
  e2e: {
    setupNodeEvents (on, config)  { 
      require ('cypress-mochawesome-reporter/plugin') (on) ; 
  }
},
  'defaultCommandTimeout': 30000,
  "chromeWebSecurity": false
})