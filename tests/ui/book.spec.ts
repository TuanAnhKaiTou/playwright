import { expect, test } from '@fixtures/page.fixture';
import * as user from '@data/user.json';
import * as book from '@data/book.json';
import { URL } from '@constants/url';
import { UI_TEXT } from '@constants/ui-text';

test.describe('Bookstore - UI Testing', { tag: ['@book', '@ui'] }, () => {
	test(
		'should add book to collection successfully',
		{ tag: '@add' },
		async ({ page, loginPage, profilePage, bookPage }) => {
			await page.goto(URL.LOGIN_URL);
			loginPage.login(user);
			await expect(page).toHaveURL(URL.PROFILE_URL);
			await page.goto(URL.BOOKS_URL);
			await bookPage.selectBook(book.bookName);
			await bookPage.clickAddCollectionButton();
			page.on('dialog', (dialog) => {
				expect(dialog.message()).toEqual(UI_TEXT.ADD_BOOK_SUCCESS);
			});
			page.goto(URL.PROFILE_URL);
			expect(profilePage.isBookVisible(book.bookName)).toBeTruthy();
		},
	);
});
