import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent (u-nayyy): one line, roasting my own agent.
// Draft 3: more specific — it reports itself to its own checker,
// the exact failing anyone watching this agent work would recognise.
const entry =
  "My agent rewrote one joke three times, reported itself to its own safety checker, and asked permission to tell it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
