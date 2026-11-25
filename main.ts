import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;
const ENTRY =
  "Lid closed. My cursor is still blinking at the end of your half-finished sentence.";

function validateEntry(text: string): void {
  if (text.length === 0 || text.length > MAX_CHARS || text.trim().length === 0) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
