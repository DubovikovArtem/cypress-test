import {checkTextOfStepContent} from '../../modules/layoutSyepper'

const arrEl = ['Step content #1', 'Step content #2', 'Step content #3', 'Step content #4'];
describe("Test step content", () => {
    beforeEach(() => {
        cy.visit("/pages/layout/stepper");
    })

    it('test step content', () => {
        checkTextOfStepContent(arrEl);
    });
});