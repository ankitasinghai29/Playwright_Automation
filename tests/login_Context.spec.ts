import {chromium, test} from '@playwright/test'

test('login into app',async()=>{

    const browser = await chromium.launch();     //launching chromium browser
    const context = await browser.newContext(); //creating new context is used for cache
    const page = await context.newPage();       //creating new page

    //opening new url
    await page.goto('https://demowebshop.tricentis.com/');
    //clicking on log in link
    await page.getByRole('link',{name:'Log in'}).click();
    //fetching email element and fill the email id as value
    await page.locator('//input[@id="Email"]').fill("ankis123@gmail.com");
    //fetching password element and fill the password as value
    await page.fill('input[name="Password"]',"singhai");
    //check the rememberMe checkbox
    await page.locator('//input[@id="RememberMe"]').check();
    //Click on log in button
    await page.click('input[value="Log in"]');

    await page.waitForTimeout(3000);

    // // opening new tab with same cookies
    const page1 = await context.newPage(); 
    // //open same url which aready logged in
    await page1.goto('https://demowebshop.tricentis.com/'); 
    await page1.waitForTimeout(3000);

    //opening new window without same cookies
    const context1 = await browser.newContext(); 
    const page2 = await context1.newPage();
    //open same url which is fresh page without logged in
    await page2.goto('https://demowebshop.tricentis.com/'); 
    await page2.waitForTimeout(3000);

    //click on log out button
    await page.getByRole('link',{name:'Log out'}).click();
    await page.waitForTimeout(3000)
})