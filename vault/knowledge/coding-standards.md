---
titre: Coding standards
date: 2026-10-13
agent: ceo
statut: active
---

# Coding standards

Applies to all application code. Every rule is either enforced by a tool or checked in review. A rule that cannot be followed needs a written exception in the pull request.

## 1. Styles: SCSS with BEM

- All styles are written in SCSS. No inline styles, no CSS-in-JS, no utility-class framework.
- One SCSS file per component, next to the component, with the same base name.
- Class names follow BEM: `block`, `block__element`, `block--modifier`, `block__element--modifier`. Lowercase, words separated by a single hyphen.
- The block name equals the component name in kebab-case (`UserCard` → `user-card`).
- One block per file. A block never styles another block's elements.
- No element of an element: `card__header__title` is forbidden, use `card__title`.
- Selectors are single classes. No ids, no tag selectors, no descendant chains, no `!important`.
- Use `&` nesting only to build BEM names and for states (`&:hover`, `&:focus-visible`, `&[aria-expanded='true']`) and media queries. Maximum nesting depth: 2.
- State comes from modifiers or ARIA attributes, never from a generic `.is-active` class.
- Colours, spacing, type sizes, radii, durations and z-index come from design tokens. No raw values in component files.
- Layout that positions a component (margin, grid placement) belongs to the parent block.

```scss
.user-card {
  padding: $space-4;

  &__title {
    font-size: $font-size-lg;
  }

  &--compact {
    padding: $space-2;
  }

  &:focus-visible {
    outline: $focus-ring;
  }
}
```

## 2. Modules: named exports only

- **No default exports.** Every export is named, so a symbol has one name across the codebase.
- **No barrel files.** No `index.ts` that re-exports other modules. Import from the file that defines the symbol.
- No `export *`.
- Closed list of exceptions, only where a tool requires a default export: Storybook `meta`, tool configuration files, framework entry files that mandate it. Nothing else.

```ts
// Correct
import { Button } from '@/components/button/Button';

// Forbidden
import Button from '@/components/button/Button';
import { Button } from '@/components';
```

## 3. Components: one per file

- One component per file. The file name equals the component name in PascalCase.
- No helper component declared in the same file, even a small or private one.
- A component file contains markup and wiring only: no data fetching, no business rules, no state machine. That logic lives in a hook (section 4).
- Props are a named, exported type: `ButtonProps`.

Folder for a UI component:

```
button/
├── Button.tsx
├── Button.scss
├── Button.stories.tsx
├── Button.test.tsx
└── useButton.ts          # only if the component has logic
```

## 4. Logic: custom hooks returning `{ selectors, actions }`

- Any state, effect, derived value or event handling beyond trivial wiring is extracted into a custom hook named `use<ComponentOrFeature>`.
- One hook per file, named export, file named after the hook.
- A hook returns exactly one object with two keys:
  - `selectors`: state and derived values, read-only for the component.
  - `actions`: functions the component can call. They have stable identities.
- Both keys are always present, even when one is empty.
- No other top-level key, no tuple, no bare value.
- The component never calls state setters directly; it calls actions.
- Hooks do not return JSX and do not touch styles.
- The return type is declared explicitly and exported.

```ts
export type UseDropdownResult = {
  selectors: { isOpen: boolean; activeIndex: number };
  actions: { open: () => void; close: () => void; select: (index: number) => void };
};

export function useDropdown(options: UseDropdownOptions): UseDropdownResult {
  // ...
  return {
    selectors: { isOpen, activeIndex },
    actions: { open, close, select },
  };
}
```

```tsx
export function Dropdown(props: DropdownProps) {
  const { selectors, actions } = useDropdown(props);
  // markup only
}
```

## 5. Tests: required for every UI component

Every UI component (button, card, dropdown, and so on) ships with all four layers. A component without them is not done.

| Layer | What it proves | Minimum content |
|---|---|---|
| Storybook file | The component renders in isolation in every state | One story per variant, size and state: default, hover, focus, disabled, loading, error, empty, long content |
| Unit tests | Behaviour and the hook contract | Rendering per prop, each action, each selector, keyboard handling, ARIA attributes, edge inputs |
| Visual regression | Nothing changed visually by accident | A snapshot of every story, at mobile and desktop widths, in each theme |
| Browser interaction test | It works in a real browser | Pointer and keyboard interaction on the stories, focus order, an automated accessibility scan |

