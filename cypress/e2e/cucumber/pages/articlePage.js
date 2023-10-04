class articlePage{
    acceptPrivacyAgreement() {
        cy.get('[title="SP Consent Message"]').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
            .should('contain', 'We need your consent so that we and our trusted partners can store and access cookies, unique identifiers, personal data, and information on your browsing behaviour on this device. This only applies to independent.co.uk. You can change your preferences at any time by clicking on ‘Privacy options’ located at the bottom of any page. You don’t have to agree, but some personalised content and advertising may not work if you don’t. We and our partners use your data for the following purposes:')
            .find('[title="AGREE"]').click();
        });
    };

    title() {
        return cy.get('#articleHeader');
    }
};
const article = new articlePage();
export default article;