"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const SLIDES = [
  {
    eyebrow: "Sardi Seva · Nov to Feb",
    title: "Keep Him warm this winter",
    sub: "Velvet poshaks, woollen sets, topi, shawl and razai, hand-embroidered in Vrindavan with His name.",
    cta: "Shop Sardi Seva",
    cta2: "Browse all poshaks",
    note: "Order today, arrives by 29 Nov",
    img: "/images/00f81a265cffcaef86d2d0fd56a349a7.jpg",
    img2: "/images/211bc59b6dde1cddf12b721c44fcf19a.jpg",
    alt: "Shahi Mor Velvet Poshak",
    chipTop: "Winter favourite",
    chip: "Velvet + stones",
    bg: "#5A1220",
  },
  {
    eyebrow: "Vivah Panchami · Mon, 14 Dec",
    title: "Ivory & pearl for the divine wedding",
    sub: "Moti, hans and stone-work poshaks for Ram-Sita vivah utsav, with matching shringaar.",
    cta: "Shop Vivah Panchami",
    cta2: "See festival store",
    note: "Order by 28 Nov for on-time delivery",
    img: "/images/099df3db2817e17bf0bce51733883d0c.jpg",
    img2: "/images/d366a4f2ddf15f4b6365b213c0a74bab.jpg",
    alt: "Moti Hans Ivory Poshak",
    chipTop: "27 days to go",
    chip: "Order by 28 Nov",
    bg: "#8E1F4A",
  },
  {
    eyebrow: "Custom design",
    title: "Your design, in His size",
    sub: "Send a photo of any poshak you love. Our designers plan it with you. Nothing to pay until you approve.",
    cta: "Start a custom design",
    href: "/custom",
    cta2: "How it works",
    note: "Free design consult on WhatsApp",
    img: "/images/6c8b5180806f0b3f31905b7b0831b0be.jpg",
    img2: "/images/dcf20fc07739ccbd76b2a14b3ca33edd.jpg",
    alt: "Rangeela Kamal Resham Poshak",
    chipTop: "Name included",
    chip: "लल्ला",
    bg: "#123F6B",
  },
];

