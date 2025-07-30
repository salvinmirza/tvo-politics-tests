

Cypress.Commands.add('safeClick', { prevSubject: 'element' }, (subject) => {
  return cy.wrap(subject)
    .should('be.visible')
    .and('not.be.disabled')
    .click();
})


