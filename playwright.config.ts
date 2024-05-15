import { defineConfig } from '@playwright/test';

export default defineConfig({
    projects: [
        {
            name: 'production',
            use: {
                baseURL: 'https://www.google.com/',
            },
        },
        {
            name: 'staging',
            use: {
                baseURL: 'https://www.stg-google.com/',
            },
        },
    ],
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
    },
});
