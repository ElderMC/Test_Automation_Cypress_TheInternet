describe('Login Validation Test Suite', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('urlLogin'));
  })

  it('login validation with valid data', () => {
    cy.Login(Cypress.env('corretUser'), Cypress.env('corretPassword'));
    cy.contains('#flash', 'You logged into a secure area!').should('be.visible');
  })

  it('login failure validation with invalid user', () => {
    cy.Login(Cypress.env('errorUser'), Cypress.env('corretPassword'))
    cy.contains('#flash', 'Your username is invalid!').should('be.visible');
  })

  it('login failure validation with invalid password', () => {
    cy.Login(Cypress.env('corretUser'), Cypress.env('errorPassword'))
    cy.contains('#flash', 'Your password is invalid!').should('be.visible');
  })

})
