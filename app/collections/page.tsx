import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Collections",
  description: "Nitya Seva, Utsav, Heirloom and Jugal Jodi poshaks, made to order for Laddu Gopal.",
};

export default function Page() {
  return <Screen name="collections" />;
}
