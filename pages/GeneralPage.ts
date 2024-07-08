import { Locator, Page, Selectors } from '@playwright/test';
export class GeneralPage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitABit(numberOfMiliseconds: number) {
        await this.page.waitForTimeout(numberOfMiliseconds);
    }

    async refreshPage() {
        await this.page.reload();
    }

    // async waitForTextToAppear(numberOfSeconds: number, text: string) {
    //     await this.page.waitForSelector(`:has-text("${text}")`, { timeout: (numberOfSeconds * 1000) });
    // }
}