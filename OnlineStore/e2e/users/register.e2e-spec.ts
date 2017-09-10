import { AppPage } from './../app.po';
import { browser } from 'protractor/built';
import { by, element } from 'protractor';

describe('online-store App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should register user', async () => {
    await browser.get('/');
    await browser.driver.findElement(by.id('nav-login'));
    element(by.id('nav-login')).click();
    await browser.driver.findElement(by.id('register-now'));
    await element(by.id('register-now')).click();
    element(by.id('reg-email')).sendKeys('test999@test.bg');
    element(by.id('reg-bulstat')).sendKeys('999999999');
    element(by.id('reg-name')).sendKeys('integration test');
    element(by.id('reg-pass')).sendKeys('test123');
    element(by.id('reg-confPass')).sendKeys('test123');
    element(by.id('reg-submit')).click();
  });
});
