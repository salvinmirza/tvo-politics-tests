const homePage = new (require('./pages/homePage'))();
const readPage = new (require('./pages/readPage'))();
const politicsPage = new (require('./pages/politicsPage'))();
const TestFilters = require('./../support/testFilter');

describe('TVO Politics Page', () => {
  beforeEach(() => {
    // cy.fixture('test-data').as('testData'); // not needed , may be can use it for search functionality
  });

  describe('Header and Page Structure Tests', () => {
    beforeEach(() => {
      politicsPage.visit();
    });

    TestFilters(['SMOKE'], () =>
      it('should render Politics title and description', () => {
        politicsPage.getHeaderTitle().should('be.visible').and('contain.text', 'Politics');
        politicsPage.getSubHeaderDescription().should('contain.text', 'political scene in Ontario');
      })
    );

    TestFilters(['REGRESSION'], () =>
      it('should validate accessibility and layout landmarks', () => {
        //for readability can have some locator here as well. or can move to page classes 
        cy.get('header').should('exist');
        cy.get('footer').should('exist');
        cy.get('a.skipToMain').should('exist');
      })
    );
  });

  describe('Navigation Tests', () => {
    TestFilters(['SMOKE'], () =>
      it('should navigate Home → Read → Politics', () => {
        homePage.visit();
        homePage.clickReadLink();
        readPage.visitPoliticsSection();
        cy.url().should('include', '/politics');
      })
    );

    TestFilters(['SMOKE', 'REGRESSION'], () =>
      it('should navigate directly to Politics page', () => {
        politicsPage.visit();
        cy.url().should('include', '/politics');
      })
    );

    TestFilters(['REGRESSION'], () =>
      it('should validate browser back and forward navigation', () => {
        homePage.visit();
        homePage.clickReadLink();
        readPage.visitPoliticsSection();
        // can put this in commands
        cy.go('back');
        cy.url().should('include', '/current-affairs');
        cy.go('forward');
        cy.url().should('include', '/politics');
      })
    );
  });

  describe('Content Display and Validation Tests', () => {
    beforeEach(() => {
      politicsPage.visit();
    });

    TestFilters(['REGRESSION'], () =>
      it('should validate structure of a single article card', () => {
        homePage.closeStickyNotificationIfVisible();
        politicsPage.getArticleImage().should('be.visible');
        politicsPage.getArticleTitle().should('be.visible');
        politicsPage.getArticleTag().should('exist');
        politicsPage.getArticleAuthor().should('exist');
        politicsPage.getArticleDate().should('exist');
      })
    );

    TestFilters(['REGRESSION'], () =>
      it('should validate tag links like "Analysis" are present and clickable', () => {
        politicsPage.getArticleCard().should('exist');
        politicsPage.clickTagLink();
        cy.url().should('include', '/tag/');
      })
    );

    TestFilters(['REGRESSION'], () =>
      it('should load more articles on scroll', () => {
        homePage.clickLoadMoreBTN();
        politicsPage.getArticleCards().its('length').then((initialCount) => {
          politicsPage.scrollToBottom();
          politicsPage.getArticleCards().its('length').should('be.greaterThan', initialCount);
        });
      })
    );
  });

  describe('Error Handling', () => {
    beforeEach(() => {
      politicsPage.visit();
    });

    TestFilters(['REGRESSION'], () =>
      it('should display 404 page for invalid article URL', () => {
        cy.visit('/article/invalid-article-url', { failOnStatusCode: false });
        cy.get('h1').should('contain', "Whoops! Sorry, we can't find that page.");
      })
    );
  });

});
