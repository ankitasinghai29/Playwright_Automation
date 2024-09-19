import {test,expect} from "@playwright/test"

//its javascript alert that we can't inspect
//test handling alert which accept only ok(accept)
test('handling alert',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    //accepting alert
    page.on('dialog',async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })

    //there are 3 click me button and here we want first one thats why we used nth(0)
    await page.locator("button:has-text('Click Me')").nth(0).click(); 
    
})

//its javascript alert that we can't inspect
//test handling alert which accept either ok(accept) or cancel(dismiss)
test('handling alert confrirm box',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    //accepting alert
    page.on('dialog',async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })

    //there are 3 click me button and here we want 2nd one thats why we used nth(0)
    await page.locator("button:has-text('Click Me')").nth(1).click(); 

    //checking message after dismiss the alert
    expect(page.locator("id=confirm-demo")).toContainText('Cancel');
    
})

//its javascript alert that we can't inspect
//test handling alert which accept string from user
test('handling alert prompt box',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    const value = 'Ankita';
    //accepting alert
    page.on('dialog',async(alert)=>{
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept(value);
    })

    //there are 3 click me button and here we want 3rd one thats why we used nth(0)
    await page.locator("button:has-text('Click Me')").nth(2).click(); 

    //checking message having entered value after accept the alert
    expect(page.locator("id=prompt-demo")).toContainText(value);
    
})

//its not javascript alert, we can inspect it. in such case no need to add additional alert code
//test handling alert which can be cancel or save changes
test.only('handling model alert',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
    await page.locator("//button[text()='Launch Modal']").nth(0).click();

    //click on save changes button of alert which cab be inspectable
    await page.click("(//button[text()='Save Changes'])[1]");
})