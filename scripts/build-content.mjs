import fs from "fs";
import path from "path";

const root = "C:/xampp/htdocs/divinekraft";
const map = JSON.parse(fs.readFileSync(path.join(root, "scripts/image-map.json"), "utf8"));
const designDir = path.join(root, "_design");
const contentDir = path.join(root, "content");
fs.mkdirSync(contentDir, { recursive: true });

const routes = {
  "Main.dc.html": "/",
  "Product.dc.html": "/product/mor-mukut-peela-poshak",
  "Collection.dc.html": "/collections",
  "Brief.dc.html": "/custom",
  "Model.dc.html": "/model",
  "Blog.dc.html": "/journal",
  "About.dc.html": "/about",
  "Cart.dc.html": "/cart",
  "Checkout.dc.html": "/checkout",
  "OrderConfirm.dc.html": "/order/confirmation",
  "Tracking.dc.html": "/track",
  "Wishlist.dc.html": "/wishlist",
  "SizeGuide.dc.html": "/size-guide",
  "Policies.dc.html": "/policies",
  "Contact.dc.html": "/contact",
  "FAQ.dc.html": "/faq",
  "Login.dc.html": "/login",
  "Account.dc.html": "/account",
};

const namedLinks = {
  "Nitya Seva": "/collections",
  Utsav: "/collections",
  Heirloom: "/collections",
  "Jugal Jodi": "/collections",
  "Size guide": "/size-guide",
  "Made-to-order policy": "/policies",
  Shipping: "/policies",
  "Track order": "/track",
  "About us": "/about",
  Journal: "/journal",
  FAQ: "/faq",
  "Contact us": "/contact",
  Policies: "/policies",
  Wishlist: "/wishlist",
  Collections: "/collections",
  "Custom design": "/custom",
  "My account": "/account",
};

const pages = [
  {
    file: "Main.dc.html",
    name: "home",
    route: "app/page.tsx",
    title: "Sewn for your Thakurji",
    description:
      "Heirloom-grade zardozi, gota-patti and resham poshaks, stitched in Vrindavan after you order, with His name in gold thread.",
  },
  {
    file: "Collection.dc.html",
    name: "collections",
    route: "app/collections/page.tsx",
    title: "Collections",
    description: "Nitya Seva, Utsav, Heirloom and Jugal Jodi poshaks, made to order for Laddu Gopal.",
  },
  {
    file: "Product.dc.html",
    name: "product",
    route: "app/product/mor-mukut-peela-poshak/page.tsx",
    title: "Mor Mukut Peela Poshak",
    description: "Peela silk with hand-worked mor-pankh, a stone peacock and a matching mukut and patka.",
  },
  {
    file: "Brief.dc.html",
    name: "custom",
    route: "app/custom/page.tsx",
    title: "Custom design brief",
    description: "Share your Thakurji’s size, name and inspiration. A designer plans the poshak and sends a quote.",
  },
  {
    file: "Model.dc.html",
    name: "model",
    route: "app/model/page.tsx",
    title: "How custom design works",
    description: "Brief, design call, quote, sketch sign-off, then handcrafting in Vrindavan.",
  },
  {
    file: "Blog.dc.html",
    name: "journal",
    route: "app/journal/page.tsx",
    title: "Journal",
    description: "Shringar guides, festival planners and stories from the adda.",
  },
  {
    file: "About.dc.html",
    name: "about",
    route: "app/about/page.tsx",
    title: "About us",
    description: "DivineKraft is a Vrindavan atelier stitching designer poshaks as seva.",
  },
  {
    file: "Cart.dc.html",
    name: "cart",
    route: "app/cart/page.tsx",
    title: "Your cart",
    description: "Review poshaks, name embroidery and add-ons before checkout.",
  },
  {
    file: "Checkout.dc.html",
    name: "checkout",
    route: "app/checkout/page.tsx",
    title: "Checkout",
    description: "Contact, delivery and payment for a made-to-order poshak.",
  },
  {
    file: "OrderConfirm.dc.html",
    name: "confirmation",
    route: "app/order/confirmation/page.tsx",
    title: "Order confirmed",
    description: "Your poshak is confirmed. The karigar begins only after the name is approved.",
  },
  {
    file: "Tracking.dc.html",
    name: "track",
    route: "app/track/page.tsx",
    title: "Track your order",
    description: "Follow each stage from sketch to the keepsake box.",
  },
  {
    file: "Wishlist.dc.html",
    name: "wishlist",
    route: "app/wishlist/page.tsx",
    title: "Wishlist",
    description: "Designs saved for the next utsav.",
  },
  {
    file: "SizeGuide.dc.html",
    name: "size-guide",
    route: "app/size-guide/page.tsx",
    title: "Size guide",
    description: "Find your Thakurji’s Laddu Gopal size, from 0 to 6, or send a photo for a free check.",
  },
  {
    file: "Policies.dc.html",
    name: "policies",
    route: "app/policies/page.tsx",
    title: "Policies",
    description: "Made-to-order, size redo, shipping and payment promises.",
  },
  {
    file: "Contact.dc.html",
    name: "contact",
    route: "app/contact/page.tsx",
    title: "Contact",
    description: "Talk to a DivineKraft designer on WhatsApp or send a message.",
  },
  {
    file: "FAQ.dc.html",
    name: "faq",
    route: "app/faq/page.tsx",
    title: "FAQ",
    description: "Ordering, sizing, embroidery, festivals and delivery.",
  },
  {
    file: "Login.dc.html",
    name: "login",
    route: "app/login/page.tsx",
    title: "Sign in",
    description: "Sign in with a one-time code on your mobile number.",
  },
  {
    file: "Account.dc.html",
    name: "account",
    route: "app/account/page.tsx",
    title: "My account",
    description: "Your Thakurji profiles, orders, quotes and festival reminders.",
  },
];

