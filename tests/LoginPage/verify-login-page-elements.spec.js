const {test,expect} = require('@playwright/test');
const jsonData = JSON.parse(JSON.stringify(require("../../utils/PlaceOrderTestData.json")));

test.beforeEach('Navigate to Orange HRM homepage', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test('Validate labels for the orange HRM test', async({page})=>{
    await expect(page.locator('h5')).toContainText('Login');
    await expect(page.locator('[class="oxd-label"]').first()).toContainText('Username');
    await expect(page.locator('[class="oxd-label"]').nth(1)).toContainText('Password');
    await page.locator('[placeholder="Username"]').first().waitFor();
    await page.locator('[placeholder="Password"]').first().waitFor();
    await expect(page.locator('[class="orangehrm-login-forgot"] p')).toContainText('Forgot your password? ');
    await expect(page.locator('button')).toContainText('Login');
});

test('Validate username and password fields are mandatory on login page for orange HRM', async({page})=>{
    var errorUsername = `//input[@placeholder="Username"]/ancestor::div[2]//span`;
    var errorPassword = `//input[@placeholder="Password"]/ancestor::div[2]//span`;
    await page.locator('[placeholder="Password"]').fill(jsonData.invalidPassword);
    await page.locator('button').click();
    await expect(page.locator(errorUsername)).toContainText("Required");
    await page.locator('[placeholder="Password"]').clear();
    await page.locator('[placeholder="Username"]').fill(jsonData.invalidUsername);
    await page.locator('button').click();
    await expect(page.locator(errorPassword)).toContainText("Required");
});

test('Validate user is not able to login on orange HRM if passing incorrect username', async({page})=>{
    await page.locator('[placeholder="Username"]').fill(jsonData.invalidUsername);
    await page.locator('[placeholder="Password"]').fill(jsonData.validPassword);
    await page.locator('button').click();
    await expect(page.locator(`//p[contains(@class,'oxd-alert-content-text')]`)).toContainText("Invalid credentials");
});

test('Validate user is not able to login on orange HRM if passing incorrect password', async({page})=>{
    await page.locator('[placeholder="Username"]').fill(jsonData.validUsername);
    await page.locator('[placeholder="Password"]').fill(jsonData.invalidPassword);
    await page.locator('button').click();
    await expect(page.locator(`//p[contains(@class,'oxd-alert-content-text')]`)).toContainText("Invalid credentials");
});

test('Validate user is able to login on orange HRM if passing correct username and password', async({page})=>{
    await page.locator('[placeholder="Username"]').fill(jsonData.validUsername);
    await page.locator('[placeholder="Password"]').fill(jsonData.validPassword);
    await page.locator('button').click();
});

