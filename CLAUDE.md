# Working rules for this repo

This course (`Dating for Engineers`, SLOP4785) applies finance and
game-theoretic models to romantic relationships. These are the rules I held
the agent to while building it.

## Register

Deadpan finance/systems register throughout — lecture prose, session briefs,
assessment text, policies, all of it. No motivational or self-help language
("you've got this," "trust the process," "be your best self"). No emojis
anywhere, including in commit messages and this file. The joke is that the
model is applied completely straight-faced; undercutting it with a wink
would flatten the thing that makes the course work.

## One concept per week, no reuse

Every `lectures/week-NN.md` declares a custom `concept:` frontmatter key
naming the one model variable it introduces, and no two weeks may share a
value. This is enforced mechanically by `spec/course-design.test.ts`, not
left to review — twelve weeks that quietly repeat one another under
different titles is the single most common failure mode for a course like
this, and it should fail a test, not just look repetitive on a skim.

## Assessment briefs separate the provocation from the mechanics

Every assessment page states, as a blockquote, the one-sentence problem
being posed, then covers what makes a strong response, then only afterwards
moves to "What you submit" — format, length, marking. A student reading only
the brief should know what to make; a student reading only the mechanics
should know what to hand in. Don't interleave the two.

## No photographic imagery

Hero and card images are generated abstract/geometric (candlestick-chart
style, in the site's own brand palette), never photographs or
photorealistic renders — including of the two course staff, who have no
`photo:` field. This is a visual-register rule, not a technical constraint:
imagery should look like it came from the same place as the finance framing,
not from a stock library.

## Case studies are composite, not autobiographical

Nothing in the lecture or session content, and nothing modelled as an
example case, is drawn from one real relationship. Where a scenario needed
specifics, it was built from patterns common across people's experiences in
general — this keeps the register honest (the model is a general claim, not
a disguised diary entry) and keeps the policies page's own rule on
de-identified/composited cases consistent with how the course content was
actually written.
