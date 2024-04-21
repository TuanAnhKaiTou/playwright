import BasePage from '@core/page/base.page';
import { profileLocator } from './locators/profile.locator';
import { commonLocator } from './locators/common.locator';
import { UI_TEXT } from '@constants/ui-text';

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
		return await this.locator(commonLocator.BOOK_LINK(book)).isVisible();
	}

	getTextConfirmDeleteBook() {
		return this.page.getByText(UI_TEXT.CONFIRM_DELETE_BOOK);
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
