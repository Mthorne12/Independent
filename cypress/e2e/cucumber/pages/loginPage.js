class loginPage{
    enterCredentials(username, password){
        cy.get('#login-form-email').type(username, { force: true });
        cy.get('#login-form-password').type(password, { force: true });
    };

    submitButton(){
        return cy.get('[name="submitBtn"]');
    };
};
const login = new loginPage();
export default login;