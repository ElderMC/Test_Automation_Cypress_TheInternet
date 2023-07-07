describe('screen element loading test', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/2');
    })

    it('screen element validation test waiting for loading', () => {
        cy.contains('h4', 'Element rendered after the fact').should('be.visible');
        cy.contains('button', 'Start').click();
        cy.wait(7000);
        cy.contains('h4', 'Hello World').should('be.visible');
    });
})