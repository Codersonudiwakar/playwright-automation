const { expect } = require('@playwright/test');

class TestHelpers {
  static async waitForElement(page, locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  static async waitForNavigation(page, expectedUrl) {
    await page.waitForURL(expectedUrl, { timeout: 10000 });
  }

  static async captureScreenshot(page, testName) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ 
      path: `test-results/screenshots/${testName}-${timestamp}.png`,
      fullPage: true 
    });
  }

  static async clearBrowserData(context) {
    await context.clearCookies();
    await context.clearPermissions();
  }

  static generateRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static async logTestStep(step) {
    console.log(`📝 Test Step: ${step}`);
  }
}

module.exports = TestHelpers;