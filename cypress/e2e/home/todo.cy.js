/// <reference types="cypress" />

describe('test todo crud operation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays three todo items by default', () => {
    cy.get('[data-test-id="todoList"]').should('have.length', 3);
  })
  it('can add new todo items', () => {
    const newItem = 'Hello World!'
    cy.get('[data-test-id="inputTask"]').type(`${newItem}{enter}`);
    cy.get('[data-test-id="addTaskButton"]').click();
    cy.get('[data-test-id="todoList"]').should('have.length', 4).last().should('have.text', newItem);
  })
})
