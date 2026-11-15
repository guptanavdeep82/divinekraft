import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Track your order",
  description: "Follow each stage from sketch to the keepsake box.",
};

export default function Page() {
  return <Screen name="track" />;
}
