import { test, expect } from '@playwright/test';

test('order iPhone 13 PRO', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
  await page.getByPlaceholder('email@example.com').fill('rahulshetty@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('Iamking@000');
  await page.getByRole('button', { name: 'Login' }).click();   
  await page.waitForLoadState();
  await expect(page).toHaveTitle("Let's Shop");
  await page.locator("//b[text()='IPHONE 13 PRO']//parent::h5/following-sibling::button[@class='btn w-10 rounded']").click();
  await page.getByRole('button', { name: ' Cart' }).click();
  await expect(page.getByRole('heading', { name: 'My Cart' })).toBeVisible();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByPlaceholder('Select Country').fill('Vietnam');
  await page.getByText('Place Order').click();
  await page.getByRole('button', { name: ' ORDERS' }).click();
  await expect(page.getByRole('heading', { name: 'Your Orders' })).toBeVisible();
});