import { GeneralPage } from './GeneralPage';
export class LandingPage extends GeneralPage {

    async goToLandingPage() {
        await this.page.goto(process.env.BASE_URL as string);
    }

    async clickLoginButton() {
        await this.page.getByTestId('bignav').getByRole('link', { name: 'Log in' }).click();
    }
}