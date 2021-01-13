@cartaxcheck
Feature: Verify vehicle details using car tax check website

Scenario: Car tax check details
Given I have list of car registration numbers
And I am on car tax check homepage
Then I enter registration number and validated vehicle details with expected 
