const ParentPageObject = require('./parentPageObject')


class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
    await browser.maximizeWindow()
  }
  async openTwenty () {
    await browser.url('https://www.studentbeans.com/student-discount/uk/collections/top-20-student-discounts?source=nav')
    // await $('a[data-testid="nav-category-top-20-student-discounts"]').click(); 
  }
  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
    await $('//*[@id="onetrust-accept-btn-handler"]').click(); 
  }
  async clickSearchBox () {
    await $('//*[@id="__next"]/div/header/div/div[2]/div[2]/span/button').click(); 
  }
  async searchItem () {
    await $('/html/body/div[5]/div/div/div/div[1]/div/input').setValue('Samsung');
  }
  async selectSearchItem () {
    await $('/html/body/div[5]/div/div/div/div[2]/div/div/div[4]/a').click();
  }

  async clickTopTwe () {
    await this.openTwenty();
  }
  async selectSixthItem () {
    await $('//*[@id="__next"]/div/main/div/div[2]/div[1]/div/section/div/div[6]/article/a[1]').scrollIntoView();
    await $('//*[@id="__next"]/div/main/div/div[2]/div[1]/div/section/div/div[6]/article/a[1]').click(); 
  }
  async clickLoginButton () {
    await $('//*[@id="__next"]/div/header/div/div[1]/nav[2]/ul/li[4]/a').click();
  }
  async Login () {
    await $('//*[@id="email"]').setValue('test@test.com');
    await $('//*[@id="password"]').setValue('testingStuff');
    
  }
  // async ErrorMessage () {
  //   // await browser.switchToFrame('span[role="checkbox"]');
  //   await $('.recaptcha-checkbox-checkmark').click();
  //   await $('//*[@id="authorisation_root"]/div/div/div[2]/div[4]/form/div[4]/button').click(); 
  //   await this.isElementEqualToExpected($('p=The password you entered is incorrect. Please try again.'), 'The password you entered is incorrect. Please try again.')
  // }
}

module.exports = SimpleSearchPageObject
