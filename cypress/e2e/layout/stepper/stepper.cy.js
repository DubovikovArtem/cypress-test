describe("Test step content", () => {
    it('test step content', () => {
        cy.visit("/pages/layout/stepper");
        cy.get('ngx-stepper > nb-card .step-content  .ng-star-inserted').as('position');
        cy.get('@position').first().should('have.text', 'Step content #1');
        cy.get('@position').last().click();
        cy.get('@position').first().should('have.text', 'Step content #2');
        cy.get('@position').last().click();
        cy.get('@position').first().should('have.text', 'Step content #3');
        cy.get('@position').last().click();
        cy.get('@position').first().should('have.text', 'Step content #4');
    });
});
//test