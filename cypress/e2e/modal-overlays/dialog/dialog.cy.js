
describe("Test dialog", () => {
    it('test dialog', () => {
        cy.visit("/pages/modal-overlays/dialog");
        cy.contains('Enter Name').click();
        cy.get('nb-dialog-container .ng-star-inserted').as('modalWindow').should('be.visible');
        cy.get('nb-dialog-container .ng-star-inserted nb-card-header').should('have.text', 'Enter your name');
        cy.get('@modalWindow').should('have.descendants', 'input');
        cy.get('nb-dialog-container .ng-star-inserted .cancel').should('exist')
        cy.get('nb-dialog-container .ng-star-inserted .status-success').should('exist')
    });
});