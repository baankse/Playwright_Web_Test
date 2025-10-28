// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://jumia.com.ng/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jumia Nigeria/);
});

test.only('cart link', async ({ page }) => {
  await page.goto('https://jumia.com.ng/cart/');

  // Click the cart link.
  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page.getByText('Your cart is empty!')).toBeVisible();

  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
