import fs from "fs";
import path from "path";

const dir = "C:/xampp/htdocs/divinekraft/_design";
const ids = new Set();
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith(".dc.html")) continue;
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of t.matchAll(/\/_blob\/([a-f0-9]+)/g)) ids.add(m[1]);
}
const out = "C:/xampp/htdocs/divinekraft/_blobs.txt";
fs.writeFileSync(out, [...ids].join("\n"));
console.log("blobs", ids.size);
