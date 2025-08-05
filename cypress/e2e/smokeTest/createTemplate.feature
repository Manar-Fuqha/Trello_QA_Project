Feature: Create New Template

    Scenario: Validate that the user can create new template in an existing board and existing list
    Given The user navigated to the board
    When Clicks on template card icon 
    And Clicks on create new template button
    And Types a template title
    And Clicks on Add button 
    Then The template dialog shoulb be visible and contain template name  
    And the 'This is a Template card.' should be visible
    And the list should contain the template name 