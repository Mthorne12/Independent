class loginPage{
    enterCredentials(username, password){
        cy.get('#login-form-email').type(username);
        cy.get('#login-form-password').type(password);
    };

    submitButton(){
        return cy.get('[name="submitBtn"]');
    };
};
const login = new loginPage();
export default login;