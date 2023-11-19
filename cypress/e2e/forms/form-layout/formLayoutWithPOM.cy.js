import {inputUsername, inputUserPassword, isRememberMe, clickSignInButton} from '../../modules/formsLayout';

describe("Test form", () => {
    beforeEach(() => {
        cy.visit("/pages/forms/layouts");
    });

    it('test horizontal form', () => {
        inputUsername('sometext@test.ua');
        inputUserPassword('passwd');
        isRememberMe();
        clickSignInButton();
    });
});