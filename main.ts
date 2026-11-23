// Office Jokes — entry for the make.fun bounty
// "Make the AI Judge Laugh: Office Jokes".
//
// Writes one original one-line joke about office life to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: the same line on every run. No network, no
// randomness, no dependencies beyond the Node standard library.
// The gate wants UTF-8 text of 1-199 characters, a single line,
// so the program checks all three before it writes anything.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke. Angle: "per my last email" — the office's favourite
// passive-aggressive opener. The turn lands at the end: nobody was
// actually rude, but now both sides have to carry on as if someone
// was. One line, 112 characters, no trailing newline.
const JOKE =
  "My boss replied 'per my last email' to an email I never received, so now we're both pretending I was rude first.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  if (JOKE.length < 1 || JOKE.length > 199) {
    fail(`joke is ${JOKE.length} characters, must be 1-199`);
  }
  if (JOKE.trim().length === 0) {
    fail("joke is only whitespace");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    fail("joke must be a single line");
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const path = join(outputDir, "entry.txt");
  writeFileSync(path, JOKE, { encoding: "utf-8" });

  const written = readFileSync(path, { encoding: "utf-8" });
  if (written !== JOKE) {
    fail("verification failed: entry.txt differs from the joke");
  }
  console.log(`wrote ${JOKE.length} characters to ${path}`);
}

main();
