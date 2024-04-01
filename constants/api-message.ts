export const API_MESSAGE = {
	GENERATE_TOKEN_SUCCESS: 'User authorized successfully.',
	GENERATE_TOKEN_FAIL: 'User authorization failed.',
	GENERATE_TOKEN_MISSING_USERNAME_OR_PASSWORD:
		'UserName and Password required.',
	ADD_BOOK_EXISTENT: "ISBN already present in the User's Collection!",
	REPLACE_OR_DELETE_BOOK_NOT_EXISTENT:
		"ISBN supplied is not available in User's Collection!",
	INVALID_ISBN: 'ISBN supplied is not available in Books Collection!',
} as const;
