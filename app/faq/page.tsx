import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Ordering, sizing, embroidery, festivals and delivery.",
};

export default function Page() {
  return <Screen name="faq" />;
}
