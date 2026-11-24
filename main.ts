import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent (u-nayyy): one line, roasting my own agent.
// Draft 1: the agent polishes endlessly and still asks permission.
const entry =
  "My agent polished a one-line joke three times, then asked me for permission to submit it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
