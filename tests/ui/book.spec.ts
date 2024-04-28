import { expect, test } from '@fixtures/page.fixture';
import * as user from '@data/user.json';
import * as book from '@data/other-book.json';
import { URL } from '@constants/ui-endpoint';
import { UI_TEXT } from '@constants/ui-text';
import { addBook, deleteAllBooks } from 'api/services/book.service';
import { HTTP_CODE } from '@constants/http-code';
import { generateToken } from 'api/services/user.service';
import { Token } from '@core/types';

test.describe('Bookstore - UI Testing', { tag: ['@book', '@ui'] }, () => {
	test.skip(
		'should add book to collection successfully',
		{ tag: '@add' },
		async ({ page, loginPage, profilePage, bookPage }) => {
			await page.goto(URL.LOGIN_URL);
			await loginPage.login(user);
			await expect(page).toHaveURL(URL.PROFILE_URL);
			await page.goto(URL.BOOKS_URL);
			await bookPage.selectBook(book.title);
			await bookPage.clickAddCollectionButton();
			page.on('dialog', (dialog) => {
				expect(dialog.message()).toEqual(UI_TEXT.ADD_BOOK_SUCCESS);
			});
			await page.goto(URL.PROFILE_URL);
			expect(profilePage.isBookVisible(book.title)).toBeTruthy();
		},
	);

	const searchBookNames = ['Design', 'design'];
	for (const search of searchBookNames) {
		test(
			`should search book with multiple results with data search "${search}"`,
			{ tag: '@search' },
			async ({ page, loginPage, profilePage, bookPage }) => {
				await page.goto(URL.LOGIN_URL);
				await loginPage.login(user);
				await expect(page).toHaveURL(URL.PROFILE_URL);
				await expect(profilePage.usernameLabel).toHaveText(user.username);
				await page.goto(URL.BOOKS_URL);
				await bookPage.searchBook(search);
				const searchResults = await bookPage.getBook().allTextContents();
				searchResults.forEach((result) => {
					expect(result).toContain(search);
				});
			},
		);
	}

	test(
		'should delete book successfully',
		{ tag: '@delete' },
		async ({ page, loginPage, profilePage, bookPage }) => {
			// Use the API for add book
			const generateTokenResponse = await generateToken(user);
			const token = (await generateTokenResponse.json()) as Token;
			process.env.TOKEN = token.token;
			await deleteAllBooks(user.userId);
			const _addBook = await addBook(user.userId, [{ isbn: book.isbn }]);
			expect(_addBook.status()).toEqual(HTTP_CODE.CREATE_SUCCESSFUL_201);

			await page.goto(URL.LOGIN_URL);
			await loginPage.login(user);
			await expect(page).toHaveURL(URL.PROFILE_URL);
			await expect(profilePage.usernameLabel).toHaveText(user.username);
			expect(
				bookPage.isBookVisible('Learning JavaScript Design Patterns'),
			).toBeTruthy();
			await profilePage.clickDeleteButton();
			const isVisibleModalBody = await profilePage
				.getTextConfirmDeleteBook()
				.isVisible();
			expect(isVisibleModalBody).toBeTruthy();
			await profilePage.clickOkButton();
			page.on('dialog', (dialog) => {
				expect(dialog.message()).toEqual(UI_TEXT.DELETED_BOOK_SUCCESS);
			});
			expect(
				bookPage.isBookHidden('Learning JavaScript Design Patterns'),
			).toBeTruthy();
		},
	);
});
