import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const envFilePath = path.resolve('resources', 'env', process.env.ENV || 'test');
require('dotenv').config({ path: `${envFilePath}.env` });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  expect: {
    timeout: 15000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: [['html', { open: 'on-failure' }]], // always, never and on failure
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15000,
  },
  timeout: 1800000,
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // storageState: 'playwright/.auth/user.json',
        launchOptions: {
          args: ["--start-maximized",]
        }
      },
      // dependencies: ['setup'],

    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        // storageState: 'playwright/.auth/user.json',
      },
      // dependencies: ['setup'],
    },


    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // {
    //   name: 'all-browsers-and-tests',
    //   use: {
    //     ...devices['Desktop Chrome']
    //   },
    // },
    // {
    //   name: 'all-browsers-and-tests',
    //   use: {
    //     ...devices['Desktop Safari']
    //   },
    // },
    // {
    //   name: 'all-browsers-and-tests',
    //   use: {
    //     ...devices['Desktop Firefox']
    //   },
    // },
    // /* Test against mobile viewports. */
    // // {
    // //   name: 'Mobile Chrome',
    // //   use: { ...devices['Pixel 5'] },
    // // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
