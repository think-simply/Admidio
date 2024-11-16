Feature: Groups and Roles Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: GR_01 : Create a role
    When User clicks on Groups and Roles on left menu
    And User create a new role
    Then New role has been created successfully

  @high
  Scenario: GR_02 : Edit a role
    When User clicks on Groups and Roles on left menu
    And User updates a role
    Then The role has been updated successfully

  @high
  Scenario: GR_03 : Delete a role
    When User clicks on Groups and Roles on left menu
    And User removes a role
    Then The role has been deleted successfully

  @high
  Scenario: GR_04 : Add a category
    When User clicks on Groups and Roles on left menu
    And User add a category
    Then The new role-category has been created successfully

  @high
  Scenario: GR_05 : Update a category
    When User clicks on Groups and Roles on left menu
    And User updates a category
    Then The role-category has been updated successfully

  @high
  Scenario: GR_06 : Delete a category
    When User clicks on Groups and Roles on left menu
    And User removes a category
    Then The role-category has been removed successfully

  @high
  Scenario: GR_07 : Create a new list configuration
    When User clicks on Groups and Roles on left menu
    And User creates a new configuration
    Then The new configuration has been created successfully

  @high
  Scenario: GR_08 : Update a list configuration
    When User clicks on Groups and Roles on left menu
    And User updates a new configuration
    Then The configuration has been updated successfully

  @high
  Scenario: GR_09 : Delete a list configuration
    When User clicks on Groups and Roles on left menu
    And User deletes a new configuration
    Then The configuration has been deleted successfully
