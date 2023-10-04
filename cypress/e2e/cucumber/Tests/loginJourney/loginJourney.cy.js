import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import article from '../../pages/articlePage';
import bar from '../../pages/topBar';
import login from '../../pages/loginPage';
import generic from '../../pages/genericObjects';

Given('the user navigates to {string}', (url) => {
  generic.navigate(url);
});

When('the user clicks the green agree button', () => {
  article.acceptPrivacyAgreement();
});

Then('the {string} article should be displayed', (title) => {
  article.title().should('contain', title);
});

When('the user clicks the log in button', () => {
  bar.loginButton().click();
});

Then('the user is sent to {string}', (address) => {
  generic.currentUrl().should('contains', address);
});

When('the user enters a valid username and valid password', (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterCredentials(element.username, element.password);
  });
});

When('the user clicks the submit button', () => {
  login.submitButton().should('not.be.disabled').click();
});

Then('the users name should show {string}', (username) => {
  bar.userButton().should('contain', username);
});

Then('the loggedIn cookie should be {string}', (value) => {
  generic.loggedInCookie().should('have.property', 'value', value);
});