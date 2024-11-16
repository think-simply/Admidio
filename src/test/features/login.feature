Feature: Login and Register Functionality

  Background:
    Given User navigates to page as guest

  @high @guest
  Scenario: RG_01 : User create new account successfully
    When User goes to Register page
    And User inputs all valid data
    Then New account has been created successfully

  @medium @guest
  Scenario: RG_02 : User create new account with existing data
    When User goes to Register page
    And User inputs data for all required fields: "<username>", "<password>", "<confirm password>", "<surName>", "<firstName>", "<email>"
    Then Cannot create a new account with existed username

    Examples:
      | username | password    | confirm password | surName | firstName | email            |
      | Admint   | Admint@1234 | Admint@1234      | tina    | nguyen    | theu@yopmail.com |

  @high @guest
  Scenario: RS_01: Reset Password
    When User clicks on the Password forgotten link
    And User enters "<email>"
    Then User should see a success message

    Examples:
      | email            |
      | theu@yopmail.com |

  @high @guest
  Scenario: LO_01: Login Attempt with invalid credentials
    When User enters an invalid "<username>" or "<password>"
    Then User should see an error message indicating invalid credentials

    Examples:
      | username | password |
      | Admin    | Admin    |

  @high @guest
  Scenario: LO_02: Login Attempt with valid credentials
    When User login with a valid credential: "<username>","<password>"
    Then User should see the homepage

    Examples:
      | username | password  |
      | Admin    | Admin@123 |

  