describe('Login Validation Test Suite', () => {
  
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  })

  it('login validation with valid data', () => {
    cy.contains('h2', 'Login Page').should('be.visible');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('#flash', 'You logged into a secure area!').should('be.visible');
  })

  it('login failure validation with invalid user', () => {
    cy.contains('h2', 'Login Page').should('be.visible');
    cy.get('#username').type('usertest');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('#flash', 'Your username is invalid!').should('be.visible');
  })

  it('login failure validation with invalid password', ()=> {
    cy.contains('h2', 'Login Page').should('be.visible');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('senha123');
    cy.contains('button', 'Login').click();
    cy.contains('#flash', 'Your password is invalid!').should('be.visible');
  })

})
