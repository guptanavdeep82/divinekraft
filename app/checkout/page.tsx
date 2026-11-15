import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Contact, delivery and payment for a made-to-order poshak.",
};

export default function Page() {
  return <Screen name="checkout" />;
}
