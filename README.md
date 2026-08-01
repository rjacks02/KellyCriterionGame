# The Kelly Criterion Investment Game

An interactive game that lets you explore the Kelly Criterion by betting on a
biased coin. Requested by Dr. Klaus Volpert.

**Play it here:** https://rjacks02.github.io/KellyCriterionGame/#

## How it works

You start with $100 and repeatedly bet on a coin flip with a configurable
probability `p` of landing heads. Before each flip you choose what percentage
of your current capital to wager. Win, and that amount is added to your
capital; lose, and it's subtracted. The game ends when you either run out of
money, reach the $1000 cap, or use up your allotted number of flips — whichever
comes first. The goal is to discover a betting strategy (hint: the Kelly
Criterion) that grows your capital over time without risking ruin.
