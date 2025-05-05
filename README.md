# playwright-sample

This project is a sample Playwright project that demonstrates how to use Playwright for end-to-end testing.

This is a sample Playwright project.



## Authentication

This project demonstrates how to handle authentication in Playwright tests.

### Cases with Authentication

-   `tests/test-1.spec.ts`: This test case requires authentication. It uses the `base` test setup, which navigates to the main page after authentication. The authentication state is managed by `tests/auth.setup.ts` and stored in `playwright/.auth/user.json`.

### Cases without Authentication

-   `tests/test-1.public.ts`: This test case does not require authentication. It directly navigates to the base URL and checks for the "Login" button.

## Getting Started

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Run the tests:

    ```bash
    npx playwright test --workers=3
    ```
