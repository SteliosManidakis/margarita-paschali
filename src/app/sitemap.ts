import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const paths = ["", "about", "healing", "contact", "terms", "privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://margarita-paschali.vercel.app";

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path ? `/${path}` : ""}`,
      lastModified: new Date(),
      changeFrequency: path ? "monthly" : "weekly",
      priority: path ? 0.7 : 1,
    })),
  );
}
