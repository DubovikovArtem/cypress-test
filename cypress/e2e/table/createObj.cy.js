let firstColumnValues = []; //пробовал записать в массив
let mainObj = {};
const ID = "17";
describe("Test table", () => {
    beforeEach(() => {
        cy.visit("/pages/tables/smart-table");
    });

    it('test find row by ID ', () => {
        cy.get('[placeholder="ID"]').type('10').clear().type(ID);
        cy.wait(1000);

        cy.get('tbody tr').then((elements) => {
            let trLength = elements.length;
            if (trLength === 1) {
                cy.get('tbody tr').find('td').then((elements) => {
                    let tdLength = elements.length;
                    if (tdLength === 1) {
                        let notFoundText = elements.text();
                        //console.log("notFoundText: " + notFoundText);
                    } else {
                        findRowById(ID, objectCreation);
                    }
                });
            } else {
                findRowById(ID, objectCreation);
            }
        });

        //??? я не могу записать обьект mainObj за пределами теста что бы в дальнейшем его использовать???  console.log("after test ",mainObj);

        function findRowById(id, call_back) {
            let obj = {};
            cy.get('tbody tr').find('td').then((elements) => {
                let tdLength = elements.length;
                //console.log(tdLength);
                for (let i = 1; i < tdLength;) {
                    let tdValue = elements.eq(i).text();
                    if (tdValue !== id) { // эта штука не работает так как не понимаю как остаться на той строке которую выбрал (если строка как минимум 2)
                        i = i + 7;
                    } else {
                        obj = call_back();
                        i++;
                        console.log(obj);
                        console.log(obj.id);
                    }
                }
            });
        }

        function objectCreation() {
            let obj = {};
            for (let i = 1; i <= 6; i++) {
                cy.get('thead tr').find('th').eq(i).then(($el) => {
                    let key = $el.text().trim();
                    switch (key) {
                        case "E-mail":
                            key = "eMail";
                            break;
                        case "First Name":
                            key = "firstName";
                            break;
                        case "Last Name":
                            key = "lastName";
                            break;
                        case "ID":
                            key = "id";
                            break;
                        case "Age":
                            key = "age";
                            break;
                        case "Username":
                            key = "username";
                            break;
                    }
                    //console.log(key);
                    obj[key] = "test" + i;
                    cy.get('tbody tr').find('td').eq(i).then(($el) => {
                        let value = $el.text();
                        //console.log(value);
                        obj[key] = value;
                    });
                });
            }
            return obj;
        }

        //-----------------------------------------------------
        //to array
        // for (let i = 1; i <= 6; i++) {
        //     cy.get('thead tr').find('th').eq(i).then(($el) => {
        //         let key = $el.text();
        //         cy.log(key);
        //         firstColumnValues.push(key);
        //         cy.log(firstColumnValues);
        //     });
        // }
        //-----------------------------------------------------

        // <-- to obj -->
        // for (let i = 1; i <= 6; i++) {
        //     cy.get('thead tr').find('th').eq(i).then(($el) => {
        //         let key = $el.text();
        //         // cy.log(key);
        //         mainObj[key] = "test" + i;
        //         // cy.log(mainObj);

        //         // for (let key in mainObj) {
        //         //     cy.log('obj key == ' + mainObj[key]);
        //         // }
        //     });
        // }

    });
});