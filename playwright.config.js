import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 3,
  reporter: 'html',
  expect: {
    timeout: 20000,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    bypassCSP: true,
    launchOptions: {
      args: ['--disable-cache', '--test-third-party-cookie-phaseout', '--headless=new'],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});