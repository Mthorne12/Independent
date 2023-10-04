class thankyouPage{
    thanyouMessage(){
        return cy.get('#frameInner');
    };

    yourAccountLink(){
        return cy.get('.logout[href="/profile"');
    };
};
const thankyou = new thankyouPage();
export default thankyou;