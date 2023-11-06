import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    retries: {
      openMode: 1,
      runMode: 0
    },
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 20000,
    screenshotsFolder:"cypress\screenshots",
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    video:true,
    viewportHeight: 1200,
    viewportWidth: 1600, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
