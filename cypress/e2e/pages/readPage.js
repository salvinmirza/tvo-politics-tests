class readPage {
  constructor() {
    this.politicsLink = 'a[href="/current-affairs/tag/politics"]';
  }

  visitPoliticsSection() {
    cy.visit(this.politicsLink);

    return this;
  }
}

module.exports = readPage;
