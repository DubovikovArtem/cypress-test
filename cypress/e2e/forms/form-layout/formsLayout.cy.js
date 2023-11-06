describe("Test form", () => {
    it('test horizontal form', () => {
        cy.visit("/pages/forms/layouts");
        cy.get('.form-horizontal #inputEmail3').clear().type('sometext@test.ua');
        cy.get('.form-horizontal #inputPassword3').clear().type('passwd');
        cy.get('.checkbox .custom-checkbox').click();
        cy.get('div:nth-child(3) > div > nb-card > nb-card-body > form > div:nth-child(4) > div > button').click();
    });
});