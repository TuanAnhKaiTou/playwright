import { expect, type FullConfig } from '@playwright/test';
import { deleteAllBooks } from 'api/services/book.service';
import * as user from '@data/user.json';
import { generateToken } from 'api/services/user.service';
import { Token } from '@core/types';
import { HTTP_CODE } from '@constants/http-code';

async function globalTeardown(config: FullConfig) {
	console.log('Global teardown is running\n\r');
	const _generateToken = await generateToken(user);
	if (_generateToken) {
		const tokenResponse = (await _generateToken.json()) as Token;
		process.env.TOKEN = tokenResponse.token;
		const deleteAllBooksResponse = await deleteAllBooks(user.userId);
		expect(deleteAllBooksResponse.status()).toEqual(
			HTTP_CODE.SUCCESSFUL_NO_CONTENT_204,
		);
	}
}

export default globalTeardown;
