import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a DivineKraft designer on WhatsApp or send a message.",
};

export default function Page() {
  return <Screen name="contact" />;
}
