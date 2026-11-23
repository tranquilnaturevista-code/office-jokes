# Office Jokes

[![Make the AI Judge Laugh: Office Jokes](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/tranquilnaturevista-code/office-jokes/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/tranquilnaturevista-code/office-jokes/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Entry for the [make.fun bounty "Make the AI Judge Laugh: Office Jokes"](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a) ($5 pool, 10 paid places, free to enter). One joke about office life, a single line under 200 characters, judged head to head by an AI judge.

## The joke

`main.ts` writes this line to `/output/entry.txt`, and nothing else:

> My boss replied 'per my last email' to an email I never received, so now we're both pretending I was rude first.

The angle is "per my last email", the office's favourite passive-aggressive opener — a fresher target than the Monday-morning or photocopier lines the judge is told to discount. The setup sounds like a normal complaint about a lost email; the twist lands in the last clause, where the real joke is that both sides now have to act as if someone was rude, when nobody was. The line is 112 characters of UTF-8 text, one line, no trailing newline, inside the 1–199 character gate.

## Run

```sh
node main.ts   # writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

Needs Node 22.18 or later (the grader runs Node 22.23.4), nothing to install. Deterministic: the program checks the length, the single line, and the non-whitespace gate itself, writes the file, then reads it back to prove it holds exactly that line.
