import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { ProfilePage } from '@pages/profile.page';
import { BookPage } from '@pages/book.page';

type PageFixture = {
	loginPage: LoginPage;
	profilePage: ProfilePage;
	bookPage: BookPage;
};

export const test = base.extend<PageFixture>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},

	profilePage: async ({ page }, use) => {
		await use(new ProfilePage(page));
	},

	bookPage: async ({ page }, use) => {
		await use(new BookPage(page));
	},
});

export { expect } from '@playwright/test';
