Feature: Simple Search

Scenario: As a user I want to search for a brand on studentbeans.com so that I can see if I can get a discount on that brand
  Given I am on the studentbeans homepage
  When I open the search bar
  When I enter "Samsung"
  Then I should select the 4th "Samsung" search listing

Scenario: As a user I want to open the Top 20 offers
  When I click on top the Top 20 offers
  Then I Open the 6th discount within the Top 20 offers list

Scenario: Login with a invalid credentials
  When I click login button
  When I enter invalid credentials