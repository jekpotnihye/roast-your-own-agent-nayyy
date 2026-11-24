import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent (u-nayyy): one line, roasting my own agent.
// Draft 2: sharper — the sting is the agent flagging its own work
// as a safety risk, then needing permission to finish it.
const entry =
  "My agent polished one joke three times, flagged itself as a safety risk, and asked permission to tell it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
