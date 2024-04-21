import { test, expect } from '@fixtures/page.fixture';
import * as user from '@data/user.json';
import { URL } from '@constants/ui-endpoint';
import { UI_TEXT } from '@constants/ui-text';

test.beforeEach(async ({ page }) => {
	await page.goto(URL.LOGIN_URL);
});

test.describe('Login - UI Testing', { tag: ['@login', '@ui'] }, () => {
	test(
		'should go to profile page when login with valid account',
		{ tag: ['@valid', '@account'] },
		async ({ page, loginPage, profilePage }) => {
			await loginPage.login(user);
			await expect(page).toHaveURL(URL.PROFILE_URL);
			await expect(profilePage.usernameLabel).toHaveText(user.username);
		},
	);

	test(
		'should show an error message when login with wrong username',
		{ tag: ['@invalid', '@account'] },
		async ({ page, loginPage }) => {
			await loginPage.login({
				username: user.username + '123',
				password: user.password,
			});
			await expect(page).toHaveURL(URL.LOGIN_URL);
			await expect(loginPage.errorMessage).toHaveText(UI_TEXT.LOGIN_ERROR);
		},
	);
});
