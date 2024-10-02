import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly cart: Locator;
 
  constructor(page: Page) {
    this.page = page;
    
    //this.cart =  this.page.locator('a[class="action showcart"]');
    this.cart =  this.page.locator('a.action.showcart');

}


async addJupiterJacketToCart() {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitBtn.click();
}


// await productPage.page.goto('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');
// const jacket = await productPage.page.locator('li:has-text("Montana Wind Jacket")');
// await jacket.locator('[option-label="S"]').click();
// await jacket.locator('[aria-label="Green"]').click();
// await jacket.locator('button:has-text("Add to Cart")').click();

}