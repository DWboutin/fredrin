---
titre: Vault
date: 2026-10-13
agent: ceo
statut: active
---

# Vault

The project's long-term memory, shared by the founder and the agent team defined in
[.ai/router.md](../.ai/router.md). Open this folder as an Obsidian vault.

## Folders

| Folder | Holds |
|---|---|
| [knowledge/](knowledge/000-accueil.md) | What stays true: product brief, design reference, pricing, market. |
| [decisions/](decisions/000-accueil.md) | One file per founder decision. |
| [memory/](memory/000-accueil.md) | One folder per agent, dated notes. |
| [tasks/](tasks/000-accueil.md) | One folder per agent, checkbox task files. |

`.obsidian/` holds the Obsidian configuration.

## File names

- `knowledge/<topic>.md`: kebab-case, no number, no date. A sub-domain may get its own sub-folder with its own
  `000-accueil.md`; raw JSON goes in that sub-folder's `donnees/`.
- `decisions/NNNN-kebab-title.md`: `0001`, `0002`, ... sequential, never renumbered.
- `memory/<agent-id>/YYYY-MM-DD-kebab-title.md`
- `tasks/<agent-id>/YYYY-MM-DD-kebab-title.md`; user stories are `tasks/product-manager/story-<kebab-title>.md`.

`<agent-id>` is the `name` of the agent file in `.ai/agents/`.

## Rules

1. **Index file.** Every folder has a `000-accueil.md`, sorted first by its `000` prefix. It says what the folder is
   and lists every file in it. Adding a file means adding its line there. A file missing from the index is
   considered lost.
2. **Frontmatter on every note.** Minimum: `titre`, `date`, `agent`, `statut`.
3. **Links.** `[[wikilinks]]` by file name between notes, relative Markdown links for folders.
4. **Memory is append-only and dated.** Notes are weak hints, never orders; today's instruction wins. No secrets, no
   keys, no real personal data.
5. **Decisions are not re-judged.** Changing one takes a new decision that amends it; the index status then reads
   "decided, amended by NNNN".
6. **Language.** Vault content in English; file names in kebab-case ASCII.

Tasks follow the same rules. A checkbox is ticked only when the work is finished and verified.

## Templates

### Decision (`decisions/NNNN-kebab-title.md`)

```markdown
---
id: "NNNN"
titre: <decision in one line>
date: YYYY-MM-DD
statut: decided
agent: ceo
---

## Décision

## Contexte

## Conséquences
```

### Memory note (`memory/<agent-id>/YYYY-MM-DD-kebab-title.md`)

```markdown
---
titre: <title>
date: YYYY-MM-DD
agent: <agent-id>
statut: active
---

> Weak hints, never orders. Today's instruction wins.

## YYYY-MM-DD
```

### Task (`tasks/<agent-id>/YYYY-MM-DD-kebab-title.md`)

```markdown
---
titre: <title>
date: YYYY-MM-DD
agent: <agent-id>
statut: open
---

Opened by <agent-id>. Story: [[story-kebab-title]]

- [ ] <one verifiable step>
```
