import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("the user navigates to {string}", (url) => {
  cy.visit(url);
});

When("the user clicks the green agree button", () => {
  
});

Then("the {string} article should be displayed", (title) => {
  
})
