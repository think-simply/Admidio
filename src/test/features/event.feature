Feature: Event Functionality

  Background:
    Given User navigates to page

  @high 
  Scenario: TC_15: Create a new event
    When User clicks on Events on left menu
    And User create a new event
    Then The new event has been created successfully

  @high
  Scenario: TC_18: Copy a new event
    When User clicks on Events on left menu
    And User makes a copy of a new event
    Then The new event has been created successfully

  @high 
  Scenario: TC_19: Update an event
    When User clicks on Events on left menu
    And User updates an event
    Then The event has been updated successfully

  @high 
  Scenario: TC_20: Delete an event
    When User clicks on Events on left menu
    And User removes an event
    Then The event has been removed successfully

  @high 
  Scenario: TC_21: Create a new calendar
    When User clicks on Events on left menu
    And User creates a new calendar
    Then The new calendar has been created successfully

  @high 
  Scenario: TC_22: Edit a calendar
    When User clicks on Events on left menu
    And User updates a new calendar
    Then The calendar has been updated successfully

  @high 
  Scenario: TC_23: Remove a calendar
    When User clicks on Events on left menu
    And User removes a new calendar
    Then The calendar has been deleted successfully

