Feature: Homepage Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: TC_01 : User create new account : <Description>
    When User goes to Register page
    And User inputs data with "<UserName>", "<Password>", "<Confirm password>", "<Surname>", "<First name>" and "<E-mail>"
    Then New account has been created successfully

    Examples:
      | Description  | UserName | Password    | Confirm password | Surname | First name | E-mail |
      | successfully | Admin    | Admint@1234 | Admint@1234      | Surname | First name | E-mail |
