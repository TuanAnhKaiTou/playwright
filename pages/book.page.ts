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

	getBook(book: string) {
		return this.locator(commonLocator.BOOK_LINK(book));
	}

	async isBookVisible(book: string) {
		return await this.getBook(book).isVisible();
	}

	async isBookHidden(book: string) {
		return await this.getBook(book).isHidden();
	}

	async selectBook(book: string) {
		await this.click(this.getBook(book));
	}

	async clickAddCollectionButton() {
		await this.click(this.addCollectionButton);
	}

	async clickBackToBookStoreButton() {
		await this.click(this.backToBookStoreButton);
	}
}
