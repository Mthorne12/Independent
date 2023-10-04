import article from './articlePage';
import login from './loginPage';

class genericObjects{
    login(){
        cy.visit('https://www.independent.co.uk/login');
        article.acceptPrivacyAgreement();
        login.enterEmail('cypress.test@gmail.com');
        login.enterPassword('Qwerty12345');
        login.submitButton().click();
        this.currentUrl().should('eq', 'https://www.independent.co.uk/?loginSuccessful');
    }

    navigate(url){
        cy.visit(url);
    };

    currentUrl(){
        return cy.url({timeout: 10000});
    };

    loggedInCookie(){
        return cy.getCookie('loggedIn');
    };
};
const generic = new genericObjects();
export default generic;