import test, { expect } from '@playwright/test';
import * as user from '@data/user.json';
import * as book from '@data/book.json';
import * as otherBook from '@data/other-book.json';
import { addBook, replaceBook } from 'api/services/book.service';
import { HTTP_CODE } from '@constants/http-code';
import { UserResult } from '@core/types';
import { User } from '@interfaces/User';

test.describe('Bookstore - API Testing', { tag: ['@book', '@api'] }, () => {
	test('should add book to collections', { tag: '@add' }, async () => {
		const _addBook = await addBook(user.userId, [{ isbn: book.isbn }]);
		const response = (await _addBook.json()) as UserResult;
		expect(_addBook.status()).toEqual(HTTP_CODE.CREATE_SUCCESSFUL_201);
		expect(response.books[0].isbn).toEqual(book.isbn);
	});

	test(
		'should replace book from collections',
		{ tag: '@replace' },
		async () => {
			const regexDate = new RegExp(
				'^((?:(\\d{4}-((0[1-9])|(1[0-2]))-(0[1-9]|[12]\\d|3[01]))T(((?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d)(?:.\\d{3})?))Z?)$',
			);
			await addBook(user.userId, [{ isbn: book.isbn }]);
			const _replaceBook = await replaceBook(
				book.isbn,
				user.userId,
				otherBook.isbn,
			);
			const response = (await _replaceBook.json()) as User;
			expect(_replaceBook.status()).toEqual(HTTP_CODE.SUCCESSFUL_200);
			expect(response.books[0].isbn).toEqual(otherBook.isbn);
			expect(response.books[0].publish_date).toMatch(regexDate);
		},
	);
});
