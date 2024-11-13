Feature: Messages Functionality

  Background:
    Given User navigates to page

  @low
  Scenario: TC_26 : Check page layout
    And User clicks on Messages on left menu
    Then Message page has been displayed as design
  @high
  Scenario: TC_27 : Write a private message
    And User clicks on Messages on left menu
    And User send a private message
    Then Message has been sent successfully

  @high
  Scenario: TC_28 : Write a private message
    And User clicks on Messages on left menu
    And User removes a private message
    Then Message has been deleted successfully
