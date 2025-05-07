# playwright-sample

This project is a sample Playwright project that demonstrates how to use Playwright for end-to-end testing.

This is a sample Playwright project.



## Authentication

This project demonstrates how to handle authentication in Playwright tests.

### Cases with Authentication

-   `tests/test-1.public.ts`: This test case checks if the Login button is visible on the page when the user is not authenticated.
### Bonus Report Verification Tests

-   `tests/verify-bonus.spec.ts`: This test suite verifies the bonus reports for different URLs. It iterates through a list of URLs defined in `utils/bonus-urls.ts` and checks if the report can be displayed correctly.

## Getting Started

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Run the tests:

    ```bash
    npx playwright test --workers=3
    ```
