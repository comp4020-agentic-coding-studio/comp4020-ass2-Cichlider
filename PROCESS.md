# Process overview

## What I built

*Dating for Engineers* (SLOP4785) applies financial and game-theoretic
models — price discovery, balance sheets, priced options, stop-losses — to
romantic relationships, across twelve weeks that each introduce exactly one
model variable, three assessments that sum to 100% of the course weight, and
a working case-review format that carries one running case through the
whole semester.

## How I got here

The brief needed a narrow, coherent concept, not a grab-bag of topics
wearing a course code. I picked the finance/game-theory framing because
that's the actual pedagogical bet the course is making: dating is an
anxiety-inducing domain precisely because it feels uncontrollable, and
recasting attraction, dependency and commitment as legible, model-able
variables is what makes it feel plannable instead of purely reactive. The
title started as a metaphor ("Romantic Risk Management") but got renamed to
the blunter *Dating for Engineers*
([`5f5a488`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/5f5a488))
once it was clear the metaphor belonged inside the course's teaching
approach, not doubled up in its title as well.

Every case referenced in the lecture and session content — the balance-sheet
workshop, the stalled-gate diagnoses, the trust-test audits — is a composite
built from patterns common across people's experiences in general, not a
retelling of any one real relationship. That's a deliberate choice, not an
omission: the model is meant as a general claim, and a disguised diary entry
would undercut that.

I set the course identity and renamed the sessions collection to "Case
Review" first
([`55fce8e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/55fce8e)),
then replaced the starter's stock photography with generated
candlestick-chart imagery in the brand palette
([`c6bb3c7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/c6bb3c7))
— a `sharp`-rendered SVG rather than a photo, so the visual register matches
the finance framing rather than fighting it. The twelve weeks went in as
three batches of four
([`4c14742`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/4c14742)
through
[`f1f909d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/f1f909d)),
each lecture given a unique `concept:` key by construction rather than by
review.

That "by construction" claim needed a check, not just a habit, so
[`2936d99`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/2936d99)
adds three spec tests reading the built `/api/index.json`: assessment
weights sum to 100, no two lectures share a concept, and every case review
links back to its week's lecture. I used a prompt along the lines of:

> Write custom spec tests that check the things the per-node schema can't:
> the assessment weights sum to 100 across the whole collection, and no two
> lectures share a concept.

`pnpm check` — types, build, accessibility, link and reference integrity,
deck compilation, and the four spec tests — is green at every commit from
[`55fce8e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Cichlider/commit/55fce8e)
onward, checked after each batch rather than only at the end.

## Before you ship

`pnpm check` and `pnpm check:evidence` both pass locally. The repo has not
been pushed or made public.
