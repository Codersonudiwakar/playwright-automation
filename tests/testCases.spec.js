import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { Dashboard } from '../pages/Dashboard.js';
import { AdminPage } from '../pages/AdminPage.js';

test.describe('Admin Module - Full Flow', () => {

  test('1. Navigate to the Admin Module', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new Dashboard(page);
    const adminPage = new AdminPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(loginPage.dashboardHeader).toBeVisible();
    await dashboardPage.searchMenu('Admin');
    await adminPage.searchUser();
  });

  test('2. Add a New User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new Dashboard(page);
    const adminPage = new AdminPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.searchMenu('Admin');
    await adminPage.addUser('Admin', 'Sonu', 'Enabled', 'sonu123', 'sonu123');
  });

  test('3. Search the Newly Created User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new Dashboard(page);
    const adminPage = new AdminPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.searchMenu('Admin');
    await adminPage.searchUser('Admin', 'Sonu', 'Enabled', 'sonu123');
  });

  test('4. Edit all the possible User Details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new Dashboard(page);
    const adminPage = new AdminPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.searchMenu('Admin');
    await adminPage.searchUser('Admin', 'Sonu', 'Enabled', 'sonu123');
    await adminPage.editUser('ESS', 'Sonu', 'Disabled', 'sonu12345', 'sonu12345');
  });

  test('5. Validate Updated Details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new Dashboard(page);
    const adminPage = new AdminPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.searchMenu('Admin');
    await adminPage.searchUser('ESS', 'Sonu', 'Disabled', 'sonu12345');
    await adminPage.validateUserDetails('sonu12345', 'ESS', 'Sonu Diwakar', 'Disabled');
  });

  test('6. Delete the User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new Dashboard(page);
    const adminPage = new AdminPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.searchMenu('Admin');
    await adminPage.searchUser('ESS', 'Sonu Diwakar', 'Disabled', 'sonu12345');
    await adminPage.deleteUser();
  });

});
