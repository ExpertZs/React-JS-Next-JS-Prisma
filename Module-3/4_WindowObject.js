const puppeteer = require('puppeteer');

async function openNewWindow(url, width, height) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width, height });
  await page.goto(url);
  await browser.close();
}

const url = 'https://ostad.app/dashboard';
const width = 800;
const height = 600;

openNewWindow(url, width, height);
