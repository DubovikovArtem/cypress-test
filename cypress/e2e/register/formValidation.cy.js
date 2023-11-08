describe("Test registration form", () => {
    beforeEach(() => {
        cy.visit("/auth/register");
    });
    it('test user registration', () => {
        cy.get('#input-email').as('email').click();
        cy.get('body').click();
        cy.get('@email').next().should('have.text', ' Email is required! ');

        cy.get('#input-password').as('password').click();
        cy.get('@email').click();
        cy.get('@password').next().should('have.text', ' Password is required! ');
        
        cy.get('#input-re-password').as('re-password').click();
        cy.get('@email').click();
        cy.get('@re-password').next().should('have.text', ' Password confirmation is required! ');
    });
});