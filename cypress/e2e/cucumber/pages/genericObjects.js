import article from "./articlePage";
import login from "./loginPage";

class genericObjects{
    login(){
        cy.visit('https://www.independent.co.uk/login');
        article.acceptPrivacyAgreement();
        login.enterCredentials('cypress.test@gmail.com', 'Qwerty12345');
        login.submitButton().click();
        this.currentUrl().should('eq', 'https://www.independent.co.uk/?loginSuccessful')
        //This method should generate an authentication token using a custom cypress command to be used to navigate to a page as a logged in user without essentially repeating the login test.
        //Without knowing how the login process is implemented on the backend, this method is very difficult to write.
        //Concidering the scope of these tests i have instead repeated a cutdown version of the login test (which i would not normally recommend).
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