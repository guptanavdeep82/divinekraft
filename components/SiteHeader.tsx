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

const SHEET = [
  {
    title: "Shop",
    links: [
      { href: "/collections", label: "Collections" },
      { href: "/custom", label: "Custom design" },
      { href: "/wishlist", label: "Wishlist" },
      { href: "/cart", label: "Cart" },
    ],
  },
  {
    title: "The house",
    links: [
      { href: "/#how", label: "How it works" },
      { href: "/#karigars", label: "Our karigars" },
      { href: "/journal", label: "Journal" },
      { href: "/about", label: "About" },
      { href: "/size-guide", label: "Size guide" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/track", label: "Track order" },
      { href: "/contact", label: "Contact" },
      { href: "/account", label: "My account" },
    ],
  },
];

const TABS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Shop" },
  { href: "/custom", label: "Custom" },
  { href: "/cart", label: "Cart", badge: "2" },
  { href: "/account", label: "Account" },
];

function tabOn(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

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

function TabIcon({ name }: { name: string }) {
  if (name === "Home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
      </svg>
    );
  }
  if (name === "Shop") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  if (name === "Custom") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20l4.2-1.1L19 8.1 15.9 5 5.1 15.8z" />
        <path d="M13.8 7.2l3 3" />
      </svg>
    );
  }
  if (name === "Cart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h14l-1.5 12h-11z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.4-3.4 3.8-5 7-5s5.6 1.6 7 5" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("dk-nav-open", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("dk-nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
          <nav aria-label="Main">
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
      {open ? (
        <div className="dk-sheet-root">
          <button type="button" className="dk-sheet-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="dk-sheet" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="dk-sheet-handle" aria-hidden="true" />
            <div className="dk-sheet-head">
              <div>
                <strong>DivineKraft</strong>
                <span>Radhe Radhe</span>
              </div>
              <button type="button" className="dk-sheet-close" aria-label="Close menu" onClick={() => setOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="dk-sheet-scroll">
              {SHEET.map((group) => (
                <section key={group.title}>
                  <p>{group.title}</p>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                      <span>{link.label}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </Link>
                  ))}
                </section>
              ))}
            </div>
            <Link href="/custom" className="dk-sheet-cta" onClick={() => setOpen(false)}>
              Plan a custom poshak
            </Link>
          </div>
        </div>
      ) : null}
      <nav className="dk-tabs" aria-label="App">
        {TABS.map((tab) => {
          const active = tabOn(tab.href, pathname);
          return (
            <Link key={tab.href} href={tab.href} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined}>
              <TabIcon name={tab.label} />
              <span>{tab.label}</span>
              {tab.badge ? <b>{tab.badge}</b> : null}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
