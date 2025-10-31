import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ 
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  console.log('Navigating to Formbricks login...');
  await page.goto('https://form.keveon.app/auth/login');
  
  console.log('Waiting for page load...');
  await page.waitForLoadState('networkidle');
  
  console.log('Filling login form...');
  await page.fill('input[type="email"]', 'keveon@keveon.com');
  await page.fill('input[type="password"]', 'gehjyp-qynqo7-pYdcah');
  
  console.log('Submitting login...');
  await page.click('button[type="submit"]');
  
  await page.waitForLoadState('networkidle');
  console.log('Logged in! Current URL:', page.url());
  
  // 保持浏览器打开 10 分钟供手动操作
  console.log('Browser will stay open for 10 minutes for manual configuration...');
  await page.waitForTimeout(600000);
  
  await browser.close();
})();
