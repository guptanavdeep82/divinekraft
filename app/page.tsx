import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Sewn for your Thakurji",
  description: "Heirloom-grade zardozi, gota-patti and resham poshaks, stitched in Vrindavan after you order, with His name in gold thread.",
};

export default function Page() {
  return <HomePage />;
}
