import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Poshaks for your Thakurji",
  description: "Shop handmade poshaks from Vrindavan. Mor Mukut Peela from ₹4,850, plus Nitya, Utsav, Heirloom and Jugal Jodi sets, stitched after you order.",
};

export default function Page() {
  return <HomePage />;
}
