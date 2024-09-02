import { browser } from 'k6/browser';
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

import {PageDemoblaze} from './DemoblazePage.js'
import { Homepage } from './homepage.js'

import { check } from 'k6';
import { sleep } from 'k6';


export const options = {
  scenarios: {
    browser: {
      executor: 'constant-vus',
      exec: 'browserTest',
      vus: 1,
      duration: '5s',
      options: {
        browser: {
          type: 'chromium',
        }
      }
    }
  }
};


export async function browserTest() {
  const page = await browser.newPage();

 
    const homepage = new Homepage(page)
    await homepage.goto()
  
    expect(await homepage.getVerificationMessage()).to.contain("PRODUCT STORE")


     await page.close();

}