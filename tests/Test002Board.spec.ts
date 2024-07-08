import { test } from '../tools/utils/Fixtures';

const listName = `List_${Math.floor(Math.random() * 10000)}`;
const boardName = `Board_${Math.floor(Math.random() * 10000)}`;
const cardName = `Card_${Math.floor(Math.random() * 10000)}`;

test.beforeEach(async ({ boardApi, loginSteps }) => {
    await boardApi.createBoard(boardName);
    await loginSteps.goToLandingPage();
    await loginSteps.loginAsAdmin();
});

test.afterEach(async ({ boardApi }) => {
    await boardApi.deleteBoard(boardName);
});

test("Add list", async ({ boardSteps }) => {
    await boardSteps.openBoard(boardName);
    await boardSteps.addAnotherList(listName);
    await boardSteps.assertListIsPresent(listName);
});

test("Add card", async ({ listApi, boardSteps }) => {
    await listApi.createList(listName, boardName);
    await boardSteps.openBoard(boardName);
    await boardSteps.addACard(listName, cardName);
    await boardSteps.assertCardIsPresent(listName, cardName);
});