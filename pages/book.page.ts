import BasePage from '@core/page/base.page';
import { bookLocator } from './locators/book.locator';

export class BookPage extends BasePage {
	get addCollectionButton() {
		return this.locator(bookLocator.ADD_COLLECTION_BUTTON);
	}

	get backToBookStoreButton() {
		return this.locator(bookLocator.BACK_TO_BOOK_STORE_BUTTON);
	}

	async selectBook(bookName: string) {
		await this.click(this.locator(bookLocator.BOOK_LINK(bookName)));
	}

	async clickAddCollectionButton() {
		await this.click(this.addCollectionButton);
	}

	async clickBackToBookStoreButton() {
		await this.click(this.backToBookStoreButton);
	}
}
