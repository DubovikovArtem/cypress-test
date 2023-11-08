const fullName = "testName";
const email = "test@test.com";
const passwd = "1234567890";
describe("Test registration form", () => {
    beforeEach(() => {
        cy.visit("/auth/register");
    });
    it('test user registration', () => {
        //cy.visit("/auth/register");
        cy.get('#input-name').type(fullName)
            .should('have.value', fullName);
        cy.get('#input-email').type(email)
            .should('have.value', email);
        cy.get('#input-password').type(passwd)
            .should('have.value', passwd);
        cy.get('#input-re-password').type(passwd)
            .should('have.value', passwd);

        //это другая версия для проверки что чекбокс не чекнут
        //cy.get('label > span.custom-checkbox').as('checkbox').should('have.class', 'custom-checkbox');
        //cy.get('@checkbox').click();

        //---> it does not work!! Why?? cy.get('form > div.form-control-group.accept-group > nb-checkbox').should('have.attr', 'ng-reflect-model', 'false');
        cy.get('label > span.custom-checkbox').click();
        //это другая версия для проверки чекнут ли чекбокс
        //cy.get('@checkbox').should('have.class', 'custom-checkbox checked');
        cy.get('form > div.form-control-group.accept-group > nb-checkbox').should('have.attr', 'ng-reflect-model', 'true');
        //проверка что иконки есть
        cy.get('nb-register > section.links > div > a.github.with-icon').should('be.visible');
        cy.get(' nb-register > section.links > div > a.facebook.with-icon').should('be.visible');
        cy.get(' nb-register > section.links > div > a.twitter.with-icon').should('be.visible');

        cy.get('nb-register > form > button').click();
    });
});