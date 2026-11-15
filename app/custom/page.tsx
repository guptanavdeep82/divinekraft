import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Custom design brief",
  description: "Share your Thakurji’s size, name and inspiration. A designer plans the poshak and sends a quote.",
};

export default function Page() {
  return <Screen name="custom" />;
}
