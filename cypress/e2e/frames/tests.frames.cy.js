///<reference types="cypress-iframe" />

describe('frame test suite', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('urlFrame'));
    })

    it('test loading frame', () => {
        cy.frameLoaded('frame[src="/frame_top"]').should('be.visible')
        cy.iframe('frame[src="/frame_top"]')
            .find('frame[src="/frame_middle"]')
            .should('exist')

    })

    it('test loading frame - log element', () => {
        cy.frameLoaded('frame[src="/frame_top"]')
        cy.iframe('frame[src="/frame_top"]')
        .should('exist')
        .find('frame[src="/frame_middle"]')
        .then(frameMiddle => {
            cy.wrap(frameMiddle.contents())
            .find('#content')
            .should('exist')
            .contains('MIDDLE')
            .invoke('text')
            .then(text => {
                cy.log(text)
            })
        })
    })
})


