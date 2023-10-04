class loginPage{

    enterEmail(email){
        cy.get('#login-form-email').type(email, { force: true });
    }

    enterPassword(password){
        cy.get('#login-form-password').type(password, { force: true });
    }

    submitButton(){
        return cy.get('[name="submitBtn"]:enabled');
    };

    registerButton(){
        return cy.get('#registerLink');
    };

    passwordBox(){
        return cy.get('#login-form-password');
    }
};
const login = new loginPage();
export default login;