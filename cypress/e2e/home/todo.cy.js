/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // TODO: Refactoring
  it('displays two todo items by default', () => {
    cy.get('li').should('have.length', 3)
  })
  it('can add new todo items', () => {
    const newItem = 'Hello World!'
    cy.get('input[type=text]').type(`${newItem}{enter}`);
    cy.get('button').click();
    cy.get('li').should('have.length', 4).last().should('have.text', newItem)
  })
})
