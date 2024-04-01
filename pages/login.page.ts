import BasePage from '@core/page/base.page';
import { loginLocator } from './locators/login.locator';

type Info = {
	username: string;
	password: string;
};

export class LoginPage extends BasePage {
	get usernameTextBox() {
		return this.locator(loginLocator.USERNAME_TEXT_BOX);
	}

	get passwordTextBox() {
		return this.locator(loginLocator.PASSWORD_TEXT_BOX);
	}

	get errorMessage() {
		return this.locator(loginLocator.ERROR_MESSAGE_TEXT);
	}

	get loginButton() {
		return this.locator(loginLocator.LOGIN_BUTTON);
	}

	async typeUsername(username: string) {
		await this.fill(this.usernameTextBox, username);
	}

	async typePassword(password: string) {
		await this.fill(this.passwordTextBox, password);
	}

	async clickLoginButton() {
		await this.click(this.loginButton);
	}

	async login(info: Info) {
		await this.typeUsername(info.username);
		await this.typePassword(info.password);
		await this.clickLoginButton();
	}
}
