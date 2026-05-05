import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  const dictionary = getDictionary(safeLocale);
  return { title: dictionary.seo.termsTitle };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "el");

  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-5xl text-charcoal">{dictionary.nav.terms}</h1>
        <p className="mt-8 text-lg leading-8 text-charcoal/72">{dictionary.legal.terms}</p>
      </Container>
    </section>
  );
}
