import { GeneralPage } from "../pages/GeneralPage";
import { Page } from '@playwright/test';
export class GeneralSteps {
    protected page: Page;
    protected generalPage: GeneralPage;

    constructor(page: Page) {
        this.page = page;
        this.generalPage = new GeneralPage(page);
    }
}