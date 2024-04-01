import { RequestOption } from '@interfaces/RequestOption';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiHelper {
	private request: APIRequestContext;

	constructor(requestContext: APIRequestContext) {
		this.request = requestContext;
	}

	async get(url: string, options?: RequestOption): Promise<APIResponse> {
		console.log(`Sending request with GET method to ${url}\n\r`);
		return await this.request.get(url, { ...options, failOnStatusCode: false });
	}

	async post(url: string, options?: RequestOption): Promise<APIResponse> {
		console.log(`Sending request with POST method to ${url}`);
		if (options?.data)
			console.log(`JSON request: ${JSON.stringify(options.data)}\n\r`);
		return await this.request.post(url, {
			...options,
			failOnStatusCode: false,
		});
	}

	async put(url: string, options?: RequestOption): Promise<APIResponse> {
		console.log(`Sending request with PUT method to ${url}`);
		if (options?.data)
			console.log(`JSON request: ${JSON.stringify(options.data)}\n\r`);
		return await this.request.put(url, { ...options, failOnStatusCode: false });
	}

	async patch(url: string, options?: RequestOption): Promise<APIResponse> {
		console.log(`Sending request with PATCH method to ${url}`);
		if (options?.data)
			console.log(`JSON request: ${JSON.stringify(options.data)}\n\r`);
		return await this.request.patch(url, {
			...options,
			failOnStatusCode: false,
		});
	}

	async delete(url: string, options?: RequestOption): Promise<APIResponse> {
		console.log(`Sending request with DELETE method to ${url}`);
		if (options?.data)
			console.log(`JSON request: ${JSON.stringify(options.data)}\n\r`);
		return await this.request.delete(url, {
			...options,
			failOnStatusCode: false,
		});
	}

	async dispose() {
		await this.request.dispose();
	}
}
