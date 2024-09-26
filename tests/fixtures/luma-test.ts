import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.ts';
import { ProductPage } from '../pages/product-page.ts';

type LumaFixtures = {

  homePage: HomePage;
  productPage: ProductPage;
 
};

export const test = base.extend<LumaFixtures>({

  homePage: async ({ page }, use) => {
    await use(new HomePage( page ));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage( page ));
  },

});

export { expect } from '@playwright/test';

