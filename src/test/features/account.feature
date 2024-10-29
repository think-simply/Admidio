Feature: Homepage Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: 1.Verify Login with invalid data:<Description>
    When User inputs data with "<UserName>" and "<Password>"
    Then "<Error>" message will be displayed

    Examples:
      | Description                           | UserName | Password | Error                                                                     |
    #   | invalid username and invalid password | Heath93  | Heath93  | Epic sadface: Username and password do not match any user in this service |
      | empty username                        |          | Heath93  | Please fill out this field                                      |
      | empty password                        | Heath93  |          | Please fill out this field                                        |
