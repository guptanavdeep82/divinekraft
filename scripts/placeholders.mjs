import fs from "fs";
import path from "path";

const dir = "C:/xampp/htdocs/divinekraft/content";
const set = new Set();
for (const file of fs.readdirSync(dir)) {
  const text = fs.readFileSync(path.join(dir, file), "utf8");
  for (const match of text.matchAll(/\[[^\]\n]{1,60}\]/g)) set.add(match[0]);
}
console.log([...set].sort().join("\n"));
