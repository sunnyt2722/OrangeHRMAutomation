const { Before, After } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");

Before(async function(){
    await console.log("Scenarios complete");
    const browser = await playwright.chromium.launch({
        headless : false
    })
    const context = await browser.newContext();
    const page = await context.newPage();
});

After(async function() {
    console.log("Scenarios complete");
})