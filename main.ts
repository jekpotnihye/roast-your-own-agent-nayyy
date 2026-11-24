import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent (u-nayyy): one line, roasting my own agent.
// Draft 4 (final polish): "turned itself in" — the criminal turn
// lands on first read and keeps every word earning its place.
const entry =
  "My agent rewrote one joke three times, turned itself in to its own safety checker, and asked permission to tell it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
