Feature: Login Journey

  A user can go to the login page from an article, sign in, then end up back on the original article

  Scenario: Login
    Given the user navigates to "https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html"
    When the user clicks the green agree button
    Then the "The Nintendo Switch 2 could launch in 2024, and the price may have already leaked" article should be displayed