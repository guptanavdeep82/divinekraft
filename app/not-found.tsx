import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        padding: 32,
        textAlign: "center",
        background: "#FBF7F0",
        color: "#2A1A14",
      }}
    >
      <p style={{ margin: 0, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A6416", fontWeight: 600, fontSize: 13 }}>
        DivineKraft
      </p>
      <h1 style={{ margin: 0, fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 64, lineHeight: 1 }}>
        This page has wandered off.
      </h1>
      <p style={{ margin: 0, color: "#5E4E44", maxWidth: 460 }}>
        The poshak you were looking for is not on this path. The collections are still open.
      </p>
      <Link
        href="/"
        style={{
          background: "#7A1E2C",
          color: "#FFF8EE",
          textDecoration: "none",
          padding: "14px 24px",
          borderRadius: 999,
          fontWeight: 600,
        }}
      >
        Back to the atelier
      </Link>
    </main>
  );
}
