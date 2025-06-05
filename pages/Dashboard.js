// pages/login.page.js
export class Dashboard {
 
  constructor(page) {
    this.page = page;
    // XPath selectors
    this.searchInput = page.locator('//input[@class="oxd-input oxd-input--active"]');
    this.adminMenu = page.locator('//span[text()="Admin"]');
    this.adminDashBoardHeader = page.locator('//span[@class="oxd-topbar-header-breadcrumb"]');
  }

   async searchMenu(menuName) {
     await this.searchInput.fill(menuName);
     await this.page.waitForTimeout(2000);
     await this.adminMenu.waitFor({ state: 'visible' });
    await this.adminMenu.click();
    await this.adminDashBoardHeader.waitFor({ state: 'visible' });
  }

  

 
}
