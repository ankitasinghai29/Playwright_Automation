import { test, expect, Browser, Page} from '@playwright/test';
import { chromium } from '@playwright/test';

test('title check',async()=>{
  const browser:Browser = await chromium.launch({headless:false});
  const page:Page = await browser.newPage();
  await page.goto('https://www.amazon.in');
  const title = await page.title();
  expect(title).toEqual('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
  browser.close();
});