import { checkHeaders } from '../modules/registration/registrationsHeaders';

describe("Test registration form headers", () => {
    beforeEach(() => {
        cy.visit("/auth/register");
    });
    it('test headers', () => {
        checkHeaders();
    });

    it('test form validation', () => {
        //не понял как это переделать под ПОМ так как сайпрес не очень понял что я хочу сделать
           function verifyFormElements(selector, errorMessage) {
            cy.get(selector).as('selector').click();
            cy.get('#title').click();
            cy.get('@selector').next().should('have.text', errorMessage);      
        }
        verifyFormElements('#input-email', ' Email is required! ');
        verifyFormElements('#input-password', ' Password is required! ');
        verifyFormElements('#input-re-password', ' Password confirmation is required! ');
    });
});