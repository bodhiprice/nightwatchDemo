require('babel-core/register');

const NightwatchConf = require('./nightwatch.js');

function init(settings) {
  settings.test_workers = false;
  return settings;
}

module.exports = init(NightwatchConf);
