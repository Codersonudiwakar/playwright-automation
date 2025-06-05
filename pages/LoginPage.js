// pages/login.page.js
export class LoginPage {
 
  constructor(page) {
    this.page = page;

    // XPath selectors
    this.usernameInput = page.locator('//input[@name="username"]');
    this.passwordInput = page.locator('//input[@name="password"]');
    this.loginButton = page.locator('//button[@type="submit"]');
    this.dashboardHeader = page.locator('//h6[text()="Dashboard"]');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isDashboardVisible() {
    return this.dashboardHeader.isVisible();
  }
}
