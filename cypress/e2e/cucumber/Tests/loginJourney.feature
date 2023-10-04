Feature: Login Journey

  Background: A user can go to the login page from an article, sign in, then end up back on the original article

  Scenario: Login
    Given the user navigates to 'https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html'
    When the user clicks the green agree button
    Then the 'The Nintendo Switch 2 could launch in 2024, and the price may have already leaked' article should be displayed
    When the user clicks the log in button
    Then the user is sent to 'https://www.independent.co.uk/login'
    When the user enters a valid username and valid password
      | username               | password    |
      | cypress.test@gmail.com | Qwerty12345 |
    And the user clicks the submit button
    Then the user is sent to 'https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html'
    And the 'The Nintendo Switch 2 could launch in 2024, and the price may have already leaked' article should be displayed
    And the users name should show 'A. QA Test'
    And the loggedIn cookie should be 'true'