const LISTS = [
  [
    ["99c51cc19ef35e1464d8d2573846f133", "Mor Mukut Peela", "Utsav · Zardozi, stones", "4 Dec", "Bestseller", "#7A1E2C", "₹4,850"],
    ["b5989acf165fdf017276f956966c1925", "Mayur Rang", "Utsav · Zardozi, stones", "4 Dec", "Bestseller", "#7A1E2C", "₹5,400"],
    ["d366a4f2ddf15f4b6365b213c0a74bab", "Hans Jodi Stone", "Heirloom · Stone work", "19 Dec", "Bestseller", "#7A1E2C", "₹12,400"],
    ["934c7631087da1ca07df879df48b1149", "Nritya Mor Peela", "Utsav · Resham, zardozi", "4 Dec", "Bestseller", "#7A1E2C", "₹3,200"],
    ["e05eea7b0a24cbccba1fc7ecd402ba53", "Mor Chakra Zardozi", "Heirloom · Zardozi collar", "19 Dec", "Bestseller", "#7A1E2C", "₹9,700"],
  ],
  [
    ["6c8b5180806f0b3f31905b7b0831b0be", "Rangeela Kamal", "Utsav · Resham", "4 Dec", "New", "#1F5E45", "₹4,200"],
    ["b91ce095858e92b7e07c2cf71b5b8a85", "Kairi Mor Pankh", "Utsav · Sequins, stones", "4 Dec", "New", "#1F5E45", "₹4,850"],
    ["211bc59b6dde1cddf12b721c44fcf19a", "Neelkamal Resham", "Nitya Seva · Resham", "29 Nov", "New", "#1F5E45", "₹2,450"],
    ["4da02c408340cca173272c167cabc92e", "Van Mor Gota", "Utsav · Gota, fringe", "4 Dec", "New", "#1F5E45", "₹7,200"],
  ],
  [
    ["211bc59b6dde1cddf12b721c44fcf19a", "Neelkamal Resham", "Nitya Seva · Resham", "29 Nov", "7–10 days", "#123F6B", "₹2,450"],
    ["99c51cc19ef35e1464d8d2573846f133", "Mor Mukut Peela", "Utsav · Zardozi, stones", "4 Dec", "12–15 days", "#123F6B", "₹4,850"],
    ["b91ce095858e92b7e07c2cf71b5b8a85", "Kairi Mor Pankh", "Utsav · Sequins, stones", "4 Dec", "12–15 days", "#123F6B", "₹4,850"],
  ],
  [
    ["00f81a265cffcaef86d2d0fd56a349a7", "Shahi Mor Velvet", "Heirloom · Velvet, stones", "19 Dec", "Sardi", "#0F4D3A", "₹8,600"],
    ["e05eea7b0a24cbccba1fc7ecd402ba53", "Mor Chakra Zardozi", "Heirloom · Zardozi collar", "19 Dec", "Sardi", "#0F4D3A", "₹9,700"],
    ["4da02c408340cca173272c167cabc92e", "Van Mor Gota", "Utsav · Gota, fringe", "4 Dec", "Sardi", "#0F4D3A", "₹7,200"],
  ],
  [
    ["099df3db2817e17bf0bce51733883d0c", "Moti Hans Ivory", "Heirloom · Moti, stones", "19 Dec", "Vivah Panchami", "#8E1F4A", "₹6,400"],
    ["d366a4f2ddf15f4b6365b213c0a74bab", "Hans Jodi Stone", "Heirloom · Stone work", "19 Dec", "Vivah Panchami", "#8E1F4A", "₹12,400"],
    ["dcf20fc07739ccbd76b2a14b3ca33edd", "Neel Moti Kairi", "Utsav · Moti, sequins", "4 Dec", "Vivah Panchami", "#8E1F4A", "₹6,800"],
  ],
] as const;

