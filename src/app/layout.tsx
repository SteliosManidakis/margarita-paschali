import type { Metadata } from "next";
import { LangSync } from "@/components/layout/LangSync";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://margarita-paschali.vercel.app",
  ),
  title: {
    default: "Margarita Paschali",
    template: "%s | Margarita Paschali",
  },
  description:
    "Bilingual personal brand website for healing sessions and discovery calls with Margarita Paschali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <LangSync />
        {children}
      </body>
    </html>
  );
}
