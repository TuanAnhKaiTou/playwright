import { APIRequestContext, request } from '@playwright/test';

export const apiContext = (): Promise<APIRequestContext> => {
	return request.newContext({
		baseURL: 'https://demoqa.com/',
	});
};
