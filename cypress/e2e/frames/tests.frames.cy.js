///<reference types="cypress-iframe" />

describe('frame test suite', () => {

    beforeEach(( )=> {
        cy.visit('https://the-internet.herokuapp.com/nested_frames');
    })

    it('test loading frame', () => {
        cy.frameLoaded('frame[src="/frame_top"]').should('be.visible')
        cy.iframe('frame[src="/frame_top"]')
            .find('frame[src="/frame_middle"]')
            .should('exist')
            
    })

    it.only('test loading frame', () => {
        cy.frameLoaded('[src="/frame_top"]')
        .should('exist')
        .then(() => {
            cy.iframe('[src="/frame_top"]')
            .find('[src="/frame_middle"]')
            .should('exist')
            .then(() => {
                cy.enter('[src="/frame_middle"]').get('#content').find('div').should('exist')
            })
        })
    })
               
});

