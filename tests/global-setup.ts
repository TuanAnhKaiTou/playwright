import type { FullConfig } from '@playwright/test';
import { generateToken } from 'api/services/user.service';
import { Token } from '@core/types';
import * as user from '@data/user.json';

async function globalSetup(config: FullConfig) {
	console.log('Global setup is running\n\r');
	const generateTokenResponse = await generateToken(user);
	const token = (await generateTokenResponse.json()) as Token;
	process.env.TOKEN = token.token;
}

export default globalSetup;
