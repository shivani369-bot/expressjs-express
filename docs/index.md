# Express (repo documentation)

This folder documents the **source repository** for Express (`express` on npm), including how to develop on it, run tests, and navigate the code.

## What is this repo?

Express is a fast, unopinionated, minimalist web framework for Node.js.

- **Package name**: `express`
- **Entry point**: `index.js` → `lib/express.js`
- **Runtime code**: `lib/`
- **Tests**: `test/`
- **Example apps**: `examples/`

## Getting started (local development)

### Requirements

- Node.js **>= 18** (see `package.json` → `engines.node`)

### Install

```bash
npm install
```

### Run tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

### Useful scripts

See `package.json` for the full list. Common ones:

- `npm test`: run the mocha test suite
- `npm run test-cov`: coverage report (nyc)
- `npm run lint`: eslint

## Repo map

- [`Repository structure`](./repository-structure.md)
- [`Development guide`](./development.md)
- [`Testing guide`](./testing.md)
- [`Running examples`](./examples.md)

## External docs

- Express website + user docs: `https://expressjs.com/`
- Migration guide to v5: `https://expressjs.com/en/guide/migrating-5`

