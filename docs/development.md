# Development guide

## Setup

```bash
npm install
```

## Local workflow

- Run tests while developing:

```bash
npm test
```

- Run lint:

```bash
npm run lint
```

## Code style

The repository uses ESLint (see `.eslintrc.yml`). If you need to auto-fix what ESLint can fix:

```bash
npm run lint:fix
```

## Where to start reading the code

- `index.js` → `lib/express.js` to see what the package exports
- `lib/application.js` for `app.*` APIs and request/response dispatch
- `lib/request.js` and `lib/response.js` for the request/response helpers

