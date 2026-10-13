# fredrin

An "about me" page that doubles as Mike Boutin's resume, built as the application for the
[Senior Software Engineer role at Fredrin](https://www.fredrin.com/careers/senior-software-engineer).

## Stack

- [Next.js](https://nextjs.org) with the App Router, TypeScript
- Jest and React Testing Library for unit tests (`__tests__/`)
- Playwright for end-to-end tests (`e2e/`)
- Storybook for components (`stories/`)

## Install

```sh
git clone https://github.com/DWboutin/fredrin.git
cd fredrin
npm install
npx playwright install chromium
```

## Run locally

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generate route types, then `tsc --noEmit` |
| `npm test` | Jest |
| `npm run test:e2e` | Playwright (starts the dev server itself) |
| `npm run storybook` | Storybook on http://localhost:6006 |

## Vault and agent team

- [`vault/`](vault/README.md) is an Obsidian vault: knowledge, decisions, and per-agent memory and tasks.
- [`.ai/router.md`](.ai/router.md) routes each request to one of 12 agents in `.ai/agents/`, which all follow
  [`.ai/protocol.md`](.ai/protocol.md). The router lists the placeholders to fill in for this project.
