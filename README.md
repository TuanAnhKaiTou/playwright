# Playwright

Playwright TypeScript Automation Framework

## Introduction

- Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast. Headless execution is supported for all browsers on all platforms.
- As Playwright is written by the creators of the Puppeteer, you would find a lot of similarities between them.
- Playwright has its own test runner for end-to-end tests, we call it Playwright Test.
- Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
- Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
- Cross-language. Use the Playwright API in TypeScript, JavaScript, Python, .NET, Java. The core framework is implemented using TypeScript.
- Playwright development is sponsored by Microsoft.

[Github](https://github.com/microsoft/playwright)
[Documentation](https://playwright.dev/docs/intro)
[API reference](https://playwright.dev/docs/api/class-playwright/)

## Description

This is an automation framework using Playwright written in TypeScript.

## Framework Structures

```text
playwright
├─ .github                                            # GitHub Actions
├─ api
│  ├─ endpoints                                       # All of endpoint for API
│  └─ services                                        # Execute call API
├─ constants                                          # All of variables constant
├─ core
│  ├─ api                                             # Setup for API
│  ├─ helpers                                         # Functions/Methods helper for test
│  ├─ page                                            # Setup the Base Page
│  ├─ utils                                           # Functions or methods common
│  └─ types.d.ts                                      # Declare types
├─ data                                               # Data storage for test
├─ fixtures                                           # Playwright fixtures
├─ interfaces                                         # The interface using for test
├─ pages                                              # Page objects
│  ├─ locators                                        # Locators of page
│  └─ *.page.ts
├─ tests
│  ├─ api                                             # API test
│  ├─ ui                                              # UI test
│  ├─ global-setup.ts                                 # Global setup file
│  └─ global-teardown.ts                              # Global teardown file
├─ playwright.config.ts                               # Playwright configuration file
├─ azure-pipelines.yml                                # Azure Pipeline file
└─ tsconfig.json                                      # Configuration file for TS
```

## Requirements

```text
Visual Code
NodeJS version
Playwright
```

## Installation

### Install NodeJs

- Go to <https://nodejs.org/en/download/> and download the latest version of NodeJs
- Check the version of NodeJs

```bash
node -v
```

### Install dependencies

```bash
yarn -f
```

## Running tests

### Command line

You can run your tests with the `playwright test` command. This will run your tests on all browsers as configured in the `playwright.config` file. Tests run in headless mode by default meaning no browser window will be opened while running the tests and results will be seen in the terminal.

```bash
npm run test
```

### Run tests in UI mode

```bash
npm run test:ui
```

### Run tests in headed mode

To run your tests in headed mode, use the --headed flag. This will give you the ability to visually see how Playwright interacts with the website.

```bash
npm run test:headed
```

### Run tests on different browsers

To specify which browser you would like to run your tests on, use the `--project` flag followed by the name of the browser.

```bash
npm run test -- --project webkit
```

To specify multiple browsers to run your tests on, use the `--project` flag multiple times followed by the name of each browser.

```bash
npm run test -- --project webkit -- --project firefox
```

### Run specific tests

To run a single test file, pass in the name of the test file that you want to run.

```bash
npm run test login.spec.ts
```

To run a set of test files from different directories, pass in the names of the directories that you want to run the tests in.

```bash
npm run test tests/api/ tests/ui/
```

To run files that have `book` or `login` in the file name, simply pass in these keywords to the CLI.

```bash
npm run test book login
```

To run a test with a specific title, use the `-g` flag followed by the title of the test.

```bash
npm run test -- -g "should go to profile page when login with valid account"
```

### Run tests with tags

You can now run tests that have a particular tag with `--grep` command line option.

```bash
npm run test -- --grep @login
```

Or if you want the opposite, you can skip the tests with a certain tag

```bash
npm run test -- --grep-invert @login
```

To run tests containing either tag (logical `OR` operator)

```bash
npm run test -- --grep "@login|@book"
```

Or run tests containing both tags (logical `AND` operator) using regex lookaheads

```bash
npm run test -- --grep "(?=.*@login)(?=.*@book)"
```

### Run tests in VS Code

Tests can be run right from VS Code using the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Once installed you can simply click the green triangle next to the test you want to run or run all tests from the testing sidebar. Check out playwright [Getting Started with VS Code](https://playwright.dev/docs/getting-started-vscode#running-tests) guide for more details.

## References

1. Playwright document: <https://playwright.dev/docs/intro>
2. Plugin Allure: <https://www.npmjs.com/package/allure-playwright>
3. Prettier: <https://prettier.io/docs/en/options.html>
4. Config Azure pipeline: <https://playwright.dev/docs/ci#azure-pipelines>
