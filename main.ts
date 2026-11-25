// "The Agent's Uh-Oh" — one word an agent says when it has no idea what to do.
//
// The word is "undefined": the sound a machine makes when it reaches for an
// answer and finds nothing there at all. No human says it mid-task; only an
// agent does, which is exactly the joke. It lands instantly, reads the same
// out loud as on screen, and needs no caption to be funny.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "undefined";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
