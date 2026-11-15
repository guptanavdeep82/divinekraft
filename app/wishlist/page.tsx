import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Designs saved for the next utsav.",
};

export default function Page() {
  return <Screen name="wishlist" />;
}
