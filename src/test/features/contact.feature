Feature: Contact Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: CT_01: Create new contact
    When User clicks on Contacts on left menu
    And User creates a new contact
    Then New contact has been created successfully

  @high
  Scenario: CT_02: Update a contact
    When User clicks on Contacts on left menu
    And User updates a new contact
    Then The contact has been updated successfully

  @high 
  Scenario: CT_03: Delete a contact
    When User clicks on Contacts on left menu
    And User removes a new contact
    Then The contact has been deleted successfully

  @high
  Scenario: CT_04: Import contact
    When User clicks on Contacts on left menu
    And User imports a contact file
    Then The contact file has been imported successfully

  @high
  Scenario: CT_05: Create a profile field
    When User clicks on Contacts on left menu
    And User create a profile field
    Then The new profile field has been created successfully

  @high
  Scenario: CT_06: Update a profile field
    When User clicks on Contacts on left menu
    And User updates a profile field
    Then The profile field has been updated successfully

  @high
  Scenario: CT_07: Delete a profile field
    When User clicks on Contacts on left menu
    And User removes a profile field
    Then The profile field has been deleted successfully

  @high
  Scenario: CT_08: Create a new profile category
    When User clicks on Contacts on left menu
    And User create a new profile category
    Then The profile field category has been created successfully

  @high
  Scenario: CT_09: Update a new profile category
    When User clicks on Contacts on left menu
    And User updates a new profile category
    Then The profile field category has been updated successfully

  @high
  Scenario: CT_10: Delete a profile category
    When User clicks on Contacts on left menu
    And User removes a profile category
    Then The profile field category has been removed successfully
