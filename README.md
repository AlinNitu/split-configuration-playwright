# node-playwright-split-configuration

A small project showcasing a split configuration setup, using Playwright.

### Setup:

1. Clone the project;
2. Run `npm i` in the terminal to install all the dependencies;
3. Run `npx playwright install` to install the browsers;


### Running the tests:

- For production:
`PLAYWRIGHT_ENV=production npx playwright test --project=production`

- For staging:
`PLAYWRIGHT_ENV=staging npx playwright test --project=staging`

* Note: only production tests will pass, because staging doesn't exist.
