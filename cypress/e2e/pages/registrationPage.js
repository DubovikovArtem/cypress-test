export class Registration {
    getTitle() {
        return cy.get('#title');
    }
    getName() {
        return cy.get('label[for="input-name"]')
    }
    getEmail() {
        return cy.get('label[for="input-email"]')
    }
    getPassword() {
        return cy.get('label[for="input-password"]')
    }
    getRePassword() {
        return cy.get('label[for="input-re-password"]')
    }
}
