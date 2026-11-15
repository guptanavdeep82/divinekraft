import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Policies",
  description: "Made-to-order, size redo, shipping and payment promises.",
};

export default function Page() {
  return <Screen name="policies" />;
}
