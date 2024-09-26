import { test, expect } from './fixtures/luma-test';

test('Navigate to Mens Section', async ({ homePage }) => {
  await homePage.gotoUrl();
  await homePage.menSection.click();
  await expect(homePage.page).toHaveURL("https://magento.softwaretestingboard.com/men.html");


});


test('Add item to cart', async ({ productPage }) => {
  await productPage.page.goto('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');
  const jacket = await productPage.page.locator('li:has-text("Montana Wind Jacket")');
  await jacket.locator('[option-label="S"]').click();
  await jacket.locator('[aria-label="Green"]').click();
  await jacket.locator('button:has-text("Add to Cart")').click();
  
  //const sweater = await page.getByRole('listitem', { name: 'Jupiter All-Weather Trainer '});

  const sweater = await productPage.page.locator('li:has-text("Jupiter All-Weather Trainer ")');
  await sweater.locator('[option-label="M"]').click();
  await sweater.locator('[aria-label="Blue"]').click();
  await sweater.locator('button:has-text("Add to Cart")').click();

  await productPage.cart.click();

  await expect(productPage.page.locator('.items-total').locator('.count')).toHaveText('2');

  await productPage.page.waitForTimeout(5000);

  await productPage.cart.click();

  await productPage.page.locator('[title="Remove item"]').nth(0).click();

  await expect(productPage.page.locator('.items-total').locator('.count')).toBe('1');

  test.setTimeout(45000);

});


