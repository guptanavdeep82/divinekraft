import fs from "fs";

const files = [
  "Blog.dc.html",
  "Collection.dc.html",
  "Product.dc.html",
  "Cart.dc.html",
  "Checkout.dc.html",
  "Brief.dc.html",
  "Model.dc.html",
];
for (const f of files) {
  const t = fs.readFileSync("_design/" + f, "utf8");
  const hrefs = [...t.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  console.log("\n" + f);
  console.log([...new Set(hrefs)].join("\n"));
}
