import fs from "fs";
const t = fs.readFileSync("_design/Collection.dc.html", "utf8");
const buttons = [...t.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)].map((m) =>
  m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 80)
);
console.log(buttons.filter(Boolean).join("\n"));
console.log("---alts---");
const alts = [...t.matchAll(/alt="([^"]+)"/g)].map((m) => m[1]);
console.log([...new Set(alts)].join("\n"));
