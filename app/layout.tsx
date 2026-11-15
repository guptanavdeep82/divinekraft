import type { Metadata } from "next";
import { Bhajan } from "@/components/Bhajan";
import { Enhance } from "@/components/Enhance";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: {
    default: "DivineKraft — Designer Poshaks",
    template: "%s · DivineKraft",
  },
  description:
    "Designer poshaks handmade in Vrindavan. Zardozi, gota-patti and resham, stitched to order with His name embroidered in thread.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600&family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Enhance />
        <Bhajan />
      </body>
    </html>
  );
}
