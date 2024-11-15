Feature: Document and File Functionality

  Background:
    Given User navigates to page

  @high
  Scenario: FOD_01: Create new folder
    When User clicks on Documents and Files on left menu
    And User creates a new Folder
    Then New folder has been created successfully

