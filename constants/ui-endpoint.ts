export const URL = {
	LOGIN_URL: '/login',
	PROFILE_URL: '/profile',
	BOOKS_URL: '/books',
	BOOK_DETAIL_URL: (isbn: string): string => `/books?book=${isbn}`,
} as const;
