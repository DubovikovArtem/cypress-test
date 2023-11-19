import {Registration} from '../../pages/registrationPage';

let registration = new Registration();

export function checkHeaders(){
    registration.getTitle().should('have.text', 'Register')
    registration.getName().should('have.text', 'Full name:')
    registration.getEmail().should('have.text', 'Email address:')
    registration.getPassword().should('have.text', 'Password:')
    registration.getRePassword().should('have.text', 'Repeat password:')
}

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

export function verifyFormElements(selector, errorMessage) {
    selector.click();
    registration.getTitle().click();
    selector.next().shouald('have.text', errorMessage);
}

// export function checkMsg() {
//     verifyFormElements(selectors[0], text[0]);
//     verifyFormElements(selectors[1], text[1]);
//     verifyFormElements(selectors[2], text[2]);
// }