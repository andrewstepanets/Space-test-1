describe('Test Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the cheapest 5 items by default', () => {
    cy.contains('Item A').should('be.visible');
    cy.contains('Item B').should('be.visible');
    cy.contains('Item G').should('be.visible');
    cy.contains('Item D').should('be.visible');
    cy.contains('Item C').should('be.visible');
    cy.contains('Item F').should('not.exist');
  });

  it('toggles between cheapest 5 and all items', () => {
    cy.contains('Item F').should('not.exist');
    cy.contains('Show All Items').click();
    cy.contains('Item F').should('be.visible');
    cy.contains('Item H').should('be.visible');
    cy.contains('Show Cheapest 5').click();
    cy.contains('Item F').should('not.exist');
    cy.contains('Item H').should('not.exist');
  });

  it('filters items by name', () => {
    cy.get('input[placeholder="Filter by name"]').type('Item A');
    cy.contains('Item A').should('be.visible');
    cy.contains('Item B').should('not.exist');
  });

  it('clears the filter when toggling between views', () => {
    cy.get('input[placeholder="Filter by name"]').type('Item A');
    cy.contains('Item A').should('be.visible');
    cy.contains('Show All Items').click();
    cy.get('input[placeholder="Filter by name"]').should('have.value', '');
    cy.contains('Item A').should('be.visible');
    cy.contains('Item F').should('be.visible');
  });

  it('displays "No items found" when no matches exist', () => {
    cy.get('input[placeholder="Filter by name"]').type('Nonexistent Item');
    cy.contains('No items found').should('be.visible');
    cy.contains('Item A').should('not.exist');
    cy.contains('Item B').should('not.exist');
  });
});
