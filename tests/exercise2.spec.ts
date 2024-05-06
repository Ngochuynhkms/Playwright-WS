import { test, expect } from '@playwright/test';

test.describe('Exercise 2', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForLoadState();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await page.getByRole('link', { name: 'Admin' }).click();
        await expect(page.getByRole('heading', { name: '/ User Management' })).toBeVisible();
        await page.getByRole('button', { name: ' Add' }).click();
        await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();
        await page.locator('.oxd-select-text').first().click();
        await page.getByRole('option', { name: 'ESS' }).click();
        await page.getByPlaceholder('Type for hints...').fill('N');
        await page.getByRole('option', { name: 'Ranga  Akunuri' }).click();
        await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        await page.getByRole('option', { name: 'Enabled' }).click();
        await page.getByRole('textbox').nth(2).fill('NgocHuynh');
        await page.getByRole('textbox').nth(3).fill('ngockms@123');
        await page.getByRole('textbox').nth(4).fill('ngockms@123');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForLoadState();
        await expect(page.getByRole('heading', { name: '/ User Management' })).toBeVisible();
        await expect(page.getByRole('row', { name: ' NgocHuynh ESS Ranga Akunuri' })).toBeVisible();
        await page.locator('span').filter({ hasText: 'manda user' }).click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
        await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    });

    test('verify that the user can not log in successfully when providing username is empty', async ({ page }) => {
        await page.getByPlaceholder('Password').fill('ngockms@123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForLoadState();
        await expect(page.getByText('Required')).toBeVisible();
    });
    
    test('verify that the user can log in successfully when provided the username and password correctly', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('NgocHuynh');
        await page.getByPlaceholder('Password').fill('ngockms@123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForLoadState();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });
    
    test.afterAll(async ({ page }) => {
        await page.locator('span').filter({ hasText: 'Ranga Akunuri' }).click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
        await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForLoadState();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await page.getByRole('link', { name: 'Admin' }).click();
        await expect(page.getByRole('heading', { name: '/ User Management' })).toBeVisible();
        await page.getByRole('row', { name: ' NgocHuynh ESS Ranga Akunuri' }).getByRole('button').first().click();
        await page.getByRole('button', { name: ' Yes, Delete' }).click();
    });
});