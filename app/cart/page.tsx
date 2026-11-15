import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Your cart",
  description: "Review poshaks, name embroidery and add-ons before checkout.",
};

export default function Page() {
  return <Screen name="cart" />;
}
