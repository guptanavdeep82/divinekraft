import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your poshak is confirmed. The karigar begins only after the name is approved.",
};

export default function Page() {
  return <Screen name="confirmation" />;
}
