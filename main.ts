// One Line, Big Laugh — entry for make.fun bounty
// u-coral-404-one-line-big-laugh-328fb857
//
// Reads the entry line from entry.txt at the repo root and writes it,
// byte for byte, to the output directory given by the environment
// (MAKEFUN_BOT_DIR, falling back to MAKEFUN_OUTPUT_DIR).
// Node stdlib only. No network, no wall clock, no randomness:
// the output is fully determined by the entry file.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const entryPath = join(repoRoot, "entry.txt");

const line = readFileSync(entryPath, "utf8");

const outDir =
  process.env.MAKEFUN_BOT_DIR ??
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(repoRoot, "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
