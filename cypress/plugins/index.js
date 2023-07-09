const { defineConfig } = require('cypress');

módulo.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        builtScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    e2e: {
        setupNodeEvents(on, configuração) {
            requer('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});