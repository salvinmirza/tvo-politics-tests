# TVO Politics Page Cypress Automation Project

- 9 automated test cases implemented
- Page Object Model for clean separation of test logic
- Test categorization using `TestFilters` to support different types of test suites (e.g., SMOKE, REGRESSION)
- HTML reporting via Mochawesome


## How to Run the Tests

Install dependencies:
```
npm install
```

Run all tests in the Cypress UI:
```
npx cypress open
```

Run tests and view report:
```
npm run test:with:report
```

Run only SMOKE or REGRESSION tests (based on tags):

```
npm run test:smoke
```


## Assumptions

- Only the "Politics" section was in scope. No search, social media links TCs are added.
- Cypress default browser is used; cross-browser and parallel support can be added via CLI or CI pipeline.
- Not adding caseID from JIRA tickets
