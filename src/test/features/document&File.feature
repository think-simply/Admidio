Feature: Document and File Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: TC_39: Create new contact
    When User clicks on Contacts on left menu
    And User creates a new contact
    Then New role has been created successfully

