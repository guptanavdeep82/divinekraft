"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Hit = { title: string; href: string; kind: string };

const CHIP_ON = {
  border: "2px solid #7A1E2C",
  background: "#F7E9EA",
  color: "#7A1E2C",
  fontWeight: "600",
};

const CHIP_OFF = {
  border: "1px solid #CDBCA4",
  background: "#FFFFFF",
  color: "#2A1A14",
  fontWeight: "500",
};

function kindOf(button: HTMLButtonElement) {
  const label = button.getAttribute("aria-label") || "";
  if (
    button.querySelector("svg") ||
    button.querySelector("img") ||
    label.startsWith("Image") ||
    label.startsWith("Play") ||
    label.startsWith("Remove") ||
    ["Search", "Cart", "Account", "Wishlist", "Record a voice note"].includes(label)
  ) {
    return null;
  }
  if (!button.textContent?.trim() && label) return "swatch";
  if (button.textContent?.trim()) return "chip";
  return null;
}

function paint(button: HTMLButtonElement, on: boolean, kind: "chip" | "swatch") {
  button.setAttribute("aria-pressed", on ? "true" : "false");
  if (kind === "swatch") {
    button.style.boxShadow = on ? "0 0 0 2px #7A1E2C" : "0 0 0 1px #CDBCA4";
    return;
  }
  const dashed = (button.getAttribute("style") || "").includes("dashed") && !on;
  Object.assign(button.style, on ? CHIP_ON : CHIP_OFF);
  if (dashed) button.style.border = "1px dashed #CDBCA4";
}

