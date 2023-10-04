import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import article from '../../pages/articlePage';
import bar from '../../pages/topBar';
import login from '../../pages/loginPage';
import generic from '../../pages/genericObjects';

Before(() => {
  cy.intercept('*', { log: false });
});

Given('the user navigates to {string}', (url) => {
  generic.navigate(url);
});

When('the user clicks the green agree button', () => {
  article.acceptPrivacyAgreement();
});

When('the user clicks the log in button', () => {
  bar.loginButton().click();
});

When('the user enters a valid username and valid password', (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterEmail(element.username);
    login.enterPassword(element.password);
  });
});

When('the user clicks the submit button', () => {
  login.submitButton().should('not.be.disabled').click();
});

Then('the {string} article should be displayed', (title) => {
  article.title().should('contain', title);
});

Then('the user is sent to {string}', (address) => {
  generic.currentUrl().should('contains', address);
});

Then('the users name should show {string}', (username) => {
  bar.userButton().should('contain', username);
});

Then('the loggedIn cookie should be {string}', (value) => {
  generic.loggedInCookie().should('have.property', 'value', value);
});