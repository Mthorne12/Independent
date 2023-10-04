class topBar{
    loginButton(){
        return cy.contains('.register-login-link', 'Log in / Register');
    };

    userButton(){
        return cy.get('#open-drawer-button');
    };
};
const bar = new topBar();
export default bar;