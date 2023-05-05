// https://docs.cypress.io/api/table-of-contents
/**
 * Validations of the processes that the program must have to fulfill its functionality
 */
describe('Test fors date1, date2 and type clients', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    cy.wait(3000)

    cy.get('#checkin').type('2009-03-16')
    cy.get('#checkout').type('2009-03-18')

    cy.get('#client-type').select('regular')

    cy.get('#search-button').click()

    cy.get('.hotel_card_title').first().contains('Lakewood')
    cy.get('.hotel_card_subtitle').first().contains('Price : $330')

    cy.wait(3000)

    cy.get('#checkin').type('2009-03-26')
    cy.get('#checkout').type('2009-03-28')

    cy.get('#client-type').select('rewards')

    cy.get('#search-button').click()

    cy.get('.hotel_card_title').first().contains('Ridgewood')
    cy.get('.hotel_card_subtitle').first().contains('Price : $240')
  })
})
