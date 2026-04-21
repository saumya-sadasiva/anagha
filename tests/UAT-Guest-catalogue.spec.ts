/**
 * 
 * Loads the page just once.
 * Does the test on that page.
 * 
 * 
 **/

import { test, expect, chromium } from '@playwright/test';

const UAT_HOME_URL = 'https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/catalog'

//test.use({ headless: false });

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



test.describe('Catalogue Screen', () => {

	test('Visibility check of Search Button', async () => {
		//test.use({ headless: false });
		await expect(page.getByText('SEARCH')).toBeVisible();
		// Sometime it fails. Then test using the timeout.
		//await expect(page.getByText('SEARCH')).toBeVisible({ timeout: 5000 });
		console.log('✅ - SEARCH');
	});

	test('Visibility check of Browse Button', async () => {
		await expect(page.getByText('BROWSE')).toBeVisible();
		console.log('✅ - BROWSE');
	});

	test('Visibility check of Login Button', async () => {
		await expect(page.getByText('LOGIN')).toBeVisible();
		console.log('✅ - LOGIN');
	});

	test('Visibility check of VIEW', async () => {
		await expect(page.getByText('VIEW').first()).toBeVisible();
		console.log('✅ - VIEW');
	});

	test('Visibility check of SORT', async () => {
		await expect(page.getByText('SORT').first()).toBeVisible();
		console.log('✅ - SORT');
	});

	test('Visibility check of LANGUAGE', async () => {
		await expect(page.getByText('LANGUAGE').first()).toBeVisible();
		console.log('✅ - LANGUAGE');
	});

	test('Visibility check of VIEW Drop-Down', async () => {
		//await expect(page.getByText('Series', { exact: true }).first()).toBeVisible();
		//await page.waitForTimeout(10000);
		//await page.getByText('Series').first().click();
		//await page.getByText('Series').first().click({ timeout: 5000 });

		await page.getByText('Series').nth(1).click();
		await expect(page.locator('div').filter({ hasText: /^Series$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^Mixes$/ })).toBeVisible();

		console.log('✅ - VIEW - DropDown');
		console.log('✅ - Series');
		console.log('✅ - Mixes');
		console.log('✅');
	})

	test('Visibility check of SORT Drop-Down', async () => {

		await page.getByText('Most Recent').first().click();
		await expect(page.locator('div').filter({ hasText: /^Most Recent$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^Most Popular$/ })).toBeVisible();

		console.log('✅ - SORT - DropDown');
		console.log('✅ - Most Recent');
		console.log('✅ - Most Popular');
		console.log('✅');
	})

	test('Visibility check of LANGUAGE Drop-Down', async () => {
		//await page.locator('div:nth-child(3) > div:nth-child(2) > .mouse-pointer.select-none.text-gold.flex > .flex-grow-0 > img').click();
		//await expect(page.locator('div').filter({ hasText: /^All Languages$/ })).toBeVisible();

		await page.getByText('All Languages').first().click();
		await expect(page.locator('div').filter({ hasText: /^All Languages$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^English$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^Hindi$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^Tamil$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^Spanish$/ })).toBeVisible();
		await expect(page.locator('div').filter({ hasText: /^Telugu$/ })).toBeVisible();

		console.log('✅ - LANGUAGE - DropDown');
		console.log('✅ - All Languages');
		console.log('✅ - English');
		console.log('✅ - Hindi');
		console.log('✅ - Tamil');
		console.log('✅ - Spanish');
		console.log('✅ - Telugu');
		console.log('✅');
	});




});
