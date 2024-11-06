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
  # @high
  # Scenario: TC_03: Reset Password
  #   When User clicks on the Password forgotten link
  #   And User enters "<email>"
  #   Then User should see a success message
  #   Examples:
  #     | email            |
  #     | theu@yopmail.com |
  # @high
  # Scenario: TC_04: Login Attempt with invalid credentials
  #   When User enters an invalid "<username>" or "<password>"
  #   Then User should see an error message indicating invalid credentials
  #   Examples:
  #     | username | password |
  #     | Admin    | Admin    |
  # @high
  # Scenario: TC_05: Login Attempt with valid credentials
  #   When User login with a valid "<username>" or "<password>"
  #   Then User should see the homepage
  #   Examples:
  #     | username | password   |
  #     | Admin    | Admin@123 |

  # @high
  # Scenario: TC_08: Add a new announcement
  #   When User login with a valid "<username>" or "<password>"
  #   When User click on Annoucements on left menu
  #   And User add a new annoucement title "<title>" and text "<text>"
  #   Then New annoucement with title "<title>" has been created successfully

  #   Examples:
  #     | username | password  | title |text|
  #     | Admin    | Admin@123 | title1 |text|

Scenario: TC_09: Copy an announcement
    When User login with a valid "<username>" or "<password>"
    When User click on Annoucements on left menu
    And User copy the first announcement title "<title>" and text "<text>"
    Then New annoucement with title "<title>" has been copied successfully

    Examples:
      | username | password  | title |text|
      | Admin    | Admin@123 | title2 |text2|