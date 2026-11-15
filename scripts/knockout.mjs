import sharp from "sharp";
import path from "path";

const root = process.cwd();
const files = [
  ["public/images/laddu-gopal.jpg", "public/images/laddu-gopal.png"],
  ["public/images/laddu-gopal-dressed.jpg", "public/images/laddu-gopal-dressed.png"],
  ["public/images/laddu-gopal-portrait.jpg", "public/images/laddu-gopal-portrait.png"],
];

function knockout(data, width, height, channels) {
  const n = width * height;
  const seen = new Uint8Array(n);
  const q = new Int32Array(n);
  let tail = 0;
  let head = 0;
  const bg = (p) => {
    const i = p * channels;
    return data[i] > 246 && data[i + 1] > 246 && data[i + 2] > 246;
  };
  const push = (p) => {
    if (seen[p] || !bg(p)) return;
    seen[p] = 1;
    q[tail++] = p;
  };
  for (let x = 0; x < width; x++) {
    push(x);
    push((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    push(y * width);
    push(y * width + width - 1);
  }
  while (head < tail) {
    const p = q[head++];
    const x = p % width;
    const y = (p / width) | 0;
    if (x > 0) push(p - 1);
    if (x + 1 < width) push(p + 1);
    if (y > 0) push(p - width);
    if (y + 1 < height) push(p + width);
  }
  for (let p = 0; p < n; p++) {
    if (seen[p]) data[p * channels + 3] = 0;
  }
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = y * width + x;
      if (data[p * channels + 3] === 0) continue;
      const i = p * channels;
      const touches =
        data[(p - 1) * channels + 3] === 0 ||
        data[(p + 1) * channels + 3] === 0 ||
        data[(p - width) * channels + 3] === 0 ||
        data[(p + width) * channels + 3] === 0;
      if (!touches) continue;
      const min = Math.min(data[i], data[i + 1], data[i + 2]);
      if (min > 220) data[i + 3] = Math.round(((255 - min) / 35) * 255);
    }
  }
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] > 16) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  const pad = 8;
  return {
    left: Math.max(0, minX - pad),
    top: Math.max(0, minY - pad),
    width: Math.min(width, maxX + pad + 1) - Math.max(0, minX - pad),
    height: Math.min(height, maxY + pad + 1) - Math.max(0, minY - pad),
  };
}

for (const [from, to] of files) {
  const input = path.join(root, from);
  const output = path.join(root, to);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const box = knockout(data, info.width, info.height, info.channels);
  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .extract(box)
    .png()
    .toFile(output);
  console.log(to, box);
}
