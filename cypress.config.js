const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      dotenv.config();
      config.env.COMMON_EMAIL = process.env.COMMON_EMAIL;
      config.env.COMMON_PASSWORD = process.env.COMMON_PASSWORD;
      config.env.ADMIN_EMAIL = process.env.ADMIN_EMAIL;
      config.env.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
      return config;
    },
  },
});
