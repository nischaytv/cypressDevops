/// <reference types="Cypress" />

describe('Header Test', () => {
  it('Verify Main Header', () => {
    cy.visit('https://nisu.azurewebsites.net/webapp/')
    cy.get('h1').should('have.text','Raju')
  })
  it('Verify Second Header', () => {
    cy.visit('https://nisu.azurewebsites.net/webapp/')
    cy.get('h2').should('have.text',' Buy me a coffee and get your name featured above! ')
  })
})