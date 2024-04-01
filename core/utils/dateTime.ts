export const convertToUTCString = (dateTime: string): string => {
	const date = new Date(dateTime).toUTCString();
	return date;
};

export const formatDate = (date: string | number): string => {
	return new Date(date).toLocaleDateString('en-GB');
};

export const tomorrow = (): string => {
	const date = new Date();
	const tomorrow = date.setDate(date.getDate() + 1);
	return formatDate(tomorrow);
};

export const yesterday = (): string => {
	const date = new Date();
	const yesterday = date.setDate(date.getDate() - 1);
	return formatDate(yesterday);
};
