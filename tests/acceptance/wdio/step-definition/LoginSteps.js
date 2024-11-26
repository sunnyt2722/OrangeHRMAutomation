const {Given, When, Then, Before, After} = require('@cucumber/cucumber')
const {playwright} = require('@playwright/test')

Given('I navigate to OrangeHRM landing page', {timeout : 100*1000}, async function () {
    // const browser = await playwright.chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await console.log("ABC");

});

Given('I navigate to OrangeHRM homepage', {timeout : 100*1000}, async function () {
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("ABC");

});

    When('I am on landing page', async function () {
        console.log("ABC");
        
    });
    
    Then('I verify Username label is visible', async function () {
        console.log("ABC");
        
    });
    
    Then('I verify Username input field is visible', async function () {
        console.log("ABC");
        
    });
    
    Then('I verify Password label is visible', async function () {
        console.log("ABC");
    
    });
    
    Then('I verify Password input field is visible', async function () {
        console.log("ABC");
    
    });
    
    Then('I verify Login Button is visible', async function () {
        console.log("ABC");
    
    });
    
    Then('I verify Forgot password link is visible', async function () {
        console.log("ABC");

    });