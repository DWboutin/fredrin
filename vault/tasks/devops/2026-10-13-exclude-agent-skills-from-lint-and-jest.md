---
titre: Exclude .agents/ from ESLint and Jest
date: 2026-10-13
agent: devops
statut: done
---

Opened by ui-ux. Found while working on Fredrin ticket FRED-BAAZRY.

`npm run lint` and `npm test` exit 1 on `main` because they pick up the installed skill scripts:
ESLint reports 3 `react-hooks/rules-of-hooks` errors in `.agents/skills/design-taste-frontend/scripts/assets.mjs`,
and Jest collects `.agents/skills/design-dna/scripts/test/color-measurement.test.mjs`, which is not a Jest test.

- [x] Add `.agents/**` to `globalIgnores` in `eslint.config.mjs`
- [x] Add `<rootDir>/.agents/` to `testPathIgnorePatterns` in `jest.config.ts`
- [x] `npm run lint` and `npm test` exit 0
