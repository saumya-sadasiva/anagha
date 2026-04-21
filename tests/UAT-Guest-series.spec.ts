/**
 * 
 * Loads the page just once.
 * Does the test on that page.
 * 
 * 
 **/

import { test, expect, chromium } from '@playwright/test';

const UAT_HOME_URL = 'https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/catalog'
const UAT_SERIES_URL = 'https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/series/327'

//test.use({ headless: false });
/*
let browser;
let context;
let page;

test.beforeAll(async () => {
	browser = await chromium.launch(); // Launch the browser
    context = await browser.newContext(); // Create a new browser context
    page = await context.newPage(); // Create a new page in the context
    await page.goto(UAT_HOME_URL); // Navigate to the URL once
});

test.afterAll(async () => {
    await context.close(); // Close the context
    await browser.close(); // Close the browser
});
*/



test.describe('UAT Series Screen', () => {

	/*
	test('Visibility check of Search Button', async () => {
		//test.use({ headless: false });
		await expect(page.getByText('SEARCH')).toBeVisible();
		// Sometime it fails. Then test using the timeout.
		//await expect(page.getByText('SEARCH')).toBeVisible({ timeout: 5000 });
		console.log('✅ - SEARCH');
	});
	*/

	test('Series Screen', async ({page}) => {
		//await page.goto('https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/catalog');
  		//console.log('🔍 Checking visibility of SEARCH button');

		await page.goto('https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/catalog');
		await page.locator('.flex.flex-col.justify-end').first().click();
		console.log('✅ - Navigate to Series Screen');
		await page.waitForTimeout(10000);
		await expect(page.locator('div').filter({ hasText: /^Subscribe to Watch$/ }).nth(1)).toBeVisible();
		console.log('✅ - Visible - Subscribe to Watch');
		//await page.getByText('Subscribe to Watch').click();
		//await page.goto('https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/series/327');

		await expect(page.getByText('Episodes').first()).toBeVisible();
		console.log('✅ - Visible - Episode text');
		await expect(page.locator('.flex.flex-row.items-end').first()).toBeVisible();
		console.log('✅ - Visible - First Episode Button');


	});

	





});
