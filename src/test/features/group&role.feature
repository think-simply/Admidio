Feature: Groups and Roles Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: TC_28 : Create a role
    When User clicks on Groups and Roles on left menu
    And User create a new role
    Then New role has been created successfully

  @high
  Scenario: TC_29 : Edit a role
    When User clicks on Groups and Roles on left menu
    And User updates a role
    Then The role has been updated successfully

  @high
  Scenario: TC_30 : Delete a role
    When User clicks on Groups and Roles on left menu
    And User removes a role
    Then The role has been deleted successfully

  @high
  Scenario: TC_31 : Add a category
    When User clicks on Groups and Roles on left menu
    And User add a category
    Then The new role-category has been created successfully

  @high
  Scenario: TC_32 : Update a category
    When User clicks on Groups and Roles on left menu
    And User updates a category
    Then The role-category has been updated successfully

  @high
  Scenario: TC_33 : Delete a category
    When User clicks on Groups and Roles on left menu
    And User removes a category
    Then The role-category has been removed successfully

  @high
  Scenario: TC_34 : Create a new list configuration
    When User clicks on Groups and Roles on left menu
    And User creates a new configuration
    Then The new configuration has been created successfully

  @high
  Scenario: TC_35 : Update a list configuration
    When User clicks on Groups and Roles on left menu
    And User updates a new configuration
    Then The configuration has been updated successfully

  @high @now
  Scenario: TC_36 : Delete a list configuration
    When User clicks on Groups and Roles on left menu
    And User deletes a new configuration
    Then The configuration has been deleted successfully
