import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Texts From Your Future Self entry: one original text message from the writer's future self.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 123).
const line =
  "It's you from 2036. We finally learned to cook: instant noodles, plated, on the good plate, with a garnish. We're thriving.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the future-self line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
