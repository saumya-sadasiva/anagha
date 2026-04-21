import { test, expect } from '@playwright/test';

const UAT_HOME_URL = 'https://uat-web-sgexclusive.sadhguru.org/watch-exclusive/catalog'
const aSearch = ['guru', 'death', 'life', 'devi', 'adiyogi']

test.describe('UAT Search functionality', () => {
  test('Search Usage', async ({ page }) => {
    await page.goto(UAT_HOME_URL);
    console.log('✅ - Visible - Catalogue Screen');
    await page.waitForTimeout(10000);
    await expect(page.getByText('SEARCH')).toBeVisible();
    console.log('✅ - Visible - Search Field');
    // Get a value to search for
    const sSearch = aSearch[Math.floor(Math.random() * aSearch.length)];
    console.log(`✅ - Searching for ${sSearch}`);
    await page.getByText('SEARCH').click();
    await page.getByRole('textbox', { name: 'Search episodes, series...' }).fill(sSearch);
    await page.getByRole('textbox', { name: 'Search episodes, series...' }).press('Enter');
    await page.waitForTimeout(10000);
    await expect(page.getByText(`Showing results for " ${sSearch} "`).first()).toBeVisible();
    console.log(`✅ - Showing result of search - ${sSearch}`);
    console.log('✅ - Functional - Search');
  });
})

