Feature: Homepage Functionality

  Background:
    Given User navigates to page
  # @high
  # Scenario: TC_01 : User create new account successfully
  #   When User goes to Register page
  #   And User inputs all valid data
  #   Then New account has been created successfully
  # @medium
  # Scenario: TC_02 : User create new account with existing data
  #   When User goes to Register page
  #   And User inputs data for all required fields: "<username>", "<password>", "<confirm password>", "<surName>", "<firstName>", "<email>"
  #   Then Cannot create a new account with existed username
  #   Examples:
  #     | username | password    | confirm password | surName | firstName | email            |
  #     | Admint   | Admint@1234 | Admint@1234      | tina    | nguyen    | theu@yopmail.com |

  @high
  Scenario: TC_03: Reset Password
    When User clicks on the Password forgotten link
    And User enters "<email>"
    Then User should see a success message

    Examples:
      | email            |
      | theu@yopmail.com |
