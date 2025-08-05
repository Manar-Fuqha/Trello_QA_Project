Feature: Create Card Functionality

    Scenario: Validate thst the user can create a card
    Given The user navigated to board 
    When Clicks on Add a card button 
    And Types card title in card title input field
    And Clicks on Add Card button
    Then The card should be created successfully