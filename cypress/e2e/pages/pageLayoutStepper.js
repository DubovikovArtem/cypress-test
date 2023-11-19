export class LayoutStepper {
   
    stepItemText() {
        return cy.get('ngx-stepper > nb-card .step-content  .ng-star-inserted').first();
    }
    stepItemNextButton() {
        return cy.get('ngx-stepper > nb-card .step-content  .ng-star-inserted').last();
    }
}

