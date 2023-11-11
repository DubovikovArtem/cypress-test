
let date = ["111", "Artem", "Dubovikov", "@artem", "test@test.test", "23"];
const ID = "17";
describe("Test table", () => {
    beforeEach(() => {
        cy.visit("/pages/tables/smart-table");
    });

    it('test find row by ID ', () => {
        cy.get('thead tr a .nb-plus').click();
        typeValue(date)
        //cy.get('thead > tr:nth-child(3) > td:nth-child(1) .nb-checkmark').click();

        findItemById(date[0]);
        checkCreatedItem(date);

    });
});

function typeValue(arr) {
    let i = 2;
    let j = 0;
    do {
        cy.get(`thead > tr:nth-child(3) > td:nth-child(${i})`).type(arr[j]);
        i++;
        j++;
    } while (i <= arr.length + 1);
    cy.get('thead > tr:nth-child(3) > td:nth-child(1) .nb-checkmark').click();
}

function checkCreatedItem(arr) {
    cy.get('table > tbody > tr > td:nth-child(7)');
    let i = 2;
    let j = 0;
    do {
        cy.get(`table > tbody > tr > td:nth-child(${i})`).should('have.text', arr[j]);
        i++;
        j++;
    } while (i <= arr.length + 1)
}

function findItemById(id) {
    cy.get('[placeholder="ID"]').type('10').clear().type(id);
    cy.wait(1000);
}