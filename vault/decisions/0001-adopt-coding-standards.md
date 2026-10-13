---
id: "0001"
titre: Adopt the coding standards for all application code
date: 2026-10-13
statut: decided
agent: ceo
---

## Décision

The founder adopts [[coding-standards]] as the rules for all application code. Agents apply them when producing or
reviewing application code.

## Contexte

Fredrin ticket FRED-MJXRZN. The founder supplied the standards document in full; it is stored unaltered in
`vault/knowledge/coding-standards.md`.

## Conséquences

- The shared protocol (`.ai/protocol.md`) makes the standards binding on every builder and checker.
- Every rule is either enforced by a tool or checked in review. A rule that cannot be followed needs a written
  exception in the pull request.
- A UI component is done only when the definition of done at the end of the standards is met.
- Changing a rule takes a new decision that amends this one.
