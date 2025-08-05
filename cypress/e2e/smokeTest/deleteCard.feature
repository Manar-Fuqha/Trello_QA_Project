Feature: Delete an Existing Card

    Scenario: Validate that the user can delete an existing card
    Given The user navigated to the board
    When  Clicks on card name
    And Clicks on Archive card
    And Clicks on delete card
    And Clicks on Confirm deletion button
    Then The card should be removed 