import { test as setup } from '../tools/utils/Fixtures';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page, loginSteps }) => {
    await loginSteps.loginAsAdmin();
    await loginSteps.assertUserIsLoggedIn();
    await page.context().storageState({ path: authFile });
});