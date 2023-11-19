import { FormPage } from '../pages/formsPageLayout';

let formPage = new FormPage();

export function inputUsername(username){
    formPage.usernameInput().clear().type(username);
}
export function inputUserPassword(passwd){
    formPage.passwordInput().type(passwd);
}
export function isRememberMe(){
    formPage.rememberMeCheckbox().click();
}
export function clickSignInButton(){
    formPage.signInButton().click();
}