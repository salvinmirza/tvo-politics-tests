const basePage = require('./basePage');

class politicsPage extends basePage {
  constructor() {
    super();

    this.headerTitle = 'h1';
    this.subHeading = 'h1 + p';
    // this.articleCards = ".MuiGrid-container > .MuiGrid-item:first-child > div > div:first-child[class*='MuiCard-root']" // not worked
    this.articleCards = 'div[class*="MuiGrid-item"] div[class*="MuiCard-root"]';
    this.articleCard = '[class*="MuiPaper-root"][class*="MuiCard-root"]';
    this.articleTitle = `${this.articleCard} [class*="MuiTypography-h5"]`;
    this.articleImage = "img[src*='media-library']";
    this.articleTag = "a[href*='/tag/']";
    this.articleAuthor = "a[href^='/author/']";
    this.articleDate = "a[href^='/author/'] ~ div > div:last-child";
  }

  visit() {
    cy.visit('/current-affairs/tag/politics');
    return this;
  }

  getHeaderTitle() {
    return cy.get(this.headerTitle);
  }

  getSubHeaderDescription() {
    return cy.get(this.subHeading);
  }

  clickTagLink() {
    cy.get('a[href*="/current-affairs/tag/"]').safeClick();
    return this;
  }

  getArticleCards() {
    return cy.get(this.articleCards);
  }

  getArticleCard() {
    return cy.get(this.articleCard);
  }

  getArticleTitle() {
    return cy.get(this.articleTitle);
  }

  getArticleImage() {
    return cy.get(this.articleImage);
  }

  getArticleTag() {
    return cy.get(this.articleTag);
  }

  getArticleAuthor() {
    return cy.get(this.articleAuthor);
  }

  getArticleDate() {
    return cy.get(this.getArticleDate);
  }

}

module.exports = politicsPage;
