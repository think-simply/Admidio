Feature: Groups and Roles Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: TC_39: Create new contact
    When User clicks on Contacts on left menu
    And User create a new contact
    Then New role has been created successfully