function extract(html) {
  const end = html.lastIndexOf("</x-dc>");
  const start = html.indexOf('<div style="width: 100%');
  if (start !== -1 && start < end) return html.slice(start, end).trim();
  const helmet = html.indexOf("</helmet>");
  return html.slice(helmet + "</helmet>".length, end).trim();
}

function transform(html) {
  let out = extract(html);
  out = out.replace(/\/_blob\/([a-f0-9]+)/g, (_, id) => map[id] || _);
  out = out.replace(/href="([^"]+)"/g, (full, href) => {
    if (href.startsWith("http") || href.startsWith("#") || href.startsWith("/")) return full;
    const [file, hash] = href.split("#");
    const route = routes[file];
    if (!route) return full;
    const url = hash ? (route === "/" ? `/#${hash}` : `${route}#${hash}`) : route;
    return `href="${url}"`;
  });
  out = out.replace(/<a href="#"([^>]*)>([^<]+)<\/a>/g, (full, attrs, text) => {
    const route = namedLinks[text.trim()];
    if (!route) return full;
    return `<a href="${route}"${attrs}>${text}</a>`;
  });
  out = out.replace(
    /<a href="#"([^>]*)>Size guide\s*&amp;\s*free size check/g,
    '<a href="/size-guide"$1>Size guide &amp; free size check'
  );
  out = out.replace(/<button(\s+aria-label="(?:Cart|Account)"[^>]*)>([\s\S]*?)<\/button>/g, (full, attrs, inner) => {
    const href = attrs.includes('aria-label="Cart"') ? "/cart" : "/account";
    return `<a href="${href}"${attrs}>${inner}</a>`;
  });
  out = out.replace(
    /<button(\s[^>]*)>\s*Order this design · ₹\[PRICE\]\s*<\/button>/,
    '<a href="/cart"$1>Order this design · ₹[PRICE]</a>'
  );
  return out;
}

const search = [];
for (const page of pages) {
  const raw = fs.readFileSync(path.join(designDir, page.file), "utf8");
  const html = transform(raw);
  fs.writeFileSync(path.join(contentDir, `${page.name}.html`), html);
  search.push({ title: page.title, href: routes[page.file], kind: "Page" });
  const headings = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );
  for (const title of headings) {
    if (title.length < 4 || title.length > 90) continue;
    search.push({ title, href: routes[page.file], kind: page.title });
  }
  const alts = [...html.matchAll(/alt="([^"]*Poshak[^"]*)"/g)].map((m) => m[1]);
  for (const title of new Set(alts)) {
    search.push({
      title: title.replace(/ for Laddu Gopal$/, ""),
      href: "/product/mor-mukut-peela-poshak",
      kind: "Poshak",
    });
  }

  const dir = path.join(root, path.dirname(page.route));
  fs.mkdirSync(dir, { recursive: true });
  const source = `import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: ${JSON.stringify(page.title)},
  description: ${JSON.stringify(page.description)},
};

export default function Page() {
  return <Screen name="${page.name}" />;
}
`;
  fs.writeFileSync(path.join(root, page.route), source);
}

const seen = new Set();
const unique = search.filter((item) => {
  const key = item.title + item.href;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});
fs.writeFileSync(path.join(root, "public/search-index.json"), JSON.stringify(unique, null, 2));
console.log("pages", pages.length, "search", unique.length);
