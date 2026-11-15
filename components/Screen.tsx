import { presentPage } from "@/lib/present";

export function Screen({ name }: { name: string }) {
  const html = presentPage(name);
  return <main className="dk-page" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
