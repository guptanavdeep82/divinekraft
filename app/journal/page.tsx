import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Journal",
  description: "Shringar guides, festival planners and stories from the adda.",
};

export default function Page() {
  return <Screen name="journal" />;
}
