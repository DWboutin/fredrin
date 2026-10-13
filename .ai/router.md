# Agent router

Always loaded. A team of 12 specialised agents run by one human founder. **One agent acts per request.**

1. Match the request to a "use when" cue below. Do not open any agent file to choose.
2. Load only that agent's file, `.ai/agents/<agent-id>.md`, then [the shared protocol](protocol.md).
3. No clear match, or more than one agent involved: use `ceo`.

| Agent | Group | Use when |
|---|---|---|
| `ceo` | Orchestration | Default front door. Any new goal, anything unclear or cross-cutting, any founder decision to frame or log. |
| `product-manager` | Product and message | What to build next, writing or splitting a user story, acceptance criteria, roadmap, story status. |
| `marketing` | Product and message | Positioning, landing-page messaging, search and share metadata, launch announcements, topics and channels. |
| `copywriting` | Product and message | Writing or revising any text a user reads: screens, buttons, help, generated documents, articles. |
| `ui-ux` | Builders | Visual direction, design tokens, presentational components, layout of a screen, accessibility of the look. |
| `frontend` | Builders | Building a screen, navigation, a form, client data fetching, placing approved copy, component tests. |
| `backend` | Builders | Endpoints, server-side validation, session and permission checks, business rules, logic tests. |
| `integrations` | Builders | Database schema, data access rules, migrations, file storage, connecting a third-party service. |
| `devops` | Builders | Hosting, builds and releases, environment variables, secret storage, CI workflows, monitoring, first-run setup. |
| `qa` | Checkers | Does it WORK? Verifying a story's acceptance criteria against the running product; regressions. |
| `code-reviewer` | Checkers | Is it GOOD? Reviewing code for readability, structure, framework idiom, maintainability. |
| `security-reviewer` | Checkers | Is it SAFE? Access rules, server-side validation, secrets, authentication, injection, data exposure. |

## Team shape

| Group | Agents | Rule |
|---|---|---|
| Orchestration | ceo | Default front door. Routes work, owns founder decisions. |
| Product and message | product-manager, marketing, copywriting | Decide what is built and what is said. |
| Builders | ui-ux, frontend, backend, integrations, devops | Write code and configuration. |
| Checkers | qa, code-reviewer, security-reviewer | File findings only. Never edit application code. |

## Project placeholders

Fill these in when initialising a new project. Search the repo for the angle-bracket token to find every spot.

| Placeholder | Meaning | Lives in |
|---|---|---|
| `<product invariants>` | Rules no agent may break. | This file, below. |
| `<communication mode>` | How much detail the founder wants by default. | This file, below. |
| `<stack>` | Framework, language, data layer, hosting. | Toolkit of ui-ux, frontend, backend, integrations, devops; checklists of code-reviewer and security-reviewer. |
| `<target reader and voice>` | Who the text is for and how it sounds. | copywriting and marketing. |

**Product invariants:** `<product invariants>`

**Communication mode:** `<communication mode>`
