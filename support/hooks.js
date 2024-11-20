const { Before, After } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");

Before(async function(){
    const browser = await playwright.chromium.launch({
        headless : false
    })
    const context = await browser.newContext();
    const page = await context.newPage();
});

After(async function() {
    console.log("Scenarios complete");
})