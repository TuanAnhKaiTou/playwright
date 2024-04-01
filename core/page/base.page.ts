import { BrowserContext, Locator, Page } from '@playwright/test';
import { IPage } from './page';
import {
	Button,
	LoadState,
	ModifierActions,
	StateOfElement,
	WaitUntil,
} from '@core/types';

export default class BasePage implements IPage {
	readonly page: Page;
	readonly context: BrowserContext;

	constructor(page: Page) {
		this.page = page;
		this.context = page.context();
	}

	async goto(
		url: string,
		options?: {
			timeout?: number;
			waitUntil?: WaitUntil;
		},
	): Promise<void> {
		await this.page.goto(url, options);
	}

	async goForward(options?: {
		timeout?: number;
		waitUntil?: WaitUntil;
	}): Promise<void> {
		await this.page.goForward(options);
	}

	async goBack(options?: {
		timeout?: number;
		waitUntil?: WaitUntil;
	}): Promise<void> {
		await this.page.goBack(options);
	}

	async reload(options?: {
		timeout?: number;
		waitUntil?: WaitUntil;
	}): Promise<void> {
		await this.page.reload(options);
	}

	async getTitle(): Promise<string> {
		return await this.page.title();
	}

	getURL(): string {
		return this.page.url();
	}

	locator(selector: string): Locator {
		return this.page.locator(selector);
	}

	async screenshot(options?: {
		animations: 'disabled';
		fullPage: true;
		type?: 'png' | 'jpeg';
		timeout?: number;
	}): Promise<Buffer> {
		return this.page.screenshot(options);
	}

	async check(
		locator: Locator,
		options?: { force?: boolean; timeout?: number },
	): Promise<void> {
		await locator.check(options);
	}

	async clear(
		locator: Locator,
		options?: { force?: boolean; timeout?: number },
	): Promise<void> {
		await locator.clear(options);
	}

	async click(
		locator: Locator,
		index?: number,
		options?: {
			button?: Button;
			clickCount?: number;
			delay?: number;
			force?: boolean;
			modifiers?: [ModifierActions];
			position?: { x: number; y: number };
			timeout?: number;
		},
	): Promise<void> {
		if (index) await locator.nth(index).click(options);
		await locator.click(options);
	}

	async dblclick(
		locator: Locator,
		index?: number,
		options?: {
			button?: Button;
			clickCount?: number;
			delay?: number;
			force?: boolean;
			modifiers?: [ModifierActions];
			position?: { x: number; y: number };
			timeout?: number;
		},
	): Promise<void> {
		if (index) await locator.nth(index).dblclick(options);
		await locator.dblclick(options);
	}

	async dragTo(
		source: Locator,
		target: Locator,
		options?: {
			force?: boolean;
			position?: { x: number; y: number };
			timeout?: number;
		},
	): Promise<void> {
		await source.dragTo(target, options);
	}

	async fill(
		locator: Locator,
		value: string,
		options?: { force?: boolean; timeout?: number },
	): Promise<void> {
		await locator.fill(value, options);
	}

	async focus(locator: Locator, options?: { timeout?: number }): Promise<void> {
		await locator.focus(options);
	}

	async hover(
		locator: Locator,
		options?: {
			force?: boolean;
			modifiers?: [ModifierActions];
			position?: { x: number; y: number };
			timeout?: number;
		},
	): Promise<void> {
		await locator.hover(options);
	}

	async getInnerHTML(
		locator: Locator,
		options?: { timeout?: number },
	): Promise<string> {
		return await locator.innerHTML(options);
	}

	async uncheck(
		locator: Locator,
		options?: { force?: boolean; timeout?: number },
	): Promise<void> {
		await locator.uncheck(options);
	}

	async press(
		locator: Locator,
		key: string,
		options?: { delay?: number; timeout?: number },
	): Promise<void> {
		await locator.press(key, options);
	}

	async waitForPageLoad(
		state?: LoadState,
		options?: {
			timeout?: number;
		},
	): Promise<IPage> {
		await this.page.waitForLoadState(state, options);
		return this;
	}

	async waitForElement(
		locator: Locator,
		options?: {
			state?: StateOfElement;
			timeout?: number;
		},
	): Promise<void> {
		await locator.waitFor(options);
	}

	async waitForElementToBeVisible(locator: Locator): Promise<void> {
		await this.waitForElement(locator, { state: 'visible' });
	}

	async waitForElementToBeHidden(locator: Locator): Promise<void> {
		await this.waitForElement(locator, { state: 'hidden' });
	}
}
