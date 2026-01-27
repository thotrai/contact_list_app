import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /* Where Playwright looks for tests */
  testDir: './tests',
  /* Allow tests in the same file to run in parallel */
  fullyParallel: true,
  /* Prevent committing test.only */
  forbidOnly: !!process.env.CI,
  /* Retry strategy */
  retries: process.env.CI ? 2 : 0,
  /* Workers configuration */
  workers: process.env.CI ? 1 : undefined,
  /* Test report */
  reporter: 'html',
  /* Shared settings for all tests */
  use: {
    baseURL: 'https://thinking-tester-contact-list.herokuapp.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
