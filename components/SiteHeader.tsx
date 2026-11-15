"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/collections", label: "Collections" },
  { href: "/custom", label: "Custom design" },
  { href: "/#how", label: "How it works" },
  { href: "/#karigars", label: "Our karigars" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

function Icon({ children, label, href, badge }: { children: React.ReactNode; label: string; href?: string; badge?: string }) {
  const inner = (
    <>
      {children}
      {badge ? <span className="dk-badge">{badge}</span> : null}
    </>
  );
  if (href) {
    return (
      <Link href={href} aria-label={label} className="dk-icon">
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" aria-label={label} className="dk-icon">
      {inner}
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="dk-announce">
        <span className="dk-diya dk-diya-sm" aria-hidden="true">
          <span className="dk-flame" />
        </span>
        Handmade in Vrindavan · Made to order, never off the shelf · His name embroidered on every poshak
      </div>
      <header>
        <div className="dk-bar">
          <Link href="/" aria-label="DivineKraft home">
            <img className="dk-logo" src="/images/logo.png" alt="DivineKraft" />
          </Link>
          <nav aria-label="Main" className={open ? "is-open" : undefined}>
            {LINKS.map((link) => {
              const active = link.href === pathname;
              return (
                <Link key={link.href} href={link.href} className={active ? "is-active" : undefined}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="dk-tools">
            <button
              type="button"
              className="dk-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A1A14" strokeWidth="1.7" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
            <Icon label="Search">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2A1A14" strokeWidth="1.6" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </Icon>
            <Icon label="Wishlist" href="/wishlist" badge="5">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2A1A14" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
              </svg>
            </Icon>
            <Icon label="Account" href="/account">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2A1A14" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
              </svg>
            </Icon>
            <Icon label="Cart" href="/cart" badge="2">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2A1A14" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 7h14l-1.5 12h-11z" />
                <path d="M9 7a3 3 0 0 1 6 0" />
              </svg>
            </Icon>
            <Link href="/custom" className="dk-cta">
              Plan a custom poshak
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
