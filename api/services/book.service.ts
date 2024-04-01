import { apiContext } from '@core/api/api-context';
import { ApiHelper } from '@core/helpers/api.helper';
import { CollectionOfIsbn } from '@core/types';
import { BookEndpoints } from 'api/endpoints/book.endpoint';

export const getListBooks = async () => {
	const request = new ApiHelper(await apiContext());
	return await request.get(BookEndpoints.GET_LIST_BOOKS);
};

export const getBook = async (isbn: string) => {
	const request = new ApiHelper(await apiContext());
	return await request.get(BookEndpoints.GET_BOOK(isbn));
};

export const deleteAllBooks = async (userId: string) => {
	const { TOKEN } = process.env;
	const request = new ApiHelper(await apiContext());
	return await request.delete(BookEndpoints.DELETE_ALL_BOOKS(userId), {
		headers: {
			['Authorization']: `Bearer ${TOKEN}`,
		},
	});
};

export const deleteBook = async (userId: string, isbn: string) => {
	const { TOKEN } = process.env;
	const request = new ApiHelper(await apiContext());
	return await request.delete(BookEndpoints.DELETE_BOOK, {
		headers: {
			['Authorization']: `Bearer ${TOKEN}`,
			['Content-Type']: 'application/json',
		},
		data: {
			userId: userId,
			isbn: isbn,
		},
	});
};

export const addBook = async (
	userId: string,
	collectionOfIsbns: CollectionOfIsbn[],
) => {
	const { TOKEN } = process.env;
	const request = new ApiHelper(await apiContext());
	return await request.post(BookEndpoints.ADD_BOOK, {
		headers: {
			['Authorization']: `Bearer ${TOKEN}`,
			['Content-Type']: 'application/json',
		},
		data: {
			userId: userId,
			collectionOfIsbns: collectionOfIsbns,
		},
	});
};

export const replaceBook = async (
	isbnOld: string,
	userId: string,
	isbnNew: string,
) => {
	const { TOKEN } = process.env;
	const request = new ApiHelper(await apiContext());
	return await request.put(BookEndpoints.REPLACE_BOOK(isbnOld), {
		headers: {
			['Authorization']: `Bearer ${TOKEN}`,
			['Content-Type']: 'application/json',
		},
		data: {
			userId: userId,
			isbn: isbnNew,
		},
	});
};
