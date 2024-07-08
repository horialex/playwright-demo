import { test } from '../tools/utils/Fixtures';

test("delete all boards", async ({ boardApi }) => {
    await boardApi.deleteAllBoards();
});