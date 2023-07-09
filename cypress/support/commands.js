
Cypress.Commands.add('Login', (username, password) => {
    cy.contains('h2', 'Login Page').should('be.visible');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('button', 'Login').click();
})