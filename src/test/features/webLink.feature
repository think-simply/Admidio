Feature: Web Link Functionality

  Background:
    Given User navigates to page

  @high @now
  Scenario: WEB_01: Create new web category
    When User clicks on Web links on left menu
    And User creates a new web category
    Then New web category has been created successfully

  @high 
  Scenario: WEB_02: Create new web link
    When User clicks on Web links on left menu
    And User creates a new web link
    Then New web link has been created successfully

  @high 
  Scenario: WEB_03: Edit a web link
    When User clicks on Web links on left menu
    And User updates a web link
    Then The web link has been updated successfully

  @high 
  Scenario: WEB_04: Delete a web link
    When User clicks on Web links on left menu
    And User deletes a web link
    Then The web link has been deleted successfully

  @high 
  Scenario: WEB_05: Edit a web category
    When User clicks on Web links on left menu
    And User updates a web category
    Then The web category has been updated successfully

  @high 
  Scenario: WEB_06: Delete a web category
    When User clicks on Web links on left menu
    And User deletes a web category
    Then The web category has been deleted successfully
