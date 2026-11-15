import fs from "fs";
const t = fs.readFileSync("content/collections.html", "utf8");
const i = t.indexOf("Mor Mukut");
console.log(t.slice(i - 400, i + 500));
console.log("\n\n----TAB----\n");
const j = t.indexOf('role="tablist"');
console.log(t.slice(j, j + 1800));
