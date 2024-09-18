import {expect, test} from "@playwright/test";

/*we have three tests in this script. 
when we execute it all will execute one by one but in different browser and we will get single report containing seperate test details
if we want to execute any specific test then use annotation test.only 
ex----- test.only('Interaction with Input',async({page})=>{.......}))
*/
test('Interaction with Input',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const inputElement = page.locator('input#user-message');  //input element having id=user-message
    //assertion
    await expect(inputElement).toHaveAttribute("placeholder","Please enter your Message");
    await inputElement.fill("Hi Playwright");
    console.log(await inputElement.inputValue());
})

test('sum',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator('#sum1'); //input1 id=sum1
    const sum2input = page.locator('#sum2');
    const getsumbutton = page.locator('//button[text()="Get Sum"]');
    let num1 = 121;
    let num2 = 123;
    await sum1input.fill(""+num1);
    await sum2input.fill(""+num2);
    await getsumbutton.click();
    const result = page.locator('#addmessage'); //result message id=addmessage
    let expectedresult = num1+num2;
    expect(result).toHaveText(""+expectedresult);
})

test('checkbox',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
    const singlecheckbox = page.locator('id=isAgeSelected');
    await expect(singlecheckbox).not.toBeChecked();
    await singlecheckbox.check();
    await expect(singlecheckbox).toBeChecked();
})