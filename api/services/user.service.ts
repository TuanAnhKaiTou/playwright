import { apiContext } from '@core/api/api-context';
import { ApiHelper } from '@core/helpers/api.helper';
import { UserEndpoints } from 'api/endpoints/user.endpoint';

type User = {
	username: string;
	password: string;
};

export const authorizedUser = async (user: User) => {
	const request = new ApiHelper(await apiContext());
	return await request.post(UserEndpoints.AUTHORIZED_ENDPOINT, {
		headers: {
			['Content-Type']: 'application/json',
		},
		data: {
			userName: user.username,
			password: user.password,
		},
	});
};

export const generateToken = async (user: User) => {
	const request = new ApiHelper(await apiContext());
	return await request.post(UserEndpoints.GENERATE_TOKEN_ENDPOINT, {
		headers: {
			['Content-Type']: 'application/json',
		},
		data: {
			userName: user.username,
			password: user.password,
		},
	});
};

export const createUser = async (user: User) => {
	const request = new ApiHelper(await apiContext());
	return await request.post(UserEndpoints.CREATE_USER_ENDPOINT, {
		headers: {
			['Content-Type']: 'application/json',
		},
		data: {
			userName: user.username,
			password: user.password,
		},
	});
};

export const getUser = async (userId: string) => {
	const { TOKEN } = process.env;
	const request = new ApiHelper(await apiContext());
	return await request.get(UserEndpoints.GET_USER_ENDPOINT(userId), {
		headers: {
			['Authorization']: `Bearer ${TOKEN}`,
		},
	});
};

export const deleteUser = async (userId: string) => {
	const { TOKEN } = process.env;
	const request = new ApiHelper(await apiContext());
	return await request.delete(UserEndpoints.DELETE_USER_ENDPOINT(userId), {
		headers: {
			['Authorization']: `Bearer ${TOKEN}`,
		},
	});
};
