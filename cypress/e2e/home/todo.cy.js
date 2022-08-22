/// <reference types="cypress" />

describe('test todo crud operation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays three todo items by default', () => {
    cy.get('[data-testid="todoList"]').should('have.length', 3);
  });
  it('can add new todo items', () => {
    const newItem = 'Hello World!';
    cy.get('[data-testid="inputTask"]').type(`${newItem}{enter}`);
    cy.get('[data-testid="addTaskButton"]').click();
    cy.get('[data-testid="todoList"]').should('have.length', 4).last().should('have.text', newItem);
  });
  it('can delete todo', () => {
    cy.get('[data-testid="todoCheckbox"]').eq(1).click();
    cy.get('[data-testid="todoList"]').should('have.length', 2);
    cy.get('[data-testid="todoList"]').exp;
  });
});
