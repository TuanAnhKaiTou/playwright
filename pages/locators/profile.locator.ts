export const profileLocator = {
	USERNAME_TEXT: '#userName-value',
	BOOK_LINK: (name: string): string => `//a[text()="${name}"]`,
	DELETE_BOOK_BUTTON: '[title="Delete"]',
	DELETE_ALL_BOOKS_BUTTON: 'Delete All Books',
	OK_BUTTON: '#closeSmallModal-ok',
	NO_DATA_TEXT: '.rt-noData',
};
