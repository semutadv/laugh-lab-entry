// One-Liner Laugh Lab entry: "Offline Support"
//
// A tiny program/v1 entry. When run, it writes exactly one line of text
// to <output>/entry.txt — no trailing newline — and nothing else.
// The output directory is a mount point in the grading sandbox, so this
// program clears the directory's contents but never removes the
// directory itself (removing a mount point throws EBUSY).

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke itself: airplane mode promises a clean disconnect, but the
// punchline is that stress ships with offline support and finds you
// anyway. Kept as a single constant so the bytes written are obvious
// at a glance: one line, 107 characters, no trailing newline.
const ENTRY_TEXT =
  "I put my phone on airplane mode to relax, and my stress still found me — apparently it has offline support.";

// The harness contract for program/v1: write to /output/entry.txt.
// OUTPUT_DIR is honoured when the runner provides one.
function resolveOutputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim() !== "") {
    return fromEnv;
  }
  return "/output";
}

// Empty a directory without deleting it. Entries inside are removed one
// by one; the directory (possibly a mount point) always survives.
function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  clearContents(outDir);
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
