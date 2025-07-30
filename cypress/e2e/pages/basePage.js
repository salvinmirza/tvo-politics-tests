class basePage {
  waitForPageToLoad(selector = 'body') {
    cy.get(selector, { timeout: 10000 }).should('be.visible');
  }

  scrollToBottom() {
    cy.scrollTo('bottom');
  }
}

module.exports = basePage;
