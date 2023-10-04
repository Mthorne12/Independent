import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import bar from '../../pages/topBar';
import generic from '../../pages/genericObjects';
import profile from '../../pages/profilePage';
import offer from '../../pages/premiumOffer';

Before(() => {
  cy.intercept('*', { log: false });
});

Given('the user logs in', () => {
  generic.login();
});

Given('the user navigates to {string}', (url) => {
  generic.navigate(url);
});

When('the user clicks their name in the top right', () => {
  bar.userButton().click();
});

When('the user clicks the logout button', () => {
  profile.logoutButton().click();
});

Then('the user is sent to {string}', (address) => {
  generic.currentUrl().should('contains', address);
});

Then('the users name should show {string}', (username) => {
  bar.userButton().should('contain', username);
});

Then('the preimium offer screen should show', () => {
  offer.close();
});

Then('the Log in button is shown', () => {
  bar.loginButton().should('contain', 'Log in / Register');
});

Then('the premium offer pop up is shown', () => {
  offer.close();
});