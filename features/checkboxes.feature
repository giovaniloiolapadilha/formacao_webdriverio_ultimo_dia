@checkboxes
Feature: The Internet Guinea Pig Website - Checkbox

  Background:
    Given I am on the "checkboxes" page

  Scenario: As a user I want to uncheck the second checkbox
    Then should show the title Checkboxes

  Scenario: As a user I want to check the first checkbox
    When I checked the first checkbox
    Then the first checkbox should be checked

  Scenario: As a user I want to uncheck the second checkbox
    When I unchecked the second checkbox
    Then second checkbox should be unchecked