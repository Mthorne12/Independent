class premiumOffer{
    close() {
        cy.wait(5000);
        cy.get('*[id^="offer"]', {timeout: 10000}).then(($iframe) => {
            const $body = cy.wrap($iframe.contents().find('body'));
            $body.find('[ng-click="close()"]').click({timeout: 10000});
        });
    };
};
const offer = new premiumOffer();
export default offer;