Feature: Logout Journey

  Background: A user can go through the logout process

  Scenario: Logout
    Given the user logs in
    Then the users name should show "A. QA Test"
    When the user clicks their name in the top right
    Then the user is sent to "https://www.independent.co.uk/profile"
    When the user clicks the logout button
    Then the user is sent to "https://www.independent.co.uk"
    And the Log in button is shown
