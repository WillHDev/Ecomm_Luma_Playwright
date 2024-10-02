import { test, expect } from './fixtures/luma-test';

test('Navigate to Mens Section', async ({ homePage }) => {
  await homePage.gotoUrl();
  await homePage.menSection.click();
  await expect(homePage.page).toHaveURL("https://magento.softwaretestingboard.com/men.html");


});


test('Add item to cart', async ({ productPage }) => {

  test.setTimeout(45000);
  await productPage.page.goto('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');

  const sweater = await productPage.page.locator('li:has-text("Jupiter All-Weather Trainer ")');
  await sweater.locator('[option-label="M"]').click();
  await sweater.locator('[aria-label="Blue"]').click();
  await sweater.locator('button:has-text("Add to Cart")').click();

  await productPage.cart.click();

  await expect(productPage.page.locator('.items-total').locator('.count')).toHaveText('2');

  await productPage.page.waitForTimeout(5000);

  await productPage.cart.click();

  await productPage.page.locator('[title="Remove item"]').nth(0).click();

  await productPage.page.getByRole('button', { name: 'OK' }).click();

  await expect(productPage.page.getByText('1', { exact: true }).nth(2)).toHaveText('1');

});


