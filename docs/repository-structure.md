# Repository structure

This repo is the Express framework implementation plus its tests and examples.

## Top-level

- `index.js`: package entry point (exports `./lib/express`)
- `lib/`: framework implementation (app, request, response, view, utilities)
- `test/`: unit + acceptance tests (mocha + supertest)
- `examples/`: runnable sample applications demonstrating Express patterns
- `History.md`: changelog / release history
- `.github/`: CI workflows, security automation

## `lib/` highlights

- `lib/express.js`: `createApplication()` and exported helpers (`express.json`, `express.urlencoded`, etc.)
- `lib/application.js`: app prototype (`app.use`, `app.get`, `app.listen`, settings, rendering)
- `lib/request.js`: request prototype extensions
- `lib/response.js`: response prototype extensions
- `lib/view.js`: view lookup + rendering integration
- `lib/utils.js`: shared helpers used across the framework

## Notes

- `lib/docdrift_demo_auth.js` exists as an isolated demo module and is **not** part of Express runtime behavior.

