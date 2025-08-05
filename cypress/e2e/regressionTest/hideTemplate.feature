Feature: Hide Template From List

    Scenario: Vlaidate that the user can hide template from list
    Given The user navigated to the board
    When Clicks on actions button
    And clicks on hide from list
    Then show in list button should shown
    And The template should be hidden from list