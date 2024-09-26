import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly menSection: Locator;
 



  constructor(page: Page) {
    this.page = page;
    this.menSection =  this.page.locator('[href="https://magento.softwaretestingboard.com/men.html"]');
  
}

  async gotoUrl() {
    await this.page.goto('https://magento.softwaretestingboard.com/');
  }

}