import { Locator, expect } from "@playwright/test";
import { GeneralPage } from "./GeneralPage";

export class BoardPage extends GeneralPage {

    async addAnotherList(name: string) {
        await this.page.getByText('Add another list').click();
        await this.page.getByPlaceholder("Enter list title…").fill(name);
        await this.page.getByText('Add list').click();
    }

    async addACard(listName: string, name: string) {
        const listContainer = await this.getListContainer(listName);
        await listContainer?.getByText("Add a card").click();
        await this.page.getByPlaceholder("Enter a title for this card…").type(name);
        await this.page.getByText("Add card").click();
    }

    async getListContainer(name: string): Promise<Locator | null> {
        try {
            const listContainer = this.page.locator(`//div[contains(@data-testid, 'list-wrapper')][div/div/textarea[text()='${name}']]`);
            await listContainer.waitFor({ state: "visible" });
            return listContainer;
        } catch (error) {
            return null;
        }
    }

    async isListPresent(name: string): Promise<boolean> {
        const listContainer = await this.getListContainer(name);
        return listContainer !== null;
    }
    async isCardPresent(listName: string, name: string) {
        const cardContainer = await this.getCardContainer(listName, name);
        return cardContainer?.isVisible();
    }

    async getCardContainer(listName: string, name: string): Promise<Locator | null> {
        const listContainer = await this.getListContainer(listName);
        if (listContainer)
            try {
                const cardContainer = listContainer.getByText(name);
                await cardContainer?.waitFor({ state: 'visible' });
                return cardContainer;
            } catch (error) {
                return null;
            }
        return null;
    }

}