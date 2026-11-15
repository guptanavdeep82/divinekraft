import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Mor Mukut Peela Poshak",
  description: "Peela silk with hand-worked mor-pankh, a stone peacock and a matching mukut and patka.",
};

export default function Page() {
  return <Screen name="product" />;
}
