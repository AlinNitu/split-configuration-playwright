import { Page, expect } from '@playwright/test';

export class HomePage {
    private page: Page;
    private selectors: { searchBox: string };

    constructor(page: Page, selectors: { searchBox: string }) {
        this.page = page;
        this.selectors = selectors;
    }

    async goto(baseURL: string) {
        await this.page.goto(baseURL);
    }

    async getTitle() {
        return this.page.title();
    }
}
