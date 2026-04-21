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
const UAT_EPISODE_URL = 'https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/episode/b26cfb2a-8715-11ef-9634-56003f82fbd5'
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



test.describe('UAT Episode Screen', () => {

	/*
	test('Visibility check of Search Button', async () => {
		//test.use({ headless: false });
		await expect(page.getByText('SEARCH')).toBeVisible();
		// Sometime it fails. Then test using the timeout.
		//await expect(page.getByText('SEARCH')).toBeVisible({ timeout: 5000 });
		console.log('✅ - SEARCH');
	});
	*/

	test('Episode Screen', async ({page}) => {
		await page.goto('https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/episode/b26cfb2a-8715-11ef-9634-56003f82fbd5');
		console.log('✅ - Visible - Episode Screen');
		await page.waitForTimeout(10000);
  		await expect(page.getByText('Subscribe to Watch')).toBeVisible();
		console.log('✅ - Visible - Subscribe to Watch');
  		await expect(page.getByText('More Episodes').first()).toBeVisible();
		console.log('✅ - Visible - More Episodes');
  		await expect(page.locator('div').filter({ hasText: /^Episode 2 \| 24 MinShantanu & Bhishma$/ }).nth(1)).toBeVisible();
		console.log('✅ - Visible - One Episode Button');
	});

	





});
