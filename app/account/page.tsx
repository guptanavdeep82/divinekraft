import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "My account",
  description: "Your Thakurji profiles, orders, quotes and festival reminders.",
};

export default function Page() {
  return <Screen name="account" />;
}
