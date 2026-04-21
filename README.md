SGex Web Tests
===================

Running PlayWright tests on UAT.



### Prepare

```
npm install
npx playwright install
sudo npx playwright install-deps
```

`npx playwright install --with-deps` 
This installs all browsers (Chromium, Firefox, WebKit)

Use only chromium
```
npx playwright install chromium --with-deps
```



### Run 

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

### My tests

```
npx playwright test --project=chromium
```

```
npm run test:chromium
npm run test:guest-catalogue
npm run test:guest-series
npm run test:guest-episode
npm run test:guest-search
```


