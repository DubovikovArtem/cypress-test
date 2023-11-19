import { LayoutStepper } from '../pages/pageLayoutStepper';

let layoutStepper = new LayoutStepper();

export function checkTextOfStepContent(arrEl) {
    layoutStepper.stepItemText();
    layoutStepper.stepItemNextButton();

    arrEl.forEach(el => {
        layoutStepper.stepItemText().should('have.text', el);
        el === 'Step content #4' ? 'I finished'
            : layoutStepper.stepItemNextButton().last().click();
    })

}
