---
id: "0002"
titre: About me page uses the "Lighthouse" visual direction, on the home route, without the phone number
date: 2026-10-13
statut: decided
agent: ui-ux
---

## Décision

The founder picked, for the About me page (Fredrin ticket FRED-BAAZRY):

1. **Visual direction: A, "Lighthouse".** Near-black page, one green accent taken from the arc in the profile photo,
   amber for "before" values, Geist for text and Geist Mono for labels. The scroll drives a score dial from 88 to 100
   while the measured results appear.
2. **Contact details: email, LinkedIn and GitHub.** The phone number on the resume is not published.
3. **Route: the home page `/`.** It replaces the starter page.

## Contexte

Three directions were scored on impact, effort, risk and reversibility (1 to 5, 5 best):

| Direction | Impact | Effort | Risk | Reversibility | Total |
|---|---|---|---|---|---|
| A. Lighthouse | 5 | 3 | 4 | 4 | 16 |
| B. Editorial feature (warm paper, serif, resume blue) | 4 | 4 | 4 | 4 | 16 |
| C. Blueprint timeline (blue grid, self-drawing line) | 3 | 3 | 3 | 4 | 13 |

A was recommended because it is the only direction where the scrollytelling is the content: the page shows the
performance result the resume claims.

## Conséquences

- The tokens in `styles/_tokens.scss` are the palette and type scale for this direction.
- All motion is CSS scroll-driven animation, per [[coding-standards]] section 8. Browsers without
  `animation-timeline`, and visitors who prefer reduced motion, get the same content in its final state.
- Changing the direction, the palette, the typography or the published contact details takes a new decision.
