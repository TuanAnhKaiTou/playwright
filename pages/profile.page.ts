import BasePage from '@core/page/base.page';
import { profileLocator } from './locators/profile.locator';

export class ProfilePage extends BasePage {
	get usernameLabel() {
		return this.locator(profileLocator.USERNAME_TEXT);
	}

	get deleteBookButton() {
		return this.locator(profileLocator.DELETE_BOOK_BUTTON);
	}

	get deleteAllBooksButton() {
		return this.locator(profileLocator.DELETE_ALL_BOOKS_BUTTON);
	}

	get okButton() {
		return this.locator(profileLocator.OK_BUTTON);
	}

	get noDataText() {
		return this.locator(profileLocator.NO_DATA_TEXT);
	}

	async isBookVisible(book: string) {
		return await this.locator(profileLocator.BOOK_LINK(book)).isVisible;
	}

	async clickDeleteButton() {
		await this.click(this.deleteBookButton);
	}

	async clickDeleteAllBooksButton() {
		await this.click(this.deleteAllBooksButton);
	}

	async clickOkButton() {
		await this.click(this.okButton);
	}
}
