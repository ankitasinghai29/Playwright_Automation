import test, { expect } from "@playwright/test";

test("select single option",async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption("#select-demo",{
        label:"Monday"
    })
    await page.waitForTimeout(3000);
    expect(page.locator("//p[@class='selected-value text-size-14']")).toContainText("Monday");
})

test("select multiple option",async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    //if we have to select multiple options from drop down then we have to write inside an array
    await page.selectOption("#multi-select",[
        {value:"California"},
        {label:"New York"},
        {index:7}
    ])
    await page.waitForTimeout(3000);
    
})


test("bootsrap single value dropdwon",async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');

    //going to id=country locator then its span sibling then click on it
    await page.click("#country+span");

    //under span going to ul then li then select text text and click on it
    await page.locator("ul#select2-country-results")
        .locator("li",{
            hasText:"India"
        }).click();

    await page.waitForTimeout(3000);
    
})

//first select one value then second then third using function
test.only("bootstrap dropdown",async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');

    await selectCountry("India"); //caling user created function for selecting value
    await selectCountry("Australia");
    await selectCountry("Denmark");

    //user define function for selecting value from drop down on the basis of argument value
    async function selectCountry(countryName) {

        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
             .locator("li",{
                  hasText:countryName
             }).click();
    }
})