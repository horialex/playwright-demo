import { expect, Page } from "@playwright/test";
import { GeneralSteps } from "./GeneralSteps";
import { BoardsPage } from "../pages/BoardsPage";
import { BoardPage } from "../pages/BoardPage";
import { BoardApi } from "../api/BoardApi";
export class BoardSteps extends GeneralSteps {
    boardsPage: BoardsPage;
    boardPage: BoardPage;
    boardApi: BoardApi;
    constructor(page: Page, boardPage: BoardPage, boardsPage: BoardsPage) {
        super(page);

        this.boardPage = boardPage;
        this.boardsPage = boardsPage;
    }

    async openBoard(name: string) {
        await this.boardsPage.openBoard(name);
    }

    async addAnotherList(name: string) {
        await this.boardPage.addAnotherList(name);
    }

    async assertListIsPresent(name: string) {
        expect(await this.boardPage.isListPresent(name), `List '${name}' should be present, but is not!`).toBeTruthy();
    }

    async addACard(listName: string, name: string) {
        await this.boardPage.addACard(listName, name);
    }

    async assertCardIsPresent(listName: string, name: string) {
        expect(await this.boardPage.isCardPresent(listName, name), `Card '${name}' should be present, but is not!`).toBeTruthy();
    }
}