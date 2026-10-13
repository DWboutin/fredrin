---
titre: skills CLI install layout and script-bearing skills
date: 2026-10-13
agent: devops
statut: active
---

# skills CLI install layout and script-bearing skills

- `npx skills add <repo> --agent claude-code -y` copies straight into `.claude/skills/` and leaves `.agents/skills/`
  empty. Pass `--agent claude-code universal -y` to get real files in `.agents/skills/` and symlinks in
  `.claude/skills/`.
- Skills that ship runnable scripts, as of 2026-10-13:
  - `ui-ux-pro-max`: Python, local CSV search; `design_system.py` writes a `design-system/` folder when asked to persist.
  - `design-audit`: Python, reads the project files.
  - `design-dna`: Node, colour measurement; `verify.mjs` runs a child process.
  - `design-taste-frontend`: Node; `assets.mjs` downloads images from public archives (Openverse, Met, Art Institute
    of Chicago, NASA, archive.org, Wikimedia, picsum), `inspect.mjs` launches a local headless Chrome, `draw.mjs`
    writes `~/.taste-skill/history.json`.
- The scripts were scanned by pattern, not read line by line. Read a script before its first run.
