describe("Test registration form headers", () => {
    beforeEach(() => {
        cy.visit("/auth/register");
    });
    it('test headers', () => {
        cy.get('#title').should('have.text', 'Register')
        cy.get('label[for="input-name"]').should('have.text', 'Full name:')
        cy.get('label[for="input-email"]').should('have.text', 'Email address:')
        cy.get('label[for="input-password"]').should('have.text', 'Password:')
        cy.get('label[for="input-re-password"]').should('have.text', 'Repeat password:')
    });
});