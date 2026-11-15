import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Size guide",
  description: "Find your Thakurji’s Laddu Gopal size, from 0 to 6, or send a photo for a free check.",
};

export default function Page() {
  return <Screen name="size-guide" />;
}
