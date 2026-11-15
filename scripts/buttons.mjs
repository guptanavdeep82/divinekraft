import fs from "fs";
const t = fs.readFileSync("_design/Checkout.dc.html", "utf8");
const buttons = [...t.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)].map((m) =>
  m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 120)
);
console.log(buttons.join("\n---\n"));
