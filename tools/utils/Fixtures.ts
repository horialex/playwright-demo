import { test as base, Page } from '@playwright/test';
import { LoginSteps } from '../../steps/LoginSteps';
import { BoardSteps } from '../../steps/BoardSteps';
import { BoardApi } from '../../api/BoardApi';
import { BoardsPage } from '@pages/BoardsPage';
import { BoardPage } from '@pages/BoardPage';
import { BoardFactory } from 'factories/BoardFactory';
import { BoardDao } from 'dao/BoardDao';
import { ListApi } from 'api/ListApi';
import { ListFactory } from 'factories/ListFactory';

type MyFixtures = {
    boardApi: BoardApi;
    listApi: ListApi;
    page: Page;
    boardSteps: BoardSteps;
    loginSteps: LoginSteps;
}

export const test = base.extend<MyFixtures>({
    page: async ({ browser }, use) => {
        let context = await browser.newContext({});
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
    loginSteps: async ({ page }, use) => {
        const loginSteps = new LoginSteps(page);
        await use(loginSteps);
    },
    boardApi: async ({ }, use) => {
        const boardFactory = new BoardFactory();
        const boardDao = new BoardDao();
        const boardApi = new BoardApi(boardFactory, boardDao);
        await use(boardApi);
    },
    listApi: async ({ }, use) => {
        const listFactory = new ListFactory();
        const listApi = new ListApi(listFactory);
        await use(listApi);
    },
    boardSteps: async ({ page }, use) => {
        const boardPage = new BoardPage(page);
        const boardsPage = new BoardsPage(page);
        const boardSteps = new BoardSteps(page, boardPage, boardsPage);
        await use(boardSteps);
    }
});
