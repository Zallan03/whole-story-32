// Tell a Whole Story in 32 Characters.
// v2 — revised in this session: "Four" became "4" — a numeral reads
// more like a real Wi-Fi name, tightens the line to 23 characters, and
// the story (dad's milk run, four years, never came back) stays intact.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "TheMilkRunWas4YearsAgo";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
