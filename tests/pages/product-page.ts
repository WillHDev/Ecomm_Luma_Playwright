import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly cart: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.cart =  this.page.locator('[data-block="minicart"]').locator('[href="https://magento.softwaretestingboard.com/checkout/cart/"]');
  
}

}