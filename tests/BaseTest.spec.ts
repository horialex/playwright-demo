import { Page } from '@playwright/test';
import { LoginSteps } from '../steps/LoginSteps';

export class BaseTest {
    page: Page;
    loginSteps: LoginSteps;

    constructor(page: Page) {
        this.page = page;
        this.loginSteps = new LoginSteps(page);
    }

    async initialSetup() {
        await this.loginSteps.loginAsAdmin();
    }

    async teardown() {
        await this.page.close();
    }
}