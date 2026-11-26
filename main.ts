import { mkdirSync, writeFileSync } from "node:fs";

// Output contract: /output/entry.txt holds exactly one line, at most 180
// chars, no trailing newline — the sealed scorer reads it as UTF-8.
const line =
  "Sticky note, c. 2003. Paper, adhesive curse. Priests of the Open Plan stuck these to monitors to summon colleagues who never came. Donated by the Department of Reminders.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
