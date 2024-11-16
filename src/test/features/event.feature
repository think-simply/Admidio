Feature: Event Functionality

  Background:
    Given User navigates to page

  @high 
  Scenario: EV_01: Create a new event
    When User clicks on Events on left menu
    And User create a new event
    Then The new event has been created successfully

  @high
  Scenario: EV_02: Copy a new event
    When User clicks on Events on left menu
    And User makes a copy of a new event
    Then The new event has been created successfully

  @high 
  Scenario: EV_03: Update an event
    When User clicks on Events on left menu
    And User updates an event
    Then The event has been updated successfully

  @high 
  Scenario: EV_04: Delete an event
    When User clicks on Events on left menu
    And User removes an event
    Then The event has been removed successfully

  @high 
  Scenario: EV_05: Create a new calendar
    When User clicks on Events on left menu
    And User creates a new calendar
    Then The new calendar has been created successfully

  @high 
  Scenario: EV_06: Edit a calendar
    When User clicks on Events on left menu
    And User updates a new calendar
    Then The calendar has been updated successfully

  @high 
  Scenario: EV_07: Remove a calendar
    When User clicks on Events on left menu
    And User removes a new calendar
    Then The calendar has been deleted successfully

