import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import bar from '../../pages/topBar';
import generic from '../../pages/genericObjects';
import profile from '../../pages/profilePage';
import registration from '../../pages/registrationPage';
import login from '../../pages/loginPage';
import offer from '../../pages/premiumOffer';
import thankyou from '../../pages/thankyouPage';

Before(() => {
  cy.intercept('POST', 'https://www.independent.co.uk/internal-api/registration/verify?__amp_source_origin=https://www.independent.co.uk').as('verifyData');
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

When('the user clicks the register button', () => {
  login.registerButton().click();
});

When('the user enters an invalid registration email address', (datatable) => {
  datatable.hashes().forEach((element) => {
    registration.enterEmail(element.email);
    cy.wait('@verifyData');
    registration.errorMessages().should('contain', 'Please enter a valid email address');
  });
  registration.clearEmail();
});

When('the user enters a unique registration email address', () => {
  let suffix = 0;
  cy.readFile('cypress/e2e/cucumber/tests/global.json').then(global => {
    cy.log(global.emailIterator);
    suffix = parseInt(global.emailIterator) + 1;
    registration.enterEmail('cypress.interview' + suffix + '@gmail.com');
    cy.writeFile('cypress/e2e/cucumber/tests/global.json', {"emailIterator": suffix});
  })
});

When('the Create My Account button is activated', () => {
  registration.createMyAccountButton().should('be.enabled');
});

When('the user clicks the Create My Account button', () => {
  registration.createMyAccountButton().click();
});

When('the user enters valid registration credentials', (datatable) => {
  datatable.hashes().forEach((element) => {
    registration.enterFirstName(element.firstname);
    registration.enterLastName(element.lastname);
    registration.enterBirthYear(element.yearofbirth);
    registration.enterPassword(element.password);
    registration.enterOffersPreference(element.offer);
  });
});

When('the user clicks the Opt-out-policy', () => {
  registration.optOutPolicyLabel().click();
});

When('the user clicks the logout button', () => {
  profile.logoutButton().click();
});

Then('the Create My Account button is disabled', () => {
  registration.createMyAccountButton().should('be.disabled');
});

Then('the user is sent to {string}', (address) => {
  generic.currentUrl().should('contains', address);
});

Then('the users name should show {string}', (username) => {
  bar.userButton().should('contain', username);
});

Then('the Log in button is shown', () => {
  bar.loginButton().should('contain', 'Log in / Register');
});

Then('the Opt-out-policy expands', () => {
  registration.optOutPolicyContainer().contains('You can opt-out at any time by signing in to your account to manage your preferences. Each email has a link to unsubscribe.').should('be.visible');
});

Then('the Opt-out-policy collapses', () => {
  registration.optOutPolicyContainer().contains('You can opt-out at any time by signing in to your account to manage your preferences. Each email has a link to unsubscribe.').should('not.be.visible');
});

Then('the premium offer pop up is shown', () => {
  offer.close();
});

When('the user enters a resgistration firstname with special characters', () => {
  registration.enterFirstName('Cy^press');
  cy.wait('@verifyData');
});

When('the user enters a resgistration lastname with special characters', () => {
  registration.enterLastName('Int&rview');
  cy.wait('@verifyData');
});

Then('an error is shown below the firstname box', () => {
  registration.errorMessages().should('contain', 'Special characters aren’t allowed');
  registration.clearFirstName();
});

Then('an error is shown below the lastname box', () => {
  registration.errorMessages().should('contain', 'Special characters aren’t allowed');
  registration.clearLastName();
});

When('the user enters an invalid registration password', (datatable) => {
  datatable.hashes().forEach((element) => {
    registration.enterPassword(element.password);
    cy.wait('@verifyData');
    registration.errorMessages().should('contain', 'Must be at least 6 characters, include an upper and lower case character and a number');
  });
  registration.clearEmail();
});

When('the user enters an existing registration email address', () => {
  registration.enterEmail('cypress.test@gmail.com');
  cy.wait('@verifyData');
});

Then('a password box is shown', () => {
  login.passwordBox().should('be.visible');
});

When('the user enters the correct password', () => {
  login.enterPassword('Qwerty12345');
});

When('the user clicks the Login button', () => {
  login.submitButton().click();
});

Then('the thankyou message is displayed', () => {
  thankyou.thanyouMessage().should('contain', 'Thanks cypress for completing your registration. A confirmation email from The Independent has been sent to cypress.interview5@gmail.com. Double check your spam folder just in case. You can edit your personal details and customise your preferences by accessing your account. You are currently logged into your account, click here to log out.');
});

When('the user clicks the account link', () => {
  thankyou.yourAccountLink().click();
});