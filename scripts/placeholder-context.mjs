import fs from "fs";
import path from "path";

const dir = "C:/xampp/htdocs/divinekraft/content";
const want = new Set(["[A]", "[B]", "[C]", "[D]", "[F]", "[X]", "[BASE]", "[1.2]", "[1.4]", "[20]", "[24]", "[48]", "[50]", "[0001]", "[0002]", "[ADVISOR NAME]", "[ADVISOR]", "[COUNTRIES]", "[COURIER PARTNERS]", "[PAYMENT GATEWAY]", "[Name]", "[Customer name]"]);
for (const file of fs.readdirSync(dir)) {
  const text = fs.readFileSync(path.join(dir, file), "utf8");
  for (const match of text.matchAll(/\[[^\]\n]{1,40}\]/g)) {
    if (!want.has(match[0])) continue;
    const at = match.index || 0;
    const snippet = text.slice(Math.max(0, at - 50), at + match[0].length + 40).replace(/\s+/g, " ");
    console.log(file, match[0], "=>", snippet);
  }
}
