import { Locator } from "@playwright/test";
import { GeneralPage } from "./GeneralPage";

export class BoardsPage extends GeneralPage {

    async getBoardContainer(name: string): Promise<Locator> {
        const boardContainer = this.page.locator(`//ul[contains(@class, 'boards-page')]//div[@title='${name}']/ancestor::li[1]`);
        return boardContainer;
    }

    async openBoard(name: string) {
        const boardContainer = await this.getBoardContainer(name);
        await boardContainer.click();
    }
}
