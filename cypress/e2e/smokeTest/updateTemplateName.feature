Feature: Update Name of Template

    Scenario: Validate that the user can update the name of template
    Given The user navigated to the board
    When  clicks on template  
    And  edit template name 
    Then The template name should be changed