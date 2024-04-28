import BasePage from '@core/page/base.page';
import { bookLocator } from './locators/book.locator';
import { commonLocator } from './locators/common.locator';

export class BookPage extends BasePage {
	get addCollectionButton() {
		return this.locator(bookLocator.ADD_COLLECTION_BUTTON);
	}

	get backToBookStoreButton() {
		return this.locator(bookLocator.BACK_TO_BOOK_STORE_BUTTON);
	}

	async searchBook(book: string) {
		await this.fill(this.locator(commonLocator.SEARCH_TEXT_BOX), book);
	}

	getBookWithBookName(book: string) {
		return this.locator(commonLocator.BOOK_WITH_NAME(book));
	}

	getBook() {
		return this.locator(commonLocator.BOOK_NAME);
	}

	async isBookVisible(book: string) {
		return await this.getBookWithBookName(book).isVisible();
	}

	async isBookHidden(book: string) {
		return await this.getBookWithBookName(book).isHidden();
	}

	async selectBook(book: string) {
		await this.click(this.getBookWithBookName(book));
	}

	async clickAddCollectionButton() {
		await this.click(this.addCollectionButton);
	}

	async clickBackToBookStoreButton() {
		await this.click(this.backToBookStoreButton);
	}
}
