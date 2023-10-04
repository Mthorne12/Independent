Feature: Registration Journey

  Background: A user can go to the login page and create an account

  Scenario: Registration happy path
    Given the user navigates to 'https://www.independent.co.uk'
    When the user clicks the green agree button
    Then the Log in button is shown
    When the user clicks the log in button
    Then the user is sent to 'https://www.independent.co.uk/login'
    When the user clicks the register button
    Then the user is sent to 'https://www.independent.co.uk/register'
    And the premium offer pop up is shown
    When the user enters a unique registration email address
    And the user enters valid registration credentials
    | firstname | lastname | yearofbirth | password | offer |
    | Cypress | Interview | 1994  | Qwerty12345 | true  |
    Then the Create My Account button is activated
    When the user clicks the Opt-out-policy
    Then the Opt-out-policy expands
    When the user clicks the Opt-out-policy
    Then the Opt-out-policy collapses
    And the user clicks the Create My Account button
    Then the user is sent to 'https://www.independent.co.uk/thank-you'
    And the thankyou message is displayed
    And the users name should show 'C. Interview'
    When the user clicks the account link
    Then the user is sent to 'https://www.independent.co.uk/profile'

    Scenario: Registration sad paths
    Given the user navigates to 'https://www.independent.co.uk'
    When the user clicks the green agree button
    Then the Log in button is shown
    When the user clicks the log in button
    Then the user is sent to 'https://www.independent.co.uk/login'
    When the user clicks the register button
    Then the user is sent to 'https://www.independent.co.uk/register'
    And the premium offer pop up is shown
    When the user enters an invalid registration email address
      | email |
      | @gmail.com  |
      | cypress.interview  |
      | cypress.interview@  |
      | cypress.interview@gmail  |
    Then the Create My Account button is disabled
    When the user enters a resgistration firstname with special characters
    Then an error is shown below the firstname box
    When the user enters a resgistration lastname with special characters
    Then an error is shown below the lastname box
    When the user enters an invalid registration password
      | password |
      | qwerty |
      | QWERTY  |
      | 12345  |
      | Qwert  |
    Then the Create My Account button is disabled

    Scenario: Registration with existing email address
    Given the user navigates to 'https://www.independent.co.uk'
    When the user clicks the green agree button
    Then the Log in button is shown
    When the user clicks the log in button
    Then the user is sent to 'https://www.independent.co.uk/login'
    When the user clicks the register button
    Then the user is sent to 'https://www.independent.co.uk/register'
    And the premium offer pop up is shown
    When the user enters an existing registration email address
    Then a password box is shown
    When the user enters the correct password
    And the user clicks the Login button
    Then the user is sent to 'https://www.independent.co.uk/'
    And the users name should show 'A. QA Test'
    And the loggedIn cookie should be 'true'