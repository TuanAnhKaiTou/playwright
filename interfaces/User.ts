import { Book } from './Book';

export interface User {
	userID: string;
	username: string;
	password: string;
	books: Book[];
	message: string;
	token: string;
	expires: string;
	status: string;
	result: string;
}
