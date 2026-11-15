import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "About us",
  description: "DivineKraft is a Vrindavan atelier stitching designer poshaks as seva.",
};

export default function Page() {
  return <Screen name="about" />;
}
