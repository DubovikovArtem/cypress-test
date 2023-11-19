export class FormPage {
    usernameInput() {
        return cy.get('.form-horizontal #inputEmail3');
    }
    passwordInput() {
        return cy.get('.form-horizontal #inputPassword3');
    }
    rememberMeCheckbox() {
        return cy.get('.checkbox .custom-checkbox');
    }
    signInButton() {
        return cy.get('div:nth-child(3) > div > nb-card > nb-card-body > form > div:nth-child(4) > div > button');
    }
}
