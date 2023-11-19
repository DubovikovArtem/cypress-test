import { ModOverlaysDialog } from '../pages/modalOverlaysPageDialog';

let modOverlaysDialog = new ModOverlaysDialog();

export function clickEnterName() {
    modOverlaysDialog.dialogNameReturnResultFromDialog().click();
}
export function isModalWindowDisplayed() {
    modOverlaysDialog.modalWindow().should('be.visible');
}
export function isModalWindowHasInput() {
    modOverlaysDialog.modalWindow().should('have.descendants', 'input');
}
export function checkModalWindowTitle() {
    modOverlaysDialog.modalWindowTitle().should('have.text', 'Enter your name');
}
export function checkTheCancelButton() {
    modOverlaysDialog.modalWindowCancelButton().should('exist');
}
export function checkTheSubmitButton() {
    modOverlaysDialog.modalWindowSubmitButton().should('exist');
}
