Feature: Messages Functionality

  Background:
    Given User navigates to page

  @low
  Scenario: ME_01 : Check page layout
    And User clicks on Messages on left menu
    Then Message page has been displayed as design
  @high
  Scenario: ME_02 : Write a private message
    And User clicks on Messages on left menu
    And User send a private message
    Then Message has been sent successfully

  @high
  Scenario: ME_03 : Write a private message
    And User clicks on Messages on left menu
    And User removes a private message
    Then Message has been deleted successfully
