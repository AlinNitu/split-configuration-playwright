import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { getEnv } from '../utils/env';

const envName = process.env.PLAYWRIGHT_ENV || 'production';
const envConfig = getEnv(envName);

test.describe('Google Tests', () => {
    // test.use({ baseURL: envConfig.baseURL });

    test('check page title', async ({ page }) => {
        const homePage = new HomePage(page, envConfig.selectors);
        console.log(envConfig.baseURL)

        await homePage.goto(envConfig.baseURL);
        const title = await homePage.getTitle();
        expect(title).toBe(envConfig.messages.title);
    });
});
