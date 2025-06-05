export class AdminPage {
    constructor(page) {
        this.page = page;
        this.addButton = page.locator('//button[@type="button"]/i[@class="oxd-icon bi-plus oxd-button-icon"]');
        this.addUserForm = page.locator('//h6[text()="Add User"]');
        this.userRoleDropdown = page.locator('(//div[@class="oxd-select-text-input"])[1]');
        this.employeeNameInput = page.locator('//input[@placeholder="Type for hints..."]');
        this.statusInput = page.locator('(//div[@class="oxd-select-text-input"])[2]');
        this.userNameInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.password = page.locator('(//input[@type="password"])[1]');
        this.confrimPassword = page.locator('(//input[@type="password"])[2]');
        this.saveBtn = page.locator('//button[text()=" Save "]');
        this.editBtn = page.locator('(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[2]');
        this.deleteBtn = page.locator('(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[1]');
        this.editUserForm = page.locator('//h6[text()="Edit User"]');
        this.passwordCheckBox = page.locator('//label[text()="Yes"]');
        this.searchBtn = page.locator('//button[text()=" Search "]');
        this.userName = page.locator('(//div[@class="oxd-table-cell oxd-padding-cell"])[2]');
         this.userRole = page.locator('(//div[@class="oxd-table-cell oxd-padding-cell"])[3]');
         this.employeeName = page.locator('(//div[@class="oxd-table-cell oxd-padding-cell"])[4]');
         this.userStatus = page.locator('(//div[@class="oxd-table-cell oxd-padding-cell"])[5]');

    }

    async enterUserName(userName) {
        await this.userNameInput.fill(userName);
    }

    async enterPassword(password) {
        await this.password.fill(password);
        await this.confrimPassword.fill(password);
    }

    async selectUserRole(role) {
        await this.userRoleDropdown.click();
        if (role === "Admin") {
            await this.page.keyboard.press('ArrowDown');
        } else if (role === "ESS") {
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('ArrowDown');
        }
        await this.page.keyboard.press('Enter');
    }

    async selectEmployee(employeeName) {
        await this.employeeNameInput.fill(employeeName);
        await this.page.waitForTimeout(3000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }

    async selectStatus(status) {
        await this.statusInput.click();
        if (status === "Enabled") {
            await this.page.keyboard.press('ArrowDown');
        } else if (status === "Disabled") {
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('ArrowDown');
        }
        await this.page.keyboard.press('Enter');
    }

    async addUser(role, employeeName, status, userName, password) {
        await this.addButton.click();
        await this.selectUserRole(role);
        await this.selectEmployee(employeeName);
        await this.selectStatus(status);
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.confrimPassword.fill(password);
        await this.saveBtn.click();
        await this.page.waitForTimeout(5000);
    }

    async editUser(role, employeeName, status, userName, password) {
        await this.editBtn.click();
        await this.selectUserRole(role);
        await this.selectEmployee(employeeName);
        await this.selectStatus(status);
        await this.enterUserName(userName);
        await this.passwordCheckBox.click();
        await this.enterPassword(password);
        await this.confrimPassword.fill(password);
        await this.page.waitForTimeout(2000);
        await this.saveBtn.click();
        await this.page.waitForTimeout(5000);
    }

    async deleteUser() {
        await this.deleteBtn.click();
        const confirmDelete = await this.page.locator('//button[text()=" Yes, Delete "]');
        await confirmDelete.click();
        await this.page.waitForTimeout(5000);
    }

    async searchUser(role, employeeName, status, userName) {
        await this.selectUserRole(role);
        await this.selectEmployee(employeeName);
        await this.selectStatus(status);
        await this.enterUserName(userName); 
        await this.page.waitForTimeout(2000);
        await this.searchBtn.click();
        await this.page.waitForTimeout(2000);
    }
    
    async validateUserDetails(expectedUserName, expectedUserRole, expectedEmployeeName, expectedUserStatus) {
    const actualUserName = await this.userName.textContent();
    const actualUserRole = await this.userRole.textContent();
    const actualEmployeeName = await this.employeeName.textContent();
    const actualUserStatus = await this.userStatus.textContent();

    console.log('Actual User Name:', actualUserName);
    console.log('Actual User Role:', actualUserRole);
    console.log('Actual Employee Name:', actualEmployeeName);
    console.log('Actual User Status:', actualUserStatus);

    if (
        actualUserName.trim() === expectedUserName &&
        actualUserRole.trim() === expectedUserRole &&
        actualEmployeeName.trim() === expectedEmployeeName &&
        actualUserStatus.trim() === expectedUserStatus
    ) {
        console.log('User details are validated successfully.');
    } else {
        console.log(`Expected: ${expectedUserName}, ${expectedUserRole}, ${expectedEmployeeName}, ${expectedUserStatus}`);
        console.log(`Actual: ${actualUserName}, ${actualUserRole}, ${actualEmployeeName}, ${actualUserStatus}`);
    }
}

}
