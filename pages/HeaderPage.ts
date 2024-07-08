import { Locator } from '@playwright/test';
import { GeneralPage } from './GeneralPage';
export class HeaderPage extends GeneralPage {

    async getAuthenticatedUserHeader(): Promise<Locator | null> {
        try {
            const authenticatedHeaderLocator = this.page.locator('[data-testid="authenticated-header"]');
            await authenticatedHeaderLocator.waitFor({ state: 'visible' });
            return authenticatedHeaderLocator;
        } catch (error) {
            return null;
        }
    }

    async isAuthenticatedUserHeaderVisible(): Promise<boolean> {
        const authenticatedHeader = await this.getAuthenticatedUserHeader();
        return authenticatedHeader !== null;
    }

}