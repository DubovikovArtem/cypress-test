// import { Registration } from '../../pages/registrationPage';

// let registration = new Registration();
// let selectors = [
//     registration.getEmail(),
//     registration.getPassword(),
//     registration.getRePassword()
// ];

// let text = [
//     ' Email is required! ',
//     ' Password is required! ',
//     ' Password confirmation is required! '
// ]

// function verifyFormElements(selector, errorMessage) {
//     selector.as('selector').click();
//     registration.getTitle().click();
//     cy.get('@selector').next().should('have.text', errorMessage);
// }

// export function checkMsg() {
//     verifyFormElements(selectors[0], text[0]);
//     verifyFormElements(selectors[1], text[1]);
//     verifyFormElements(selectors[2], text[2]);
// }