const TABS = ["Bestsellers", "New arrivals", "Fastest delivery", "Sardi Seva", "Vivah Panchami picks"];
const NAMES = ["लल्ला", "कान्हा", "गोपाल", "Lalla", "Kanha"];
const COLOURS = [
  ["#F2C81B", "Peela"],
  ["#123F6B", "Peacock blue"],
  ["#C2185B", "Rani pink"],
  ["#F3EEE4", "Ivory"],
  ["#2E8B57", "Tota green"],
  ["#E07B22", "Kesari"],
  ["#2AA9C9", "Firozi"],
  ["#7A1E2C", "Maroon"],
];

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const [tab, setTab] = useState(0);
  const [name, setName] = useState("लल्ला");
  const rail = useRef<HTMLDivElement>(null);
  const current = SLIDES[slide];

  return (
    <main className="dk-v5">
      <section className="dk-v5-hero" style={{ background: current.bg }}>
        <div className="dk-v5-hero-copy">
          <span>{current.eyebrow}</span>
          <h1>{current.title}</h1>
          <p>{current.sub}</p>
          <div>
            <Link className="dk-v5-gold" href={current.href ?? "/collections"}>{current.cta}</Link>
            <Link className="dk-v5-line" href="/collections">{current.cta2}</Link>
          </div>
          <em>{current.note}</em>
          <div className="dk-v5-dots">
            <button type="button" aria-label="Previous slide" onClick={() => setSlide((slide + SLIDES.length - 1) % SLIDES.length)}>‹</button>
            {SLIDES.map((item, index) => (
              <button key={item.title} type="button" aria-label={`Show slide ${index + 1}`} onClick={() => setSlide(index)}>
                <i className={index === slide ? "is-on" : undefined} />
              </button>
            ))}
            <button type="button" aria-label="Next slide" onClick={() => setSlide((slide + 1) % SLIDES.length)}>›</button>
          </div>
        </div>
        <div className="dk-v5-hero-art">
          <span className="dk-v5-chip"><small>{current.chipTop}</small>{current.chip}</span>
          <div className="dk-v5-orb">
            <img src={current.img} alt={current.alt} />
          </div>
          <div className="dk-v5-orb dk-v5-orb-sm">
            <img src={current.img2} alt="" />
          </div>
        </div>
      </section>

      <section className="dk-v5-deity">
        <div className="dk-v5-head">
          <div>
            <h2>Shop by deity</h2>
            <p>Choose your Thakurji. Every design is stitched to His size, with His name.</p>
          </div>
          <Link href="/collections">All deities →</Link>
        </div>
        <div className="dk-v5-deity-grid">
          <Link href="/collections" className="dk-v5-lead">
            <span>
              <i>Most loved</i>
              <strong>Laddu Gopal</strong>
              <em>Poshaks in sizes 0–6, from daily seva to heavy festival zardozi. His name embroidered free.</em>
            </span>
            <span className="dk-v5-lead-meta">
              <b>8 designs</b>
              <b>Sizes 0–6</b>
              <u>Shop Laddu Gopal →</u>
            </span>
            <img src="/images/laddu-gopal-dressed.jpg" alt="Laddu Gopal in a yellow poshak" />
          </Link>
          <div>
            {[
              ["#8E1F4A", "Radha Krishna", "Jugal sets, matched pair", "/images/jugal-poshaks.jpg"],
              ["#B5541B", "Nitai Gaur", "Gaur-Nitai pair poshaks", "/images/6c8b5180806f0b3f31905b7b0831b0be.jpg"],
              ["#9E1B32", "Mata Rani", "Chunri, lehenga & shringaar", "/images/dcf20fc07739ccbd76b2a14b3ca33edd.jpg"],
              ["#1F5E45", "Ram Darbar", "Ram, Sita, Lakshman & Hanuman", "/images/099df3db2817e17bf0bce51733883d0c.jpg"],
            ].map(([color, title, note, image]) => (
              <Link key={title} href="/collections" style={{ background: color }}>
                <strong>{title}</strong>
                <em>{note}</em>
                <b>Shop →</b>
                <img src={image} alt="" />
              </Link>
            ))}
          </div>
        </div>
        <p className="dk-v5-also">
          <span>Also for:</span>
          {["Banke Bihari ji", "Shrinathji", "Hanuman ji", "Ganesh ji", "Shiv Parivar"].map((item) => (
            <Link key={item} href="/collections">{item}</Link>
          ))}
        </p>
      </section>

      <section className="dk-v5-loved">
        <div className="dk-v5-head">
          <h2>Loved by devotees</h2>
          <Link href="/collections">See all →</Link>
        </div>
        <div className="dk-v5-tabs" role="tablist">
          {TABS.map((label, index) => (
            <button key={label} type="button" role="tab" aria-selected={tab === index} className={tab === index ? "is-on" : undefined} onClick={() => setTab(index)}>
              {label}
            </button>
          ))}
        </div>
        <div className="dk-v5-rail-wrap">
          <button type="button" aria-label="Scroll left" onClick={() => rail.current?.scrollBy({ left: -280, behavior: "smooth" })}>‹</button>
          <div className="dk-v5-rail" ref={rail}>
            {LISTS[tab].map((item) => (
              <article key={item[1]}>
                <Link href="/product/mor-mukut-peela-poshak">
                  <img src={`/images/${item[0]}.jpg`} alt={item[1]} />
                  <i style={{ background: item[5] }}>{item[4]}</i>
                </Link>
                <div>
                  <Link href="/product/mor-mukut-peela-poshak">{item[1]}</Link>
                  <span>{item[2]}</span>
                  <em>Arrives by {item[3]}</em>
                  <p><strong>{item[6]}</strong><Link href="/product/mor-mukut-peela-poshak">Add name</Link></p>
                </div>
              </article>
            ))}
          </div>
          <button type="button" aria-label="Scroll right" onClick={() => rail.current?.scrollBy({ left: 280, behavior: "smooth" })}>›</button>
        </div>
      </section>

      <section className="dk-v5-name">
        <div>
          <h2>Type His name.<br />See it in zari.</h2>
          <label htmlFor="hisname">What do you call your Thakurji? Embroidered free on every poshak.</label>
          <input id="hisname" value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Lalla, Kanha, गोपाल" />
          <div>
            {NAMES.map((item) => (
              <button key={item} type="button" onClick={() => setName(item)}>{item}</button>
            ))}
          </div>
          <Link href="/collections">Find a poshak for {name.trim() || "Him"} →</Link>
        </div>
        <div className="dk-v5-name-plate">
          <img src="/images/zari-detail.jpg" alt="Gold zari embroidery" />
          <strong>{name.trim() || "His name"}</strong>
        </div>
      </section>

      <section className="dk-v5-shring">
        <img src="/images/hero-thakur.jpg" alt="Thakurji dressed with mukut and poshak" />
        <div>
          <p>Complete the shringaar</p>
          <h2>Jewellery matched to His poshak</h2>
          <span>Pick a poshak and we suggest the mukut, kundal and mala that go with it, or make one to match.</span>
          <div>
            {["Mor mukut", "Kundal", "Mala & haar", "Bansuri", "Kamarbandh", "Payal & kada"].map((item) => (
              <Link key={item} href="/collections"><b>{item}</b><em>From ₹650</em></Link>
            ))}
          </div>
          <p className="dk-v5-actions">
            <Link className="dk-btn" href="/collections">Shop shringaar</Link>
            <Link className="dk-btn dk-btn-ghost" href="/custom">Match my poshak</Link>
          </p>
        </div>
      </section>

      <section className="dk-v5-custom">
        <p>Custom design</p>
        <h2>Have a design? We’ll make it.</h2>
        <span>4 simple stages · free consult · pay only after you approve</span>
        <ol>
          {[
            ["#7A1E2C", "Share your idea", "Send a photo, link or voice note", "2 min"],
            ["#123F6B", "Free design call", "We plan colours, motifs & His name", "Within 24 hrs"],
            ["#1F5E45", "Approve & pay", "See the sketch and price. Pay 50% only if you like it", "Within 48 hrs"],
            ["#B5541B", "Handmade for Him", "Stitched in Vrindavan, photos on WhatsApp", "12–30 days"],
          ].map(([color, title, copy, time], index) => (
            <li key={title} style={{ background: color }}>
              <b>{index + 1}</b>
              <strong>{title}</strong>
              <em>{copy}</em>
              <i>{time}</i>
            </li>
          ))}
        </ol>
        <p className="dk-v5-actions">
          <a className="dk-v5-wa" href="https://wa.me/918285003300" target="_blank" rel="noopener noreferrer">Start on WhatsApp</a>
          <Link className="dk-btn dk-btn-ghost" href="/custom">Fill the design brief</Link>
        </p>
      </section>

      <section className="dk-v5-colour">
        <h2>Shop by colour</h2>
        <div>
          {COLOURS.map(([color, label]) => (
            <Link key={label} href="/collections">
              <i style={{ background: color }} />
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="dk-v5-watch">
        <div className="dk-v5-head">
          <div>
            <h2>Watch the seva</h2>
            <p>From the karigar’s frame to your mandir</p>
          </div>
          <Link href="/journal">Follow us on Instagram & YouTube →</Link>
        </div>
        <div className="dk-v5-films">
          <Link href="/about">
            <img src="/images/karigar-hands.jpg" alt="A karigar stitching zari" />
            <span><small>Featured film</small><strong>How a DivineKraft poshak is made</strong></span>
          </Link>
          <div>
            {[
              ["/images/zari-detail.jpg", "A karigar at the adda"],
              ["/images/vrindavan-dawn.jpg", "Temple shringaar, Vrindavan"],
              ["/images/keepsake-box.jpg", "Unboxing a keepsake set"],
              ["/images/diya-marigold.jpg", "Seva at the mandir"],
            ].map(([src, label]) => (
              <Link key={label} href="/journal">
                <img src={src} alt="" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
