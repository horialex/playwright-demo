import { expect, Page } from "@playwright/test";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { HeaderPage } from "../pages/HeaderPage";
import { GeneralSteps } from "./GeneralSteps";

export class LoginSteps extends GeneralSteps {
    landingPage: LandingPage;
    loginPage: LoginPage;
    headerPage: HeaderPage;

    constructor(page: Page) {
        super(page);
        this.landingPage = new LandingPage(page);
        this.loginPage = new LoginPage(page);
        this.headerPage = new HeaderPage(page);
    }
    async goToLandingPage() {
        await this.landingPage.goToLandingPage();
    }
    async loginAsAdmin() {
        await this.landingPage.clickLoginButton();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
    }

    async assertUserIsLoggedIn() {
        const isUserAuthenticated = await this.headerPage.isAuthenticatedUserHeaderVisible();
        expect(isUserAuthenticated, 'User should be authenticated, but is not!').toBeTruthy();
    }


}