import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './snapshots',
	fullyParallel: false,
	forbidOnly: !!process.env.CI,
	retries: 2,
	workers: process.env.CI ? 1 : 3,
	timeout: 800 * 1000,
	globalSetup: require.resolve('./tests/global-setup'),
	globalTeardown: require.resolve('./tests/global-teardown'),
	reporter: [
		[
			'list',
			{
				printSteps: true,
			},
		],
		[
			'html',
			{
				outputFolder: './reports/html',
				fileName: 'result.html',
			},
		],
		[
			'junit',
			{
				outputFolder: './reports/junit',
				fileName: 'result.xml',
			},
		],
		[
			'allure-playwright',
			{
				detail: true,
				outputFolder: './reports/allure',
				suiteTitle: false,
			},
		],
	],
	use: {
		baseURL: 'https://demoqa.com/',
		screenshot: 'on',
		video: 'on',
		viewport: {
			width: 1280,
			height: 720,
		},
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				channel: 'chrome',
				viewport: {
					width: 1920,
					height: 1080,
				},
			},
		},
		// {
		// 	name: 'Microsoft Edge',
		// 	use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		// 	name: 'firefox',
		// 	use: { ...devices['Desktop Firefox'] },
		// },
		// {
		// 	name: 'webkit',
		// 	use: { ...devices['Desktop Safari'] },
		// },
		/* Test against mobile view ports. */
		// {
		//   name: "Mobile Chrome",
		//   use: { ...devices["Pixel 5"] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://127.0.0.1:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
});
