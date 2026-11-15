import fs from "fs";
import path from "path";

const ids = fs
  .readFileSync("C:/xampp/htdocs/divinekraft/_blobs.txt", "utf8")
  .trim()
  .split(/\s+/);
const outDir = "C:/xampp/htdocs/divinekraft/public/images";
fs.mkdirSync(outDir, { recursive: true });
const base =
  "https://7b4a7247-0050-4abe-a3f6-ad7015079b13.frame.claudeusercontent.com/_f/1794536828-7dae/_blob/";

const extOf = (type) => {
  if (type.includes("png")) return "png";
  if (type.includes("webp")) return "webp";
  if (type.includes("jpeg") || type.includes("jpg")) return "jpg";
  if (type.includes("gif")) return "gif";
  if (type.includes("svg")) return "svg";
  return "img";
};

const map = {};
let i = 0;
for (const id of ids) {
  i++;
  const res = await fetch(base + id);
  if (!res.ok) {
    console.error("FAIL", id, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const type = res.headers.get("content-type") || "";
  let ext = extOf(type);
  if (ext === "img") {
    if (buf[0] === 0x89 && buf[1] === 0x50) ext = "png";
    else if (buf[0] === 0xff && buf[1] === 0xd8) ext = "jpg";
    else if (buf.slice(0, 4).toString() === "RIFF") ext = "webp";
    else if (buf.slice(0, 5).toString().includes("SVG") || buf.slice(0, 200).toString().includes("<svg")) ext = "svg";
  }
  const name = `${id}.${ext}`;
  fs.writeFileSync(path.join(outDir, name), buf);
  map[id] = `/images/${name}`;
  console.log(i, name, buf.length, type);
}
fs.writeFileSync(
  "C:/xampp/htdocs/divinekraft/scripts/image-map.json",
  JSON.stringify(map, null, 2)
);
console.log("saved", Object.keys(map).length);
