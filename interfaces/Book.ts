export interface Book {
	isbn: string;
	title: string;
	subTitle: string;
	author: string;
	publish_date: string;
	publisher: string;
	pages: number;
	description: string;
	website: string;
	userId: string;
	message: string;
	books: Book[];
}
