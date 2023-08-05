/// <reference types="Cypress" />

describe('Scroll Test', () => {
    it('Verify Scrolling text', () => {
      cy.visit('https://nisu.azurewebsites.net/webapp/')
      cy.get('marquee').should('have.text','Tell me and I forget, teach me and I may remember, involve me and I learn.')
    })
    it('Verify title', () => {
        cy.visit('https://nisu.azurewebsites.net/webapp/')
        cy.title().should('eq','Nischay')
      })
  })