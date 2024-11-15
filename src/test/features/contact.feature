Feature: Contact Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: TC_39: Create new contact
    When User clicks on Contacts on left menu
    And User creates a new contact
    Then New role has been created successfully

  @high
  Scenario: TC_40: Update a contact
    When User clicks on Contacts on left menu
    And User updates a new contact
    Then The contact has been updated successfully

  @high
  Scenario: TC_41: Delete a contact
    When User clicks on Contacts on left menu
    And User removes a new contact
    Then The contact has been deleted successfully

  @high
  Scenario: TC_42: Import contact
    When User clicks on Contacts on left menu
    And User imports a contact file
    Then The contact file has been imported successfully

  @high
  Scenario: TC_43: Create a profile field
    When User clicks on Contacts on left menu
    And User create a profile field
    Then The new profile field has been created successfully

  @high
  Scenario: TC_44: Update a profile field
    When User clicks on Contacts on left menu
    And User updates a profile field
    Then The profile field has been updated successfully

  @high
  Scenario: TC_45: Delete a profile field
    When User clicks on Contacts on left menu
    And User removes a profile field
    Then The profile field has been deleted successfully

  @high
  Scenario: TC_46: Create a new profile category
    When User clicks on Contacts on left menu
    And User create a new profile category
    Then The profile field category has been created successfully

  @high @now
  Scenario: TC_47: Update a new profile category
    When User clicks on Contacts on left menu
    And User updates a new profile category
    Then The profile field category has been updated successfully

  @high @now
  Scenario: TC_48: Delete a profile category
    When User clicks on Contacts on left menu
    And User removes a profile category
    Then The profile field category has been removed successfully
