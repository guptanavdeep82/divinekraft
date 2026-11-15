import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "How custom design works",
  description: "Brief, design call, quote, sketch sign-off, then handcrafting in Vrindavan.",
};

export default function Page() {
  return <Screen name="model" />;
}
