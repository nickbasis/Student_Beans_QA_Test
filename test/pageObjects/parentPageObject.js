const { assert } = require('chai')
const { default: click } = require('webdriverio/build/commands/element/click')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
    
  }
}

module.exports = ParentPageObject
