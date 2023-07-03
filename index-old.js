const puppeteer = require("puppeteer"); // ^19.0.0

const url = "https://www.amazon.in/";

let browser;
(async () => {
  browser = await puppeteer.launch({headless: false});
  const [page] = await browser.pages();
  await page.goto(url, {waitUntil: "domcontentloaded"});
  const el = await page.waitForSelector('a[data-nav-role="signin"]');
  await el.click('a[data-nav-role="signin"]');
//   await page.$eval('#ap_email', el => el.value = 'prashantmutnale@gmail.com');
  await page.locator('#ap_email').fill('prashantmutnale@gmail.com');
  await page.click('.a-button-input');
  await page.locator('#ap_email').fill('prashantmutnale@gmail.com');
  const elpassword = await page.waitForSelector('a[data-nav-role="signin"]');
  await elpassword.fill('ELECTRONICS123');
})()
//   .catch(err => console.error(err))
//   .finally(() => browser.close());