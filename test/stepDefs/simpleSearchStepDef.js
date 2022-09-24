const { Given, When, Then } = require('@cucumber/cucumber')
const { default: $ } = require('webdriverio/build/commands/browser/$')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given(/^I am on the studentbeans homepage$/, async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

When(/^I open the search bar$/, async () => {
  await simpleSearchPageObject.clickSearchBox()
})

When(/^I enter "Samsung"$/, async () => {
  await simpleSearchPageObject.searchItem()
})

Then(/^I should select the 4th "Samsung" search listing$/, async () => {
  simpleSearchPageObject.selectSearchItem()
})

When(/^I click on top the Top 20 offers$/, async () => {
  await simpleSearchPageObject.clickTopTwe()
})

Then(/^I Open the 6th discount within the Top 20 offers list$/, async () => {
  await simpleSearchPageObject.selectSixthItem()
})

When(/^I click login button$/, async () => {
  await simpleSearchPageObject.clickLoginButton()
})

When(/^I enter invalid credentials$/, async () => {
  await simpleSearchPageObject.Login()
})

// Then(/^Displayed error message$/, async () => {
//   await simpleSearchPageObject.ErrorMessage()
// })