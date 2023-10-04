class genericObjects{
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