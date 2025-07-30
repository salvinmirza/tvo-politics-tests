class homePage {
  constructor() {
    this.readLink = 'a[aria-label="Read"]';
    // aria-labels are for accessibilities, not ideal as locator, Also can have if else block for trying different type of locators to make sure the element is detectable at the end
    this.closeStickyBannerIcon = "button[aria-label='Close sticky notification banner'] img[alt='close icon']";

  }

  visit() {
    cy.visit('/');
    return this;
  }

  clickReadLink() {
    cy.get(this.readLink)
      .safeClick();
    return this;
  }

  clickLoadMoreBTN() {
    cy.get('button').contains('Load More').safeClick();

    return this;
  };

  closeStickyNotificationIfVisible() {
    cy.get('body').then(($body) => {
      if ($body.find(this.closeStickyBannerIcon).length > 0) {
        cy.get(this.closeStickyBannerIcon).safeClick();
      }
    });
  }

}

module.exports = homePage;
