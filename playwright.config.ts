import { defineConfig, devices } from "@playwright/test";

const browsers = [
  {
    name: "chromium",
    device: "Desktop Chrome",
  },
  {
    name: "firefox",
    device: "Desktop Firefox",
  },
  {
    name: "edge",
    device: "Microsoft Edge",
    channel: "msedge",
  },
];

const configuration = [
  {
    suffix: "",
    testMatch: /.*\.spec\.ts/,
    storageState: "playwright/.auth/user.json",
  },
  { suffix: "-non-auth", testMatch: /.*\.public\.ts/ },
];

interface Project {
  name: string;
  use?: {
    [key: string]: any;
    storageState?: string;
    channel?: string;
  };
  dependencies?: string[];
  testMatch?: RegExp;
}

const projects: Project[] = [];
const setupProject: Project = {
  name: "setup",
  testMatch: /.*\.setup\.ts/,
};
// Pre-authentication project
projects.push(setupProject);

// Loop through the configuration and browsers to create projects
configuration.forEach((config) => {
  browsers.forEach((browser) => {
    const project = {
      name: `${browser.name}${config.suffix}`,
      use: {
        ...devices[browser.device],
        storageState: config.storageState,
        channel: browser.channel,
      },
      testMatch: config.testMatch,
      dependencies: ["setup"],
    };
    projects.push(project);
  });
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: projects,

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
