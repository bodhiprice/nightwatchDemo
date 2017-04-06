module.exports = {
  /**
   * After all the tests are run, evaluate if there were errors and exit appropriately.
   *
   * See http://stackoverflow.com/questions/33409800/nightwatch-js-pausing-at-the-end-of-test-suite
   *
   * @param {object} results - The results object
   * @returns {void}
   */
  reporter(results) {
    if ((typeof(results.failed) === 'undefined' || results.failed === 0) &&
    (typeof(results.error) === 'undefined' || results.error === 0)) {
      process.exit(0);
    }
    else {
      process.exit(1);
    }
  }
};
