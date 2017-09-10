import { by, element } from 'protractor';

import { AppPage } from './app.po';
import { browser } from 'protractor/built';
import { protractor } from 'protractor/built/ptor';

describe('online-store App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();

  });

  it('should register user', async () => {
    await browser.get('/');
    await browser.driver.findElement(by.id('nav-login'));
    await element(by.id('nav-login')).click();
    await browser.driver.findElement(by.id('register-now'));
    await element(by.id('register-now')).click();
    await element(by.id('reg-email')).sendKeys('test999@test.bg');
    await element(by.id('reg-bulstat')).sendKeys('999999999');
    await element(by.id('reg-name')).sendKeys('integration test');
    await element(by.id('reg-pass')).sendKeys('test123');
    await element(by.id('reg-confPass')).sendKeys('test123');
    await element(by.id('reg-submit')).click();
  });

  it('should login', async () => {
    await browser.get('/');
    await browser.driver.findElement(by.id('nav-login'));
    await element(by.id('nav-login')).click();
    await browser.driver.findElement(by.id('login-email'));
    await element(by.id('login-email')).sendKeys('test@test.bg');
    await element(by.id('login-pass')).sendKeys('test123');
    await element(by.id('login-submit')).click();
    await expect(browser.driver.getCurrentUrl()).toMatch('/');
  });

  it('should change password', async () => {
    await browser.get('/users/details');
    await browser.driver.findElement(by.id('cp-oldPass'));
    await element(by.id('cp-oldPass')).sendKeys('test123');
    await browser.driver.findElement(by.id('cp-newPass'));
    await element(by.id('cp-newPass')).sendKeys('test12345');
    await browser.driver.findElement(by.id('cp-confirmPass'));
    await element(by.id('cp-confirmPass')).sendKeys('test12345');
    await browser.driver.findElement(by.id('cp-submit'));
    await element(by.id('cp-submit')).click();
  });

  it('should load orders page', async () => {
    await browser.get('/users/viewOrders');
    const elOrders = await element(by.id('viewOrders'));
    expect(elOrders.getText()).toEqual('Orders:');
  });
});
