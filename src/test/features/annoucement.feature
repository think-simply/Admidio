Feature: Annoucement Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: AN_01: Add a new announcement
    When User clicks on Annoucements on left menu
    And User add a new annoucement title "<title>" and text "<text>"
    Then New annoucement with title "<title>" has been created successfully

    Examples:
      | title  | text |
      | title1 | text |

  @high
  Scenario: AN_02: Copy an announcement
    When User clicks on Annoucements on left menu
    And User copy the first announcement and change title "<title>" and text "<text>"
    Then New annoucement has been copied successfully with new title "<title>"

    Examples:
      | title  | text  |
      | title2 | text2 |

  @high
  Scenario: AN_03: Update an announcement
    When User clicks on Annoucements on left menu
    And User updates the first announcement and change title "<title>" and text "<text>"
    Then The annoucement has been updated with new title "<title>"

    Examples:
      | title  | text  |
      | title3 | text3 |

  @high
  Scenario: AN_04: Delete an announcement
    When User clicks on Annoucements on left menu
    And User deletes the first announcement
    Then The annoucement has been deleted successfully

  @high
  Scenario: AN_05: Add a new category
    When User clicks on Annoucements on left menu
    And User create new category
    Then The new category has been created successfully

  @high
  Scenario: AN_06: Edit a new category
    When User clicks on Annoucements on left menu
    And User edit a category
    Then The category has been updated successfully

  @high
  Scenario: AN_07: Delete a new category
    When User clicks on Annoucements on left menu
    And User delete a category
    Then The category has been deleted successfully