export function Enhance() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<Hit[]>([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: Hit[]) => setIndex(data))
      .catch(() => setIndex([]));
  }, []);

  useEffect(() => {
    setOpen(false);
    const nav = document.querySelector<HTMLElement>('header nav[aria-label="Main"]');
    const bar = nav?.parentElement;
    if (!nav || !bar || bar.querySelector(".dk-menu")) return;
    const button = document.createElement("button");
    button.className = "dk-menu";
    button.type = "button";
    button.setAttribute("aria-label", "Open menu");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A1A14" stroke-width="1.7" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    button.addEventListener("click", () => {
      const next = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(next));
      button.setAttribute("aria-label", next ? "Close menu" : "Open menu");
    });
    let cluster = bar.lastElementChild;
    if (cluster && cluster !== nav && cluster.tagName !== "DIV") {
      const wrap = document.createElement("div");
      wrap.style.display = "flex";
      wrap.style.alignItems = "center";
      cluster.replaceWith(wrap);
      wrap.append(cluster);
      cluster = wrap;
    }
    if (cluster && cluster !== nav) cluster.prepend(button);
    else bar.insertBefore(button, nav);
  }, [pathname]);

  useEffect(() => {
    const aside = document.querySelector<HTMLElement>('aside[aria-label="Filters"]');
    if (!aside || aside.previousElementSibling?.classList.contains("dk-filter-toggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dk-filter-toggle";
    button.textContent = "Filters";
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => {
      const next = aside.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(next));
      button.textContent = next ? "Hide filters" : "Filters";
    });
    aside.before(button);
    return () => button.remove();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const search = target.closest<HTMLElement>('[aria-label="Search"]');
      if (search) {
        event.preventDefault();
        setQuery("");
        setOpen(true);
        return;
      }

      const tab = target.closest<HTMLElement>('[role="tab"]');
      if (tab) {
        event.preventDefault();
        const label = (tab.textContent || "").split("·")[0].trim();
        document.querySelectorAll<HTMLElement>('[role="tab"]').forEach((item) => {
          const on = item === tab;
          item.setAttribute("aria-selected", on ? "true" : "false");
          item.style.background = on ? "#7A1E2C" : "#F4ECDF";
          item.style.color = on ? "#FFF8EE" : "#2A1A14";
          item.style.fontWeight = on ? "600" : "500";
        });
        document.querySelectorAll("article").forEach((article) => {
          const show = label.startsWith("All") || (article.textContent || "").includes(label);
          (article as HTMLElement).style.display = show ? "" : "none";
        });
        return;
      }

      const clear = target.closest("a");
      if (clear && (clear.textContent || "").trim() === "Clear all") {
        event.preventDefault();
        document.querySelectorAll("article").forEach((article) => {
          (article as HTMLElement).style.display = "";
        });
        return;
      }

      const button = target.closest("button");
      if (!button) return;

      const label = button.getAttribute("aria-label") || "";
      if (label.startsWith("Image ")) {
        const thumb = button.querySelector("img");
        const column = button.parentElement?.parentElement;
        const hero = column?.querySelector(":scope > img");
        if (thumb && hero) {
          hero.setAttribute("src", thumb.getAttribute("src") || "");
          column?.querySelectorAll("button").forEach((item) => {
            item.style.border = item === button ? "2px solid #7A1E2C" : "1px solid #E6D9C6";
          });
        }
        return;
      }

      if (label.startsWith("Play")) {
        setToast("The making-of film plays here once the atelier footage is added.");
        return;
      }

      if (label === "Save to wishlist") {
        const path = button.querySelector("path");
        const filled = path?.getAttribute("fill") === "#7A1E2C";
        path?.setAttribute("fill", filled ? "none" : "#7A1E2C");
        setToast(filled ? "Removed from your wishlist." : "Saved to your wishlist.");
        return;
      }

      if (label === "Remove from wishlist") {
        let card: HTMLElement | null = button;
        for (let i = 0; i < 6 && card; i += 1) {
          const style = card.getAttribute("style") || "";
          if (style.includes("border-radius: 18px") || style.includes("border: 1px solid #E6D9C6")) break;
          card = card.parentElement;
        }
        card?.remove();
        setToast("Removed from your wishlist.");
        return;
      }

      const text = (button.textContent || "").replace(/\s+/g, " ").trim();
      if (text.startsWith("Order this design")) {
        router.push("/cart");
        return;
      }
      if (text.startsWith("Send my brief") || text === "Send message") {
        event.preventDefault();
        setToast("Received. A designer will reply on WhatsApp.");
        return;
      }
      if (text.startsWith("Send code") || text === "Verify & continue" || text.startsWith("Verify")) {
        setToast("Code sent. Enter the six digits to continue.");
        document.querySelector<HTMLInputElement>('input[maxlength="1"]')?.focus();
        return;
      }

      const kind = kindOf(button);
      if (!kind) return;
      const group = [...(button.parentElement?.children || [])].filter(
        (el): el is HTMLButtonElement => el instanceof HTMLButtonElement && kindOf(el) === kind
      );
      if (group.length < 2) return;
      const multi = group.filter((item) => item.getAttribute("aria-pressed") === "true").length > 1;
      if (multi) {
        paint(button, button.getAttribute("aria-pressed") !== "true", kind);
        return;
      }
      group.forEach((item) => paint(item, item === button, kind));
    };

    const onSubmit = (event: Event) => {
      event.preventDefault();
      setToast("Received. A designer will reply on WhatsApp.");
    };

    const onInput = (event: Event) => {
      const input = event.target as HTMLInputElement | null;
      if (!input) return;
      if (input.id === "fs") {
        const q = input.value.trim().toLowerCase();
        document.querySelectorAll("details").forEach((item) => {
          const show = !q || (item.textContent || "").toLowerCase().includes(q);
          (item as HTMLElement).style.display = show ? "" : "none";
        });
        return;
      }
      if (input.maxLength !== 1) return;
      const boxes = [...document.querySelectorAll<HTMLInputElement>('input[maxlength="1"]')];
      const index = boxes.indexOf(input);
      if (input.value && boxes[index + 1]) boxes[index + 1].focus();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    document.addEventListener("input", onInput);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
      document.removeEventListener("input", onInput);
    };
  }, [router]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? index.filter((item) => `${item.title} ${item.kind}`.toLowerCase().includes(q)) : index;
    return list.slice(0, 8);
  }, [index, query]);

  return (
    <>
      {open ? (
        <div className="dk-search" onClick={() => setOpen(false)}>
          <div
            className="dk-search-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search DivineKraft"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              autoFocus
              placeholder="Search poshaks, size guide, journal…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search"
            />
            <div className="dk-search-list">
              {hits.length ? (
                hits.map((hit) => (
                  <a key={hit.title + hit.href} href={hit.href} onClick={() => setOpen(false)}>
                    <strong>{hit.title}</strong>
                    <span>{hit.kind}</span>
                  </a>
                ))
              ) : (
                <p style={{ margin: "8px", color: "#5E4E44" }}>Nothing matches that yet.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
      {toast ? <div className="dk-toast">{toast}</div> : null}
    </>
  );
}
