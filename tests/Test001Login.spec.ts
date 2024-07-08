import { test } from '../tools/utils/Fixtures';

test("login as admin", async ({ loginSteps }) => {
  await loginSteps.goToLandingPage();
  await loginSteps.loginAsAdmin();
  await loginSteps.assertUserIsLoggedIn();
});