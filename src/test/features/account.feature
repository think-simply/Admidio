Feature: Homepage Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: TC_01 : User create new account successfully
    When User goes to Register page
    And User inputs all valid data
    Then New account has been created successfully

  # Scenario: TC_02 : User create new account with existing data
  #   When User goes to Register page
  #   And User inputs all invalid data
  #   Then New account has been created successfully
