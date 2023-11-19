import { clickEnterName, isModalWindowDisplayed, checkModalWindowTitle, isModalWindowHasInput, checkTheCancelButton, checkTheSubmitButton } from '../../modules/overlaysDialog';

describe("Test dialog", () => {
    it('test dialog', () => {
        cy.visit("/pages/modal-overlays/dialog");
        clickEnterName();
        isModalWindowDisplayed();
        checkModalWindowTitle();
        isModalWindowHasInput();
        checkTheCancelButton();
        checkTheSubmitButton();
    });
});