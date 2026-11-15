"use client";

import Link from "next/link";
import { useRef } from "react";

const PRODUCTS = [
  { name: "Mor Mukut Peela", price: "₹4,850", image: "/images/99c51cc19ef35e1464d8d2573846f133.jpg" },
  { name: "Kairi Mor Pankh", price: "₹4,850", image: "/images/b91ce095858e92b7e07c2cf71b5b8a85.jpg" },
  { name: "Hans Jodi Stone", price: "₹12,400", image: "/images/d366a4f2ddf15f4b6365b213c0a74bab.jpg" },
  { name: "Moti Hans Ivory", price: "₹6,400", image: "/images/099df3db2817e17bf0bce51733883d0c.jpg" },
  { name: "Nritya Mor Peela", price: "₹3,200", image: "/images/934c7631087da1ca07df879df48b1149.jpg" },
  { name: "Shahi Mor Velvet", price: "₹8,600", image: "/images/00f81a265cffcaef86d2d0fd56a349a7.jpg" },
  { name: "Neelkamal Resham", price: "₹2,450", image: "/images/211bc59b6dde1cddf12b721c44fcf19a.jpg" },
  { name: "Mor Chakra Zardozi", price: "₹9,700", image: "/images/e05eea7b0a24cbccba1fc7ecd402ba53.jpg" },
];

export function ProductRail() {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    scroller.current?.scrollBy({ left: direction * 272, behavior: "smooth" });
  }

  return (
    <section className="dk-rail" aria-label="Poshaks you can add">
      <div className="dk-wrap">
        <div className="dk-section-head">
          <div>
            <p className="dk-kicker">Add a poshak</p>
            <h2>Dressed by our karigars</h2>
          </div>
          <div className="dk-rail-nav">
            <button type="button" aria-label="Scroll poshaks left" onClick={() => move(-1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button type="button" aria-label="Scroll poshaks right" onClick={() => move(1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="dk-rail-track" ref={scroller}>
          {PRODUCTS.map((product) => (
            <article key={product.name} className="dk-rail-card">
              <Link href="/product/mor-mukut-peela-poshak">
                <img src={product.image} alt={product.name} />
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </Link>
              <Link className="dk-rail-add" href="/cart">
                Add
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
