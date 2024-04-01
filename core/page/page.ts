import {
	Button,
	LoadState,
	ModifierActions,
	StateOfElement,
	WaitUntil,
} from '@core/types';
import { Locator } from '@playwright/test';

export interface IPage {
	/* -------------- Page -------------- */
	goto(
		url: string,
		options?: {
			timeout?: number;
			waitUntil?: WaitUntil;
		},
	): Promise<void>;

	goBack(options?: { timeout?: number; waitUntil?: WaitUntil }): Promise<void>;

	goForward(options?: {
		timeout?: number;
		waitUntil?: WaitUntil;
	}): Promise<void>;

	reload(options?: { timeout?: number; waitUntil?: WaitUntil }): Promise<void>;

	getTitle(): Promise<string>;

	getURL(): string;

	locator(selector: string): Locator;

	screenshot(options?: {
		animations: 'disabled';
		fullPage: true;
		type?: 'png' | 'jpeg';
		timeout?: number;
	}): Promise<Buffer>;

	/* -------------- Locator -------------- */
	check(
		locator: Locator,
		options?: {
			force?: boolean;
			timeout?: number;
		},
	): Promise<void>;

	clear(
		locator: Locator,
		options?: { force?: boolean; timeout?: number },
	): Promise<void>;

	click(
		locator: Locator,
		index?: number,
		options?: {
			button?: Button;
			clickCount?: number;
			delay?: number;
			force?: boolean;
			modifiers?: [ModifierActions];
			position?: {
				x: number;
				y: number;
			};
			timeout?: number;
		},
	): Promise<void>;

	dblclick(
		locator: Locator,
		index?: number,
		options?: {
			button?: Button;
			clickCount?: number;
			delay?: number;
			force?: boolean;
			modifiers?: [ModifierActions];
			position?: {
				x: number;
				y: number;
			};
			timeout?: number;
		},
	): Promise<void>;

	dragTo(
		source: Locator,
		target: Locator,
		options?: {
			force?: boolean;
			position?: {
				x: number;
				y: number;
			};
			timeout?: number;
		},
	): Promise<void>;

	fill(
		locator: Locator,
		value: string,
		options?: {
			force?: boolean;
			timeout?: number;
		},
	): Promise<void>;

	focus(locator: Locator, options?: { timeout?: number }): Promise<void>;

	hover(
		locator: Locator,
		options?: {
			force?: boolean;
			modifiers?: [ModifierActions];
			position?: {
				x: number;
				y: number;
			};
			timeout?: number;
		},
	): Promise<void>;

	getInnerHTML(
		locator: Locator,
		options?: { timeout?: number },
	): Promise<string>;

	uncheck(
		locator: Locator,
		options?: {
			force?: boolean;
			timeout?: number;
		},
	): Promise<void>;

	press(
		locator: Locator,
		key: string,
		options?: {
			delay?: number;
			timeout?: number;
		},
	): Promise<void>;

	/* -------------- Wait -------------- */
	waitForPageLoad(
		state?: LoadState,
		options?: {
			timeout?: number;
		},
	): Promise<IPage>;

	// wait of Locator
	waitForElement(
		locator: Locator,
		options?: {
			state?: StateOfElement;
			timeout?: number;
		},
	): Promise<void>;

	waitForElementToBeVisible(locator: Locator): Promise<void>;

	waitForElementToBeHidden(locator: Locator): Promise<void>;
}
