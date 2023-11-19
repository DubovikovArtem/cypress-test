
export class ModOverlaysDialog {
        dialogNameReturnResultFromDialog() {
                return cy.get('div:nth-child(5) > nb-card > nb-card-body > button');
        }
        modalWindow() {
                return cy.get('nb-dialog-container .ng-star-inserted');
        }
        modalWindowTitle() {
                return cy.get('nb-dialog-container .ng-star-inserted nb-card-header');
        }
        modalWindowCancelButton() {
                return cy.get('nb-dialog-container .ng-star-inserted .cancel');
        }
        modalWindowSubmitButton() {
                return cy.get('nb-dialog-container .ng-star-inserted .status-success');
        }
}