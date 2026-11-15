import type { Metadata } from "next";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in with a one-time code on your mobile number.",
};

export default function Page() {
  return <Screen name="login" />;
}
