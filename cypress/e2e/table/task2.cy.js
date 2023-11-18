
let date = ["17", "Artem", "Dubovikov", "@artem", "test@test.test", "23"];
let keys = ["firstName", "lastName", "username", "email", "age"];
describe("Test table", () => {
    beforeEach(() => {
        cy.visit("/pages/tables/smart-table");
    });

    it('test update some row by id', () => {
        findItemById(date[0]);
        cy.get('.nb-edit ').click();
        editElementFields(keys, date);
        findItemById('11');
        findItemById(date[0]);
        checkCreatedItem(date);
    });
});

function editElementFields(selectorsAarr, dateArr) {
    let i = 0;
    let j = 1;
    do {
        cy.get(`input[ng-reflect-name="${selectorsAarr[i]}"]`).click().clear().type(dateArr[j]);
        i++;
        j++;
    } while (i < selectorsAarr.length );
    cy.get('i.nb-checkmark').click();
}

function checkCreatedItem(arr) {
    let i = 2;
    let j = 0;
    do {
        cy.get(`table > tbody > tr > td:nth-child(${i})`).should('have.text', arr[j]);
        i++;
        j++;
    } while (i <= arr.length + 1)
}

function findItemById(id) {
    cy.get('[placeholder="ID"]').clear().type('10').clear().type(id);
    cy.wait(2000);
}