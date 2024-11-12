const {test,expect} = require('@playwright/test');
const { beforeEach } = require('node:test');

test.beforeEach('Navigate to Orange HRM homepage', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test('Validate forgot password link on login page for orange HRM to reset password screen', async({page})=>{
    await page.locator('[class="orangehrm-login-forgot"] p').click();
    await expect(page.locator('h6')).toContainText("Reset Password");
    await expect(page.locator('[class="oxd-text oxd-text--p"]')).toContainText('Please enter your username to identify your account to reset your password');
    await expect(page.locator('[class="oxd-label"]').first()).toContainText('Username');
    await page.locator('[placeholder="Username"]').first().waitFor();
    await expect(page.locator(`//button[contains(@class,'cancel')]`)).toContainText("Cancel");
    await expect(page.locator(`//button[contains(@class,'reset')]`)).toContainText("Reset Password");
});

test('Validate forgot password functionality for orange HRM resets password', async({page})=>{
    await page.locator('[class="orangehrm-login-forgot"] p').click();
    await page.locator('[placeholder="Username"]').first().fill('admin');
    await page.locator(`//button[contains(@class,'reset')]`).click();
    await expect(page.locator('h6')).toContainText("Reset Password link sent successfully");
    await expect(page.locator('[class="oxd-text oxd-text--p"]').nth(0)).toContainText("A reset password link has been sent to you via email.");
    await expect(page.locator('[class="oxd-text oxd-text--p"]').nth(1)).toContainText("You can follow that link and select a new password.");
    await expect(page.locator('[class="oxd-text oxd-text--p"]').nth(2)).toContainText("If the email does not arrive, please contact your OrangeHRM Administrator.");
    
});