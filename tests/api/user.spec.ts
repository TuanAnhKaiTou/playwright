import { HTTP_CODE } from '@constants/http-code';
import { UserResult } from '@core/types';
import * as user from '@data/user.json';
import test, { expect } from '@playwright/test';
import { getUser } from 'api/services/user.service';

test.describe('User - API Testing', { tag: ['@user', '@api'] }, () => {
	test.skip('should get information of user', { tag: '@get' }, async () => {
		const _getUser = await getUser(user.userId);
		const response = (await _getUser.json()) as UserResult;
		expect(_getUser.status()).toEqual(HTTP_CODE.SUCCESSFUL_200);
		expect(response.username).toEqual(user.username);
	});
});
