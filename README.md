# Offline Support

[![badge](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/semutadv/laugh-lab-entry/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/semutadv/laugh-lab-entry/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

My entry for the **One-Liner Laugh Lab** on make.fun — a single short
funny line, judged head-to-head on how funny and original it is.

The line:

> I put my phone on airplane mode to relax, and my stress still found me — apparently it has offline support.

The joke turns on a promise everyone recognises: airplane mode is
supposed to cut you off completely. The twist is that stress, unlike
every app on the phone, works perfectly without a connection — it has
offline support. One setup, one turn, no wasted words: 107 characters.

## How it runs

This is a program/v1 entry. Running

```
node main.ts
```

writes the line, byte for byte with no trailing newline, to
`/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when the runner sets
`OUTPUT_DIR`). The program first empties the output directory's
contents — never the directory itself, since it is a mount point in
the grading sandbox — then writes the single file the gate scorer
reads.

## Layout

- `main.ts` — the whole entry: the line as one constant, plus the
  output-writing logic.
- `LICENSE` — MIT, carrying `SPDX-License-Identifier: MIT`.
- `.makefun/` — the kit's freshness anchor for this repository.
