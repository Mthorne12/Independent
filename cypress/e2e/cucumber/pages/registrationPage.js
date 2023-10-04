class registrationPage{
    enterEmail(email){
        cy.get('#reg-form-_').clear().type(email, { force: true });
    };

    clearEmail(){
        cy.get('#reg-form-_').clear();
    };

    enterFirstName(firstName){
        cy.get('#reg-form-firstName').clear().type(firstName, { force: true });
    };

    clearFirstName(){
        cy.get('#reg-form-firstName').clear();
    };

    enterLastName(lastName){
        cy.get('#reg-form-lastName').clear().type(lastName, { force: true });
    };

    clearLastName(){
        cy.get('#reg-form-lastName').clear();
    };

    enterBirthYear(birthYear){
        cy.get('#reg-form-birthYear').select(birthYear);
    };

    enterPassword(password){
        cy.get('#reg-form-password').clear().type(password, { force: true });
    };

    enterOffersPreference(offers){
        if(offers){
            cy.get('[for="form-receive-offer"]').click();
        };
    };

    createMyAccountButton(){
        return cy.get('[name="register-form-submit"]');
    };

    optOutPolicyContainer(){
        return cy.get('.opt-out-policy-container');
    };

    optOutPolicyLabel(){
        return cy.get('.opt-out-policy-label');
    };

    errorMessages(){
        return cy.get('.csr-error-message');
    };
};
const registration = new registrationPage();
export default registration;