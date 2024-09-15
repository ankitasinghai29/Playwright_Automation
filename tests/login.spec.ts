import {chromium, test} from '@playwright/test'

test('login into app',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext(); // use same cookies
    const page = await context.newPage();

    await page.goto('https://demowebshop.tricentis.com/');

    await page.getByRole('link',{name:'Log in'}).click();

    await page.locator('//input[@id="Email"]').fill("ankis123@gmail.com");
    await page.fill('input[name="Password"]',"singhai");
    await page.locator('//input[@id="RememberMe"]').check();
    await page.click('input[value="Log in"]');

    await page.waitForTimeout(3000);

    // // opening new tab with same cookies
    // const page1 = await context.newPage(); 
    // //open same url which aready logged in
    // await page1.goto('https://demowebshop.tricentis.com/'); 
    // await page1.waitForTimeout(3000);

    // //opening new window without same cookies
    // const context1 = await browser.newContext(); 
    // const page2 = await context1.newPage();
    // //open same url which is fresh page without logged in
    // await page2.goto('https://demowebshop.tricentis.com/'); 
    // await page2.waitForTimeout(3000);

    await page.getByRole('link',{name:'Log out'}).click();
    await page.waitForTimeout(3000)
})