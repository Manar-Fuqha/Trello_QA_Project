Feature: Move Template To Any List


    Scenario: Validate that the user can move template to any list 
    Given The user navigated to the board
    When Clicks on template
    And Clicks on Action button
    And Clicks on Move Option
    And Clicks on List select options
    And Select the New List 
    And Clicks on Move button 
    Then  The template should shown in new List 
    And the template should removed from old list 
    
