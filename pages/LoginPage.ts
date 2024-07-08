import { GeneralPage } from './GeneralPage';
export class LoginPage extends GeneralPage {

    async login(email: string, password: string) {
        await this.page.getByPlaceholder('Enter email').fill(email);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByPlaceholder('Enter password').fill(password);
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
}