require('dotenv').config();

const nightwatchConfig = {
  src_folders: [
    'tests'
  ],
  output_folder: 'reports',
  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80
  },

  test_settings: {
    default: {
      launch_url: 'https://www.lullabot.com',
      silent: true,
      desiredCapabilities: {
        'browserName': 'chrome',
        'os': 'OS X',
        'os_version': 'Sierra',
        'chromeOptions': {
          'args': ['--disable-notifications']
        },
        'browserstack.user': `${process.env.BROWSERSTACK_USERNAME}`,
        'browserstack.key': `${process.env.BROWSERSTACK_AUTOMATE_KEY}`,
        'browserstack.local': true,
        'browser': 'chrome'
      },
      screenshots: {
        enabled: false
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  },
  globals_path: './nightwatchGlobals.js'
};

// Code to copy seleniumhost/port into test settings
Object.keys(nightwatchConfig.test_settings).forEach(key => {
  const config = nightwatchConfig.test_settings[key];
  config.selenium_host = nightwatchConfig.selenium.host;
  config.selenium_port = nightwatchConfig.selenium.port;
});

module.exports = nightwatchConfig;
