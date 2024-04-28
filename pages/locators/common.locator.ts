export const commonLocator = {
	SEARCH_TEXT_BOX: '#searchBox',
	BOOK_NAME: '[id^="see-book-"] a',
	BOOK_WITH_NAME: (name: string): string => `//a[text()="${name}"]`,
	LOGOUT_BUTTON: 'Log out',
	BOOK_STORE_BUTTON: 'Book Store',
	PROFILE_BUTTON: 'Profile',
};