- End-to-end tests cover user flows across pages, not single components. Every flow that uses a component is covered by at least one end-to-end test.
- Hooks are unit-tested on their own, through `selectors` and `actions`.
- Tests query by role and accessible name, never by class name or test id when a role exists.
- A visual snapshot is updated only in a pull request that states why the change is intended.
- All four layers run in CI and block the merge.

## 6. Accessibility

- **WCAG 2.2 level AA is mandatory** for every screen and component. A failure blocks the merge.
- **Level AAA is the target.** Each AAA criterion that is not met is listed, with the reason, in the component's documentation.
- Everything is operable with the keyboard alone, in a logical focus order, with no trap.
- Focus is always visible. Never remove an outline without a replacement of equal contrast.
- Text contrast: at least 4.5:1, target 7:1. Interface components and focus indicators: at least 3:1.
- Pointer targets are at least 24 by 24 CSS pixels, target 44 by 44.
- Every control has an accessible name. Every image has a text alternative, or an empty `alt` when decorative.
- Form fields have a visible, programmatically linked label. Errors are described in text and linked to their field.
- Meaning is never carried by colour alone.
- Content reflows at 320 CSS pixels wide and at 200 percent zoom, with no loss of function.
- Dynamic changes are announced through live regions; focus is managed when content appears or disappears (dialogs, menus, route changes).
- Custom widgets follow the WAI-ARIA Authoring Practices patterns.
- Each component is checked by an automated scan and by a manual keyboard and screen reader pass before it is marked done.

## 7. HTML semantics

- Use the element that matches the meaning. `<button>` for actions, `<a href>` for navigation. Never a clickable `<div>` or `<span>`.
- Native element first; ARIA only when no native element fits. Never use ARIA to repair the wrong element.
- Page landmarks: one `<main>`, plus `<header>`, `<nav>`, `<footer>`, `<aside>` as needed. Multiple landmarks of the same kind are labelled.
- One `<h1>` per page. Heading levels follow document structure and never skip a level. Never choose a heading level for its size.
- Lists use `<ul>`, `<ol>` or `<dl>`. Tabular data uses `<table>` with `<th>` and `scope`. No tables for layout.
- Forms use `<form>`, `<label>`, `<fieldset>` and `<legend>`, with correct `type` and `autocomplete` attributes.
- `<section>` and `<article>` have a heading. `<div>` and `<span>` are for styling hooks only.
- The document declares its language; passages in another language declare theirs.
- Markup passes HTML validation.

## 8. Animation: CSS first

- Use CSS transitions and keyframe animations by default.
- JavaScript animation is allowed only when CSS cannot do it: physics or spring motion, gesture-driven motion, values computed at runtime, orchestration across many elements. The pull request states which reason applies.
- Animate `transform` and `opacity` only. Do not animate layout properties (`width`, `height`, `top`, `left`, `margin`).
- Durations and easing curves come from design tokens.
- Honour `prefers-reduced-motion`: under it, non-essential motion is removed and essential motion is replaced by a fade or an instant change.
- No animation flashes more than three times per second. Any motion that starts on its own and lasts over five seconds can be paused.
- Animation never delays an interaction: controls are usable before a transition ends.

## Enforcement

| Rule | Enforced by |
|---|---|
| BEM naming, nesting depth, no ids, no `!important`, tokens only | Stylelint with a BEM class pattern |
| No default export, no barrel, no `export *` | ESLint import rules, with the exceptions listed by file pattern |
| One component per file | ESLint React rule |
| Hook return shape | Exported return type, checked by the compiler and in review |
| Stories, unit, visual, interaction tests present | CI check that fails when a component folder lacks one of the files |
| Accessibility | Automated scan in Storybook and CI, lint rules for JSX accessibility, manual pass |
| HTML semantics | HTML validation and review |
| Animation | Stylelint property rules and review |

## Definition of done for a UI component

- One component, one file, named export
- SCSS file in BEM, tokens only
- Logic in a hook returning `{ selectors, actions }`
- Stories for every variant and state
- Unit tests pass
- Visual regression snapshots approved
- Browser interaction test passes, including keyboard
- WCAG 2.2 AA met, AAA gaps listed
- Semantic markup, valid HTML
- Motion in CSS, reduced-motion handled
