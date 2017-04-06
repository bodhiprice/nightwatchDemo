module.exports = {
  SampleTest(browser) {
    browser
      .url('https://www.lullabot.com')
      // Pause to have time to switch to BrowserStack for demo
      .pause(10000)
      // This is what you'd actually do to wait for something to load before proceeding.
      .waitForElementVisible('.layout-homepage', 10000)
      .click('.layout-homepage__about__description a:first-of-type')
      .waitForElementVisible('.layout-articles', 10000)
      .getTitle(title => {
         browser.assert.equal(title, 'Articles | Lullabot');
       })
       .click('.navigation__branding a')
      .pause(2000)
      .click('.navigation__primary-menu__item:nth-child(5) a')
      .waitForElementVisible('.layout-contact', 10000)
      .getTitle(title => {
         browser.assert.equal(title, 'Contact | Lullabot');
       })
      .pause(5000)
      .click('.link--cta-button-alt')
      .pause(5000)
      .setValue('#name', 'John Hannah')
      .setValue('#email', 'some.email@lullabot.com')
      .setValue('textarea', 'Nightwatch and BrowserStack made a good combo!')
      .pause(5000)
      .end(() => console.log('ending SampleTest'));
  }
};
