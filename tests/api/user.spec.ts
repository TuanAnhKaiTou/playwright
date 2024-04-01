import { HTTP_CODE } from '@constants/http-code';
import { UserResult } from '@core/types';
import test, { expect } from '@playwright/test';
import { createUser, deleteUser } from 'api/services/user.service';

test.describe('User - API Testing', { tag: ['@user', '@api'] }, () => {
	test('should create an user', { tag: '@create' }, async () => {
		const credentials = {
			username: 'anhnt123',
			password: 'Test@123',
		};
		const _createUser = await createUser(credentials);
		const response = (await _createUser.json()) as UserResult;
		console.log('UUID', response);
		expect(_createUser.status()).toEqual(HTTP_CODE.CREATE_SUCCESSFUL_201);
		expect(response.username).toEqual(credentials.username);
		await deleteUser(response.userID);
	});
});
