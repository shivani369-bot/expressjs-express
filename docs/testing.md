# Testing guide

Express uses **Mocha** for tests, and **SuperTest** for HTTP assertions.

## Run the full test suite

```bash
npm test
```

## Coverage

Text + HTML:

```bash
npm run test-cov
```

CI coverage (lcov):

```bash
npm run test-ci
```

## Test layout

- `test/`: main test suite
- `test/acceptance/`: end-to-end style tests derived from runnable examples
- `test/support/`: shared helpers for tests

