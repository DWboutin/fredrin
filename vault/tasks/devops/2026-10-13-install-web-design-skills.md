---
titre: Install web design agent skills
date: 2026-10-13
agent: devops
statut: done
---

# Install web design agent skills

Ticket FRED-7EPRW0. Skills installed with the `skills` CLI (1.7.2) into `.agents/skills/`, symlinked from
`.claude/skills/`, recorded in `skills-lock.json`.

- [x] Scan the shipped scripts and skill text of the 8 source repositories before installing
- [x] Install the 26 web design skills from 7 repositories
- [x] Install `ponytail` from `DietrichGebert/ponytail`
- [x] Verify 27 real `SKILL.md` files, 27 symlinks, 27 lock entries with source and hash

## Findings

- The ticket says only `ui-ux-pro-max` ships scripts. Upstream now also ships scripts in `design-taste-frontend`,
  `design-audit` and `design-dna`. See [[2026-10-13-skills-cli-install-layout]].
- No skill was renamed or removed upstream.
