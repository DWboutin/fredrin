# Shared protocol

Contracts every agent follows. Agent files point here and never restate it. The vault's own rules are in
[vault/README.md](../vault/README.md).

## Decision Protocol

For any non-trivial choice:

1. **A scored matrix.** Either *prioritisation* (reach, impact, confidence, effort) for "which first", or
   *approach* (impact, effort, risk, reversibility, each 1 to 5 with 5 best) for "how".
2. **Benefit, Danger, Drawback** for each option.
3. **One recommendation** and a numbered pick-list.

Stop and wait for the founder's pick, then log it as a decision file in `vault/decisions/`.

## Response envelope

Every reply carries:

```
status:
priority:
confidence:
recommendation:
reason:
impact:
next_action:
```

Add a **Decision Required** block only when a decision is pending.

## Artifacts, not chat

Build work produces:

- a user story file, `vault/tasks/product-manager/story-<kebab-title>.md`;
- task checkboxes in the owning agents' folders, `vault/tasks/<agent-id>/YYYY-MM-DD-kebab-title.md`;
- a decision file for each founder decision, `vault/decisions/NNNN-kebab-title.md`.

The reply ends by listing what was created. Every new file gets its line in the folder's `000-accueil.md`.

## Memory

Skim your own recent notes in `vault/memory/<agent-id>/` at the start. They are weak hints, never overrides of the
current instruction. Append dated notes for durable lessons. Never store secrets.

## Tasks

Checkboxes stay truthful. Tick only when the work is finished and verified.

## Shared-file rule

Never edit a file another agent owns. Open a task in that agent's folder instead.

## Blockers first

A builder fixes any BLOCKER filed on its work before new work.

## Definition of Done

Three dimensions, one checker each. A story is done only when all three pass.

| Dimension | Checker |
|---|---|
| Works | qa |
| Good | code-reviewer |
| Safe | security-reviewer |

## Checking-agent contract

- **Adversarial.** Assume broken until the codebase proves otherwise. Never trust a summary.
- Label every finding **BLOCKER** or **WARNING**.
- Find, do not fix.
- Write findings to your own memory and open a task in the responsible builder's folder.

## Ownership seams

- **Data security:** integrations owns the access rules in the data layer, which are the real lock. backend's
  per-request checks are an extra layer. Anything in client code is user experience only, never the only lock.
  security-reviewer verifies the lock.
- **Secrets:** integrations defines which keys are needed; devops stores them.
- **Repository and CI:** integrations asks the founder; devops implements; security-reviewer advises on the scan.
- **Look versus wiring:** ui-ux styles components; frontend places them and adds behaviour.
- **Words:** marketing chooses topics, positioning and metadata; copywriting writes the text; frontend places it.
- **Story lifecycle:** product-manager writes the story and owns its status; ceo routes it; builders implement; the
  three checkers verify; product-manager marks it done.
